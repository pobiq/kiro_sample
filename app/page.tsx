import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const heroStats = [
  { value: "260만원", label: "총 상금" },
  { value: "3월 ~ 7월", label: "운영 기간" },
  { value: "도쿄 연수", label: "최종 2팀 부상" },
];

const timeline = [
  { period: "3월 – 4월", label: "준비 및 모집", desc: "참가팀 선발, 대회 일정 안내" },
  { period: "5/15 – 21", label: "사전 기술 교육", desc: "Kiro 환경 세팅, 사전 과제 및 질의응답" },
  { period: "5/22 – 23", label: "KIROTHON 예선", desc: "1박 2일 몰입 개발, 본선 4팀 선발" },
  { period: "5/24 – 31", label: "프로젝트 고도화", desc: "전문가 멘토링, 앱 품질 향상" },
  { period: "6/03", label: "경진대회 본선", desc: "최종 서비스 발표 및 우수 2팀 시상" },
  { period: "7/06 ~", label: "일본 글로벌 견학 ✈️", desc: "도쿄 IT 기업 탐방 3박 4일" },
];

const prizes = [
  { rank: "대상", icon: "🥇", amount: "100만원", team: "1팀"},
  { rank: "최우수상", icon: "🥈", amount: "80만원", team: "1팀"},
  { rank: "우수상", icon: "🥉", amount: "50만원", team: "1팀"},
  { rank: "장려상", icon: "🎖️", amount: "30만원", team: "1팀"},
];

const judgingCriteria = [
  { pct: "30%", title: "Prompt / Spec Quality", desc: "KIRO를 논리적으로 가이드하여 완성도 높은 명세(Spec)를 뽑아내었는가?", color: "border-indigo-800", bg: "bg-indigo-50" },
  { pct: "30%", title: "Agentic Thinking", desc: "단순 챗봇이 아닌, 스스로 과업을 수행하는 'Agent' 성격이 서비스에 묻어나는가?", color: "border-indigo-800", bg: "bg-indigo-50" },
  { pct: "20%", title: "Campus Impact", desc: "대학 생활의 문제(AI Campus)를 얼마나 창의적이고 실용적으로 해결했는가?", color: "border-amber-400", bg: "bg-amber-50" },
  { pct: "20%", title: "Completeness", desc: "KIRO를 활용해 실제 인프라에 배포 및 동작 가능한 수준으로 완성했는가?", color: "border-amber-400", bg: "bg-amber-50" },
];

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

export default function Home() {
  return (
    <main className="font-sans">

      {/* ── Sticky Header ── */}
      <Header />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#0d0d14] text-white">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-violet-900/30 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 right-0 w-[400px] h-[400px] rounded-full bg-amber-500/10 blur-[100px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-32 text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-indigo-500/40 bg-indigo-500/10 text-indigo-300 text-xs font-medium tracking-widest uppercase">
            KIROTHON
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tight">
            원주 대학 연합<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-amber-400">
              AI·클라우드 경진대회
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
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
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3 Core Strategies ── */}
      <section id="about" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">대회 소개</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {strategies.map((item) => (
              <div
                key={item.num}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className="flex flex-row items-center">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section id="timeline" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Schedule</h2>

          {/* 데스크탑: 가로 타임라인 */}
          <div className="hidden md:block overflow-x-auto">
            <div className="relative min-w-[700px]">
              {/* 연결선 */}
              <div className="absolute top-[9px] left-[calc(100%/12)] right-[calc(100%/12)] h-0.5 bg-indigo-200" />

              {/* 마커 행 */}
              <div className="relative flex justify-between mb-5">
                {timeline.map((item) => (
                  <div key={item.label} className="flex flex-col items-center" style={{ width: `${100 / timeline.length}%` }}>
                    <div className="w-[18px] h-[18px] bg-indigo-700" />
                  </div>
                ))}
              </div>

              {/* 텍스트 행 */}
              <div className="flex justify-between">
                {timeline.map((item) => (
                  <div key={item.label} className="flex flex-col items-center text-center px-2" style={{ width: `${100 / timeline.length}%` }}>
                    <span className="text-indigo-700 font-bold text-sm leading-snug mb-1">{item.label}</span>
                    <span className="text-gray-700 text-sm mb-1">{item.period}</span>
                    <span className="text-gray-400 text-xs leading-snug">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 모바일: 세로 타임라인 */}
          <div className="md:hidden flex flex-col gap-0">
            {timeline.map((item, i) => (
              <div key={item.label} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-indigo-700 rotate-45 shrink-0 mt-1" />
                  {i < timeline.length - 1 && <div className="w-0.5 flex-1 bg-indigo-200 my-1" />}
                </div>
                <div className="pb-8">
                  <span className="text-indigo-700 font-bold text-sm">{item.label}</span>
                  <p className="text-gray-700 text-sm">{item.period}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Prizes ── */}
      <section id="prizes" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">수상 혜택</h2>
          <p className="text-gray-500 text-center mb-16 text-sm">본선 진출 4팀 상금 지급 + 최종 2팀 일본 글로벌 견학 전액 지원</p>

          <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
            {prizes.map((prize) => (
              <div
                key={prize.rank}
                className={`rounded-2xl p-6 text-center border transition-shadow hover:shadow-lg bg-white border-gray-100 shadow-sm `}
              >
                <div className="text-3xl mb-3">{prize.icon}</div>
                <div className={`text-xs font-semibold uppercase tracking-widest mb-1 `}>
                  {prize.rank}
                </div>
                <div className={`text-2xl font-extrabold mb-1 `}>
                  {prize.amount}
                </div>
                <div className={`text-xs `}>{prize.team}</div>
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

      {/* ── Judging ── */}
      <section id="judging" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">KIROTHON 심사 기준</h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {judgingCriteria.map((item) => (
              <div key={item.title} className={`rounded-2xl p-6 border-l-4 ${item.color} ${item.bg}`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-extrabold text-gray-900">{item.pct}</span>
                  <span className="font-bold text-gray-800">{item.title}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Apply CTA ── */}
      <section id="apply" className="bg-[#0d0d14] text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-4">지금 바로 참가 신청하세요</h2>
          <p className="text-gray-400 mb-2">모집 기간: 2026년 3월 ~ 4월</p>
          <p className="text-gray-500 text-sm mb-10">원주 지역 대학생 누구나 참가 가능 · 비전공자 환영</p>
          <a
            href="#"
            className="inline-block px-10 py-4 bg-indigo-900 hover:bg-indigo-500 rounded-full font-bold text-lg transition-colors"
          >
            참가 신청하기 →
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <Footer />
      <ScrollToTop />

    </main>
  );
}
