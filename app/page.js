import Link from "next/link";
import Image from "next/image";
// Homepage
import { Glass, D, Lab, Lede, Btn, Section, Head, Mono } from "@/components/ui";
import {
  HeroArt, MarqueeA, MarqueeB, ProductGrid, SolutionGrid,
  IndustryGrid, Ecosystem, CTA,
} from "@/components/bits";
import HeroSlider from "@/components/HeroSlider";
import Pipeline from "@/components/Pipeline";
import Counters from "@/components/Counters";
import { PRODUCTS, SOLUTIONS } from "@/lib/data";
import { getAllArticles } from "@/lib/blogData";

export default function Home() {
  const topNews = getAllArticles().slice(0, 2);
  return (
    <>
      {/* ------------------------------------------------------------ HERO SLIDER */}
      <HeroSlider />

      {/* --------------------------------- MISSION ENVIRONMENTS QUICK ACCESS */}
      <section className="wrap pt-8 pb-4">
        <div className="rv grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4" data-d="640">
          {SOLUTIONS.map((s) => (
            <Glass
              as={Link}
              href={`/solutions/${s.slug}`}
              lift
              key={s.slug}
              className="group relative flex min-h-[136px] flex-col overflow-hidden rounded-none p-5"
            >
              <Mono className="text-accent">{s.n}</Mono>
              <h4 className="mt-auto font-display text-[15px] font-semibold leading-[1.3] tracking-[-0.018em] text-ink">
                {s.name}
              </h4>
              <span className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-accent transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-x-100" />
            </Glass>
          ))}
        </div>
      </section>

      <MarqueeA />

      {/* -------------------------------------------- OPERATING SEQUENCE */}
      <Pipeline />

      <MarqueeB />

      {/* ------------------------------------------------------ ECOSYSTEM */}
      <Section>
        <Head
          n="03"
          label="Ecosystem"
          title="Built with the world's leading technology and defense ecosystems"
          lede="Partnerships across compute, cloud, defense, aerospace and mission infrastructure — so a node that proves itself at the edge scales into a programme of record."
        />
        <Ecosystem />
      </Section>

      {/* ------------------------------------------------- PRODUCT SYSTEMS */}
      <Section id="products">
        <Head
          n="04"
          label="Product Systems"
          title="Built across the full spectrum of mission-critical environments"
          lede="Twelve systems across seven categories — from a wearable inference module to an archive tier — sharing one control plane and one data model."
        />
        <ProductGrid items={PRODUCTS.slice(0, 8)} />
        <div className="rv mt-7">
          <Btn href="/products" variant="glass">All twelve systems</Btn>
        </div>
      </Section>

      {/* --------------------------------------------------------- COUNTERS */}
      <Section className="py-[clamp(36px,5vw,72px)]">
        <Counters />
      </Section>

      {/* -------------------------------------------------------- SOLUTIONS */}
      <Section>
        <Head
          n="05"
          label="Solutions"
          title="Four mission environments"
          lede="Each begins with an operational failure mode, not a product category."
        />
        <SolutionGrid />
      </Section>

      {/* ------------------------------------------------------- INDUSTRIES */}
      <Section>
        <Head
          n="06"
          label="Industries"
          title="Six sectors, one constraint"
          lede="More data is generated at the edge than any available link can carry back."
        />
        <IndustryGrid />
      </Section>

      {/* ------------------------------------------------------------- NEWS */}
      <Section>
        <Head n="07" label="Newsroom" title="Latest from Tsecond" />
        <div className="rv grid grid-cols-1 gap-4 sm:grid-cols-2">
          {topNews.map((art) => (
            <Glass as={Link} href={`/news/${art.slug}`} lift key={art.slug}
                   className="group flex flex-col justify-between overflow-hidden rounded-none p-0 transition-all duration-300 hover:border-accent/40">
              <div className="relative h-48 w-full overflow-hidden bg-black/5">
                {art.image && (
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                )}
                {art.tags?.[0] && (
                  <span className="absolute top-3 left-3 rounded-none bg-[#161b29]/85 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-white backdrop-blur-md">
                    {art.tags[0]}
                  </span>
                )}
              </div>
              <div className="p-7">
                <Mono className="text-accent">{art.tags?.[0] || "Dispatch"} · {art.date}</Mono>
                <D as="h3" size="sm" className="mb-3 mt-3 group-hover:text-accent transition-colors line-clamp-2">{art.title}</D>
                <p className="text-[13px] leading-[1.62] text-muted line-clamp-2">{art.description}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-wider text-accent group-hover:translate-x-1 transition-transform">
                  Read dispatch →
                </span>
              </div>
            </Glass>
          ))}
        </div>
        <div className="rv mt-7">
          <Btn href="/news" variant="glass">All news</Btn>
        </div>
      </Section>

      <CTA n="08" />
    </>
  );
}
