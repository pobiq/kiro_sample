const prizes = [
  { rank: "대상", amount: "100", unit: "만원" },
  { rank: "최우수상", amount: "80", unit: "만원" },
  { rank: "우수상", amount: "50", unit: "만원" },
  { rank: "장려상", amount: "30", unit: "만원" },
];

export default function Award() {
  return (
    <section id="prizes" className="bg-black text-white py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold mb-6">Award</h2>
        <p className="text-2xl font-bold text-white mb-3">총 상금 260만원</p>
        <p className="text-white text-xl mb-2">대회 종료 후 본선 진출 4팀 상금 지급</p>
        <p className="text-[#999] text-xl mb-14">대상 + 최우수상 최종 2팀 — 일본 도쿄 글로벌 IT 견학 (3박 4일) 전액 지원</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {prizes.map((prize) => (
            <div key={prize.rank} className="flex flex-col items-center">
              <span className="text-white text-xl font-bold mb-3">{prize.rank}</span>
              <div className="w-full rounded-lg overflow-hidden shadow-lg">
                {/* 그라디언트 상단 바 */}
                <div className="h-2 bg-gradient-to-r bg-gradient-to-r from-purple-500 via-pink-500 to-amber-300" />
                <div className="bg-white text-gray-900 py-6 px-4 text-center">
                  <span className="text-4xl font-extrabold">{prize.amount}</span>
                  <span className="text-2xl font-bold">{prize.unit}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 일본 견학 */}
        <div className="mt-14 border border-white/10 rounded-2xl p-1 flex flex-col md:flex-row items-center gap-5 text-left">
          <div className="text-5xl">✈️</div>
          <div>
            <div className="text-amber-400 font-bold uppercase tracking-widest mb-1">대상 + 최우수상 2팀 (최대 10명)</div>
            <p className="text-2xl font-extrabold mb-1">7월초 일본 글로벌 IT 견학 (3박 4일)</p>
            <p className="leading-relaxed">
              AWS Japan 등 글로벌 클라우드 기업 심층 투어 · 현지 엔지니어 멘토링 · CIC Tokyo 스타트업 허브 방문<br />
              항공·숙박·식사·현지 교통 <span className="text-amber-400 font-semibold">전액 지원</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
