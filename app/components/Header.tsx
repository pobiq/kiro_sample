"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur border-b border-black/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/kiro-logo.svg" alt="Kiro" className="w-7 h-7 rounded-md" />
          <span className="text-base font-bold tracking-tight text-black">KIROTHON</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-black">
          <Link href="/#kiro-intro" className="relative hover:text-black transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">Kiro 란?</Link>
          <Link href="/#about" className="relative hover:text-black transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">대회 소개</Link>
          <Link href="/schedule" className="relative hover:text-black transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">주요 일정</Link>
          <Link href="/#faq" className="relative hover:text-black transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">FAQ</Link>
          
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSffofTbutmOmAhXuBIT-UL4z3OkB77c1__sAUcZ1Ex9fbZCuA/viewform?usp=publish-editor"
            target="_blank"
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-sm font-medium transition-colors">
              참가 신청
          </a>
          
        </nav>
      </div>
    </header>
  );
}
