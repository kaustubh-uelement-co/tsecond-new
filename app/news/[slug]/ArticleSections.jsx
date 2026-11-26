"use client";

import { useState, useMemo } from "react";
import Image from "next/image";

export function CalculatorWidget({ title, description, defaultThroughput = 12 }) {
  const [throughput, setThroughput] = useState(defaultThroughput);
  const stdHours = useMemo(() => 128 / throughput, [throughput]);
  const bryckHours = useMemo(() => 16 / throughput, [throughput]);
  const savedHours = stdHours - bryckHours;
  const reduction = useMemo(
    () => ((1 - bryckHours / stdHours) * 100).toFixed(0),
    [stdHours, bryckHours]
  );

  return (
    <div className="rv my-10 rounded-none border border-line bg-white/70 p-6 sm:p-8 backdrop-blur-md shadow-xs">
      {title && (
        <h3 className="font-display text-[20px] font-semibold text-ink mb-2">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-[14px] text-muted mb-6">{description}</p>
      )}

      <div className="rounded-none border border-line bg-gray-50/70 p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <label className="text-xs font-mono uppercase tracking-wider text-muted">
            Rebuild Throughput
          </label>
          <span className="font-mono text-xs font-bold text-accent bg-blue-50 px-2.5 py-1 rounded-none border border-blue-200">
            {throughput.toFixed(1)} GB/s
          </span>
        </div>

        <input
          type="range"
          min="1"
          max="24"
          step="0.1"
          value={throughput}
          onChange={(e) => setThroughput(parseFloat(e.target.value))}
          className="w-full accent-blue-600 cursor-pointer h-2 bg-gray-200 rounded-none"
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="rounded-none border border-line bg-white p-4">
            <p className="font-mono text-[10px] uppercase tracking-wider text-muted mb-1">
              Standard 128 TB Rebuild
            </p>
            <p className="font-display text-[22px] font-bold text-gray-800">
              {stdHours >= 1
                ? `${Math.round(stdHours)}h ${Math.round((stdHours % 1) * 60)}m`
                : `${Math.round(stdHours * 60)}m`}
            </p>
          </div>

          <div className="rounded-none border border-blue-200 bg-blue-50/50 p-4">
            <p className="font-mono text-[10px] uppercase tracking-wider text-blue-700 font-semibold mb-1">
              BRYCK BLOCK 16 TB
            </p>
            <p className="font-display text-[22px] font-bold text-blue-600">
              {bryckHours >= 1
                ? `${Math.round(bryckHours)}h ${Math.round((bryckHours % 1) * 60)}m`
                : `${Math.round(bryckHours * 60)}m`}
            </p>
          </div>

          <div className="rounded-none border border-green-200 bg-green-50/50 p-4">
            <p className="font-mono text-[10px] uppercase tracking-wider text-green-700 font-semibold mb-1">
              Exposure Avoided
            </p>
            <p className="font-display text-[22px] font-bold text-green-600">
              {savedHours >= 1
                ? `${Math.round(savedHours)}h ${Math.round((savedHours % 1) * 60)}m`
                : `${Math.round(savedHours * 60)}m`}
            </p>
            <p className="text-[11px] font-mono text-green-800 mt-1">
              {reduction}% reduction in double-fault exposure
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ArticleSections({ sections }) {
  if (!sections || !Array.isArray(sections) || sections.length === 0) return null;

  return (
    <div className="my-10 space-y-10">
      {sections.map((section, idx) => {
        if (section.type === "metric-grid") {
          return (
            <div key={idx} className="rv rounded-none border border-line bg-white/70 p-6 sm:p-8 backdrop-blur-md">
              <h3 className="font-display text-[20px] font-semibold text-ink mb-6">
                {section.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.items?.map((item, i) => (
                  <div key={i} className="rounded-none border border-line bg-gray-50/70 p-5 space-y-2">
                    <p className="font-display text-[15.5px] font-semibold text-ink">{item.left}</p>
                    <pre className="font-mono text-[12px] bg-white p-3 border border-line whitespace-pre-wrap text-blue-700">
                      {item.right}
                    </pre>
                    <p className="font-mono text-[10.5px] text-muted">{item.foot}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        }

        if (section.type === "calculator") {
          return (
            <CalculatorWidget
              key={idx}
              title={section.title}
              description={section.description}
              defaultThroughput={section.defaultThroughput}
            />
          );
        }

        if (section.type === "risk") {
          return (
            <div key={idx} className="rv rounded-none border border-line bg-white/70 p-6 sm:p-8 backdrop-blur-md">
              <h3 className="font-display text-[20px] font-semibold text-ink mb-2">
                {section.title}
              </h3>
              {section.intro && (
                <p className="text-[14px] text-muted mb-6 leading-[1.6]">{section.intro}</p>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {section.blocks?.map((block, i) => (
                  <div key={i} className="rounded-none border border-line bg-gray-50/70 p-5">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-muted mb-1">{block.label}</p>
                    <p className="font-display text-[24px] font-bold text-accent mb-1">{block.value}</p>
                    <p className="text-[12px] text-gray-600">{block.note}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        }

        if (section.type === "timeline") {
          return (
            <div key={idx} className="rv rounded-none border border-line bg-white/70 p-6 sm:p-8 backdrop-blur-md">
              <h3 className="font-display text-[20px] font-semibold text-ink mb-6">
                {section.title}
              </h3>
              <div className="space-y-3">
                {section.events?.map((ev, i) => (
                  <div key={i} className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-3 rounded-none border border-line bg-gray-50/70 p-4">
                    <div className="font-mono text-[12px] font-semibold text-blue-700">{ev.time}</div>
                    <div className="text-[13.5px] text-gray-700 leading-[1.6]">{ev.text}</div>
                  </div>
                ))}
              </div>
            </div>
          );
        }

        if (section.type === "comparison") {
          return (
            <div key={idx} className="rv rounded-none border border-line bg-white/70 p-6 sm:p-8 backdrop-blur-md">
              <h3 className="font-display text-[20px] font-semibold text-ink mb-2">
                {section.title}
              </h3>
              {section.description && (
                <p className="text-[14px] text-muted mb-6">{section.description}</p>
              )}
              <div className="space-y-4">
                {section.items?.map((item, i) => (
                  <div key={i} className="rounded-none border border-line bg-gray-50/70 p-5">
                    <p className="font-display text-[15px] font-semibold text-ink mb-3">{item.label}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3 bg-white border border-line">
                        <p className="font-mono text-[9.5px] uppercase tracking-wider text-muted mb-1">Standard</p>
                        <p className="font-display text-[16px] font-semibold text-gray-800">{item.standard}</p>
                      </div>
                      <div className="p-3 bg-blue-50/60 border border-blue-200">
                        <p className="font-mono text-[9.5px] uppercase tracking-wider text-blue-700 mb-1">BRYCK BLOCK</p>
                        <p className="font-display text-[16px] font-semibold text-blue-700">{item.bryck}</p>
                      </div>
                    </div>
                    {item.note && (
                      <p className="font-mono text-[11px] text-muted mt-2">{item.note}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        }

        if (section.type === "tco") {
          return (
            <div key={idx} className="rv rounded-none border border-line bg-white/70 p-6 sm:p-8 backdrop-blur-md">
              <h3 className="font-display text-[20px] font-semibold text-ink mb-6">
                {section.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {section.cards?.map((c, i) => (
                  <div key={i} className="rounded-none border border-line bg-gray-50/70 p-5">
                    <p className="font-display text-[26px] font-bold text-accent mb-1">{c.value}</p>
                    <p className="text-[13px] text-muted leading-snug">{c.label}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        }

        if (section.type === "text") {
          return (
            <div key={idx} className="rv rounded-none border border-line bg-white/70 p-6 sm:p-8 backdrop-blur-md">
              <h3 className="font-display text-[20px] font-semibold text-ink mb-4">
                {section.title}
              </h3>
              <div className="space-y-4 text-[15px] leading-[1.75] text-gray-700">
                {section.paragraphs?.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          );
        }

        if (section.type === "summary") {
          return (
            <div key={idx} className="rv rounded-none border border-accent/30 bg-blue-50/40 p-6 sm:p-8 backdrop-blur-md">
              <h3 className="font-display text-[20px] font-semibold text-ink mb-3">
                {section.title}
              </h3>
              {section.text && (
                <p className="text-[15px] leading-[1.7] text-gray-800 mb-4">{section.text}</p>
              )}
              {section.footer && (
                <div className="p-4 bg-white/80 border border-blue-200 rounded-none font-mono text-[12px] text-blue-900">
                  {section.footer}
                </div>
              )}
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}
