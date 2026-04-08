"use client";

import { useState } from "react";
import Header from "../../components/Header";

const phases = [
  {
    num: "1",
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
    num: "2",
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
    num: "3",
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
];

export default function Preeducation() {
  const [selected, setSelected] = useState(0);
  const phase = phases[selected];

  return (
    <main className="min-h-screen bg-black font-sans">
      <Header />

      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="flex justify-center text-4xl font-bold text-white mb-2">사전 기술 교육</h1>
        <p className="flex justify-center text-[#999] text-xl mb-12">대회 1주일 전부터 체계적인 온라인 사전 교육과 환경 세팅을 지원합니다</p>

        <div className="flex gap-8 items-start">
          {/* 왼쪽: 단계 목록 */}
          <div className="flex flex-col gap-0 w-56 shrink-0">
            {phases.map((p, i) => (
              <div key={p.title} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <button
                    onClick={() => setSelected(i)}
                    className={`w-9 h-9 rounded-full text-lg font-extrabold shrink-0 flex items-center justify-center leading-none transition-colors ${
                      selected === i
                        ? "bg-purple-600 text-white"
                        : "bg-white/10 text-white/50 hover:bg-white/20"
                    }`}
                  >
                    {p.num}
                  </button>
                  {i < phases.length - 1 && (
                    <div className="w-0.5 h-10 bg-white/10 my-1" />
                  )}
                </div>

                <button onClick={() => setSelected(i)} className="text-left pt-1.5 pb-10">
                  <p className={`font-bold text-sm leading-tight transition-colors ${selected === i ? "text-purple-400" : "text-white/60 hover:text-white/90"}`}>
                    {p.title}
                  </p>
                  <p className="text-xs text-white/30 mt-0.5">{p.sub}</p>
                </button>
              </div>
            ))}
          </div>

          {/* 오른쪽: 상세 카드 */}
          <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="mb-6">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-900 text-purple-300">
                {phase.badge}
              </span>
              <h2 className="text-2xl font-extrabold text-white mt-3 mb-1">{phase.title}</h2>
              <p className="text-sm text-[#999]">{phase.sub}</p>
            </div>

            <div className="space-y-3">
              {phase.items.map((item, i) => (
                <div key={i} className="flex gap-3 items-start bg-white/5 rounded-xl px-4 py-3">
                  <span className="text-purple-400 font-bold shrink-0 mt-0.5">✓</span>
                  <p className="text-sm text-white/80 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
