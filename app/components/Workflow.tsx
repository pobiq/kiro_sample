export default function Workflow() {
  const steps = [
    "아이디어 입력",
    "Kiro가 기획서 생성",
    "AI가 코드 생성",
    "AWS에 자동 배포",
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-16">
          AI 개발 워크플로우
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="bg-indigo-600 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold">
                {i + 1}
              </div>
              <span className="text-gray-700 text-sm">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}