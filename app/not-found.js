import { Glass, D, Lab, Btn } from "@/components/ui";
import { HeroArt } from "@/components/bits";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center py-[clamp(90px,12vw,170px)]">
      <div className="wrap">
        <Glass className="grid grid-cols-1 items-center gap-[clamp(24px,4vw,60px)] rounded-[28px] p-[clamp(28px,5vw,72px)] lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Lab n="404" className="mb-5">Not found</Lab>
            <D as="h1" size="xl" className="max-w-[15ch]">No system at this reference</D>
            <p className="mt-6 max-w-[48ch] text-[15px] leading-[1.75] text-body">
              The page or part number you requested is not in the catalogue. The specification
              index lists every system currently in production.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Btn href="/products">Open the catalogue</Btn>
              <Btn href="/" variant="glass">Back to home</Btn>
            </div>
          </div>
          <div className="max-lg:hidden"><HeroArt /></div>
        </Glass>
      </div>
    </section>
  );
}
