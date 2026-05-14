const infoRows = [
  { label: "대 회 명", value: "2026년 동북권 개발자 대상 오픈소스 아이디어 경진대회" },
  { label: "예    선", value: "2026년 6월 12일(금) – 13일(토)" },
  { label: "본    선", value: "2026년 6월 19일(금)" },
  { label: "참가 대상", value: "동북권(대구·경북·강원) 재직자 및 대학생" },
  { label: "개발 도구", value: "AWS Kiro (AI 자동 개발 IDE)" },
];

export default function Overview() {
  return (
    <section id="overview" className="bg-white py-20 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6">

        {/* 섹션 헤더 */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-3">대회 개요</h2>
          <p className="text-[#777A83] text-lg">
            AI와 함께 아이디어를 현실로 — 원주 대학 연합이 함께하는 해커톤
          </p>
        </div>

        {/* 대회 정보 테이블 */}
        <div className="rounded-xl border border-[#D7D7D7] overflow-hidden">
          {infoRows.map((row) => (
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
