import { notFound } from "next/navigation";
import { PageHero, Section, Head, Glass, D, Mono, Btn, Chips } from "@/components/ui";
import { ProductGrid, IndustryGrid, CTA } from "@/components/bits";
import { INDUSTRIES, getIndustry, bySlug, COMPLIANCE } from "@/lib/data";

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const it = getIndustry(slug);
  if (!it) return { title: "Not found" };
  return { title: it.name, description: it.short,
           openGraph: { title: `${it.name} — Tsecond`, description: it.short } };
}

export default async function IndustryPage({ params }) {
  const { slug } = await params;
  const it = getIndustry(slug);
  if (!it) notFound();

  const nodes = it.nodes.map((n) => bySlug[n]).filter(Boolean);
  const others = INDUSTRIES.filter((x) => x.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        crumb={{ href: "/industries", label: "Industries" }}
        n={it.n}
        label="Sector"
        title={it.name}
        lede={it.short}
      >
        <div className="rv mt-8 flex flex-wrap gap-3" data-d="170">
          <Btn href="/contact">Request a briefing</Btn>
          <Btn href="/products" variant="glass">See all systems</Btn>
        </div>
      </PageHero>

      <Section className="py-[clamp(34px,4.4vw,70px)]">
        <div className="rv grid grid-cols-1 gap-3 lg:grid-cols-3">
          {[
            ["Constraint", it.constraint],
            ["Mechanism", it.mechanism],
            ["Outcome", it.outcome],
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
        <Head n="02" label="Deployment" title="Where it is fielded"
              lede="Drawn from programme patterns in this sector. Your mission profile determines the configuration." />
        <div className="rv grid grid-cols-1 gap-3 sm:grid-cols-2">
          {it.cases.map(([t, d], i) => (
            <Glass key={t} className="flex min-h-[150px] flex-col rounded-2xl p-7">
              <Mono className="text-accent">{String(i + 1).padStart(2, "0")}</Mono>
              <D as="h3" size="sm" className="mb-2 mt-7">{t}</D>
              <p className="text-[13px] leading-[1.62] text-muted">{d}</p>
            </Glass>
          ))}
        </div>
      </Section>

      <Section className="py-[clamp(34px,4.4vw,70px)]">
        <Head n="03" label="Built with" title="Systems for this sector" />
        <ProductGrid items={nodes} cols={3} />
      </Section>

      <Section className="py-[clamp(34px,4.4vw,70px)]">
        <Head n="04" label="Assurance" title="Compliance posture" />
        <Chips items={COMPLIANCE} />
      </Section>

      <Section className="py-[clamp(34px,4.4vw,70px)]">
        <Head n="05" label="Other sectors" title="Same constraint elsewhere" />
        <IndustryGrid items={others} />
      </Section>

      <CTA n="06" />
    </>
  );
}
