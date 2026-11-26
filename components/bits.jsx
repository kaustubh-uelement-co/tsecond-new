import Link from "next/link";
import Image from "next/image";
import { Glass, D, Mono, Lab, Btn, Head } from "./ui";
import {
  PRODUCTS, SOLUTIONS, INDUSTRIES, ECOSYSTEM, MARQUEE_A, MARQUEE_B,
  catLabel, usedIn,
} from "@/lib/data";

/* ------------------------------------------------------------- hero art */
/* A light technical drawing rather than a rendered object — it belongs to
   the same family as the pipeline schematic. */
export function HeroArt() {
  return (
    <svg viewBox="0 0 420 420" className="hw overflow-visible" aria-hidden="true">
      <defs>
        <linearGradient id="ha-edge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3E5BBF" />
          <stop offset="100%" stopColor="#9FB3E8" />
        </linearGradient>
        <linearGradient id="ha-top" x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#EDF1F8" />
        </linearGradient>
        <radialGradient id="ha-halo" cx=".5" cy=".5" r=".5">
          <stop offset="0%" stopColor="#3E5BBF" stopOpacity=".10" />
          <stop offset="100%" stopColor="#3E5BBF" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="210" cy="210" r="196" fill="url(#ha-halo)" />

      {[0, 1, 2].map((i) => {
        const r = 92 + i * 40;
        return (
          <g key={i} style={{
            transformOrigin: "210px 210px",
            animation: `spin ${17 + i * 9}s linear infinite${i % 2 ? "" : " reverse"}`,
          }}>
            <circle cx="210" cy="210" r={r} fill="none" stroke="#D6DBE4"
                    strokeWidth="1" strokeDasharray={`${18 + i * 9} ${11 + i * 5}`} />
            <circle cx={210 + r} cy="210" r="3" fill="#3E5BBF" />
          </g>
        );
      })}

      <g>
        <path d="M210 132 L300 184 L210 236 L120 184 Z" fill="url(#ha-top)" stroke="#C6CCD8" strokeWidth="1.3" />
        <path d="M120 184 L210 236 L210 268 L120 216 Z" fill="#F4F6FA" stroke="#C6CCD8" strokeWidth="1" />
        <path d="M300 184 L210 236 L210 268 L300 216 Z" fill="#E8ECF3" stroke="#C6CCD8" strokeWidth="1" />
        <path d="M120 216 L210 268 L300 216" fill="none" stroke="url(#ha-edge)" strokeWidth="2.6" />
        <path d="M210 156 L276 194 L210 232 L144 194 Z" fill="none" stroke="#DEE2EA" strokeWidth="1" />
      </g>
      <circle cx="210" cy="194" r="4.5" fill="#3E5BBF">
        <animate attributeName="opacity" values="1;.2;1" dur="2.6s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/* ------------------------------------------------------------- marquees */
export function Marquee({ words, reverse = false }) {
  const row = (
    <>
      {words.map((w, i) => (
        <span key={i} className="inline-flex items-center gap-4 whitespace-nowrap px-5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-muted">
          {w}
          <i className="h-1 w-1 rounded-full bg-accent opacity-50" />
        </span>
      ))}
    </>
  );
  return (
    <div className={`relative overflow-hidden border-y border-line bg-white/30 py-3.5 backdrop-blur-sm ${reverse ? "marq-rev" : ""}`}>
      <div className="marq-track">{row}{row}</div>
      <span className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-paper to-transparent" />
      <span className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-paper to-transparent" />
    </div>
  );
}

export const MarqueeA = () => <Marquee words={MARQUEE_A} />;
export const MarqueeB = () => <Marquee words={MARQUEE_B} reverse />;

/* ---------------------------------------------------------------- cards */
export function ProductCard({ p }) {
  return (
    <Glass as={Link} href={`/products/${p.slug}`} lift
           className="group flex flex-col justify-between rounded-none p-6 transition-all duration-300 hover:border-accent/40">
      <div>
        <div className="flex items-center justify-between">
          <Mono className="text-accent">{catLabel(p.cat)}</Mono>
          {p.pn && (
            <span className="font-mono text-[9px] uppercase tracking-wider text-faint">
              {p.pn}
            </span>
          )}
        </div>

        {p.image && (
          <div className="relative my-4 h-36 w-full overflow-hidden rounded-none bg-gradient-to-b from-black/[0.02] to-black/[0.06] p-3 flex items-center justify-center">
            <Image
              src={p.image}
              alt={p.name}
              fill
              className="object-contain p-2 transition-transform duration-500 ease-out group-hover:scale-108"
              sizes="(max-width: 768px) 100vw, 300px"
            />
          </div>
        )}

        <D as="h3" size="sm" className="mb-2 mt-2">{p.name}</D>
        <p className="text-[12.5px] leading-[1.58] text-muted line-clamp-2">{p.tagline}</p>
      </div>

      <span className="mt-5 flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-faint transition-all duration-300 group-hover:gap-3 group-hover:text-accent">
        View system &#8599;
      </span>
    </Glass>
  );
}

export function ProductGrid({ items = PRODUCTS, cols = 4 }) {
  const c = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" }[cols];
  return (
    <div className={`rv grid grid-cols-1 gap-3 ${c}`}>
      {items.map((p) => <ProductCard key={p.slug} p={p} />)}
    </div>
  );
}

export function TileCard({ href, n, title, body, cta = "Read more" }) {
  return (
    <Glass as={Link} href={href} lift className="group flex min-h-[250px] flex-col rounded-none p-7">
      <Mono className="text-accent">{n}</Mono>
      <D as="h3" size="sm" className="mb-3 mt-8">{title}</D>
      <p className="text-[13px] leading-[1.62] text-muted">{body}</p>
      <span className="mt-5 flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-faint transition-all duration-300 group-hover:gap-3 group-hover:text-accent">
        {cta} &#8599;
      </span>
    </Glass>
  );
}

export function SolutionGrid({ items = SOLUTIONS }) {
  return (
    <div className="rv grid grid-cols-1 gap-3 sm:grid-cols-2">
      {items.map((s) => (
        <TileCard key={s.slug} href={`/solutions/${s.slug}`} n={s.n} title={s.name}
                  body={s.short} cta="Open solution" />
      ))}
    </div>
  );
}

export function IndustryGrid({ items = INDUSTRIES }) {
  return (
    <div className="rv grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((i) => (
        <TileCard key={i.slug} href={`/industries/${i.slug}`} n={i.n} title={i.name}
                  body={i.short} cta="Open sector" />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------ ecosystem */
export function Ecosystem() {
  return (
    <Glass tone="sheer" className="rv grid grid-cols-2 overflow-hidden rounded-none md:grid-cols-3 lg:grid-cols-6">
      {ECOSYSTEM.map((e, i) => (
        <div key={e}
             className={`group px-5 py-9 text-center font-display text-[14px] font-semibold text-muted transition-colors duration-400 hover:bg-white/55 hover:text-ink ${
               i > 0 ? "border-l border-line max-lg:border-l-0" : ""
             } ${i % 2 ? "max-lg:border-l max-lg:border-line" : ""} ${i > 1 ? "max-md:border-t max-md:border-line" : ""}`}>
          {e}
        </div>
      ))}
    </Glass>
  );
}

/* ------------------------------------------------- cross-links on a node */
export function UsedIn({ slug }) {
  const { solutions, industries } = usedIn(slug);
  if (!solutions.length && !industries.length) return null;
  return (
    <div className="rv grid grid-cols-1 gap-3 lg:grid-cols-2">
      {solutions.length > 0 && (
        <Glass className="rounded-none p-7">
          <Mono className="text-accent">Solutions</Mono>
          <ul className="mt-5 space-y-0">
            {solutions.map((s, i) => (
              <li key={s.slug} className={i > 0 ? "border-t border-line" : ""}>
                <Link href={`/solutions/${s.slug}`}
                      className="group flex items-center justify-between gap-4 py-3.5 text-[14px] text-ink transition-colors hover:text-accent">
                  {s.name}
                  <span className="font-mono text-[9px] text-faint transition-all group-hover:translate-x-1 group-hover:text-accent">&#8599;</span>
                </Link>
              </li>
            ))}
          </ul>
        </Glass>
      )}
      {industries.length > 0 && (
        <Glass className="rounded-none p-7">
          <Mono className="text-accent">Industries</Mono>
          <ul className="mt-5 space-y-0">
            {industries.map((s, i) => (
              <li key={s.slug} className={i > 0 ? "border-t border-line" : ""}>
                <Link href={`/industries/${s.slug}`}
                      className="group flex items-center justify-between gap-4 py-3.5 text-[14px] text-ink transition-colors hover:text-accent">
                  {s.name}
                  <span className="font-mono text-[9px] text-faint transition-all group-hover:translate-x-1 group-hover:text-accent">&#8599;</span>
                </Link>
              </li>
            ))}
          </ul>
        </Glass>
      )}
    </div>
  );
}

/* ---------------------------------------------------------------- close */
export function CTA({ n = "—" }) {
  return (
    <section className="relative py-[clamp(28px,4vw,52px)]">
      <div className="wrap">
        <Glass className="rv relative overflow-hidden rounded-none px-[clamp(20px,4vw,60px)] py-[clamp(32px,5vw,64px)] text-center">
          <Lab n={n} className="mb-4">Get started</Lab>
          <D as="h2" size="xl" className="mx-auto max-w-[15ch]">Ready to get started?</D>
          <p className="mx-auto mt-4 max-w-[52ch] text-[clamp(14px,1.2vw,16.5px)] leading-[1.65] text-body">
            Our systems integrate into real-world missions with low latency, high reliability
            and defense-grade security.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Btn href="/contact">Contact Us</Btn>
            <Btn href="/products" variant="glass">Explore products</Btn>
          </div>
        </Glass>
      </div>
    </section>
  );
}
