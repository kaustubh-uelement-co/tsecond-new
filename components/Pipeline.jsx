"use client";

import { useEffect, useRef, useState } from "react";
import { SEQUENCE } from "@/lib/data";
import { Glass, Lab, D } from "./ui";

const LANES = [["OPTICAL", 96], ["RF", 166], ["ACOUSTIC", 236], ["TELEMETRY", 306]];

const P = {
  in: LANES.map(([, y]) => `M168 ${y} H350 C404 ${y} 418 201 472 201`),
  bus: "M472 201 H556",
  out: "M708 201 H832",
  edge: "M832 201 C878 201 888 122 938 122 H1046",
  cloud: "M832 201 C878 201 888 282 938 282 H1046",
};

const INK = "#161B29";
const DIM = "#C9CFDA";
const ACC = "#3E5BBF";

/* Scroll scrubs the pipeline rather than triggering it — the reader
   controls time, which is the whole point of showing a sequence. */
export default function Pipeline() {
  const stage = useRef(null);
  const [t, setT] = useState(0);
  const [pinned, setPinned] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const narrow = window.innerWidth <= 1024;
    if (reduce || narrow) {
      setPinned(false);
      setT(1);
      return;
    }
    const onScroll = () => {
      const el = stage.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      setT(total <= 0 ? 1 : Math.max(0, Math.min(1, -r.top / total)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const stageIdx = Math.min(4, Math.floor(t * 5));
  const lit = (i) => stageIdx >= i;

  const Live = ({ d, on }) => (
    <path
      d={d}
      fill="none"
      stroke={ACC}
      strokeWidth="2"
      strokeLinecap="round"
      pathLength="1"
      strokeDasharray="1"
      style={{
        strokeDashoffset: on ? 0 : 1,
        opacity: on ? 1 : 0,
        transition: "stroke-dashoffset .9s cubic-bezier(.16,1,.3,1), opacity .4s",
      }}
    />
  );

  return (
    <section
      ref={stage}
      id="pipeline"
      className={pinned ? "relative h-[220vh]" : "relative"}
      aria-label="The complete edge data pipeline from capture to upload"
    >
      <div
        className={
          pinned
            ? "sticky top-0 flex h-screen flex-col justify-center overflow-hidden"
            : "py-[clamp(28px,4vw,48px)]"
        }
      >
        <div className="wrap">
          <div className="rv mb-[clamp(14px,2.4vw,30px)] text-center">
            <Lab n="02" className="mb-4">Operating Sequence</Lab>
            <D className="mx-auto max-w-[21ch]">
              The complete edge data pipeline from capture to upload
            </D>
          </div>

          <svg
            viewBox="0 0 1200 430"
            className={`hw ${pinned ? "max-h-[42vh]" : ""}`}
            role="img"
            aria-label="Optical, RF, acoustic and telemetry inputs converge into raw signal, are processed by a BRYCK node into a structured result, then routed to edge origin and cloud destination."
          >
            <defs>
              <filter id="pq" x="-40%" y="-40%" width="180%" height="180%">
                <feDropShadow dx="0" dy="5" stdDeviation="9" floodColor="#161B29" floodOpacity=".10" />
              </filter>
            </defs>

            {/* input lanes */}
            {LANES.map(([name, y], i) => (
              <g key={name}>
                <text x="18" y={y + 4} fontFamily="var(--font-mono), monospace" fontSize="9.5"
                      letterSpacing="1.3" fill="#8A93A6">{name}</text>
                {Array.from({ length: 7 }).map((_, w) => {
                  const dur = 1.1 + w * 0.13 + i * 0.2;
                  return (
                    <rect key={w} x={104 + w * 8} y={y - 7} width="3" height="14" fill={DIM}>
                      <animate attributeName="height" values="4;14;6;12;4" dur={`${dur}s`} repeatCount="indefinite" />
                      <animate attributeName="y"
                        values={`${y - 2};${y - 7};${y - 3};${y - 6};${y - 2}`}
                        dur={`${dur}s`} repeatCount="indefinite" />
                    </rect>
                  );
                })}
                <path d={P.in[i]} fill="none" stroke={DIM} strokeWidth="1.4" />
                <Live d={P.in[i]} on={lit(0)} />
              </g>
            ))}

            {/* raw signal bus */}
            <path d={P.bus} fill="none" stroke={DIM} strokeWidth="1.4" />
            <Live d={P.bus} on={lit(1)} />
            <text x="474" y="186" fontFamily="var(--font-mono), monospace" fontSize="9.5"
                  letterSpacing="1.3" fill="#8A93A6">RAW SIGNAL</text>

            {/* the node */}
            <g filter="url(#pq)">
              <rect x="556" y="150" width="152" height="102" rx="6"
                    fill="rgba(255,255,255,.88)"
                    stroke={lit(2) ? ACC : "#D2D7E0"} strokeWidth="1.3"
                    style={{ transition: "stroke .5s" }} />
            </g>
            <text x="632" y="196" textAnchor="middle" fontFamily="var(--font-display), sans-serif"
                  fontSize="13" fontWeight="600" fill={INK} letterSpacing="-0.2">BRYCK</text>
            <text x="632" y="214" textAnchor="middle" fontFamily="var(--font-mono), monospace"
                  fontSize="9" letterSpacing="1.3" fill="#8A93A6">EDGE NODE</text>
            {Array.from({ length: 9 }).map((_, i) => (
              <rect key={i} x={572 + i * 15} y="232" width="8" height="8" rx="1" fill="#E4E7ED">
                <animate attributeName="fill" values={`#E4E7ED;${ACC};#E4E7ED`}
                         dur={`${1.6 + i * 0.17}s`} repeatCount="indefinite" />
              </rect>
            ))}

            {/* structured result */}
            <path d={P.out} fill="none" stroke={DIM} strokeWidth="1.4" />
            <Live d={P.out} on={lit(2)} />
            <text x="712" y="188" fontFamily="var(--font-mono), monospace" fontSize="9.5"
                  letterSpacing="1.3" fill="#8A93A6">STRUCTURED RESULT</text>

            {/* split — edge solid, cloud dashed because it is optional */}
            <path d={P.edge} fill="none" stroke={DIM} strokeWidth="1.4" />
            <path d={P.cloud} fill="none" stroke={DIM} strokeWidth="1.4" strokeDasharray="6 6" />
            <Live d={P.edge} on={lit(3)} />
            <Live d={P.cloud} on={lit(4)} />

            {[["EDGE", "ORIGIN", 100], ["CLOUD", "DESTINATION", 260]].map(([a, b, y]) => (
              <g key={a}>
                <g filter="url(#pq)">
                  <rect x="1046" y={y} width="138" height="44" rx="6"
                        fill="rgba(255,255,255,.88)" stroke="#D2D7E0" strokeWidth="1.2" />
                </g>
                <text x="1115" y={y + 20} textAnchor="middle" fontFamily="var(--font-mono), monospace"
                      fontSize="9.5" letterSpacing="1.3" fill="#8A93A6">{a}</text>
                <text x="1115" y={y + 34} textAnchor="middle" fontFamily="var(--font-mono), monospace"
                      fontSize="9.5" letterSpacing="1.3" fill="#8A93A6">{b}</text>
              </g>
            ))}

            {/* travelling packets */}
            {[...P.in, P.edge, P.cloud].map((d, i) => (
              <circle key={i} r="3.4" fill={ACC}>
                <animateMotion dur={`${2.8 + i * 0.22}s`} repeatCount="indefinite"
                               begin={`${i * 0.3}s`} path={d} />
              </circle>
            ))}
          </svg>

          {/* stage captions */}
          <Glass tone="sheer" className="mt-[clamp(14px,2.4vw,26px)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {SEQUENCE.map(([k, title, body], i) => {
              const on = i === stageIdx;
              const fill = Math.min(1, Math.max(0, t * 5 - i));
              return (
                <div
                  key={k}
                  className={`relative overflow-hidden px-5 py-5 transition-colors duration-500 ${
                    i > 0 ? "lg:border-l border-line" : ""
                  } ${i > 0 ? "max-lg:border-t max-lg:border-line" : ""} ${
                    on ? "bg-white/55" : ""
                  }`}
                >
                  <span className={`font-mono text-[9.5px] tracking-[0.2em] transition-colors duration-500 ${on ? "text-accent" : "text-faint"}`}>
                    {k}
                  </span>
                  <h5 className={`mt-2.5 font-display text-[14px] font-semibold tracking-[-0.015em] transition-colors duration-500 ${on ? "text-ink" : "text-muted"}`}>
                    {title}
                  </h5>
                  <p className={`mt-1.5 text-[11.5px] leading-[1.55] transition-colors duration-500 ${on ? "text-body" : "text-faint"}`}>
                    {body}
                  </p>
                  <span className="absolute inset-x-0 bottom-0 h-[2px] bg-accent transition-[width] duration-200"
                        style={{ width: `${fill * 100}%` }} />
                </div>
              );
            })}
          </Glass>
        </div>

        {pinned && (
          <div className="pointer-events-none absolute inset-x-[var(--gut)] bottom-6 h-px bg-line">
            <span className="block h-full bg-accent" style={{ width: `${t * 100}%` }} />
          </div>
        )}
      </div>
    </section>
  );
}
