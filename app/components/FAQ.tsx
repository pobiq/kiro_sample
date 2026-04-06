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
    <section className="bg-black py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">FAQ</h2>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-xl p-5 cursor-pointer hover:border-white/20 transition-colors"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-white">{f.q}</span>
                <span className={`text-white text-base transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </div>
              {open === i && (
                <div className="text-sm text-gray-400 mt-3 pt-3 border-t border-white/10">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}