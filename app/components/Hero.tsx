const heroStats = [
  { value: "260만원", label: "총 상금" },
  { value: "3월 ~ 7월", label: "운영 기간" },
  { value: "도쿄 연수", label: "최종 2팀 부상" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0d0d14] text-white">
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-violet-900/30 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-[400px] h-[400px] rounded-full bg-amber-500/10 blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tight">
          원주 대학 연합<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-amber-400">
            AI·클라우드 경진대회
          </span>
        </h1>
        <p className="text-[#999] text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
          어려운 코딩 없이, 대화하듯 아이디어를 실현하는<br />
          <span className="text-indigo-300 font-medium">AWS Kiro 기반 &apos;AI 자동 개발&apos; 해커톤</span>
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#apply"
            className="px-8 py-3.5 bg-indigo-900 hover:bg-indigo-500 rounded-full font-semibold transition-colors text-sm"
          >
            지금 신청하기
          </a>
          <a
            href="#about"
            className="px-8 py-3.5 border border-white/20 hover:border-white/50 rounded-full font-semibold transition-colors text-sm"
          >
            자세히 보기
          </a>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-6 max-w-lg mx-auto text-center">
          {heroStats.map((stat) => (
            <div key={stat.label} className="border-t border-white/10 pt-6">
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-[#999] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
