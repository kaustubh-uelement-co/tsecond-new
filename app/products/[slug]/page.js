import { notFound } from "next/navigation";
import Image from "next/image";
import { PageHero, Section, Head, Glass, D, Mono, Btn, Chips, SpecList } from "@/components/ui";
import { HeroArt, ProductGrid, UsedIn, CTA } from "@/components/bits";
import ProductDatasheetAction from "@/components/ProductDatasheetAction";
import BlockDualShowcase, { BlockDualSpecs } from "@/components/BlockDualShowcase";
import { PRODUCTS, getProduct, relatedTo, catLabel, COMPLIANCE } from "@/lib/data";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return { title: "Not found" };
  return {
    title: `${p.name} — ${p.pn}`,
    description: p.tagline,
    openGraph: { title: `${p.name} — Tsecond`, description: p.tagline },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  return (
    <>
      <PageHero
        crumb={{ href: "/products", label: `Products / ${catLabel(p.cat)}` }}
        n={p.pn}
        label={catLabel(p.cat)}
        title={p.name}
        lede={p.tagline}
        meta={p.reads}
      >
        <div className="rv mt-8" data-d="170">
          <ProductDatasheetAction product={p} />
        </div>
      </PageHero>

      {/* overview + hardware showcase */}
      <Section className="py-[clamp(40px,5.5vw,90px)]">
        {p.models && p.models.length > 1 ? (
          <div>
            <div className="rv mb-10 max-w-3xl">
              <Head
                n="01"
                label="Product Overview"
                title={`${p.name} Hardware Family`}
                lede={p.summary}
                className="mb-6"
              />
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-faint">
                  Part Numbers:
                </span>
                <span className="rounded-none bg-gray-100 px-2.5 py-1 font-mono text-[11px] font-semibold text-gray-800 border border-gray-200">
                  {p.pn}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-faint ml-3">
                  Models:
                </span>
                <span className="rounded-none bg-blue-50 px-2.5 py-1 font-mono text-[11px] font-semibold text-blue-700 border border-blue-200">
                  2 Hardware Editions
                </span>
              </div>
            </div>

            <BlockDualShowcase models={p.models} />
          </div>
        ) : (
          <div className="grid items-center gap-[clamp(26px,4vw,62px)] lg:grid-cols-[1.08fr_0.92fr]">
            <div className="rv">
              <Head n="01" label="Overview" title="Why it exists" lede={p.summary} className="mb-6" />
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-faint">
                  Part Number:
                </span>
                <span className="rounded-none bg-gray-100 px-2.5 py-1 font-mono text-[11px] font-semibold text-gray-800 border border-gray-200">
                  {p.pn}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-faint ml-3">
                  Revision:
                </span>
                <span className="rounded-none bg-blue-50 px-2 py-1 font-mono text-[11px] font-semibold text-blue-700 border border-blue-200">
                  Rev {p.rev}
                </span>
              </div>
            </div>
            <div className="rv" data-d="110">
              {p.image ? (
                <div className="relative mx-auto flex w-full max-w-[500px] items-center justify-center rounded-none border border-black/10 bg-gradient-to-b from-black/[0.02] to-black/[0.08] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
                  <div className="relative h-[260px] sm:h-[320px] w-full">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      priority
                      className="object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.18)] transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 500px"
                    />
                  </div>
                </div>
              ) : (
                <HeroArt />
              )}
            </div>
          </div>
        )}
      </Section>

      <Section className="py-[clamp(34px,4.4vw,70px)]">
        <Head
          n="02"
          label="Specification"
          title={p.models && p.models.length > 1 ? "Technical Specifications" : "Down to the detail"}
          lede={
            p.models && p.models.length > 1
              ? "Comprehensive engineering specifications for both hardware architectures."
              : undefined
          }
        />
        {p.models && p.models.length > 1 ? (
          <BlockDualSpecs models={p.models} />
        ) : (
          <SpecList rows={p.specs} />
        )}
      </Section>

      <Section className="py-[clamp(34px,4.4vw,70px)]">
        <Head n="03" label="Deployment" title="How it is used" />
        <div className="rv grid grid-cols-1 gap-3 sm:grid-cols-2">
          {p.uses.map((u, i) => (
            <Glass key={u} className="flex min-h-[130px] flex-col justify-end rounded-none border border-black/10 p-7">
              <Mono className="text-accent">{String(i + 1).padStart(2, "0")}</Mono>
              <p className="mt-4 text-[15px] leading-[1.6] text-ink">{u}</p>
            </Glass>
          ))}
        </div>
      </Section>

      <Section className="py-[clamp(34px,4.4vw,70px)]">
        <Head n="04" label="Where it serves" title="Solutions and sectors running this system" />
        <UsedIn slug={p.slug} />
      </Section>

      <Section className="py-[clamp(34px,4.4vw,70px)]">
        <Head n="05" label="Assurance" title="Compliance posture" />
        <Chips items={COMPLIANCE} />
      </Section>

      <Section className="py-[clamp(34px,4.4vw,70px)]">
        <Head n="06" label="Related" title="Pairs with" />
        <ProductGrid items={relatedTo(p.slug, 4)} />
      </Section>

      <CTA n="07" />
    </>
  );
}
