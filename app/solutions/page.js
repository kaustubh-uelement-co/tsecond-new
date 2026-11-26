import { PageHero, Section, Head } from "@/components/ui";
import { SolutionGrid, IndustryGrid, CTA } from "@/components/bits";
import Pipeline from "@/components/Pipeline";

export const metadata = {
  title: "Solutions",
  description:
    "Four mission environments — distributed command and control, critical infrastructure protection, real-time threat detection and autonomous unmanned navigation.",
};

export default function SolutionsIndex() {
  return (
    <>
      <PageHero
        n="01"
        label="Mission Environments"
        title="Four mission environments"
        lede="Each begins with an operational failure mode rather than a product category: what breaks when the network does, and the mechanism that answers it."
        meta={[
          ["4", "", "Mission environments"],
          ["12", "", "Systems available"],
          ["0", "ms", "Reachback required"],
          ["5", "", "Pipeline stages"],
        ]}
      />

      <Section className="py-[clamp(34px,4.4vw,70px)]">
        <Head n="02" label="Solutions" title="Where BRYCK is deployed"
              lede="Select an environment for the mechanism and the systems it is built on." />
        <SolutionGrid />
      </Section>

      <Pipeline />

      <Section className="py-[clamp(34px,4.4vw,70px)]">
        <Head n="04" label="Industries" title="Sectors served"
              lede="The same mechanism, applied across six sectors." />
        <IndustryGrid />
      </Section>

      <CTA n="05" />
    </>
  );
}
