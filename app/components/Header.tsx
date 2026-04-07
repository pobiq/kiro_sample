export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-base font-bold tracking-tight text-white">KIROTHON</span>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white">
          <a href="#about" className="relative hover:text-white transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">소개</a>
          <a href="#timeline" className="relative hover:text-white transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">일정</a>
          <a href="#prizes" className="relative hover:text-white transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">혜택</a>
          <a href="#judging" className="relative hover:text-white transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">진행/심사</a>
          <a href="#FAQ" className="relative hover:text-white transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">FAQ</a>
          <a
            href="#"
            className="px-4 py-2 bg-indigo-900 hover:bg-indigo-600 text-white rounded-full text-sm font-medium transition-colors"
          >
            참가 신청
          </a>
        </nav>
      </div>
    </header>
  );
}
