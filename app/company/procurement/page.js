import { PageHero, Section, Head, Glass, D, Mono, Chips, SpecList } from "@/components/ui";
import { CTA } from "@/components/bits";
import { COMPLIANCE } from "@/lib/data";

export const metadata = {
  title: "Procurement",
  description: "Contract routes, documentation and compliance posture for buying Tsecond systems.",
};

const ROUTES = [
  ["Direct", "Contract directly with Tsecond for pilots, evaluations and programme deliveries."],
  ["Integrator", "Available through federal systems integrators already on your contract vehicle."],
  ["OEM", "BRYCK Block supplied as a component into third-party rugged systems."],
];

const PACK = [
  ["Environmental record", "MIL-STD-810 test record, per unit"],
  ["Supply chain", "TAA compliance declaration"],
  ["Encryption", "TCG Opal 2.0 certification"],
  ["Identification", "Part numbers and revision status"],
  ["Vehicles", "Available contract vehicles for the configuration"],
  ["Support", "Service levels and field-replaceable unit list"],
];

export default function Procurement() {
  return (
    <>
      <PageHero
        crumb={{ href: "/company", label: "Company" }}
        n="01" label="Procurement" title="How to buy"
        lede="Three contract routes, and a documented pack that ships with every unit so the evaluation does not stall waiting on paperwork."
      />

      <Section className="py-[clamp(34px,4.4vw,70px)]">
        <Head n="02" label="Routes" title="Three ways to contract" />
        <div className="rv grid grid-cols-1 gap-3 sm:grid-cols-3">
          {ROUTES.map(([t, d], i) => (
            <Glass key={t} className="flex min-h-[180px] flex-col rounded-2xl p-7">
              <Mono className="text-accent">Route {String(i + 1).padStart(2, "0")}</Mono>
              <D as="h3" size="sm" className="mb-2 mt-8">{t}</D>
              <p className="text-[13px] leading-[1.62] text-muted">{d}</p>
            </Glass>
          ))}
        </div>
      </Section>

      <Section className="py-[clamp(34px,4.4vw,70px)]">
        <Head n="03" label="Documentation" title="What ships with a unit" />
        <SpecList rows={PACK} />
      </Section>

      <Section className="py-[clamp(34px,4.4vw,70px)]">
        <Head n="04" label="Assurance" title="Compliance posture"
              lede="Encryption at rest is enabled at manufacture and cannot be disabled in the field." />
        <Chips items={COMPLIANCE} />
      </Section>

      <CTA n="05" />
    </>
  );
}
