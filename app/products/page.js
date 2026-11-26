import Link from "next/link";
import { PageHero, Section, Head, Glass, D, Mono, Chips } from "@/components/ui";
import { ProductGrid, CTA } from "@/components/bits";
import { CATEGORIES, PRODUCTS, inCategory, catLabel, COMPLIANCE } from "@/lib/data";

export const metadata = {
  title: "Products",
  description:
    "Twelve systems across seven categories — Edge HPC, Edge AI, Edge Storage, Drives, Data Center, Data Movement and Software.",
};

export default function ProductsIndex() {
  return (
    <>
      <PageHero
        n="01"
        label="Products"
        title="Twelve systems, one architecture"
        lede="From a wearable inference module to an archive tier. Every system shares the same control plane, data model and encryption posture, so a pilot at the edge scales into a programme without a rewrite."
        meta={[
          ["12", "", "Systems"],
          ["7", "", "Categories"],
          ["1", "PB", "Per carried node"],
          ["810", "MIL", "Environmental"],
        ]}
      />

      {/* category jump rail */}
      <Section className="py-[clamp(28px,3.5vw,54px)]">
        <Glass tone="sheer" className="rv flex flex-wrap gap-1 rounded-full p-1.5">
          {CATEGORIES.map((c) => (
            <a
              key={c.slug}
              href={`#${c.slug}`}
              className="rounded-full px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-body transition-colors hover:bg-white/70 hover:text-accent"
            >
              {c.label} ({inCategory(c.slug).length})
            </a>
          ))}
        </Glass>
      </Section>

      {CATEGORIES.map((c, i) => (
        <Section key={c.slug} id={c.slug} className="py-[clamp(34px,4.4vw,70px)]">
          <Head
            n={String(i + 2).padStart(2, "0")}
            label={c.label}
            title={c.label}
            lede={inCategory(c.slug).map((p) => p.name).join(" · ")}
          />
          <ProductGrid items={inCategory(c.slug)} cols={4} />
        </Section>
      ))}

      {/* comparison index */}
      <Section id="index">
        <Head
          n="09"
          label="Comparison"
          title="Specification index"
          lede="Every system, side by side. Select a row for the full sheet."
        />
        <Glass className="rv overflow-hidden rounded-2xl">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse">
              <thead>
                <tr>
                  {["System", "Category", "Headline", "Characteristic", "Rev"].map((h) => (
                    <th key={h} scope="col"
                        className="border-b border-line px-5 py-4 text-left font-mono text-[9px] font-normal uppercase tracking-[0.18em] text-muted">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PRODUCTS.map((p, i) => (
                  <tr key={p.slug}
                      className={`transition-colors hover:bg-white/55 ${i > 0 ? "border-t border-line" : ""}`}>
                    <td className="px-5 py-4 align-top">
                      <Link href={`/products/${p.slug}`} className="block">
                        <span className="whitespace-nowrap font-display text-[14px] font-semibold text-ink">
                          {p.name}
                        </span>
                        <span className="mt-1.5 block font-mono text-[9px] tracking-[0.12em] text-faint">
                          {p.pn}
                        </span>
                      </Link>
                    </td>
                    <td className="px-5 py-4 align-top font-mono text-[11.5px] text-body">{catLabel(p.cat)}</td>
                    <td className="px-5 py-4 align-top font-mono text-[11.5px] text-body">
                      {p.reads[0][0]} {p.reads[0][1]}
                    </td>
                    <td className="px-5 py-4 align-top font-mono text-[11.5px] text-body">
                      {p.reads[1][0]} {p.reads[1][1]}
                    </td>
                    <td className="px-5 py-4 align-top font-mono text-[11.5px] text-body">{p.rev}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Glass>

        <div className="mt-10">
          <Mono className="mb-4 block text-faint">Compliance posture</Mono>
          <Chips items={COMPLIANCE} />
        </div>
      </Section>

      <CTA n="10" />
    </>
  );
}
