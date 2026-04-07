const features = [
  {
    icon: "💬",
    title: "대화하듯 코딩하기 (Vibe Coding)",
    desc: '어려운 프로그래밍 언어 대신, 우리가 쓰는 일상 언어로 앱을 만듭니다.',
    example: '"우리 학교 학식 추천해주는 앱 만들어줘!" → AI가 알아서 개발 시작',
  },
  {
    icon: "📋",
    title: "명세 기반 개발 (Spec-Driven)",
    desc: "AI가 무작정 코드부터 짜는 것이 아니라, 체계적인 기획서(Spec)를 먼저 제안합니다.",
    example: "아이디어 → 기능 명세 → 설계 → 코드 → 테스트까지 전 과정 자동 관리",
  },
];

const roles = [
  { num: "1", title: "기획서 알아서 작성", desc: "만들고 싶은 앱을 말하면 AI가 필요한 기능과 아키텍처 설계도를 그려줍니다." },
  { num: "2", title: "코딩과 테스트 한 번에", desc: "기획서를 승인하면 작동하는 앱 코드를 뚝딱 짜내고 스스로 오류 테스트까지 마칩니다." },
  { num: "3", title: "스마트한 자동화 (Hooks)", desc: "코드를 수정하면 관련 테스트나 문서를 알아서 업데이트하고 배포 전 보안도 검사합니다." },
  { num: "4", title: "지능형 코드 QA", desc: '"이 코드가 왜 느려?" 라고 물어보면 전체 구조를 파악해 즉시 원인과 해결책을 답해줍니다.' },
];

export default function KiroIntro() {
  return (
    <section className="bg-[#252525] py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* 헤더 */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <img src="/kiro-logo.svg" alt="Kiro" className="w-12 h-12 rounded-xl" />
          <h2 className="text-4xl font-bold text-white">AWS Kiro란?</h2>
        </div>
        <p className="text-[#999] text-center mb-14">
          비전공자도 말(자연어)로 명령만 하면, 요구사항 분석부터 시스템 설계, 코드 작성, 서비스 출시까지<br />
          모두 알아서 해주는 <span className="text-white font-semibold">초거대 AI 개발 플랫폼</span>입니다.
        </p>

        {/* 핵심 개념 2개 */}
        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {features.map((f) => (
            <div key={f.title} className="bg-white/5 rounded-2xl p-7 border border-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-200">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-bold text-white text-lg mb-2">{f.title}</h3>
              <p className="text-[#999] leading-relaxed mb-3">{f.desc}</p>
              <div className="bg-black/30 rounded-lg px-4 py-2.5 text-xs text-purple-300 leading-relaxed">
                {f.example}
              </div>
            </div>
          ))}
        </div>

        {/* 4가지 핵심 역할 */}
        <div className="bg-white/5 rounded-2xl p-7 border border-white/10">
          <p className="text-white font-bold text-base mb-5">⚡ Kiro의 핵심 역할</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {roles.map((r) => (
              <div key={r.num} className="bg-black/20 rounded-xl p-4">
                <p className="text-white text-lg font-semibold mb-1">{r.title}</p>
                <p className="text-[#999] leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}