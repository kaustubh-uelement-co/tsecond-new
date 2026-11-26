"use client";

import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/data";
import { Glass } from "./ui";

function Count({ to }) {
  const [v, setV] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        !("IntersectionObserver" in window)) {
      setV(to);
      return;
    }
    let raf;
    const io = new IntersectionObserver((es) => {
      if (!es[0].isIntersecting) return;
      io.disconnect();
      const t0 = performance.now(), D = 1400;
      const step = (now) => {
        const p = Math.min(1, (now - t0) / D);
        setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, { threshold: 0.5 });
    io.observe(node);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [to]);

  return <span ref={ref}>{v}</span>;
}

export default function Counters() {
  return (
    <Glass tone="sheer" className="rv grid grid-cols-2 overflow-hidden rounded-2xl lg:grid-cols-4">
      {STATS.map(([v, u, k], i) => (
        <div
          key={k}
          className={`px-7 py-9 ${i > 0 ? "lg:border-l lg:border-line" : ""} ${
            i % 2 ? "border-l border-line" : ""
          } ${i > 1 ? "border-t border-line lg:border-t-0" : ""}`}
        >
          <b className="block font-display text-[clamp(30px,4.2vw,52px)] font-semibold leading-none tracking-[-0.04em] text-ink">
            <Count to={Number(v)} />
            {u && <s className="ml-1.5 text-[0.38em] font-medium text-accent no-underline">{u}</s>}
          </b>
          <p className="mt-3.5 font-mono text-[9.5px] uppercase tracking-[0.18em] text-muted">{k}</p>
        </div>
      ))}
    </Glass>
  );
}
