const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H8l-5 3V6a2 2 0 0 1 2-2z" />
      </svg>
    ),
    title: "대화하듯 코딩하기 (Vibe Coding)",
    desc: '어려운 프로그래밍 언어 대신, 우리가 쓰는 일상 언어로 앱을 만듭니다.',
    example: '"우리 학교 학식 추천해주는 앱 만들어줘!" → AI가 알아서 개발 시작',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "명세 기반 개발 (Spec-Driven)",
    desc: "AI가 무작정 코드부터 짜는 것이 아니라, 체계적인 기획서(Spec)를 먼저 제안합니다.",
    example: "아이디어 → 기능 명세 → 설계 → 코드 → 테스트까지 전 과정 자동 관리",
  },
];

const roles = [
  {
    num: "01",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: "기획서 알아서 작성",
    desc: "만들고 싶은 앱을 말하면 AI가 필요한 기능과 아키텍처 설계도를 그려줍니다.",
    accent: "bg-purple-50 border-purple-200",
    numColor: "text-purple-400",
  },
  {
    num: "02",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "코딩과 테스트 한 번에",
    desc: "기획서를 승인하면 작동하는 앱 코드를 뚝딱 짜내고 스스로 오류 테스트까지 마칩니다.",
    accent: "bg-blue-50 border-blue-200",
    numColor: "text-blue-400",
  },
  {
    num: "03",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10" />
        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
      </svg>
    ),
    title: "스마트한 자동화 (Hooks)",
    desc: "코드를 수정하면 관련 테스트나 문서를 알아서 업데이트하고 배포 전 보안도 검사합니다.",
    accent: "bg-emerald-50 border-emerald-200",
    numColor: "text-emerald-400",
  },
  {
    num: "04",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    title: "지능형 코드 QA",
    desc: '"이 코드가 왜 느려?" 라고 물어보면 전체 구조를 파악해 즉시 원인과 해결책을 답해줍니다.',
    accent: "bg-amber-50 border-amber-200",
    numColor: "text-amber-400",
  },
];

export default function KiroIntro() {
  return (
    <section id="kiro-intro" className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* 헤더 */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <img src="/kiro-logo.svg" alt="Kiro" className="w-12 h-12 rounded-xl" />
          <h2 className="text-4xl font-bold text-black">AWS Kiro란?</h2>
        </div>
        <p className="text-[#777A83] text-center mb-12">
          비전공자도 말(자연어)로 명령만 하면, 요구사항 분석부터 시스템 설계, 코드 작성, 서비스 출시까지<br />
          모두 알아서 해주는 <span className="text-black font-semibold">AI 개발 플랫폼</span>입니다.
        </p>

        {/* 핵심 개념 2개 */}
        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {features.map((f) => (
            <div key={f.title} className="bg-gray-50 rounded-2xl p-7 border border-gray-200 hover:border-gray-300 hover:-translate-y-1 transition-all duration-200">
              <div className="text-3xl mb-3 flex">{f.icon}</div>
              <h3 className="font-bold text-black text-lg mb-2">{f.title}</h3>
              <p className="text-[#777A83] leading-relaxed mb-3">{f.desc}</p>
              <div className="bg-gray-100 rounded-lg px-4 py-2.5 text-xs text-purple-600 leading-relaxed">
                {f.example}
              </div>
            </div>
          ))}
        </div>

        {/* 4가지 핵심 역할 */}
        <div>
          <p className="text-black font-bold text-2xl mb-5 text-center">Kiro의 핵심 역할</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {roles.map((r) => (
              <div key={r.num} className={`rounded-2xl p-5 border ${r.accent} hover:-translate-y-1 transition-transform duration-200`}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{r.icon}</span>
                </div>
                <p className="text-black font-bold text-sm mb-1.5">{r.title}</p>
                <p className="text-[#777A83] text-xs leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
