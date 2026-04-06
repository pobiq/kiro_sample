export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-base font-bold tracking-tight text-white">KIROTHON</span>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <a href="#about" className="hover:text-white transition-colors">소개</a>
          <a href="#timeline" className="hover:text-white transition-colors">일정</a>
          <a href="#prizes" className="hover:text-white transition-colors">혜택</a>
          <a href="#judging" className="hover:text-white transition-colors">진행/심사</a>
          <a href="#FAQ" className="hover:text-white transition-colors">FAQ</a>
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
