const judgingCriteria = [
  { pct: "30%", title: "Prompt / Spec Quality", desc: "KIRO를 논리적으로 가이드하여 완성도 높은 명세(Spec)를 뽑아내었는가?", color: "border-indigo-800", bg: "bg-indigo-50" },
  { pct: "30%", title: "Agentic Thinking", desc: "단순 챗봇이 아닌, 스스로 과업을 수행하는 'Agent' 성격이 서비스에 묻어나는가?", color: "border-indigo-800", bg: "bg-indigo-50" },
  { pct: "20%", title: "Campus Impact", desc: "대학 생활의 문제(AI Campus)를 얼마나 창의적이고 실용적으로 해결했는가?", color: "border-amber-400", bg: "bg-amber-50" },
  { pct: "20%", title: "Completeness", desc: "KIRO를 활용해 실제 인프라에 배포 및 동작 가능한 수준으로 완성했는가?", color: "border-amber-400", bg: "bg-amber-50" },
];

export default function Judging() {
  return (
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
  );
}
