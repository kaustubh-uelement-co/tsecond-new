import { PageHero, Section, Glass, D, Lab, Mono } from "@/components/ui";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact",
  description:
    "Request a briefing. We size a system against your actual link budget and run a live denied-environment demonstration.",
};

const INTAKE = [
  ["Link budget", "Worst-case sustained uplink you can guarantee"],
  ["Sensor profile", "Aggregate rate and formats at the point of collection"],
  ["Environment", "Power, thermal, vibration, enclosure"],
  ["Retention", "Hours or days held before reachback"],
  ["Classification", "Highest level the system will hold"],
];

export default function Contact() {
  return (
    <>
      <PageHero
        n="01" label="Contact" title="Request a briefing"
        lede="Forty-five minutes. We size a system against your actual link budget and run a live denied-environment demonstration. No slide deck unless you ask for one."
      />

      <Section className="py-[clamp(28px,4vw,64px)]">
        <div className="grid grid-cols-1 items-start gap-[clamp(24px,3.5vw,52px)] lg:grid-cols-2">
          <div className="rv">
            <Lab n="02" className="mb-5">Intake</Lab>
            <D as="h2">What to bring</D>
            <Glass tone="sheer" className="mt-7 overflow-hidden rounded-2xl">
              {INTAKE.map(([k, v], i) => (
                <div key={k} className={`flex flex-wrap gap-x-5 gap-y-1 px-6 py-4 ${i > 0 ? "border-t border-line" : ""}`}>
                  <span className="min-w-[130px] font-mono text-[10px] uppercase tracking-[0.16em] text-accent">{k}</span>
                  <span className="flex-1 text-[14px] text-body">{v}</span>
                </div>
              ))}
            </Glass>
            <p className="mt-7 font-mono text-[10px] uppercase leading-[1.9] tracking-[0.16em] text-muted">
              San Jose, California<br />Response within one business day
            </p>
          </div>

          <ContactForm />
        </div>
      </Section>
    </>
  );
}
