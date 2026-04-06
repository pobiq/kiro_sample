const timeline = [
  { period: "3월 – 4월", label: "준비 및 모집", desc: "참가팀 선발, 대회 일정 안내" },
  { period: "5/15 – 21", label: "사전 기술 교육", desc: "Kiro 환경 세팅, 사전 과제 및 질의응답" },
  { period: "5/22 – 23", label: "KIROTHON 예선", desc: "1박 2일 몰입 개발, 본선 4팀 선발" },
  { period: "5/17 – 31", label: "프로젝트 고도화", desc: "전문가 멘토링, 앱 품질 향상" },
  { period: "6/03", label: "경진대회 본선", desc: "최종 서비스 발표 및 우수 2팀 시상" },
  { period: "7/06 ~", label: "일본 글로벌 견학", desc: "도쿄 IT 기업 탐방 3박 4일" },
];

export default function Timeline() {
  return (
    <section id="timeline" className="bg-[#252525] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Schedule</h2>

        {/* 데스크탑: 가로 타임라인 */}
        <div className="hidden md:block overflow-x-auto">
          <div className="relative min-w-[700px]">
            {/* 연결선 */}
            <div className="absolute top-[9px] left-[calc(100%/12)] right-[calc(100%/12)] h-0.5 bg-white/20" />

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
                  <span className="text-indigo-400 font-bold text-lg leading-snug mb-1">{item.label}</span>
                  <span className="text-gray-300 text-base mb-1">{item.period}</span>
                  <span className="text-gray-500 text-base leading-snug">{item.desc}</span>
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
                {i < timeline.length - 1 && <div className="w-0.5 flex-1 bg-white/20 my-1" />}
              </div>
              <div className="pb-8">
                <span className="text-indigo-400 font-bold text-sm">{item.label}</span>
                <p className="text-gray-300 text-sm">{item.period}</p>
                <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
