"use client";

import { useState } from "react";

const modalSections = [
  {
    num: "1",
    title: "참가 신청",
    items: [
      "일정 : 2026년 3월 ~ 4월",
      "참가팀 및 팀원 지원서 접수",
      "참가 신청해주신 모든 지원자의 서류 및 지원서를 검토합니다.",
    ],
  },
  {
    num: "2",
    title: "예선",
    items: [
      "일정 : 2026/5/22 ~ 5/23",
      "1박 2일 몰입 개발 (금 10시 – 토 18시)",
      "본선 진출 우수 4팀 선발",
      "결과 발표 : 예선 종료 후 개별 안내",
    ],
  },
  {
    num: "3",
    title: "본선 (6/03)",
    items: [
      "일정 : 2026/6/3",
      "최종 완성된 서비스 발표",
      "심사위원 평가 및 시상 진행",
      "최종 우수 2팀 선발 — 일본 도쿄 견학 부상 수여",
    ],
  },
  {
    num: "!",
    title: "심사 기준",
    items: [
      "Prompt / Spec Quality (30%) : KIRO를 논리적으로 가이드하여 완성도 높은 명세를 뽑아내었는가?",
      "Agentic Thinking (30%) : 스스로 과업을 수행하는 Agent 성격이 서비스에 묻어나는가?",
      "Campus Impact (20%) : 대학 생활의 문제를 얼마나 창의적이고 실용적으로 해결했는가?",
      "Completeness (20%) : 실제 인프라에 배포 및 동작 가능한 수준으로 완성했는가?",
    ],
  },
];


export default function Judging() {
  const [open, setOpen] = useState(false);

  return (
    <section id="judging" className="bg-black py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">진행방식 및 심사기준</h2>
        <button
          onClick={() => setOpen(true)}
          className="inline-block px-8 py-3.5 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-colors cursor-pointer duration-200"
        >
          진행방식 및 심사기준 보기
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 그라디언트 헤더 */}
            <div className="flex items-center justify-between px-8 py-5 bg-gradient-to-r from-indigo-600 to-purple-500">
              <h3 className="text-xl font-extrabold text-white">진행방식 및 심사기준</h3>
              <button
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-white text-2xl leading-none"
              >
                ✕
              </button>
            </div>

            {/* 본문 */}
            <div className="px-8 py-6 space-y-0 divide-y divide-gray-100">
              {modalSections.map((section) => (
                <div key={section.title} className="py-6 flex gap-5 items-start">
                  {/* 번호 뱃지 */}
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white text-sm font-extrabold flex items-center justify-center shrink-0 mt-0.5">
                    {section.num}
                  </div>
                  {/* 내용 */}
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 mb-2">{section.title}</p>
                    <ul className="space-y-1">
                      {section.items.map((item, i) => (
                        <li key={i} className="text-sm text-gray-600">- {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
