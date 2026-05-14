"use client";

import { useState } from "react";
import Link from "next/link";

type FormState = "idle" | "loading" | "success" | "error";

const FIELDS = [
  { id: 1, label: "기획" },
  { id: 2, label: "백엔드개발" },
  { id: 3, label: "프론트엔드개발" },
  { id: 4, label: "AI/데이터분석" },
  { id: 5, label: "UI/UX 디자인" },
  { id: 6, label: "기타" },
];

const LANGUAGES = [
  { id: 1, label: "Python" },
  { id: 2, label: "Java" },
  { id: 3, label: "C++" },
  { id: 4, label: "JavaScript" },
  { id: 5, label: "기타" },
];

const PHONE_PREFIXES = ["010", "011", "016", "017", "018", "019"];

const EMAIL_DOMAINS = [
  "gmail.com", "naver.com", "daum.net",
  "kakao.com", "hotmail.com", "nate.com", "직접입력",
];

const OTHER_FIELD_ID = 6;
const OTHER_LANG_ID = 5;

function Req() {
  return <span className="text-red-500 ml-0.5">*</span>;
}

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="text-red-500 text-xs mt-1">{msg}</p>;
}

export default function ApplyForm() {
  const [participantType, setParticipantType] = useState<"student" | "worker">("student");

  const [form, setForm] = useState({
    name: "",
    organization: "",
    department: "",
    studentId: "",
    grade: "",
    gender: "",
  });

  // 연락처 — 3분할 입력
  const [phonePart1, setPhonePart1] = useState("010");
  const [phonePart2, setPhonePart2] = useState("");
  const [phonePart3, setPhonePart3] = useState("");

  // 이메일 — local + 도메인 selectbox
  const [emailLocal, setEmailLocal] = useState("");
  const [emailDomain, setEmailDomain] = useState("");
  const [emailCustomDomain, setEmailCustomDomain] = useState("");

  const [selectedFields, setSelectedFields] = useState<number[]>([]);
  const [fieldCustomText, setFieldCustomText] = useState("");

  const [selectedLanguages, setSelectedLanguages] = useState<number[]>([]);
  const [langCustomText, setLangCustomText] = useState("");

  const [hackathonExp, setHackathonExp] = useState<boolean | null>(false);
  const [hackathonName, setHackathonName] = useState("");
  const [awardExp, setAwardExp] = useState<boolean | null>(false);
  const [awardCompetition, setAwardCompetition] = useState("");
  const [awardName, setAwardName] = useState("");
  const [devExp, setDevExp] = useState<boolean | null>(false);

  const [tools, setTools] = useState("");
  const [devExpDetail, setDevExpDetail] = useState("");
  const [aiExpDetail, setAiExpDetail] = useState("");

  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const toggleField = (id: number) => {
    setSelectedFields((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
    clearError("fields");
  };

  const toggleLanguage = (id: number) =>
    setSelectedLanguages((prev) =>
      prev.includes(id) ? prev.filter((l) => l !== id) : [...prev, id]
    );

  // 특정 필드의 오류 메시지 제거 — 사용자가 값을 수정할 때 호출
  const clearError = (field: string) =>
    setErrors((prev) => { const n = { ...prev }; delete n[field]; return n; });

  // form 상태 업데이트 + 해당 필드 오류 동시 제거
  const setField = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    clearError(field);
  };

  // 오류 여부에 따라 테두리 색상을 바꾸는 input className 생성기
  const ic = (field: string) =>
    `w-full border rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 transition ${
      errors[field]
        ? "border-red-400 focus:border-red-400 focus:ring-red-100"
        : "border-gray-200 focus:border-purple-400 focus:ring-purple-200"
    }`;

  const selectCls = (field: string) =>
    `border rounded-lg px-4 py-2.5 pr-6 text-sm text-gray-900 focus:outline-none focus:ring-1 transition bg-white appearance-none ${
      errors[field]
        ? "border-red-400 focus:border-red-400 focus:ring-red-100"
        : "border-gray-200 focus:border-purple-400 focus:ring-purple-200"
    }`;

  // Tailwind bg-[url(...)]이 데이터 URL과 호환되지 않아 style prop으로 직접 적용
  const arrowStyle: React.CSSProperties = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23111827'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 0.35rem center",
    backgroundSize: "1rem 1rem",
  };

  const textareaCls =
    "w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-200 transition resize-none";

  /**
   * 클라이언트 사이드 유효성 검사
   * 형식 오류(성명 한글·영문, 학번 숫자, 연락처 형식, 이메일 형식)와 필수 항목 누락을 모두 검사
   * 오류가 있으면 { 필드명: 오류메시지 } 객체 반환, 없으면 빈 객체 반환
   */
  const validate = (): Record<string, string> => {
    const e: Record<string, string> = {};

    const name = form.name.trim();
    if (!name) e.name = "성명을 입력해주세요.";
    else if (name.length < 2) e.name = "성명은 2자 이상 입력해주세요.";
    else if (!/^[가-힣a-zA-Z\s]+$/.test(name)) e.name = "성명은 한글 또는 영문만 입력 가능합니다.";

    if (!form.organization.trim()) e.organization = participantType === "student" ? "소속 대학을 입력해주세요." : "소속 회사를 입력해주세요.";
    else if (form.organization.trim().length < 2) e.organization = "2자 이상 입력해주세요.";

    if (!form.department.trim()) e.department = participantType === "student" ? "소속 학과를 입력해주세요." : "소속 부서를 입력해주세요.";
    else if (form.department.trim().length < 2) e.department = "2자 이상 입력해주세요.";

    if (participantType === "student" && !form.studentId.trim()) e.studentId = "학번을 입력해주세요.";

    // 연락처 — 중간·끝자리 검사
    if (!phonePart2 || !phonePart3) {
      e.phone = "연락처를 모두 입력해주세요.";
    } else if (!/^\d{3,4}$/.test(phonePart2) || !/^\d{4}$/.test(phonePart3)) {
      e.phone = "연락처 번호를 올바르게 입력해주세요.";
    }

    // 이메일 — local + 도메인 검사
    const resolvedDomain = emailDomain === "직접입력" ? emailCustomDomain.trim() : emailDomain;
    if (!emailLocal.trim()) {
      e.email = "이메일 아이디를 입력해주세요.";
    } else if (!emailDomain) {
      e.email = "이메일 도메인을 선택해주세요.";
    } else if (emailDomain === "직접입력" && !emailCustomDomain.trim()) {
      e.email = "도메인을 직접 입력해주세요.";
    } else if (!/^[^\s@]+$/.test(emailLocal.trim()) || !/^[^\s@]+\.[^\s@]+$/.test(resolvedDomain)) {
      e.email = "올바른 이메일 형식으로 입력해주세요.";
    }

    if (participantType === "student" && !form.grade) e.grade = "학년을 선택해주세요.";
    if (!form.gender) e.gender = "성별을 선택해주세요.";
    if (selectedFields.length === 0) e.fields = "신청 분야를 하나 이상 선택해주세요.";
    if (!privacyAgreed) e.privacy = "개인정보 수집 및 이용에 동의해주세요.";

    return e;
  };

  /**
   * 신청 제출 핸들러
   * 1) 클라이언트 validation → 오류 있으면 첫 번째 오류 필드로 스크롤 후 중단
   * 2) 분할 입력된 연락처·이메일을 단일 문자열로 조합 후 POST /api/apply 호출
   * 3) 서버에서 오류 반환 시 필드별 오류 메시지 표시
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setState("error");
      // 첫 번째 오류 필드로 스크롤
      const firstErrField = Object.keys(validationErrors)[0];
      document.getElementById(firstErrField)?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setState("loading");
    setErrors({});

    // 분할 입력값 조합
    const phone = `${phonePart1}-${phonePart2}-${phonePart3}`;
    const domain = emailDomain === "직접입력" ? emailCustomDomain.trim() : emailDomain;
    const email = `${emailLocal.trim()}@${domain}`;

    const customFields: Record<number, string> = {};
    if (selectedFields.includes(OTHER_FIELD_ID) && fieldCustomText)
      customFields[OTHER_FIELD_ID] = fieldCustomText;

    const customLanguages: Record<number, string> = {};
    if (selectedLanguages.includes(OTHER_LANG_ID) && langCustomText)
      customLanguages[OTHER_LANG_ID] = langCustomText;

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          participantType,
          phone,
          email,
          fieldIds: selectedFields,
          customFields,
          languageIds: selectedLanguages,
          customLanguages,
          hackathonExperience: hackathonExp,
          hackathonName,
          awardExperience: awardExp,
          awardCompetition,
          awardName,
          devExperience: devExp,
          tools,
          devExperienceDetail: devExpDetail,
          aiExperienceDetail: aiExpDetail,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        if (data.errors) {
          setErrors(data.errors);
          setState("error");
        } else {
          setErrors({ _global: data.message || "서버 오류가 발생했습니다." });
          setState("error");
        }
        return;
      }

      setState("success");
    } catch {
      setErrors({ _global: "알 수 없는 오류가 발생했습니다." });
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-purple-100 flex items-center justify-center">
            <svg className="w-10 h-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">신청이 완료되었습니다!</h2>
          <p className="text-gray-500 mb-8">입력하신 정보가 성공적으로 접수되었습니다.</p>
          <Link href="/" className="inline-block px-8 py-3.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold transition-colors text-sm">
            메인으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="max-w-3xl mx-auto px-6 py-16">

        <div className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold mb-2 text-gray-900">참가 신청</h1>
        </div>

        <form onSubmit={handleSubmit} noValidate className="bg-white border border-gray-200 rounded-2xl p-8 space-y-8 shadow-sm">

          {/* ── 1. 기본 정보 ── */}
          <section>
            <h2 className="text-base font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
              기본 정보 <span className="text-gray-500 text-sm"><span className="text-red-500">*</span>는 필수항목입니다.</span>
            </h2>
            <div className="space-y-4">

              {/* 참가자 구분 토글 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">참가자 구분<Req /></label>
                <div className="flex gap-2">
                  {(["student", "worker"] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => {
                        setParticipantType(type);
                        setForm((p) => ({ ...p, studentId: "", grade: "" }));
                      }}
                      className={`px-5 py-2 rounded-lg text-sm font-medium border transition-colors ${
                        participantType === type
                          ? "bg-purple-600 text-white border-purple-600"
                          : "bg-white text-gray-600 border-gray-200 hover:border-purple-400"
                      }`}
                    >
                      {type === "student" ? "학생" : "직장인"}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">성명<Req /></label>
                <input id="name" type="text" placeholder="홍길동" value={form.name} maxLength={60}
                  onChange={(e) => setField("name", e.target.value)} className={ic("name")} />
                <FieldError msg={errors.name} />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                  {participantType === "student" ? "소속 대학" : "소속 회사"}<Req />
                </label>
                <input id="organization" type="text"
                  placeholder={participantType === "student" ? "OO대학교" : "OO회사"}
                  value={form.organization} maxLength={100}
                  onChange={(e) => setField("organization", e.target.value)} className={ic("organization")} />
                <FieldError msg={errors.organization} />
              </div>

              <div className={`grid gap-4 ${participantType === "student" ? "grid-cols-2" : "grid-cols-1"}`}>
                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                    {participantType === "student" ? "소속 학과" : "소속 부서"}<Req />
                  </label>
                  <input id="department" type="text"
                    placeholder={participantType === "student" ? "컴퓨터공학과" : "개발팀"}
                    value={form.department} maxLength={100}
                    onChange={(e) => setField("department", e.target.value)} className={ic("department")} />
                  <FieldError msg={errors.department} />
                </div>
                {participantType === "student" && (
                  <div>
                    <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 mb-1">학번<Req /></label>
                    <input id="studentId" type="text" placeholder="2024000000" value={form.studentId} maxLength={50}
                      onChange={(e) => setField("studentId", e.target.value)} className={ic("studentId")} />
                    <FieldError msg={errors.studentId} />
                  </div>
                )}
              </div>

              {/* 연락처 + 이메일 — 좌우 배치 */}
              <div className="grid grid-cols-2 gap-4">
                {/* 연락처 — 3분할 입력 */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">연락처 (h.p)<Req /></label>
                  <div id="phone" className="flex items-center gap-1">
                    <select
                      value={phonePart1}
                      onChange={(e) => { setPhonePart1(e.target.value); clearError("phone"); }}
                      className={`${selectCls("phone")} w-20 flex-shrink-0`}
                      style={arrowStyle}
                    >
                      {PHONE_PREFIXES.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                    <div className="flex-shrink-0 w-3 h-0.5 bg-gray-400 rounded" />
                    <input
                      type="text" inputMode="numeric" placeholder="0000" value={phonePart2} maxLength={4}
                      onChange={(e) => { setPhonePart2(e.target.value.replace(/\D/g, "")); clearError("phone"); }}
                      className={`${errors.phone ? "border-red-400 focus:border-red-400 focus:ring-red-100" : "border-gray-200 focus:border-purple-400 focus:ring-purple-200"} w-24 border rounded-lg px-2 py-2.5 text-sm text-center focus:outline-none focus:ring-1 transition`}
                    />
                    <div className="flex-shrink-0 w-3 h-0.5 bg-gray-400 rounded" />
                    <input
                      type="text" inputMode="numeric" placeholder="0000" value={phonePart3} maxLength={4}
                      onChange={(e) => { setPhonePart3(e.target.value.replace(/\D/g, "")); clearError("phone"); }}
                      className={`${errors.phone ? "border-red-400 focus:border-red-400 focus:ring-red-100" : "border-gray-200 focus:border-purple-400 focus:ring-purple-200"} w-24 border rounded-lg px-2 py-2.5 text-sm text-center focus:outline-none focus:ring-1 transition`}
                    />
                  </div>
                  <FieldError msg={errors.phone} />
                </div>

                {/* 이메일 — local + 도메인 selectbox */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">이메일주소<Req /></label>
                  <div id="email" className="flex items-center gap-1">
                    <input
                      type="text" placeholder="example" value={emailLocal} maxLength={50}
                      onChange={(e) => { setEmailLocal(e.target.value.replace(/\s/g, "")); clearError("email"); }}
                      className={`${errors.email ? "border-red-400 focus:border-red-400 focus:ring-red-100" : "border-gray-200 focus:border-purple-400 focus:ring-purple-200"} w-2/5 border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 transition`}
                    />
                    <span className="text-gray-400 font-medium">@</span>
                    <select
                      value={emailDomain}
                      onChange={(e) => { setEmailDomain(e.target.value); setEmailCustomDomain(""); clearError("email"); }}
                      className={`${selectCls("email")} flex-1`}
                      style={arrowStyle}
                    >
                      <option value="">선택</option>
                      {EMAIL_DOMAINS.map((d) => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </div>
                  {emailDomain === "직접입력" && (
                    <input
                      type="text" placeholder="company.com" value={emailCustomDomain} maxLength={50}
                      onChange={(e) => { setEmailCustomDomain(e.target.value.replace(/\s/g, "")); clearError("email"); }}
                      className={`mt-2 ${errors.email ? "border-red-400 focus:border-red-400 focus:ring-red-100" : "border-gray-200 focus:border-purple-400 focus:ring-purple-200"} w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 transition`}
                    />
                  )}
                  <FieldError msg={errors.email} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {participantType === "student" && (
                <div>
                  <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-1">학년<Req /></label>
                  <select id="grade" value={form.grade}
                    onChange={(e) => setField("grade", e.target.value)}
                    className={`w-full border rounded-lg px-3 py-1 pr-6 text-sm text-gray-900 focus:outline-none focus:ring-1 transition appearance-none bg-white ${
                      errors.grade
                        ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                        : "border-gray-200 focus:border-purple-400 focus:ring-purple-200"
                    }`}
                    style={arrowStyle}>
                    <option value="">선택</option>
                    <option value="1학년">1학년</option>
                    <option value="2학년">2학년</option>
                    <option value="3학년">3학년</option>
                    <option value="4학년">4학년</option>
                    <option value="대학원생">대학원생</option>
                  </select>
                  <FieldError msg={errors.grade} />
                </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">성별<Req /></label>
                  <div id="gender" className="flex gap-6 mt-2.5">
                    {["남", "여"].map((g) => (
                      <label key={g} className="flex items-center gap-2 text-sm cursor-pointer">
                        <input type="radio" name="gender" value={g}
                          checked={form.gender === g}
                          onChange={() => { setForm((p) => ({ ...p, gender: g })); clearError("gender"); }}
                          className="accent-purple-600" />
                        {g}
                      </label>
                    ))}
                  </div>
                  <FieldError msg={errors.gender} />
                </div>
              </div>
            </div>
          </section>

          {/* ── 2. 신청 분야 ── */}
          <section>
            <h2 className="text-base font-bold text-gray-800 mb-1 pb-2 border-b border-gray-100">
              신청 분야<Req /> <span className="text-xs font-normal text-gray-400">(복수 선택 가능)</span>
            </h2>
            <div id="fields" className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {FIELDS.map((field) => (
                <label key={field.id} className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="checkbox" checked={selectedFields.includes(field.id)}
                    onChange={() => toggleField(field.id)} className="accent-purple-600 w-4 h-4 flex-shrink-0" />
                  <span className="flex-shrink-0">{field.label}</span>
                  {field.id === OTHER_FIELD_ID && (
                    <input type="text" placeholder="직접 입력" value={fieldCustomText} maxLength={100}
                      onChange={(e) => setFieldCustomText(e.target.value)}
                      className={`border-b border-gray-300 focus:outline-none focus:border-purple-400 text-sm w-40 transition-opacity ${
                        selectedFields.includes(OTHER_FIELD_ID)
                          ? "opacity-100"
                          : "opacity-0 pointer-events-none"
                      }`} />
                  )}
                </label>
              ))}
            </div>
            <FieldError msg={errors.fields} />
          </section>

          {/* ── 3. 경험 정보 ── */}
          <section>
            <h2 className="text-base font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">경험 정보</h2>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">해커톤 참여경험</label>
                <div className="flex items-center gap-6 mt-1">
                  {[false, true].map((val) => (
                    <label key={String(val)} className="flex items-center gap-2 text-sm cursor-pointer flex-shrink-0">
                      <input type="radio" name="hackathonExp" checked={hackathonExp === val}
                        onChange={() => setHackathonExp(val)} className="accent-purple-600" />
                      {val ? "있음" : "없음"}
                    </label>
                  ))}
                  <input type="text" placeholder="대회명" value={hackathonName} maxLength={255}
                    onChange={(e) => setHackathonName(e.target.value)}
                    className={`flex-1 border-b border-gray-300 focus:outline-none focus:border-purple-400 text-sm py-1 transition-opacity ${
                      hackathonExp ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">해커톤 수상경험</label>
                <div className="flex items-center gap-6 mt-1">
                  {[false, true].map((val) => (
                    <label key={String(val)} className="flex items-center gap-2 text-sm cursor-pointer flex-shrink-0">
                      <input type="radio" name="awardExp" checked={awardExp === val}
                        onChange={() => setAwardExp(val)} className="accent-purple-600" />
                      {val ? "있음" : "없음"}
                    </label>
                  ))}
                  <div className={`flex gap-3 flex-1 transition-opacity ${awardExp ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                    <input type="text" placeholder="대회명" value={awardCompetition} maxLength={255}
                      onChange={(e) => setAwardCompetition(e.target.value)}
                      className="flex-1 border-b border-gray-300 focus:outline-none focus:border-purple-400 text-sm py-1" />
                    <input type="text" placeholder="수상명" value={awardName} maxLength={255}
                      onChange={(e) => setAwardName(e.target.value)}
                      className="flex-1 border-b border-gray-300 focus:outline-none focus:border-purple-400 text-sm py-1" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">개발 경험여부</label>
                <div className="flex items-center gap-6 mt-1">
                  {[false, true].map((val) => (
                    <label key={String(val)} className="flex items-center gap-2 text-sm cursor-pointer">
                      <input type="radio" name="devExp" checked={devExp === val}
                        onChange={() => setDevExp(val)} className="accent-purple-600" />
                      {val ? "있음" : "없음"}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── 4. 프로그래밍언어 ── */}
          <section>
            <h2 className="text-base font-bold text-gray-800 mb-1 pb-2 border-b border-gray-100">
              프로그래밍언어 <span className="text-xs font-normal text-gray-400">(복수 선택 가능)</span>
            </h2>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              {LANGUAGES.map((lang) => (
                <label key={lang.id} className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="checkbox" checked={selectedLanguages.includes(lang.id)}
                    onChange={() => toggleLanguage(lang.id)} className="accent-purple-600 w-4 h-4 flex-shrink-0" />
                  <span className="flex-shrink-0">{lang.label}</span>
                  {lang.id === OTHER_LANG_ID && (
                    <input type="text" placeholder="직접 기재" value={langCustomText} maxLength={100}
                      onChange={(e) => setLangCustomText(e.target.value)}
                      className={`border-b border-gray-300 focus:outline-none focus:border-purple-400 text-sm w-40 transition-opacity ${
                        selectedLanguages.includes(OTHER_LANG_ID)
                          ? "opacity-100"
                          : "opacity-0 pointer-events-none"
                      }`} />
                  )}
                </label>
              ))}
            </div>
          </section>

          {/* ── 5. 상세 정보 ── */}
          <section>
            <h2 className="text-base font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">상세 정보</h2>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">사용가능한 개발툴</label>
                <textarea rows={2} value={tools} maxLength={500} onChange={(e) => setTools(e.target.value)}
                  placeholder="자주 사용하는 툴 중심으로 2~3개만 작성  예시) VS Code, Git, Slack 등"
                  className={textareaCls} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  개발경험 <span className="text-xs font-normal text-gray-400">(해당자만 작성)</span>
                </label>
                <textarea rows={4} value={devExpDetail} maxLength={2000} onChange={(e) => setDevExpDetail(e.target.value)}
                  placeholder={`경험한 프로젝트명, 역할, 사용한 언어/프레임워크 등을 간단히 작성\n예시)\n- 웹 개발 동아리 활동 (HTML/CSS, JavaScript 사용)\n- 캡스톤디자인 과목에서 팀 프로젝트 참여 (백엔드 개발)`}
                  className={textareaCls} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  AI/데이터분석 경험 <span className="text-xs font-normal text-gray-400">(해당자만 작성)</span>
                </label>
                <textarea rows={4} value={aiExpDetail} maxLength={2000} onChange={(e) => setAiExpDetail(e.target.value)}
                  placeholder={`예시)\n- 머신러닝 과목 수강 (사이킷런 실습)\n- GPT 기반 챗봇 개발 경험\n- Python으로 데이터 전처리 및 분석 프로젝트 수행`}
                  className={textareaCls} />
              </div>
            </div>
          </section>

          {/* ── 6. 개인정보 수집 및 이용 동의 ── */}
          <section>
            <h2 className="text-base font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
              개인정보 수집 및 이용 동의<Req />
            </h2>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-xs text-gray-600 leading-relaxed space-y-3">
              <p className="font-semibold text-gray-700">개인정보 수집 및 이용에 관한 안내</p>
              <table className="w-full border-collapse text-xs">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-200 px-3 py-2 text-left font-medium text-gray-700">수집 항목</th>
                    <th className="border border-gray-200 px-3 py-2 text-left font-medium text-gray-700">수집 목적</th>
                    <th className="border border-gray-200 px-3 py-2 text-left font-medium text-gray-700">보유 기간</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-3 py-2 text-gray-600">
                      성명, 소속대학, 소속학과, 학번, 연락처, 이메일, 학년, 성별, 신청분야, 프로그래밍언어, 경험 정보
                    </td>
                    <td className="border border-gray-200 px-3 py-2 text-gray-600">
                      대회 참가자 관리, 심사 및 운영, 결과 통보
                    </td>
                    <td className="border border-gray-200 px-3 py-2 text-gray-600">
                      대회 종료 후 1년
                    </td>
                  </tr>
                </tbody>
              </table>
              <ul className="space-y-1 text-gray-500">
                <li>• 위 개인정보는 대회 운영 목적으로만 사용되며, 제3자에게 제공되지 않습니다.</li>
                <li>• 동의를 거부할 권리가 있으나, 거부 시 대회 참가 신청이 불가합니다.</li>
                <li>• 수집된 개인정보는 보유기간 종료 후 즉시 파기됩니다.</li>
              </ul>
              {!showPrivacy && (
                <button type="button" onClick={() => setShowPrivacy(true)}
                  className="text-purple-500 hover:text-purple-700 text-xs underline">
                  전체 내용 보기
                </button>
              )}
              {showPrivacy && (
                <div className="mt-2 space-y-2 text-gray-500 border-t border-gray-200 pt-3">
                  <p className="font-medium text-gray-600">세부 처리 방침</p>
                  <p>1. 정보주체는 언제든지 개인정보 열람, 정정, 삭제, 처리정지 요청을 할 수 있습니다.</p>
                  <p>2. 개인정보보호법 제15조에 의거하여 수집 및 이용합니다.</p>
                </div>
              )}
            </div>

            <label id="privacy" className="flex items-start gap-3 mt-4 cursor-pointer group">
              <input type="checkbox" checked={privacyAgreed}
                onChange={(e) => { setPrivacyAgreed(e.target.checked); clearError("privacy"); }}
                className="mt-0.5 w-4 h-4 accent-purple-600 flex-shrink-0" />
              <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                위 개인정보 수집 및 이용에 관한 안내를 읽었으며, 이에 <span className="font-semibold text-purple-600">동의합니다.</span>
                <Req />
              </span>
            </label>
            <FieldError msg={errors.privacy} />
          </section>

          {errors._global && (
            <p className="text-red-500 text-sm">{errors._global}</p>
          )}

          <button type="submit" disabled={state === "loading"}
            className="w-full py-3.5 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-semibold transition-colors text-sm">
            {state === "loading" ? "제출 중..." : "신청하기"}
          </button>
        </form>
      </div>
    </div>
  );
}
