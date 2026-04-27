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

const OTHER_FIELD_ID = 6;
const OTHER_LANG_ID = 5;

const inputCls =
  "w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-200 transition";

function Req() {
  return <span className="text-red-500 ml-0.5">*</span>;
}

export default function ApplyForm() {
  const [form, setForm] = useState({
    name: "",
    university: "",
    department: "",
    studentId: "",
    phone: "",
    email: "",
    grade: "",
    gender: "",
  });

  const [selectedFields, setSelectedFields] = useState<number[]>([]);
  const [fieldCustomText, setFieldCustomText] = useState("");

  const [selectedLanguages, setSelectedLanguages] = useState<number[]>([]);
  const [langCustomText, setLangCustomText] = useState("");

  const [hackathonExp, setHackathonExp] = useState<boolean | null>(null);
  const [hackathonName, setHackathonName] = useState("");
  const [awardExp, setAwardExp] = useState<boolean | null>(null);
  const [awardCompetition, setAwardCompetition] = useState("");
  const [awardName, setAwardName] = useState("");
  const [devExp, setDevExp] = useState<boolean | null>(null);

  const [tools, setTools] = useState("");
  const [devExpDetail, setDevExpDetail] = useState("");
  const [aiExpDetail, setAiExpDetail] = useState("");

  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const toggleField = (id: number) =>
    setSelectedFields((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );

  const toggleLanguage = (id: number) =>
    setSelectedLanguages((prev) =>
      prev.includes(id) ? prev.filter((l) => l !== id) : [...prev, id]
    );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedFields.length === 0) {
      setErrorMsg("신청 분야를 하나 이상 선택해주세요.");
      setState("error");
      return;
    }
    if (!privacyAgreed) {
      setErrorMsg("개인정보 수집 및 이용에 동의해주세요.");
      setState("error");
      return;
    }

    setState("loading");
    setErrorMsg("");

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
        throw new Error(data.message || "서버 오류가 발생했습니다.");
      }

      setState("success");
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "알 수 없는 오류가 발생했습니다.");
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

        <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl p-8 space-y-8 shadow-sm">

          {/* ── 1. 기본 정보 ── */}
          <section>
            <h2 className="text-base font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
              기본 정보 <span className="text-gray-500 text-sm"><span className="text-red-500">*</span>는 필수항목입니다.</span>
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">성명<Req /></label>
                <input type="text" required placeholder="홍길동" value={form.name} maxLength={60}
                  onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">소속대학<Req /></label>
                <input type="text" required placeholder="연세대학교 미래캠퍼스" value={form.university} maxLength={100}
                  onChange={(e) => setForm({ ...form, university: e.target.value })} className={inputCls} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">소속학과<Req /></label>
                  <input type="text" required placeholder="컴퓨터공학과" value={form.department} maxLength={100}
                    onChange={(e) => setForm({ ...form, department: e.target.value })} className={inputCls} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">학번<Req /></label>
                  <input type="text" required placeholder="2024000000" value={form.studentId} maxLength={50}
                    onChange={(e) => setForm({ ...form, studentId: e.target.value })} className={inputCls} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">연락처 (h.p)<Req /></label>
                  <input type="tel" required placeholder="010-0000-0000" value={form.phone} maxLength={20}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputCls} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">이메일주소<Req /></label>
                  <input type="email" required placeholder="example@email.com" value={form.email} maxLength={100}
                    onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">학년<Req /></label>
                  <select required value={form.grade}
                    onChange={(e) => setForm({ ...form, grade: e.target.value })}
                    className={inputCls}>
                    <option value="">선택</option>
                    <option value="1학년">1학년</option>
                    <option value="2학년">2학년</option>
                    <option value="3학년">3학년</option>
                    <option value="4학년">4학년</option>
                    <option value="대학원생">대학원생</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">성별<Req /></label>
                  <div className="flex gap-6 mt-2.5">
                    {["남", "여"].map((g) => (
                      <label key={g} className="flex items-center gap-2 text-sm cursor-pointer">
                        <input type="radio" name="gender" required value={g}
                          checked={form.gender === g}
                          onChange={() => setForm({ ...form, gender: g })}
                          className="accent-purple-600" />
                        {g}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── 2. 신청 분야 ── */}
          <section>
            <h2 className="text-base font-bold text-gray-800 mb-1 pb-2 border-b border-gray-100">
              신청 분야<Req /> <span className="text-xs font-normal text-gray-400">(복수 선택 가능)</span>
            </h2>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {FIELDS.map((field) => (
                <label key={field.id} className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="checkbox" checked={selectedFields.includes(field.id)}
                    onChange={() => toggleField(field.id)} className="accent-purple-600 w-4 h-4 flex-shrink-0" />
                  <span className="flex-shrink-0">{field.label}</span>
                  {field.id === OTHER_FIELD_ID && (
                    <input type="text" placeholder="직접 입력" value={fieldCustomText} maxLength={100}
                      onChange={(e) => setFieldCustomText(e.target.value)}
                      className={`border-b border-gray-300 focus:outline-none focus:border-purple-400 text-sm w-20 transition-opacity ${
                        selectedFields.includes(OTHER_FIELD_ID)
                          ? "opacity-100"
                          : "opacity-0 pointer-events-none"
                      }`} />
                  )}
                </label>
              ))}
            </div>
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
                      className={`border-b border-gray-300 focus:outline-none focus:border-purple-400 text-sm w-24 transition-opacity ${
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
                  className={`${inputCls} resize-none`} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  개발경험 <span className="text-xs font-normal text-gray-400">(해당자만 작성)</span>
                </label>
                <textarea rows={4} value={devExpDetail} maxLength={2000} onChange={(e) => setDevExpDetail(e.target.value)}
                  placeholder={`경험한 프로젝트명, 역할, 사용한 언어/프레임워크 등을 간단히 작성\n예시)\n- 웹 개발 동아리 활동 (HTML/CSS, JavaScript 사용)\n- 캡스톤디자인 과목에서 팀 프로젝트 참여 (백엔드 개발)`}
                  className={`${inputCls} resize-none`} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  AI/데이터분석 경험 <span className="text-xs font-normal text-gray-400">(해당자만 작성)</span>
                </label>
                <textarea rows={4} value={aiExpDetail} maxLength={2000} onChange={(e) => setAiExpDetail(e.target.value)}
                  placeholder={`예시)\n- 머신러닝 과목 수강 (사이킷런 실습)\n- GPT 기반 챗봇 개발 경험\n- Python으로 데이터 전처리 및 분석 프로젝트 수행`}
                  className={`${inputCls} resize-none`} />
              </div>
            </div>
          </section>

          {/* ── 6. 개인정보 수집 및 이용 동의 ── */}
          <section>
            <h2 className="text-base font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
              개인정보 수집 및 이용 동의<Req />
            </h2>

            {/* 동의서 본문 */}
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

            {/* 동의 체크박스 */}
            <label className="flex items-start gap-3 mt-4 cursor-pointer group">
              <input type="checkbox" checked={privacyAgreed}
                onChange={(e) => setPrivacyAgreed(e.target.checked)}
                className="mt-0.5 w-4 h-4 accent-purple-600 flex-shrink-0" />
              <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                위 개인정보 수집 및 이용에 관한 안내를 읽었으며, 이에 <span className="font-semibold text-purple-600">동의합니다.</span>
                <Req />
              </span>
            </label>
          </section>

          {state === "error" && (
            <p className="text-red-500 text-sm">{errorMsg}</p>
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
