import { Link } from "@tanstack/react-router";

export function SiteNav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-multiply">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 lg:px-8 py-8 lg:py-10">
        <Link to="/" className="font-serif text-2xl font-bold italic tracking-tight text-ink">
          D. Jangra
        </Link>
        <div className="hidden md:flex items-center gap-10 text-[11px] font-medium uppercase tracking-[0.22em] text-ink/60">
          <a href="/#work" className="hover:text-ink transition-opacity">Work</a>
          <a href="/#about" className="hover:text-ink transition-opacity">About</a>
          <a href="/#journey" className="hover:text-ink transition-opacity">Journey</a>
          <a href="/#contact" className="hover:text-ink transition-opacity">Contact</a>
        </div>
        <a
          href="mailto:jdishu992@gmail.com"
          className="md:hidden text-[11px] uppercase tracking-[0.22em] text-ink/70"
        >
          Say hi
        </a>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t hairline">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[10px] uppercase tracking-[0.22em] text-ink/40">
        <div>© 2025 Diksha Jangra | Built with care in Abohar, India</div>
        <div className="flex gap-8 font-medium">
          <a href="https://www.linkedin.com/in/dikshajangra1/" target="_blank" rel="noreferrer" className="hover:text-ink">LinkedIn</a>
          <a href="https://www.behance.net/dikshajangra8" target="_blank" rel="noreferrer" className="hover:text-ink">Behance</a>
          <a href="https://dribbble.com/Diksha_Jangra" target="_blank" rel="noreferrer" className="hover:text-ink">Dribbble</a>
          <a href="https://medium.com/@DikshaJangra" target="_blank" rel="noreferrer" className="hover:text-ink">Medium</a>
        </div>
      </div>
    </footer>
  );
}

/** Hand-drawn underline accent SVG */
export function ScribbleArrow({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 50" fill="none" stroke="currentColor">
      <path d="M2 8 Q 50 -2 60 38" strokeWidth="1.5" className="scribble-path" />
      <path d="M55 33 L 60 40 L 66 33" strokeWidth="1.5" />
    </svg>
  );
}
