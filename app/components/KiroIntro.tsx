export default function KiroIntro() {
  const features = [
    {
      title: "대화하듯 개발",
      desc: "프로그래밍 언어 없이 자연어로 앱을 만듭니다.",
    },
    {
      title: "명세 기반 개발",
      desc: "아이디어 → 기능 명세 → 설계 → 코드까지 자동 생성",
    },
    {
      title: "자동 배포",
      desc: "클릭 한 번으로 실제 서비스 런칭",
    },
  ];

  return (
    <section className="bg-[#252525] py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <img src="/kiro-logo.svg" alt="Kiro" className="w-12 h-12 rounded-xl" />
          <h2 className="text-4xl font-bold text-white">AWS Kiro란?</h2>
        </div>
        <p className="text-[#999] mb-12">
          코딩 없이 아이디어만으로 실제 서비스를 만드는 AI 개발 플랫폼
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-200">
              <h3 className="font-bold mb-2 text-white text-xl">{f.title}</h3>
              <p className="text-[#999]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}