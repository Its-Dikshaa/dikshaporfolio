import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { caseStudies, getCaseStudy, type CaseStudy } from "@/lib/case-studies";
import { SiteNav, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/case-study/$slug")({
  component: CaseStudyPage,
  loader: ({ params }): CaseStudy => {
    const cs = getCaseStudy(params.slug);
    if (!cs) throw notFound();
    return cs;
  },
});

function CaseStudyPage() {
  const cs = Route.useLoaderData() as CaseStudy;
  const idx = caseStudies.findIndex((c) => c.slug === cs.slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <div className="paper relative min-h-screen bg-background text-foreground">
      <SiteNav />

      <main className="mx-auto max-w-6xl px-6 lg:px-8 pt-36 lg:pt-44 pb-16">
        <Link to="/" className="text-[11px] uppercase tracking-[0.22em] text-ink/60 hover:text-ink inline-flex items-center gap-2">
          ← Back to the index
        </Link>

        {/* HERO */}
        <header className="mt-12 grid grid-cols-12 gap-8 mb-24 drift">
          <div className="col-span-12 lg:col-span-9">
            <p className="font-hand text-2xl text-sepia mb-4">
              Case Study · {cs.index}
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl italic leading-[0.92] tracking-tight text-ink">
              {cs.title}
              {cs.nda && (
                <span className="ml-4 align-middle text-xs font-sans not-italic font-medium uppercase tracking-[0.22em] px-3 py-1.5 bg-ink text-cream rounded">
                  Under NDA
                </span>
              )}
            </h1>
            <p className="mt-8 text-xl md:text-2xl leading-relaxed font-light text-ink/80 max-w-3xl">
              {cs.hero.summary}
            </p>
          </div>
          <aside className="hidden lg:block lg:col-span-3 pt-6">
            <div className="border-l hairline pl-6 space-y-5 text-sm">
              <Meta label="Role" value={cs.role} />
              <Meta label="Duration" value={cs.duration} />
              <Meta label="Team" value={cs.team} />
              <Meta label="Year" value={cs.year} />
              <Meta label="Platform" value={cs.platform} />
            </div>
          </aside>
        </header>

        {/* META on mobile */}
        <section className="lg:hidden grid grid-cols-2 gap-6 mb-16 border-y hairline py-6 text-sm">
          <Meta label="Role" value={cs.role} />
          <Meta label="Duration" value={cs.duration} />
          <Meta label="Team" value={cs.team} />
          <Meta label="Year" value={cs.year} />
        </section>

        {/* CONTEXT */}
        <Chapter num="01" title="The context" hand="setting the scene">
          <p className="text-lg md:text-xl leading-relaxed text-ink/85 font-light max-w-3xl">
            {cs.context}
          </p>
        </Chapter>

        {/* PROBLEM */}
        <Chapter num="02" title="The problem" hand="what we were really asked">
          <blockquote className="border-l-2 border-sepia pl-6 py-1 max-w-3xl">
            <p className="font-serif text-2xl md:text-3xl italic text-ink leading-snug">
              "{cs.problem}"
            </p>
          </blockquote>
          <div className="mt-10">
            <p className="text-[10px] uppercase tracking-[0.22em] text-ink/50 mb-4">Goals</p>
            <ul className="space-y-3 max-w-3xl">
              {cs.goals.map((g, i) => (
                <li key={i} className="flex gap-5 text-lg text-ink/85">
                  <span className="font-serif italic text-sepia text-xl shrink-0 w-7">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-light">{g}</span>
                </li>
              ))}
            </ul>
          </div>
        </Chapter>

        {/* RESEARCH */}
        <Chapter num="03" title="The research" hand="listening before drawing">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {cs.research.map((r, i) => (
              <article key={i} className="bg-card border hairline rounded-lg p-6">
                <p className="text-[10px] uppercase tracking-[0.22em] text-sepia mb-3">{r.method}</p>
                <p className="font-serif text-xl italic text-ink leading-snug">"{r.insight}"</p>
              </article>
            ))}
          </div>
        </Chapter>

        {/* PERSONAS */}
        <Chapter num="04" title="Who we built for" hand="real people, not avatars">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {cs.personas.map((p, i) => (
              <article key={i} className="border hairline rounded-lg p-7 bg-card/60">
                <div className="flex items-center gap-4 mb-5">
                  <div className="h-12 w-12 rounded-full bg-blush flex items-center justify-center font-serif italic text-xl text-ink">
                    {p.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-serif text-xl text-ink">{p.name}</div>
                    <div className="text-xs text-ink/60">{p.role}</div>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <p>
                    <span className="text-sepia uppercase tracking-[0.18em] text-[10px] mr-2 font-medium">Need</span>
                    <span className="text-ink/85">{p.need}</span>
                  </p>
                  <p>
                    <span className="text-sepia uppercase tracking-[0.18em] text-[10px] mr-2 font-medium">Pain</span>
                    <span className="text-ink/85">{p.pain}</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Chapter>

        {/* IA */}
        {cs.ia && (
          <Chapter num="05" title="Information architecture" hand="the bones of the thing">
            <div className="border hairline rounded-lg p-7 bg-card overflow-x-auto max-w-4xl">
              <p className="font-serif text-xl md:text-2xl leading-loose text-ink whitespace-nowrap md:whitespace-normal">
                {cs.ia.split("→").map((node, i, arr) => (
                  <span key={i}>
                    <span>{node.trim()}</span>
                    {i < arr.length - 1 && <span className="text-sepia mx-3 font-hand text-2xl">→</span>}
                  </span>
                ))}
              </p>
            </div>
          </Chapter>
        )}

        {/* DECISIONS */}
        <Chapter num={cs.ia ? "06" : "05"} title="Key decisions" hand="the forks in the road">
          <div className="space-y-px max-w-4xl bg-border/40 border hairline rounded-lg overflow-hidden">
            {cs.decisions.map((d, i) => (
              <article key={i} className="bg-card p-7 md:p-8 hover:bg-secondary/60 transition-colors">
                <div className="flex items-baseline gap-6">
                  <span className="font-serif italic text-2xl text-sepia w-10 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl md:text-3xl text-ink mb-3">{d.title}</h3>
                    <p className="text-ink/75 leading-relaxed text-base md:text-lg font-light max-w-3xl">{d.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Chapter>

        {/* OUTCOMES */}
        <Chapter num={cs.ia ? "07" : "06"} title="What changed" hand="the numbers that matter">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
            {cs.outcomes.map((o, i) => (
              <div key={i} className="border hairline rounded-lg p-7 bg-card">
                <div className="font-serif text-5xl md:text-6xl italic text-ink leading-none">{o.metric}</div>
                <div className="mt-4 text-sm text-ink/65 leading-relaxed">{o.label}</div>
              </div>
            ))}
          </div>
        </Chapter>

        {/* REFLECTION */}
        <Chapter num={cs.ia ? "08" : "07"} title="A reflection" hand="what I'd carry forward">
          <p className="font-serif text-3xl md:text-4xl italic text-ink leading-snug max-w-3xl">
            "{cs.reflection}"
          </p>
          <p className="mt-6 font-hand text-xl text-sepia">Diksha</p>
        </Chapter>

        {/* NEXT */}
        <section className="mt-24 border-t hairline pt-12">
          <p className="text-[10px] uppercase tracking-[0.22em] text-ink/50 mb-4">Read next</p>
          <Link
            to="/case-study/$slug"
            params={{ slug: next.slug }}
            className="group flex items-end justify-between gap-6 py-6 border-b hairline"
          >
            <div>
              <p className="font-hand text-xl text-sepia">case study {next.index}</p>
              <h3 className="mt-1 font-serif text-4xl md:text-6xl italic text-ink group-hover:text-sepia transition-colors">
                {next.title}
              </h3>
              <p className="mt-2 text-ink/65 max-w-xl">{next.subtitle}</p>
            </div>
            <span className="font-serif text-4xl text-sepia group-hover:translate-x-2 transition-transform">→</span>
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] uppercase tracking-[0.22em] text-ink/45">{label}</dt>
      <dd className="mt-1 text-ink/90">{value}</dd>
    </div>
  );
}

function Chapter({
  num, title, hand, children,
}: { num: string; title: string; hand: string; children: React.ReactNode }) {
  return (
    <section className="grid grid-cols-12 gap-8 py-16 lg:py-20 border-t hairline">
      <aside className="col-span-12 lg:col-span-3 lg:sticky lg:top-28 lg:self-start">
        <p className="font-serif italic text-sepia text-lg">{num}</p>
        <h2 className="mt-2 font-serif text-3xl md:text-4xl italic text-ink leading-tight">{title}</h2>
        <p className="mt-3 font-hand text-xl text-sepia">{hand}</p>
      </aside>
      <div className="col-span-12 lg:col-span-9">{children}</div>
    </section>
  );
}
