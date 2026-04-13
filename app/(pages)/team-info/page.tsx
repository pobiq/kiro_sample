"use client";

import { useState } from "react";
import Header from "../../components/Header";

type Team = {
  id: number;
  name: string;
  current: number;
  max: number;
  idea: string;
};

const SAMPLE_TEAMS: Team[] = [
  {
    id: 1,
    name: "Kiro Pioneers",
    current: 5,
    max: 5,
    idea: "AWS Kiro를 활용한 캠퍼스 강의실 실시간 예약 시스템",
  },
  {
    id: 2,
    name: "CloudCraft",
    current: 5,
    max: 5,
    idea: "AI 기반 대학생 학습 플래너 및 멘토 매칭 플랫폼",
  },
  {
    id: 3,
    name: "SpecMasters",
    current: 5,
    max: 5,
    idea: "Kiro Spec으로 자동 생성되는 포트폴리오 빌더",
  },
  {
    id: 4,
    name: "AgentFlow",
    current: 5,
    max: 5,
    idea: "캠퍼스 내 분실물 AI 매칭 서비스",
  },
];


export default function TeamBuildingPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="min-h-screen bg-[#F3F6F9] font-sans">
      <Header />

      {/* 페이지 헤더 */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="flex justify-center text-4xl font-extrabold text-black mb-2">팀 정보</h1>

        {/* 팀 목록 */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded">팀 목록</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SAMPLE_TEAMS.map((team) => (
              <div key={team.id} className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col gap-4 hover:border-purple-300 hover:shadow-sm transition-all">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-base font-extrabold text-black">{team.name}</h3>
                  </div>
                </div>

                <p className="text-sm text-[#333] leading-relaxed">{team.idea}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    <span className="text-xs font-bold text-purple-700">{team.current} / {team.max}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 팀 참가 모달 */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-extrabold text-black">팀 참가 안내</h2>
              <button onClick={() => setShowModal(false)} className="text-[#777A83] hover:text-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
            <p className="text-sm text-[#555] leading-relaxed">
              팀 참가 신청은 <span className="font-bold text-purple-700">참가 신청 폼</span>을 통해 진행됩니다.<br/>
              원하는 팀의 팀장에게 직접 연락하거나, 참가 신청 후 운영진의 안내에 따라 팀을 배정받을 수 있습니다.
            </p>
            <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
              <p className="text-xs text-purple-700 font-bold mb-1">안내 사항</p>
              <ul className="text-xs text-purple-600 space-y-1">
                <li>• 팀원 모집 중인 팀에만 참가 신청이 가능합니다.</li>
                <li>• 팀 구성 요건(타 대학·비전공자 포함)을 반드시 확인하세요.</li>
                <li>• 최종 팀 구성은 운영진이 확인 후 승인합니다.</li>
              </ul>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 py-2.5 rounded-xl text-sm font-bold border border-gray-200 text-[#555] hover:bg-gray-50 transition-colors"
              >
                닫기
              </button>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSffofTbutmOmAhXuBIT-UL4z3OkB77c1__sAUcZ1Ex9fbZCuA/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-xl text-sm font-bold bg-purple-600 hover:bg-purple-700 text-white text-center transition-colors"
                onClick={() => setShowModal(false)}
              >
                참가 신청하기
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
