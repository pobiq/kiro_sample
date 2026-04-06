export default function Eligibility() {
  const items = [
    "원주 지역 대학(원)생 누구나",
    "개인 또는 팀 참가 가능 (팀 최대 4인)",
    "비전공자 참여 가능",
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">참가 대상</h2>
        <ul className="space-y-4">
          {items.map((item, i) => (
            <li
              key={i}
              className="bg-gray-50 border border-gray-100 rounded-xl py-4 px-6 text-gray-700 text-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}