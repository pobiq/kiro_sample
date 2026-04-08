"use client";

import { useState } from "react";
import Header from "../../components/Header";

type TimelineItem = { time: string; session: string; desc: string };
type BulletItem = { icon: string; session: string; desc: string };
type Section =
  | { type: "timeline"; num: string; badge: string; title: string; sub: string; items: TimelineItem[] }
  | { type: "bullet"; num: string; badge: string; title: string; sub: string; items: BulletItem[] };

const sections: Section[] = [
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
    title: "본선 및 시상식",
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
  { pct: "30%", title: "Agentic Thinking", desc: "스스로 과업을 수행하는 Agent 성격이 서비스에 묻어나는가?", color: "border-blue-500" },
  { pct: "20%", title: "Campus Impact", desc: "대학 생활의 문제를 얼마나 창의적이고 실용적으로 해결했는가?", color: "border-emerald-500" },
  { pct: "20%", title: "Completeness", desc: "실제 인프라에 배포 및 동작 가능한 수준으로 완성했는가?", color: "border-orange-500" },
];

export default function SchedulePage() {
  const [selected, setSelected] = useState(0);
  const section = sections[selected];

  return (
    <main className="min-h-screen bg-black font-sans">
      <Header />

      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="flex justify-center text-4xl font-bold text-white mb-2">주요 일정</h1>
        <p className="flex justify-center text-[#999] text-xl mb-12">KIROTHON 주요 일정 및 세부 진행 방식</p>

        <div className="flex gap-8 items-start">
          {/* 왼쪽: 일정 목록 */}
          <div className="flex flex-col gap-0 w-56 shrink-0">
            {sections.map((s, i) => (
              <div key={s.title} className="flex gap-3">
                {/* 번호 + 라인 */}
                <div className="flex flex-col items-center">
                  <button
                    onClick={() => setSelected(i)}
                    className={`w-9 h-9 rounded-full text-lg font-extrabold shrink-0 flex items-center justify-center leading-none transition-colors ${
                      selected === i
                        ? "bg-purple-600 text-white"
                        : "bg-white/10 text-white/50 hover:bg-white/20"
                    }`}
                  >
                    {s.num}
                  </button>
                  {i < sections.length - 1 && (
                    <div className="w-0.5 h-10 bg-white/10 my-1" />
                  )}
                </div>

                {/* 텍스트 */}
                <button
                  onClick={() => setSelected(i)}
                  className="text-left pt-1.5 pb-10"
                >
                  <p className={`font-bold text-sm leading-tight transition-colors ${selected === i ? "text-purple-400" : "text-white/60 hover:text-white/90"}`}>
                    {s.title}
                  </p>
                  <p className="text-xs text-white/30 mt-0.5">{s.sub}</p>
                </button>
              </div>
            ))}
          </div>

          {/* 오른쪽: 상세 카드 */}
          <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-8">
            {/* 카드 헤더 */}
            <div className="mb-6">
              <h2 className="text-2xl font-extrabold text-white mt-3 mb-1">{section.title}</h2>
              <p className="text-sm text-[#999]">{section.sub}</p>
            </div>

            {/* 타임라인 타입 */}
            {section.type === "timeline" && (
              <div className="space-y-3">
                {(section.items as TimelineItem[]).map((item, i) => (
                  <div key={i} className="flex gap-4 items-start bg-white/5 rounded-xl px-4 py-3">
                    <span className="text-sm font-mono font-bold text-purple-400 whitespace-nowrap shrink-0 w-32 mt-0.5">
                      {item.time}
                    </span>
                    <div>
                      <span className="text-sm font-semibold text-white">{item.session}</span>
                      <p className="text-sm text-[#999] leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 불릿 타입 */}
            {section.type === "bullet" && (
              <div className="space-y-3">
                {(section.items as BulletItem[]).map((item, i) => (
                  <div key={i} className="flex gap-4 items-start bg-white/5 rounded-xl px-4 py-3">
                    <span className="text-xl shrink-0">{item.icon}</span>
                    <div>
                      <span className="text-sm font-semibold text-white">{item.session}</span>
                      <p className="text-sm text-[#999] leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 본선 아래 심사기준 */}
            {section.badge === "본선" && (
              <div className="mt-8">
                <p className="text-white font-bold text-sm mb-3">심사기준</p>
                <div className="grid grid-cols-2 gap-3">
                  {judgingCards.map((card) => (
                    <div key={card.title} className={`rounded-xl p-4 border-l-4 ${card.color} bg-white`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg font-extrabold text-gray-900">{card.pct}</span>
                        <span className="text-sm font-bold text-gray-800">{card.title}</span>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed">{card.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
