export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0d0d14] text-white">
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-violet-900/30 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-[400px] h-[400px] rounded-full bg-amber-500/10 blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tight">
          원주 대학 연합<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-amber-400">
            AI·클라우드 경진대회
          </span>
        </h1>
        <p className="text-[#999] text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
          어려운 코딩 없이, 대화하듯 아이디어를 실현하는<br />
          <span className="text-purple-300 font-medium">AWS Kiro 기반 &apos;AI 자동 개발&apos; 해커톤</span>
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#apply"
            className="px-8 py-3.5 bg-purple-900 hover:bg-purple-500 rounded-xl font-semibold transition-colors text-sm"
          >
            지금 신청하기
          </a>
        </div>
      </div>
    </section>
  );
}
