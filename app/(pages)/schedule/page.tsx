"use client";

import React, { useState } from "react";
import Header from "../../components/Header";

type TimelineItem = { time: string; session: string; desc: string };
type BulletItem = { icon: React.ReactNode; session: string; desc: string };
type PhaseItem = { badge: string; title: string; sub: string; items: string[] };
type Section =
  | { type: "phases"; num: string; badge: string; title: string; sub: string; phases: PhaseItem[] }
  | { type: "timeline"; num: string; badge: string; title: string; sub: string; days: { badge: string; title: string; sub: string; items: TimelineItem[] }[] }
  | { type: "bullet"; num: string; badge: string; title: string; sub: string; items: BulletItem[] }
  | { type: "timeline-single"; num: string; badge: string; title: string; sub: string; items: TimelineItem[] };

const sections: Section[] = [
  {
    type: "phases",
    num: "1",
    badge: "대회 7일 전",
    title: "사전 기술 교육",
    sub: "대회 1주일 전 온라인 사전 교육",
    phases: [
      {
        badge: "Phase 1 (D-7)",
        title: "사전 온라인 교육 자료 배포",
        sub: "대회 7일 전",
        items: [
          "AWS Kiro 설치 가이드 및 환경 세팅 매뉴얼 배포",
          "코딩 초보자를 위한 '바이브 코딩' 기본 개념 안내",
          "사전 과제: 'Hello Kiro!' 실행해보기 미션 부여",
          "PDF 가이드북 및 5분 내외의 짧은 튜토리얼 영상 링크 제공",
        ],
      },
      {
        badge: "Phase 2 (D-6 ~ D-1)",
        title: "온라인 기술 질의응답 운영",
        sub: "대회 6일 전 ~ 전날",
        items: [
          "전 참가자 대상 대회 전용 Slack 워크스페이스 초대",
          "강사 및 멘토진이 상주하는 기술 질의 채널(Q&A) 오픈",
          "사전 과제 수행 중 발생하는 각종 설치 에러 실시간 해결",
          "비전공자도 포기하지 않도록 1:1 원격 트러블슈팅 지원",
        ],
      },
      {
        badge: "Phase 3 (D-1)",
        title: "최종 리마인드 및 환경 점검",
        sub: "대회 전날",
        items: [
          "개인별 Kiro IDE 설치 및 AWS 계정 연동 최종 확인",
          "본 행사 필수 준비물 안내 (개인 노트북, 충전기 등)",
          "행사 장소 및 집결 시간 재공지",
          "노쇼(No-show) 방지를 위한 최종 참가 의사 확인",
        ],
      },
    ],
  },
  {
    type: "timeline",
    num: "2",
    badge: "5/22(금) – 5/23(토)",
    title: "KIROTHON 예선",
    sub: "5/22(금) – 5/23(토) · 1박 2일 몰입 개발",
    days: [
      {
        badge: "DAY 1",
        title: "예선 1일차",
        sub: "5/22 (금) · 기획 및 AI 협업 개발",
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
        badge: "DAY 2",
        title: "예선 2일차",
        sub: "5/23 (토) · 자동화 배포 및 Kiro Demo Show",
        items: [
          { time: "09:00–13:00", session: "Debugging & Deployment", desc: "KIRO Hooks 자동 테스트 및 오류 수정, 최종 배포" },
          { time: "13:00–16:00", session: "발표 준비 (중식 포함)", desc: "최종 시연 점검 및 데모 피치 자료 준비" },
          { time: "16:00–17:30", session: "Kiro Demo Show", desc: "팀별 5분 발표: AI와 협업 개발 과정 시연 및 Q&A" },
          { time: "17:30–18:00", session: "Award & Closing", desc: "예선 결과 발표, 본선 진출 우수 4팀 선발" },
        ],
      },
    ],
  },
  {
    type: "bullet",
    num: "3",
    badge: "5/24(일)–6/7(일)",
    title: "프로젝트 고도화",
    sub: "5/24(일) - 6/7(일)",
    items: [
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/>
          </svg>
        ),
        session: "AI 활용 비법 전수", desc: "AI에게 더 정확한 답변을 끌어내는 방법을 프롬프트 엔지니어가 원격 지도"
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
          </svg>
        ),
        session: "서비스 퀄리티 향상", desc: "부족했던 화면(UI)을 다듬고 핵심 기능 추가 구현"
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
          </svg>
        ),
        session: "실전 스펙 완성", desc: "이력서(포트폴리오)에 바로 쓸 수 있는 완벽한 서비스로 발전"
      },
    ],
  },
  {
    type: "timeline-single",
    num: "4",
    badge: "6/10 (수)",
    title: "본선",
    sub: "6/10 (수)",
    items: [
      { time: "13:30–14:00", session: "행사장 집결", desc: "본선 발표 자료/화면 최종 점검" },
      { time: "14:00–15:00", session: "팀별 최종 발표", desc: "10분 발표 + 5분 심사위원 질문" },
      { time: "15:00–15:30", session: "심사 및 네트워킹", desc: "심사위원단 점수 합산 및 참가자 휴식/네트워킹" },
      { time: "15:30–16:00", session: "시상식", desc: "최종 2팀 글로벌 연수 선정 및 폐회" },
    ],
  },
];

