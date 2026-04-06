export default function DetailedSchedule() {
  const items = [
    { time: "10:00", title: "Check-in & Setup" },
    { time: "10:30", title: "Kiro Master Class" },
    { time: "14:00", title: "아이디어 기획" },
    { time: "17:00", title: "개발 & 멘토링" },
    { time: "09:00", title: "디버깅 & 배포" },
    { time: "16:00", title: "발표" },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          예선 일정 (1박 2일)
        </h2>

        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.time} className="flex gap-4">
              <div className="font-bold text-indigo-600">{item.time}</div>
              <div className="text-gray-700 text-sm">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}