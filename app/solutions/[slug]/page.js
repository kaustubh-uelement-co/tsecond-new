import { notFound } from "next/navigation";
import { PageHero, Section, Head, Glass, D, Mono, Btn } from "@/components/ui";
import { ProductGrid, SolutionGrid, CTA } from "@/components/bits";
import { SOLUTIONS, getSolution, bySlug } from "@/lib/data";

export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = getSolution(slug);
  if (!s) return { title: "Not found" };
  return { title: s.name, description: s.short,
           openGraph: { title: `${s.name} — Tsecond`, description: s.short } };
}

export default async function SolutionPage({ params }) {
  const { slug } = await params;
  const s = getSolution(slug);
  if (!s) notFound();

  const nodes = s.nodes.map((n) => bySlug[n]).filter(Boolean);
  const others = SOLUTIONS.filter((x) => x.slug !== slug);

  return (
    <>
      <PageHero
        crumb={{ href: "/solutions", label: "Mission Environments" }}
        n={s.n}
        label="Mission Environment"
        title={s.name}
        lede={s.short}
      >
        <div className="rv mt-8 flex flex-wrap gap-3" data-d="170">
          <Btn href="/contact">Request a briefing</Btn>
          <Btn href="/products" variant="glass">See all systems</Btn>
        </div>
      </PageHero>

      {/* problem → mechanism → outcome */}
      <Section className="py-[clamp(34px,4.4vw,70px)]">
        <div className="rv grid grid-cols-1 gap-3 lg:grid-cols-3">
          {[
            ["Failure mode", s.problem],
            ["Mechanism", s.approach],
            ["Outcome", s.outcome],
          ].map(([k, v], i) => (
            <Glass key={k} className={`rounded-2xl p-7 ${i === 2 ? "bg-white/70" : ""}`}>
              <Mono className="text-accent">{String(i + 1).padStart(2, "0")} · {k}</Mono>
              <p className={`mt-5 leading-[1.7] ${i === 2 ? "font-display text-[18px] font-semibold tracking-[-0.02em] text-ink" : "text-[14px] text-body"}`}>
                {v}
              </p>
            </Glass>
          ))}
        </div>
      </Section>

      <Section className="py-[clamp(34px,4.4vw,70px)]">
        <Head n="02" label="Capability" title="What it delivers" />
        <div className="rv grid grid-cols-1 gap-3 sm:grid-cols-2">
          {s.points.map(([t, d], i) => (
            <Glass key={t} className="flex min-h-[150px] flex-col rounded-2xl p-7">
              <Mono className="text-accent">{String(i + 1).padStart(2, "0")}</Mono>
              <D as="h3" size="sm" className="mb-2 mt-7">{t}</D>
              <p className="text-[13px] leading-[1.62] text-muted">{d}</p>
            </Glass>
          ))}
        </div>
      </Section>

      <Section className="py-[clamp(34px,4.4vw,70px)]">
        <Head n="03" label="Built with" title="Systems for this environment"
              lede="These carry most deployments here. Any system in the catalogue can be configured in." />
        <ProductGrid items={nodes} cols={3} />
      </Section>

      <Section className="py-[clamp(34px,4.4vw,70px)]">
        <Head n="04" label="Other environments" title="Explore further" />
        <SolutionGrid items={others} />
      </Section>

      <CTA n="05" />
    </>
  );
}