const judgingCards = [
  { pct: "30%", title: "Prompt / Spec Quality", desc: "KIRO를 논리적으로 가이드하여 완성도 높은 명세를 뽑아내었는가?", borderColor: "border-purple-500", bgColor: "bg-purple-50", pctColor: "text-purple-700", titleColor: "text-purple-900", descColor: "text-purple-600" },
  { pct: "30%", title: "Agentic Thinking", desc: "스스로 과업을 수행하는 Agent 성격이 서비스에 묻어나는가?", borderColor: "border-blue-500", bgColor: "bg-blue-50", pctColor: "text-blue-700", titleColor: "text-blue-900", descColor: "text-blue-600" },
  { pct: "20%", title: "Campus Impact", desc: "대학 생활의 문제를 얼마나 창의적이고 실용적으로 해결했는가?", borderColor: "border-emerald-500", bgColor: "bg-emerald-50", pctColor: "text-emerald-700", titleColor: "text-emerald-900", descColor: "text-emerald-600" },
  { pct: "20%", title: "Completeness", desc: "실제 인프라에 배포 및 동작 가능한 수준으로 완성했는가?", borderColor: "border-orange-500", bgColor: "bg-orange-50", pctColor: "text-orange-700", titleColor: "text-orange-900", descColor: "text-orange-600" },
];

