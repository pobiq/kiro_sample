export default function PreEducation() {
  const phases = [
    "사전 교육 자료 제공",
    "온라인 Q&A 지원",
    "환경 세팅 및 최종 점검",
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">
          사전 교육 프로그램
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {phases.map((p) => (
            <div key={p} className="bg-gray-50 p-6 rounded-xl border">
              <p className="text-sm text-gray-700">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}