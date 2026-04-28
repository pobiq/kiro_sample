import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { encrypt, decrypt } from "@/lib/crypto";

const VALID_GRADES = ["1학년", "2학년", "3학년", "4학년", "대학원생"];
const VALID_GENDERS = ["남", "여"];

/**
 * 요청 바디 서버 사이드 유효성 검사
 * 프론트 validation을 우회한 직접 API 호출도 방어
 * 오류가 있으면 { 필드명: 오류메시지 } 객체 반환, 없으면 빈 객체 반환
 */
function validateBody(body: Record<string, unknown>): Record<string, string> {
  const e: Record<string, string> = {};

  const name = String(body.name ?? "").trim();
  if (!name) e.name = "성명을 입력해주세요.";
  else if (name.length < 2 || name.length > 60) e.name = "성명은 2~60자로 입력해주세요.";
  else if (!/^[가-힣a-zA-Z\s]+$/.test(name)) e.name = "성명은 한글 또는 영문만 입력 가능합니다.";

  const university = String(body.university ?? "").trim();
  if (!university || university.length < 2 || university.length > 100)
    e.university = "소속대학을 올바르게 입력해주세요.";

  const department = String(body.department ?? "").trim();
  if (!department || department.length < 2 || department.length > 100)
    e.department = "소속학과를 올바르게 입력해주세요.";

  const studentId = String(body.studentId ?? "").trim();
  if (!studentId) e.studentId = "학번을 입력해주세요.";

  const phone = String(body.phone ?? "").trim();
  if (!phone) e.phone = "연락처를 입력해주세요.";
  else if (!/^01[016789]-?\d{3,4}-?\d{4}$/.test(phone))
    e.phone = "올바른 연락처 형식이 아닙니다.";

  const email = String(body.email ?? "").trim();
  if (!email) e.email = "이메일주소를 입력해주세요.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 100)
    e.email = "올바른 이메일 형식으로 입력해주세요.";

  const grade = String(body.grade ?? "");
  if (!VALID_GRADES.includes(grade)) e.grade = "학년을 선택해주세요.";

  const gender = String(body.gender ?? "");
  if (!VALID_GENDERS.includes(gender)) e.gender = "성별을 선택해주세요.";

  const fieldIds = body.fieldIds;
  if (!Array.isArray(fieldIds) || fieldIds.length === 0)
    e.fields = "신청 분야를 하나 이상 선택해주세요.";

  return e;
}

/**
 * 참가 신청 저장 (POST /api/apply)
 * 서버 사이드 validation 후 민감 정보(성명·학번·연락처·이메일)를 AES-256-GCM으로 암호화해서 DB에 저장
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const errors = validateBody(body);
    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ message: "입력값을 확인해주세요.", errors }, { status: 400 });
    }

    const {
      name, university, department, studentId,
      phone, email, grade, gender,
      fieldIds, customFields,
      languageIds, customLanguages,
      hackathonExperience, hackathonName,
      awardExperience, awardCompetition, awardName,
      devExperience,
      tools, devExperienceDetail, aiExperienceDetail,
    } = body;

    const participant = await prisma.participant.create({
      data: {
        name: encrypt(name.trim()),
        studentId: encrypt(studentId.trim()),
        phone: encrypt(phone.trim()),
        email: encrypt(email.trim()),
        university: university.trim(),
        department: department.trim(),
        grade,
        gender,
        hackathonExperience: hackathonExperience ?? null,
        hackathonName: hackathonName || null,
        awardExperience: awardExperience ?? null,
        awardCompetition: awardCompetition || null,
        awardName: awardName || null,
        devExperience: devExperience ?? null,
        tools: tools || null,
        devExperienceDetail: devExperienceDetail || null,
        aiExperienceDetail: aiExperienceDetail || null,
        fields: {
          create: (fieldIds ?? []).map((fieldId: number) => ({
            fieldId,
            customText: customFields?.[String(fieldId)] ?? null,
          })),
        },
        languages: {
          create: (languageIds ?? []).map((languageId: number) => ({
            languageId,
            customText: customLanguages?.[String(languageId)] ?? null,
          })),
        },
      },
    });

    return NextResponse.json({ ok: true, id: participant.id });
  } catch (err) {
    console.error("신청 저장 오류:", err);
    return NextResponse.json({ message: "서버 오류가 발생했습니다." }, { status: 500 });
  }
}

/**
 * 전체 신청자 목록 조회 (GET /api/apply)
 * DB에서 암호화된 민감 정보를 복호화한 뒤 반환 — 추후 관리자 인증 추가 필요
 */
export async function GET() {
  try {
    const participants = await prisma.participant.findMany({
      include: {
        fields: { include: { field: true } },
        languages: { include: { language: true } },
      },
      orderBy: { createdAt: "desc" },
    });

    const decrypted = participants.map((p) => ({
      ...p,
      name: decrypt(p.name),
      studentId: decrypt(p.studentId),
      phone: decrypt(p.phone),
      email: decrypt(p.email),
    }));

    return NextResponse.json(decrypted);
  } catch (err) {
    console.error("신청자 조회 오류:", err);
    return NextResponse.json({ message: "서버 오류가 발생했습니다." }, { status: 500 });
  }
}
