import { Link } from "@tanstack/react-router";

export function SiteNav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b hairline">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <Link to="/" className="font-serif text-xl sm:text-2xl font-bold italic tracking-tight text-ink">
          D. Jangra
        </Link>
        <div className="flex items-center gap-3.5 sm:gap-8 lg:gap-10 text-[9px] xs:text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.12em] sm:tracking-[0.22em] text-ink/70 shrink-0">
          <a href="/#work" className="hover:text-sepia transition-colors">Work</a>
          <a href="/#about" className="hover:text-sepia transition-colors">About</a>
          <a href="/#journey" className="hover:text-sepia transition-colors">Journey</a>
          <a href="/#contact" className="hover:text-sepia transition-colors">Contact</a>
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 sm:mt-24 border-t hairline">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-[0.2em] text-ink/50 text-center sm:text-left">
        <div>© 2026 Diksha Jangra | Built with care in Abohar, India</div>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 font-medium">
          <a href="https://www.linkedin.com/in/dikshajangra1/" target="_blank" rel="noreferrer" className="hover:text-sepia transition-colors">LinkedIn</a>
          <a href="https://www.behance.net/dikshajangra8" target="_blank" rel="noreferrer" className="hover:text-sepia transition-colors">Behance</a>
          <a href="https://dribbble.com/Diksha_Jangra" target="_blank" rel="noreferrer" className="hover:text-sepia transition-colors">Dribbble</a>
          <a href="https://medium.com/@DikshaJangra" target="_blank" rel="noreferrer" className="hover:text-sepia transition-colors">Medium</a>
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
