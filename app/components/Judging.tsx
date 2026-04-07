"use client";

import { useState } from "react";

type TimelineItem = { time: string; session: string; desc: string };
type BulletItem = { icon: string; session: string; desc: string };
type Section =
  | { type: "timeline"; num: string; badge: string; title: string; sub: string; items: TimelineItem[] }
  | { type: "bullet"; num: string; badge: string; title: string; sub: string; items: BulletItem[] };

const modalSections: Section[] = [
  {
    type: "timeline",
    num: "1",
    badge: "DAY 1",
    title: "예선 1일차",
    sub: "5/15 (금) · 기획 및 AI 협업 개발",
    items: [
      { time: "10:00–10:30", session: "Check-in & Setup", desc: "참가자 등록 및 AWS Kiro IDE 설치/환경 세팅 확인" },
      { time: "10:30–12:30", session: "KIRO Master Class", desc: "[특강] KIRO로 30분 만에 MVP 뽑아내기 실습" },
      { time: "12:30–14:00", session: "Lunch & Team Building", desc: "점심 식사 및 팀 빌딩" },
      { time: "14:00–15:30", session: "Spec Design Session", desc: "Generate Specs 기능으로 캠퍼스 서비스 기획 및 구조화" },
      { time: "15:30–17:00", session: "Phase 1: 아이디어 빌딩", desc: "주제 선정 및 핵심 아이디어 빌딩" },
      { time: "17:00–24:00+", session: "Phase 2 & 3 (석식 포함)", desc: "Full-Stack Dev: UI 구현 및 AWS 서비스 연동 / 주제별 멘토링" },
    ],
  },
  {
    type: "timeline",
    num: "2",
    badge: "DAY 2",
    title: "예선 2일차",
    sub: "5/16 (토) · 자동화 배포 및 Kiro Demo Show",
    items: [
      { time: "09:00–13:00", session: "Debugging & Deployment", desc: "KIRO Hooks 자동 테스트 및 오류 수정, 최종 배포" },
      { time: "13:00–16:00", session: "발표 준비 (중식 포함)", desc: "최종 시연 점검 및 데모 피치 자료 준비" },
      { time: "16:00–17:30", session: "Kiro Demo Show", desc: "팀별 5분 발표: AI와 협업 개발 과정 시연 및 Q&A" },
      { time: "17:30–18:00", session: "Award & Closing", desc: "예선 결과 발표, 본선 진출 우수 4팀 선발" },
    ],
  },
  {
    type: "bullet",
    num: "3",
    badge: "5/17–31",
    title: "프로젝트 고도화",
    sub: "본선 진출 4팀 2주 밀착 멘토링",
    items: [
      { icon: "🤖", session: "AI 활용 비법 전수", desc: "AI에게 더 정확한 답변을 끌어내는 방법을 프롬프트 엔지니어가 원격 지도" },
      { icon: "🎨", session: "서비스 퀄리티 향상", desc: "부족했던 화면(UI)을 다듬고 핵심 기능 추가 구현" },
      { icon: "📄", session: "실전 스펙 완성", desc: "이력서(포트폴리오)에 바로 쓸 수 있는 완벽한 서비스로 발전" },
    ],
  },
  {
    type: "timeline",
    num: "4",
    badge: "본선",
    title: "피칭 및 시상식",
    sub: "6/03 (수)",
    items: [
      { time: "13:30–14:00", session: "행사장 집결", desc: "본선 발표 자료/화면 최종 점검" },
      { time: "14:00–15:00", session: "팀별 최종 발표", desc: "10분 발표 + 5분 심사위원 질문" },
      { time: "15:00–15:30", session: "심사 및 네트워킹", desc: "심사위원단 점수 합산 및 참가자 휴식/네트워킹" },
      { time: "15:30–16:00", session: "시상식", desc: "최종 2팀 글로벌 연수 선정 및 폐회" },
    ],
  },
];

const judgingCards = [
  { pct: "30%", title: "Prompt / Spec Quality", desc: "KIRO를 논리적으로 가이드하여 완성도 높은 명세를 뽑아내었는가?", color: "border-purple-500" },
  { pct: "30%", title: "Agentic Thinking", desc: "스스로 과업을 수행하는 Agent 성격이 서비스에 묻어나는가?", color: "border-purple-500" },
  { pct: "20%", title: "Campus Impact", desc: "대학 생활의 문제를 얼마나 창의적이고 실용적으로 해결했는가?", color: "border-purple-500" },
  { pct: "20%", title: "Completeness", desc: "실제 인프라에 배포 및 동작 가능한 수준으로 완성했는가?", color: "border-purple-500" },
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
            <div className="flex items-center justify-between px-8 py-5 bg-gradient-to-r from-purple-600 to-purple-500">
              <h3 className="text-xl font-extrabold text-white">진행방식 및 심사기준</h3>
              <button
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-white text-2xl leading-none cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* 본문 */}
            <div className="px-8 py-6 divide-y divide-gray-100">
              {modalSections.map((section) => (
                <div key={section.title} className="py-6">
                  {/* 섹션 헤더 */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-purple-100 text-purple-700 shrink-0">
                      {section.badge}
                    </span>
                    <div>
                      <p className="font-extrabold text-gray-900 leading-tight">{section.title}</p>
                      <p className="text-xs text-[#999]">{section.sub}</p>
                    </div>
                  </div>

                  {/* 타임라인 타입 */}
                  {section.type === "timeline" && (
                    <div className="space-y-2">
                      {(section.items as TimelineItem[]).map((item, i) => (
                        <div key={i} className="flex gap-3 items-start">
                          <span className="text-xs font-mono font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded whitespace-nowrap shrink-0 mt-0.5">
                            {item.time}
                          </span>
                          <div>
                            <span className="text-sm font-semibold text-gray-800">{item.session}</span>
                            <p className="text-xs text-[#999] leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* 불릿 타입 */}
                  {section.type === "bullet" && (
                    <div className="space-y-3">
                      {(section.items as BulletItem[]).map((item, i) => (
                        <div key={i} className="flex gap-3 items-start bg-purple-50 rounded-xl p-3">
                          <span className="text-xl shrink-0">{item.icon}</span>
                          <div>
                            <span className="text-sm font-semibold text-gray-800">{item.session}</span>
                            <p className="text-xs text-[#999] leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* 심사 기준 카드 2x2 */}
              <div className="py-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-500 text-white text-sm font-extrabold flex items-center justify-center shrink-0">
                    !
                  </div>
                  <p className="font-bold text-black">심사 기준</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {judgingCards.map((card) => (
                    <div key={card.title} className={`rounded-xl p-4 border-l-4 ${card.color} bg-gray-50`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg font-extrabold text-gray-900">{card.pct}</span>
                        <span className="text-sm font-bold text-gray-800">{card.title}</span>
                      </div>
                      <p className="text-xs text-[#999] leading-relaxed">{card.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
