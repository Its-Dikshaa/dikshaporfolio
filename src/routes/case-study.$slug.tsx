import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { caseStudies, getCaseStudy, type CaseStudy } from "@/lib/case-studies";
import { SiteNav, SiteFooter } from "@/components/site-chrome";
import { PhoneFrame, ClosingGridShowcase, ImageWithFallback } from "@/components/screen-mockup";

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
        <header className="mt-12 grid grid-cols-12 gap-8 mb-16 drift">
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
              <Meta label="Year" value={cs.year} />
              <Meta label="Platform" value={cs.platform} />
            </div>
          </aside>
        </header>

        {/* HERO SCREEN SHOWCASE */}
        {(cs.heroImage || (cs.heroScreens && cs.heroScreens.length > 0)) && (
          <div className="mb-20 p-6 md:p-8 border hairline rounded-2xl bg-card/40 text-ink shadow-sm overflow-hidden">
            <div className="text-center mb-6">
              <span className="text-[10px] uppercase tracking-[0.22em] text-sepia font-medium">
                KEY VISUAL SURFACES
              </span>
            </div>
            {cs.heroImage ? (
              <div className="w-full flex justify-center items-center py-2">
                <ImageWithFallback
                  src={cs.heroImage}
                  alt={`${cs.title} Key Visual Surfaces`}
                  className="max-h-[520px] w-auto max-w-full object-contain mx-auto drop-shadow-xl"
                  fallback={
                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                      {cs.heroScreens?.map((s, i) => (
                        <PhoneFrame
                          key={i}
                          label={s.label}
                          title={s.title}
                          subtitle={s.subtitle}
                          variant={s.variant}
                          image={s.image}
                          accentColor={cs.hero.accent}
                        />
                      ))}
                    </div>
                  }
                />
              </div>
            ) : (
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 py-2">
                {cs.heroScreens?.map((s, i) => (
                  <PhoneFrame
                    key={i}
                    label={s.label}
                    title={s.title}
                    subtitle={s.subtitle}
                    variant={s.variant}
                    image={s.image}
                    accentColor={cs.hero.accent}
                  />
                ))}
              </div>
            )}

            {/* BOTTOM RIBBON BAR */}
            <div className="mt-6 pt-4 border-t hairline flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="font-hand text-lg md:text-xl text-sepia flex items-center gap-1.5">
                the cover, where it all begins ✦
              </span>
              <a
                href={cs.dribbbleUrl || "https://dribbble.com/Diksha_Jangra"}
                target="_blank"
                rel="noreferrer"
                className="text-[10px] uppercase tracking-[0.2em] font-medium text-ink/65 hover:text-sepia transition-colors inline-flex items-center gap-1"
              >
                CHECK THE CASE STUDY ON DRIBBBLE →
              </a>
            </div>
          </div>
        )}

        {/* META on mobile */}
        <section className="lg:hidden grid grid-cols-2 gap-6 mb-16 border-y hairline py-6 text-sm">
          <Meta label="Role" value={cs.role} />
          <Meta label="Duration" value={cs.duration} />
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
          <div className="space-y-6 max-w-4xl">
            {cs.decisions.map((d, i) => (
              <article key={i} className="bg-card p-6 md:p-8 border hairline rounded-xl hover:bg-secondary/40 transition-colors">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="font-serif italic text-2xl text-sepia">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-serif text-2xl md:text-3xl text-ink">{d.title}</h3>
                  </div>
                  <p className="text-ink/75 leading-relaxed text-base md:text-lg font-light">{d.body}</p>
                </div>
              </article>
            ))}
          </div>
        </Chapter>

        {/* OUTCOMES / THE FINAL FLOW */}
        <Chapter
          num={cs.ia ? "07" : "06"}
          title={cs.outcomeTitle || "What changed"}
          hand={cs.showClosingGrid ? "letting the screens talk" : "the numbers that matter"}
        >
          <div className="space-y-6 max-w-4xl">
            {cs.showClosingGrid ? (
              <>
                <ClosingGridShowcase images={cs.closingGridImages} />
                {cs.outcomeDescription && (
                  <p className="text-base md:text-lg leading-relaxed text-ink/85 font-light bg-card p-6 border hairline rounded-xl mt-4">
                    {cs.outcomeDescription}
                  </p>
                )}
              </>
            ) : (
              <>
                {cs.outcomeDescription && (
                  <p className="text-lg leading-relaxed text-ink/85 font-light bg-card p-6 border hairline rounded-xl">
                    {cs.outcomeDescription}
                  </p>
                )}
                {cs.outcomes && cs.outcomes.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cs.outcomes.map((o, i) => (
                      <div key={i} className="border hairline rounded-lg p-7 bg-card">
                        <div className="font-serif text-5xl md:text-6xl italic text-ink leading-none">{o.metric}</div>
                        <div className="mt-4 text-sm text-ink/65 leading-relaxed">{o.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </Chapter>

        {/* THE SCREENS (System to Shipped Showcase) */}
        <section className="mt-20 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-sepia text-lg">✦</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl italic text-ink leading-tight">
                The screens
              </h2>
              <p className="font-hand text-xl md:text-2xl text-sepia">
                - from system to shipped
              </p>
              <p className="text-base text-ink/75 font-light leading-relaxed pt-2 max-w-md">
                Pulled straight from the published case study: the visual system, the wireframes, and the application screens as they finally landed.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-3">
              <div className="aspect-[4/3] w-full border hairline rounded-2xl overflow-hidden bg-card/80 shadow-xl p-2 md:p-3">
                <ImageWithFallback
                  src={cs.screensImage || cs.heroImage || ""}
                  alt={`${cs.title} Full Screens Showcase`}
                  className="w-full h-full object-cover rounded-xl"
                  fallback={
                    <div className="w-full h-full bg-[#17171A] rounded-xl flex items-center justify-center text-sepia/70 font-hand text-xl p-8 text-center border hairline">
                      ✦ {cs.title} Screens Grid Collage ✦
                    </div>
                  }
                />
              </div>
              {cs.screensCaption && (
                <p className="font-hand text-lg text-sepia text-right pr-2">
                  {cs.screensCaption}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* REFLECTION */}
        <Chapter num={cs.ia ? "08" : "07"} title="A reflection" hand="what I'd carry forward">
          <p className="font-serif text-3xl md:text-4xl italic text-ink leading-snug max-w-3xl">
            "{cs.reflection}"
          </p>
          <p className="mt-6 font-hand text-xl text-sepia">Diksha</p>
        </Chapter>

        {/* DRIBBBLE / BEHANCE CALLOUT BANNER */}
        <section className="mt-20 border-t hairline pt-16">
          <div className="border hairline rounded-2xl bg-card/60 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
            <div className="space-y-2 max-w-xl">
              <p className="font-hand text-2xl text-sepia">the original, in full</p>
              <h3 className="font-serif text-3xl md:text-4xl italic text-ink leading-tight">
                Check the case study on Dribbble
              </h3>
              <p className="text-sm md:text-base text-ink/75 font-light leading-relaxed pt-1">
                Every frame, annotation and flow of {cs.title} — published on my Dribbble, and more work on Behance.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0 w-full md:w-auto pt-2 md:pt-0">
              <a
                href={cs.dribbbleUrl || "https://dribbble.com/Diksha_Jangra"}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-lg bg-ink text-cream text-xs uppercase tracking-[0.2em] font-medium hover:bg-sepia transition-colors inline-flex items-center gap-2"
              >
                Dribbble →
              </a>
              <a
                href={cs.behanceUrl || "https://www.behance.net/dikshajangra8"}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-lg border hairline bg-card hover:bg-secondary text-ink text-xs uppercase tracking-[0.2em] font-medium transition-colors inline-flex items-center gap-2"
              >
                Behance →
              </a>
            </div>
          </div>
        </section>

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
