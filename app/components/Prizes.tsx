const prizes = [
  { rank: "대상", icon: "🥇", amount: "100만원", team: "1팀" },
  { rank: "최우수상", icon: "🥈", amount: "80만원", team: "1팀" },
  { rank: "우수상", icon: "🥉", amount: "50만원", team: "1팀" },
  { rank: "장려상", icon: "🎖️", amount: "30만원", team: "1팀" },
];

export default function Prizes() {
  return (
    <section id="prizes" className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">수상 혜택</h2>
        <p className="text-gray-500 text-center mb-16 text-sm">본선 진출 4팀 상금 지급 + 최종 2팀 일본 글로벌 견학 전액 지원</p>

        <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
          {prizes.map((prize) => (
            <div
              key={prize.rank}
              className="rounded-2xl p-6 text-center border transition-shadow hover:shadow-lg bg-white border-gray-100 shadow-sm"
            >
              <div className="text-3xl mb-3">{prize.icon}</div>
              <div className="text-xs font-semibold uppercase tracking-widest mb-1">{prize.rank}</div>
              <div className="text-2xl font-extrabold mb-1">{prize.amount}</div>
              <div className="text-xs">{prize.team}</div>
            </div>
          ))}
        </div>

        {/* Japan trip highlight */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#0d0d14] text-white p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="text-5xl">✈️</div>
          <div className="flex-1 text-center md:text-left">
            <div className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">대상 + 최우수상 2팀 (최대 10명)</div>
            <h3 className="text-2xl font-extrabold mb-2">일본 도쿄 글로벌 IT 견학 (3박 4일)</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              AWS Japan 등 글로벌 클라우드 기업 심층 투어 · 현지 엔지니어 멘토링 · CIC Tokyo 스타트업 허브 방문<br />
              항공·숙박·식사·현지 교통 <span className="text-amber-400 font-semibold">전액 지원</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
