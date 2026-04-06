"use client";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      q: "개인 참가 가능한가요?",
      a: "네, 가능합니다. 개인 참가자는 팀 매칭을 지원합니다.",
    },
    {
      q: "개발 경험이 없어도 되나요?",
      a: "가능합니다. AI 기반 개발 환경(Kiro)을 활용합니다.",
    },
    {
      q: "숙박이 제공되나요?",
      a: "예선 기간 동안 숙박 및 식사가 제공됩니다.",
    },
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">FAQ</h2>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl p-5 cursor-pointer"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-800">{f.q}</span>
                <span className={`text-indigo-700 text-base transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </div>
              {open === i && (
                <div className="text-sm text-gray-500 mt-3 pt-3 border-t border-gray-100">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}