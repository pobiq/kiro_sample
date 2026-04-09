const strategies = [
  {
    num: "1",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
    ),
    title: '코딩 실력보단 "아이디어"',
    desc: '복잡한 코딩은 AI(Kiro)가 다 알아서 해줍니다. 학생들은 "우리 학교에 어떤 서비스가 필요할까?"라는 핵심 기획과 아이디어에만 온전히 집중합니다.',
  },
  {
    num: "2",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
      </svg>
    ),
    title: '진짜 "사용할 수 있는" 앱',
    desc: "로컬 PC에서만 돌아가는 연습용 프로그램이 아닙니다. 대회가 끝나면 친구들이 실제 스마트폰으로 접속해서 쓸 수 있는 진짜 '캠퍼스 앱'을 런칭합니다.",
  },
  {
    num: "3",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: '상금을 넘은 "글로벌 경험"',
    desc: "대상을 받은 우수팀은 일본 도쿄의 진짜 글로벌 IT 기업(AWS Japan 등)을 직접 눈으로 보고 체험하게 됩니다. 3박 4일 전액 지원.",
  },
];

export default function Introduce() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">대회 소개</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {strategies.map((item) => (
            <div
              key={item.num}
              className="bg-gray-50 rounded-2xl p-5 border border-gray-200 hover:border-gray-300 hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex flex-row items-center gap-3">
                <div className="mb-4 flex">{item.icon}</div>
                <h3 className="font-bold text-lg mb-3 text-black">{item.title}</h3>
              </div>
              <p className="text-[#777A83] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
