import Link from "next/link";
import { PageHero, Section, Head, Glass, D, Mono, Btn } from "@/components/ui";
import { Ecosystem, CTA } from "@/components/bits";
import { NEWS } from "@/lib/data";

export const metadata = {
  title: "About Us",
  description:
    "Tsecond builds edge AI infrastructure for mission-critical operations — inference, petabyte-scale storage and secure data movement where power and communications cannot be assumed.",
};

const POSITIONS = [
  ["01", "ARCHITECTURE", "One data model, edge to enterprise",
   "Every system shares the same encryption posture, control plane and metadata schema. A pilot at the edge scales into a programme without a rewrite, and nothing is re-indexed on the way home."],
  ["02", "AUTONOMY", "The network is a bonus, not a dependency",
   "Capture, processing and inference all execute locally. Connectivity changes how fast results travel, never whether a decision can be made."],
  ["03", "DENSITY", "A petabyte you can carry onto an aircraft",
   "One rack unit holds a fault-tolerant petabyte. One case holds the same and weighs fourteen pounds. Density is what turns a data hall into a piece of kit."],
  ["04", "ASSURANCE", "Built to clear procurement, not just a demo",
   "MIL-STD-810 test records, TAA compliant supply chain, TCG Opal 2.0 encryption and a documented procurement pack ship with every unit."],
  ["05", "ECOSYSTEM", "Inside the programme, not beside it",
   "Validated with NVIDIA, Dell, AWS, Curtiss Wright and BigBear.ai, and developed alongside U.S. Army DEVCOM C5ISR under a cooperative agreement."],
];

export default function Company() {
  return (
    <>
      <PageHero
        n="01"
        label="Company"
        title="Built for the worst case"
        lede="Tsecond builds edge AI infrastructure for mission-critical operations — unifying inference, petabyte-scale storage and secure data movement where power and communications cannot be assumed."
        meta={[["12", "", "Systems in production"], ["7", "", "Categories"], ["6", "", "Sectors served"], ["SJC", "", "San Jose, California"]]}
      />

      <Section className="py-[clamp(34px,4.4vw,70px)]">
        <div className="rv grid grid-cols-1 gap-3 lg:grid-cols-[0.9fr_1.1fr]">
          <Glass className="flex flex-col justify-end rounded-2xl p-9">
            <Mono className="text-accent">02 · Position</Mono>
            <D as="h2" className="mt-7">The premise</D>
          </Glass>
          <Glass className="rounded-2xl p-9">
            <p className="mb-5 text-[15px] leading-[1.78] text-body">
              Sensor output has outrun transport for a decade. Every programme response so far has
              been to collect less, compress harder, or accept that exploitation happens days later
              at a facility somewhere else.
            </p>
            <p className="text-[15px] leading-[1.78] text-body">
              We took the remaining option: move the data hall to the sensor. Everything we build
              follows from that decision — the weight target, the power envelope, the
              field-replaceable architecture, and the assumption that the network is a bonus rather
              than a dependency.
            </p>
          </Glass>
        </div>
      </Section>

      <Section className="py-[clamp(34px,4.4vw,70px)]">
        <Head n="03" label="Engineering positions" title="What we build against" />
        <Glass tone="sheer" className="rv overflow-hidden rounded-2xl">
          {POSITIONS.map(([n, tag, title, body], i) => (
            <div key={n} className={`grid grid-cols-1 items-start gap-4 px-7 py-8 lg:grid-cols-[64px_1fr_1.2fr] lg:gap-10 ${i > 0 ? "border-t border-line" : ""}`}>
              <span className="font-mono text-[10px] tracking-[0.16em] text-accent">{n}</span>
              <div>
                <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.2em] text-faint">{tag}</span>
                <D as="h3" size="sm">{title}</D>
              </div>
              <p className="text-[14px] leading-[1.72] text-body">{body}</p>
            </div>
          ))}
        </Glass>
      </Section>

      <Section className="py-[clamp(34px,4.4vw,70px)]">
        <Head n="04" label="Ecosystem" title="Built with the leading defense ecosystems" />
        <Ecosystem />
      </Section>

      <Section className="py-[clamp(34px,4.4vw,70px)]">
        <Head n="05" label="More" title="Company" />
        <div className="rv grid grid-cols-1 gap-3 sm:grid-cols-3">
          {[["/company/procurement","Procurement","How to buy, contract routes and the documentation that ships with every unit."],
            ["/company/careers","Careers","Open roles across engineering, hardware, software and programmes."],
            ["/news","Newsroom","Programme notices, product releases and partnership announcements."]].map(([href,t,d]) => (
            <Glass as={Link} href={href} lift key={href} className="group flex min-h-[170px] flex-col rounded-2xl p-7">
              <Mono className="text-accent">Section</Mono>
              <D as="h3" size="sm" className="mb-2 mt-7">{t}</D>
              <p className="text-[13px] leading-[1.6] text-muted">{d}</p>
              <span className="mt-4 font-mono text-[9px] uppercase tracking-[0.2em] text-faint transition-colors group-hover:text-accent">Open &#8599;</span>
            </Glass>
          ))}
        </div>
      </Section>

      <CTA n="06" />
    </>
  );
}