export default function SchedulePage() {
  const [selected, setSelected] = useState(0);
  const [selectedPhase, setSelectedPhase] = useState(0);
  const [selectedDay, setSelectedDay] = useState(0);
  const section = sections[selected];

  return (
    <main className="min-h-screen bg-[#F3F6F9] font-sans">
      <Header />

      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="flex justify-center text-4xl font-extrabold text-black mb-2">주요 일정</h1>
        <p className="flex justify-center text-[#555] text-xl mb-12">KIROTHON 주요 일정 안내</p>

        <div className="flex gap-6 items-start">
          {/* 왼쪽: 일정 목록 */}
          <div className="flex flex-col gap-2 w-52 shrink-0">
            {sections.map((s, i) => (
              <button
                key={s.title}
                onClick={() => { setSelected(i); setSelectedPhase(0); setSelectedDay(0); }}
                className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl transition-all duration-150 ${
                  selected === i
                    ? "bg-purple-600 shadow-sm"
                    : "bg-white border border-gray-200 hover:border-purple-300 hover:bg-purple-50"
                }`}
              >
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold shrink-0 ${
                  selected === i
                    ? "bg-white text-purple-600"
                    : "bg-[#F3F6F9] text-black/70"
                }`}>
                  {s.num}
                </span>
                <div>
                  <p className={`font-bold text-sm leading-tight ${selected === i ? "text-white" : "text-black/80"}`}>
                    {s.title}
                  </p>
                  <p className={`text-xs mt-0.5 ${selected === i ? "text-white/70" : "text-black/50"}`}>{s.badge}</p>
                </div>
              </button>
            ))}
          </div>

          {/* 오른쪽: 상세 카드 */}
          <div className="flex-1 bg-gray-50 border border-gray-200 rounded-2xl p-8">
            {/* 사전 기술교육: Phase 탭 */}
            {section.type === "phases" && (
              <div>
                <div className="flex gap-2 mb-5">
                  {section.phases.map((p, i) => (
                    <button
                      key={p.badge}
                      onClick={() => setSelectedPhase(i)}
                      className={`px-4 py-1.5 rounded text-xs font-bold transition-colors ${
                        selectedPhase === i
                          ? "bg-purple-600 text-white"
                          : "bg-[#F3F6F9] text-black/70 hover:bg-[#e4eaf0]"
                      }`}
                    >
                      {p.badge}
                    </button>
                  ))}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-1">{section.phases[selectedPhase].title}</h3>
                  <p className="text-xs text-[#555] mb-4">{section.phases[selectedPhase].sub}</p>
                  <div className="space-y-3">
                    {section.phases[selectedPhase].items.map((item, i) => (
                      <div key={i} className="flex gap-3 items-start bg-white rounded-xl px-4 py-3 border border-gray-100">
                        <span className="text-purple-500 font-bold shrink-0 mt-0.5">✓</span>
                        <p className="text-sm text-black/90 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 예선: DAY 탭 */}
            {section.type === "timeline" && (
              <div>
                <div className="flex gap-2 mb-5">
                  {section.days.map((d, i) => (
                    <button
                      key={d.badge}
                      onClick={() => setSelectedDay(i)}
                      className={`px-4 py-1.5 rounded text-xs font-bold transition-colors ${
                        selectedDay === i
                          ? "bg-purple-600 text-white"
                          : "bg-[#F3F6F9] text-black/70 hover:bg-[#e4eaf0]"
                      }`}
                    >
                      {d.badge}
                    </button>
                  ))}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-1">{section.days[selectedDay].title}</h3>
                  <p className="text-xs text-[#555] mb-4">{section.days[selectedDay].sub}</p>
                  <div className="space-y-3">
                    {section.days[selectedDay].items.map((item, i) => (
                      <div key={i} className="flex gap-4 items-start bg-white rounded-xl px-4 py-3 border border-gray-100">
                        <span className="text-sm font-mono font-bold text-purple-500 whitespace-nowrap shrink-0 w-32 mt-0.5">
                          {item.time}
                        </span>
                        <div>
                          <span className="text-sm font-semibold text-black">{item.session}</span>
                          <p className="text-sm text-[#555] leading-relaxed mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 불릿 타입 */}
            {section.type === "bullet" && (
              <div>
                <div className="mb-5">
                  <h2 className="text-2xl font-extrabold text-black mb-1">{section.title}</h2>
                  <p className="text-sm text-[#555]">{section.sub}</p>
                </div>
                <div className="space-y-3">
                  {(section.items as BulletItem[]).map((item, i) => (
                    <div key={i} className="flex gap-4 items-start bg-white rounded-xl px-4 py-3 border border-gray-100">
                      <span className="text-xl shrink-0">{item.icon}</span>
                      <div>
                        <span className="text-sm font-semibold text-black">{item.session}</span>
                        <p className="text-sm text-[#555] leading-relaxed mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 본선 타임라인 */}
            {section.type === "timeline-single" && (
              <div>
                <div className="mb-5">
                  <h2 className="text-2xl font-extrabold text-black mb-1">{section.title}</h2>
                  <p className="text-sm text-[#555]">{section.sub}</p>
                </div>
                <div className="space-y-3">
                  {(section.items as TimelineItem[]).map((item, i) => (
                    <div key={i} className="flex gap-4 items-start bg-white rounded-xl px-4 py-3 border border-gray-100">
                      <span className="text-sm font-mono font-bold text-purple-500 whitespace-nowrap shrink-0 w-32 mt-0.5">
                        {item.time}
                      </span>
                      <div>
                        <span className="text-sm font-semibold text-black">{item.session}</span>
                        <p className="text-sm text-[#555] leading-relaxed mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <p className="text-black font-bold text-sm mb-3">심사기준</p>
                  <div className="grid grid-cols-2 gap-3">
                    {judgingCards.map((card) => (
                      <div key={card.title} className={`rounded-xl p-4 border-l-4 ${card.borderColor} ${card.bgColor}`}>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-lg font-extrabold">{card.pct}</span>
                          <span className="text-sm font-bold">{card.title}</span>
                        </div>
                        <p className="text-xs leading-relaxed text-[#555]">{card.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
