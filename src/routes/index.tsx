import { createFileRoute, Link } from "@tanstack/react-router";
import { caseStudies } from "@/lib/case-studies";
import { SiteNav, SiteFooter, ScribbleArrow } from "@/components/site-chrome";

export const Route = createFileRoute("/")({
  component: Index,
});

const expertiseLeft = [
  "Product Strategy",
  "Visual Identity",
  "Wireframing",
  "Prototyping",
  "Interaction Design",
  "UX Audit",
];
const expertiseRight = [
  "User Research",
  "Usability Testing",
  "Information Arch.",
  "Design Systems",
  "Responsive Design",
  "Heuristic Eval.",
];

const tools = ["Figma", "Framer", "Webflow", "Notion", "Spline", "Maze", "Hotjar", "FigJam", "Miro", "Relume"];

function Index() {
  return (
    <div className="paper relative min-h-screen bg-background text-foreground">
      <SiteNav />

      <main className="mx-auto max-w-6xl px-6 lg:px-8 pt-40 lg:pt-48 pb-16">
        {/* HERO */}
        <header className="relative grid grid-cols-12 gap-8 mb-32 lg:mb-48 drift">
          <div className="col-span-12 lg:col-span-9">
            <p className="font-hand text-2xl text-sepia mb-4 relative inline-block">
              Based in Abohar, India
              <ScribbleArrow className="absolute -right-12 top-1 w-9 h-9 text-sepia/40" />
            </p>
            <h1 className="font-serif text-[18vw] md:text-[12rem] leading-[0.84] italic tracking-tighter mb-10 text-ink">
              Diksha<br />Jangra<span className="text-sepia">.</span>
            </h1>
            <p className="max-w-2xl text-xl md:text-2xl leading-relaxed font-light text-ink/80">
              I design digital experiences where <span className="ink-underline text-ink">empathy meets precision</span>, crafting human-centric products across fintech, agritech, and healthcare for the past 1+ year at The MadBrains Technologies.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-6">
              <a
                href="#work"
                className="group inline-flex items-center gap-3 text-sm font-medium text-ink underline-soft hover:text-sepia transition-colors"
              >
                View the work
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <span className="text-ink/30">·</span>
              <a href="#contact" className="text-sm font-medium text-ink/70 hover:text-ink underline-soft">
                Let's talk
              </a>
              <span className="ml-auto inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ink/50">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Available · 2025
              </span>
            </div>
          </div>

          {/* Margin note */}
          <aside className="hidden lg:block lg:col-span-3 pt-4">
            <div className="border-l hairline pl-6">
              <p className="font-hand text-2xl text-sepia leading-snug">
                "The brief is a question. The interface is the answer that respects the user enough to be short."
              </p>
              <p className="mt-4 text-[10px] uppercase tracking-[0.22em] text-ink/40">from my notebook</p>
            </div>
          </aside>
        </header>

        {/* ABOUT */}
        <section id="about" className="mb-32 lg:mb-48 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-3">
            <h2 className="font-serif text-3xl md:text-4xl italic">About,<br />in three paragraphs.</h2>
            <p className="font-hand text-xl text-sepia mt-6">a quick hello</p>
          </div>
          <div className="col-span-12 lg:col-span-8 lg:col-start-5 space-y-6 text-lg leading-relaxed text-ink/85 font-light">
            <p>
              I'm <span className="font-serif italic text-ink text-xl">Diksha</span>, a UI/UX designer who came to design through an unusual door: a B.Sc in Computer Applications and an M.Sc in Physics. Equations taught me to respect the question before reaching for the answer. Design taught me that the answer is always a person.
            </p>
            <p>
              For the last year and a bit, I've been at <span className="text-ink font-medium">The MadBrains Technologies</span> in Abohar, owning the full design loop for products across fintech, agritech, real estate, and healthcare. From secondary research and information architecture to pixel-perfect Figma prototypes; I'd rather ship one screen I deeply understand than ten I'm guessing at.
            </p>
            <p className="font-serif italic text-xl text-ink leading-snug">
              I believe great design isn't noticed. It's simply felt, like a good chair, or a hand that catches you before you trip.
            </p>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section id="work" className="mb-32 lg:mb-48">
          <div className="flex items-baseline justify-between mb-10 border-b hairline pb-5">
            <h2 className="font-serif text-3xl md:text-5xl italic">Selected Case Studies</h2>
            <span className="font-hand text-xl text-sepia hidden md:block">eight stories of growth</span>
          </div>

          <div className="space-y-1">
            {caseStudies.map((c) => (
              <Link
                key={c.slug}
                to="/case-study/$slug"
                params={{ slug: c.slug }}
                className="group block border-b hairline py-6 md:py-8 transition-all hover:px-4 hover:bg-card/70"
              >
                <div className="grid grid-cols-12 gap-4 items-center">
                  <span className="col-span-2 md:col-span-1 text-xs opacity-40 font-medium font-serif">{c.index}</span>
                  <div className="col-span-10 md:col-span-5">
                    <h3 className="font-serif text-2xl md:text-4xl font-semibold group-hover:italic transition-all flex flex-wrap items-center gap-3">
                      {c.title}
                      {c.nda && (
                        <span className="text-[9px] font-sans font-medium uppercase tracking-[0.2em] px-2 py-1 bg-ink text-cream rounded">
                          NDA
                        </span>
                      )}
                    </h3>
                  </div>
                  <div className="hidden md:block md:col-span-4">
                    <p className="text-sm opacity-60 leading-relaxed">{c.subtitle}</p>
                  </div>
                  <div className="col-span-12 md:col-span-2 flex justify-start md:justify-end gap-2 flex-wrap">
                    {c.tags.slice(0, 1).map((t) => (
                      <span key={t} className="px-3 py-0.5 rounded-full border hairline text-[10px] uppercase tracking-[0.15em] text-ink/70">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <p className="mt-10 font-hand text-xl text-sepia text-center">
            (psst, click any title for the full story)
          </p>
        </section>

        {/* EXPERTISE + JOURNEY */}
        <section id="journey" className="grid grid-cols-12 gap-12 lg:gap-16 mb-32 lg:mb-40">
          <div className="col-span-12 md:col-span-6">
            <h2 className="font-serif text-3xl md:text-4xl italic mb-10 border-b hairline pb-4">Expertise</h2>
            <div className="grid grid-cols-2 gap-y-3 gap-x-6">
              <ul className="space-y-2 text-base text-ink/85">
                {expertiseLeft.map((e) => <li key={e}>{e}</li>)}
              </ul>
              <ul className="space-y-2 text-base text-ink/85">
                {expertiseRight.map((e) => <li key={e}>{e}</li>)}
              </ul>
            </div>
            <div className="mt-12">
              <p className="font-hand text-xl text-sepia leading-snug">
                Tools I use to think:
              </p>
              <div className="mt-3 flex flex-wrap gap-x-3 gap-y-2 text-xs uppercase tracking-[0.2em] text-ink/60">
                {tools.map((t, i) => (
                  <span key={t}>
                    {t}{i < tools.length - 1 && <span className="ml-3 text-ink/20">·</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6">
            <h2 className="font-serif text-3xl md:text-4xl italic mb-10 border-b hairline pb-4">Journey</h2>

            <div className="space-y-10">
              <div className="relative">
                <p className="text-[10px] uppercase tracking-[0.22em] opacity-40 mb-2">Sept 2024 - Present</p>
                <h4 className="font-serif text-2xl">The MadBrains Technologies</h4>
                <p className="text-sm opacity-60">UI/UX Designer · Abohar, India</p>
                <p className="mt-4 text-base leading-relaxed font-light text-ink/80 max-w-md">
                  Leading end-to-end design across fintech, agritech, real estate, and healthcare verticals, bridging business goals and user needs from research to handoff.
                </p>
                <div className="absolute -right-2 top-0 hidden lg:block rotate-[8deg]">
                  <p className="font-hand text-sepia text-lg underline decoration-dotted underline-offset-4">
                    currently here ✦
                  </p>
                </div>
              </div>

              <div className="border-t hairline pt-8">
                <p className="text-[10px] uppercase tracking-[0.22em] opacity-40 mb-2">Jan 2024</p>
                <h4 className="font-serif text-2xl">Freelance</h4>
                <p className="text-sm opacity-60">UI/UX Designer · Remote</p>
                <p className="mt-4 text-base leading-relaxed font-light text-ink/80 max-w-md">
                  Taking on independent design projects across web and mobile, from brand-aligned landing pages to full product flows. A parallel practice that keeps my craft sharp and my perspective wide.
                </p>
              </div>

              <div className="border-t hairline pt-8">
                <p className="text-[10px] uppercase tracking-[0.22em] opacity-40 mb-2">Education</p>
                <h4 className="font-serif text-2xl">M.Sc Physics</h4>
                <p className="text-sm opacity-60">Analytical rigour, systems thinking, the patience for hard problems.</p>
              </div>

              <div className="border-t hairline pt-8">
                <p className="text-[10px] uppercase tracking-[0.22em] opacity-40 mb-2">Education</p>
                <h4 className="font-serif text-2xl">B.Sc Computer Applications</h4>
                <p className="text-sm opacity-60">Foundation in software systems: empathy for the engineers I design with.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SMALL STATS RIBBON */}
        <section className="mb-32 lg:mb-40 grid grid-cols-2 md:grid-cols-4 gap-6 border-y hairline py-10">
          <Stat n="8" label="Projects designed" />
          <Stat n="1+ yr" label="Industry experience" />
          <Stat n="3" label="Case studies published" />
          <Stat n="∞" label="Curiosity & drive" />
        </section>

        {/* CONTACT */}
        <section id="contact" className="text-center">
          <p className="font-hand text-3xl text-sepia mb-6">Let's start a conversation</p>
          <a
            href="mailto:jdishu992@gmail.com"
            className="block font-serif text-4xl md:text-7xl lg:text-8xl italic text-ink hover:text-sepia transition-colors decoration-1 underline-offset-[14px] underline decoration-ink/20 break-all"
          >
            jdishu992@gmail.com
          </a>
          <p className="mt-10 text-base text-ink/60 max-w-xl mx-auto font-light">
            I turn ideas into experiences that make people smile. If you're building something kind, ambitious, or unreasonable, drop me a line.
          </p>

          <div className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-4 text-[11px] uppercase tracking-[0.22em] font-medium text-ink/60">
            <a href="https://www.linkedin.com/in/dikshajangra1/" target="_blank" rel="noreferrer" className="hover:text-ink">LinkedIn ↗</a>
            <a href="https://www.behance.net/dikshajangra8" target="_blank" rel="noreferrer" className="hover:text-ink">Behance ↗</a>
            <a href="https://dribbble.com/Diksha_Jangra" target="_blank" rel="noreferrer" className="hover:text-ink">Dribbble ↗</a>
            <a href="https://medium.com/@DikshaJangra" target="_blank" rel="noreferrer" className="hover:text-ink">Medium ↗</a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-4xl md:text-5xl italic text-ink">{n}</div>
      <div className="mt-2 text-[10px] uppercase tracking-[0.22em] text-ink/50">{label}</div>
    </div>
  );
}
