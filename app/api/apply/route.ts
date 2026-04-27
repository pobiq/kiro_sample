import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
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

    if (!name || !university || !department || !studentId || !phone || !email || !grade || !gender) {
      return NextResponse.json({ message: "필수 항목을 모두 입력해주세요." }, { status: 400 });
    }

    const participant = await prisma.participant.create({
      data: {
        name, university, department, studentId, phone, email, grade, gender,
        fields: {
          create: (fieldIds ?? []).map((fieldId: number) => ({
            fieldId,
            customText: customFields?.[fieldId] ?? null,
          })),
        },
        languages: {
          create: (languageIds ?? []).map((languageId: number) => ({
            languageId,
            customText: customLanguages?.[languageId] ?? null,
          })),
        },
        experience: {
          create: {
            hackathonExperience: hackathonExperience ?? null,
            hackathonName: hackathonName ?? null,
            awardExperience: awardExperience ?? null,
            awardCompetition: awardCompetition ?? null,
            awardName: awardName ?? null,
            devExperience: devExperience ?? null,
          },
        },
        details: {
          create: {
            tools: tools ?? null,
            devExperienceDetail: devExperienceDetail ?? null,
            aiExperienceDetail: aiExperienceDetail ?? null,
          },
        },
      },
    });

    return NextResponse.json({ ok: true, id: participant.id });
  } catch (err) {
    console.error("신청 저장 오류:", err);
    return NextResponse.json({ message: "서버 오류가 발생했습니다." }, { status: 500 });
  }
}
