"use client";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    { q: "개인도 참여 가능한가요?",
      a: "네 개인도 참여 가능합니다."
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
    <section id="faq" className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">FAQ</h2>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="bg-[#EBF2FA] rounded-xl px-6 py-5 cursor-pointer hover:bg-[#dce9f5] transition-colors"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#1A56DB] text-white text-sm font-bold flex items-center justify-center shrink-0">
                    Q
                  </span>
                  <span className="font-semibold text-black text-base">{f.q}</span>
                </div>
                <span className={`text-gray-500 text-sm transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </div>
              {open === i && (
                <div className="text-[#555] mt-4 pl-11">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
