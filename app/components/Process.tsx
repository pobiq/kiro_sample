export default function Process() {
  const steps = [
    { step: "1", title: "참가 신청" },
    { step: "2", title: "팀 선발" },
    { step: "3", title: "사전 교육" },
    { step: "4", title: "해커톤 진행" },
    { step: "5", title: "본선 발표" },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-16">참가 방법</h2>

        <div className="grid md:grid-cols-5 gap-4">
          {steps.map((s) => (
            <div
              key={s.step}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
            >
              <div className="text-indigo-600 font-bold text-xl mb-2">
                STEP {s.step}
              </div>
              <div className="text-sm text-gray-700">{s.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}