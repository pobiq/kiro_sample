const infoRows = [
  { label: "대 회 명", value: "KIROTHON — 원주 대학 연합 AI·클라우드 경진대회" },
  { label: "대회 기간", value: "2025년 5월 22일(금) – 6월 10일(수)" },
  { label: "예    선", value: "5월 22일(금) – 23일(토) · 1박 2일 몰입 개발" },
  { label: "본    선", value: "6월 10일(수) · 최종 발표 및 시상" },
  { label: "참가 자격", value: "원주 소재 대학 재학생 (전공 무관, 개인 참가 가능)" },
  { label: "개발 도구", value: "AWS Kiro (AI 자동 개발 IDE) 필수 사용" },
];

export default function Overview() {
  return (
    <section id="overview" className="bg-white py-20 border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6">

        {/* 섹션 헤더 */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-3">대회 개요</h2>
          <p className="text-[#999] text-lg">
            AI와 함께 아이디어를 현실로 — 원주 대학 연합이 함께하는 해커톤
          </p>
        </div>

        {/* 대회 정보 테이블 */}
        <div className="rounded-xl border border-[#D7D7D7] overflow-hidden">
          {infoRows.map((row, i) => (
            <div
              key={row.label}
              className={`flex items-center gap-0 `}
            >
              {/* label */}
              <div className="w-32 shrink-0 px-6 py-4 ">
                <span className="text-sm font-bold text-black whitespace-nowrap">{row.label}</span>
              </div>
              {/* 세로 막대 */}
              <div className="w-px bg-[#D7D7D7] self-stretch my-3" />
              {/* value */}
              <div className="flex-1 px-6 py-4">
                <span className="text-sm text-black leading-snug">{row.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
