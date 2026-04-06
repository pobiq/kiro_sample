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
        <h2 className="text-4xl font-bold mb-6 text-white">
          AWS Kiro란?
        </h2>
        <p className="text-gray-400 mb-12">
          코딩 없이 아이디어만으로 실제 서비스를 만드는 AI 개발 플랫폼
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h3 className="font-bold mb-2 text-white">{f.title}</h3>
              <p className="text-sm text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}