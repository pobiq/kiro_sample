const strategies = [
  {
    num: "1",
    icon: "💡",
    title: '코딩 실력보단 "아이디어"',
    desc: '복잡한 코딩은 AI(Kiro)가 다 알아서 해줍니다. 학생들은 "우리 학교에 어떤 서비스가 필요할까?"라는 핵심 기획과 아이디어에만 온전히 집중합니다.',
  },
  {
    num: "2",
    icon: "🚀",
    title: '진짜 "사용할 수 있는" 앱',
    desc: "로컬 PC에서만 돌아가는 연습용 프로그램이 아닙니다. 대회가 끝나면 친구들이 실제 스마트폰으로 접속해서 쓸 수 있는 진짜 '캠퍼스 앱'을 런칭합니다.",
  },
  {
    num: "3",
    icon: "🌏",
    title: '상금을 넘은 "글로벌 경험"',
    desc: "대상을 받은 우수팀은 일본 도쿄의 진짜 글로벌 IT 기업(AWS Japan 등)을 직접 눈으로 보고 체험하게 됩니다. 3박 4일 전액 지원.",
  },
];

export default function Strategies() {
  return (
    <section id="about" className="bg-[#252525] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">대회 소개</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {strategies.map((item) => (
            <div
              key={item.num}
              className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex flex-row items-center">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-3 text-white">{item.title}</h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
