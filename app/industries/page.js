import { PageHero, Section, Head, Chips } from "@/components/ui";
import { IndustryGrid, SolutionGrid, Ecosystem, CTA } from "@/components/bits";
import { COMPLIANCE } from "@/lib/data";

export const metadata = {
  title: "Industries",
  description:
    "Defence, intelligence, aerospace, critical infrastructure, energy and media — six sectors, one constraint.",
};

export default function IndustriesIndex() {
  return (
    <>
      <PageHero
        n="01"
        label="Industries"
        title="Six sectors, one constraint"
        lede="Different missions, the same underlying problem: more data is generated at the edge than any available link can carry back. Each sector names the constraint, the mechanism that answers it, and the systems it is built on."
        meta={[
          ["6", "", "Sectors served"],
          ["12", "", "Systems available"],
          ["40", "GB/s", "Capture rate"],
          ["810", "MIL", "Environmental"],
        ]}
      />

      <Section className="py-[clamp(34px,4.4vw,70px)]">
        <Head n="02" label="Sectors" title="Where it is deployed"
              lede="Select a sector for deployment detail and the systems behind it." />
        <IndustryGrid />
      </Section>

      <Section className="py-[clamp(34px,4.4vw,70px)]">
        <Head n="03" label="Solutions" title="The mission environments behind them" />
        <SolutionGrid />
      </Section>

      <Section className="py-[clamp(34px,4.4vw,70px)]">
        <Head n="04" label="Ecosystem" title="Built with the leading defense ecosystems" />
        <Ecosystem />
      </Section>

      <Section className="py-[clamp(34px,4.4vw,70px)]">
        <Head n="05" label="Assurance" title="Compliance posture"
              lede="Encryption at rest is enabled at manufacture and cannot be disabled in the field." />
        <Chips items={COMPLIANCE} />
      </Section>

      <CTA n="06" />
    </>
  );
}
