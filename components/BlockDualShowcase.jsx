"use client";

import { useState } from "react";
import Image from "next/image";
import { Glass, Mono, Head } from "@/components/ui";

export default function BlockDualShowcase({ models }) {
  const [activeTab, setActiveTab] = useState("all"); // "all", "block-u2", "block-e"

  if (!models || models.length < 2) return null;

  const blockU2 = models.find((m) => m.id === "block-u2") || models[0];
  const blockE = models.find((m) => m.id === "block-e") || models[1];

  return (
    <div className="w-full">
      {/* Model Selector Tabs */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-4">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`rounded-none px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-all duration-200 ${
              activeTab === "all"
                ? "bg-[#161b29] text-white shadow-sm"
                : "bg-white/80 text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            Dual Hardware Overview (Both Models)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("block-u2")}
            className={`rounded-none px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-all duration-200 ${
              activeTab === "block-u2"
                ? "bg-[#161b29] text-white shadow-sm"
                : "bg-white/80 text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            BRYCK Block (U.2)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("block-e")}
            className={`rounded-none px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-all duration-200 ${
              activeTab === "block-e"
                ? "bg-[#161b29] text-white shadow-sm"
                : "bg-white/80 text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            BRYCK Block E (Gen 5)
          </button>
        </div>

        <div className="font-mono text-[10px] uppercase tracking-wider text-muted">
          2 Active Hardware Configurations Available
        </div>
      </div>

      {/* Dual Cards Grid (Side-by-Side or Filtered) */}
      <div
        className={`grid gap-6 ${
          activeTab === "all" ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"
        }`}
      >
        {/* Model 1: BRYCK Block U.2 */}
        {(activeTab === "all" || activeTab === "block-u2") && (
          <Glass
            tone="sheer"
            className="flex flex-col justify-between border border-black/10 bg-white/70 p-6 md:p-8 rounded-none shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between border-b border-black/10 pb-4 mb-6">
                <div className="h-8 md:h-10 relative w-40">
                  <Image
                    src={blockU2.logo}
                    alt={blockU2.name}
                    fill
                    className="object-contain object-left"
                    sizes="160px"
                  />
                </div>
                <span className="rounded-none bg-blue-50 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-blue-700 border border-blue-200">
                  {blockU2.pn} · {blockU2.rev}
                </span>
              </div>

              <div className="relative mx-auto mb-6 flex h-[220px] w-full items-center justify-center border border-black/5 bg-gradient-to-b from-black/[0.01] to-black/[0.04] p-4 rounded-none">
                <div className="relative h-full w-full">
                  <Image
                    src={blockU2.image}
                    alt={blockU2.name}
                    fill
                    className="object-contain drop-shadow-[0_12px_20px_rgba(0,0,0,0.14)] transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
              </div>

              <div className="mb-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-semibold">
                  {blockU2.badge}
                </span>
                <h3 className="mt-1 font-display text-xl font-bold text-ink">
                  {blockU2.fullName}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {blockU2.summary}
                </p>
              </div>

              {/* 4 Metrics */}
              <div className="my-6 grid grid-cols-2 sm:grid-cols-4 gap-2 border-y border-black/10 py-4">
                {blockU2.reads.map(([num, unit, label]) => (
                  <div key={label} className="text-center sm:text-left">
                    <div className="font-mono text-base font-bold text-ink">
                      {num} <span className="text-xs text-muted">{unit}</span>
                    </div>
                    <div className="font-mono text-[9px] uppercase tracking-wider text-muted mt-0.5">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-2">
              <a
                href={blockU2.datasheet}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center gap-2 rounded-none bg-[#161b29] px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#3e5bbf]"
              >
                <svg
                  className="w-3.5 h-3.5 text-blue-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>Download U.2 Datasheet</span>
              </a>

              <span className="font-mono text-[10px] text-muted">
                8 Independent Controllers
              </span>
            </div>
          </Glass>
        )}

        {/* Model 2: BRYCK Block E */}
        {(activeTab === "all" || activeTab === "block-e") && (
          <Glass
            tone="sheer"
            className="flex flex-col justify-between border border-black/10 bg-white/70 p-6 md:p-8 rounded-none shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between border-b border-black/10 pb-4 mb-6">
                <div className="h-8 md:h-10 relative w-40">
                  <Image
                    src={blockE.logo}
                    alt={blockE.name}
                    fill
                    className="object-contain object-left"
                    sizes="160px"
                  />
                </div>
                <span className="rounded-none bg-purple-50 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-purple-700 border border-purple-200">
                  {blockE.pn} · {blockE.rev}
                </span>
              </div>

              <div className="relative mx-auto mb-6 flex h-[220px] w-full items-center justify-center border border-black/5 bg-gradient-to-b from-black/[0.01] to-black/[0.04] p-4 rounded-none">
                <div className="relative h-full w-full">
                  <Image
                    src={blockE.image}
                    alt={blockE.name}
                    fill
                    className="object-contain drop-shadow-[0_12px_20px_rgba(0,0,0,0.14)] transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
              </div>

              <div className="mb-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#9333ea] font-semibold">
                  {blockE.badge}
                </span>
                <h3 className="mt-1 font-display text-xl font-bold text-ink">
                  {blockE.fullName}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {blockE.summary}
                </p>
              </div>

              {/* 4 Metrics */}
              <div className="my-6 grid grid-cols-2 sm:grid-cols-4 gap-2 border-y border-black/10 py-4">
                {blockE.reads.map(([num, unit, label]) => (
                  <div key={label} className="text-center sm:text-left">
                    <div className="font-mono text-base font-bold text-ink">
                      {num} <span className="text-xs text-muted">{unit}</span>
                    </div>
                    <div className="font-mono text-[9px] uppercase tracking-wider text-muted mt-0.5">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-2">
              <a
                href={blockE.datasheet}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center gap-2 rounded-none bg-[#161b29] px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#3e5bbf]"
              >
                <svg
                  className="w-3.5 h-3.5 text-blue-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>Download Block E Datasheet</span>
              </a>

              <span className="font-mono text-[10px] text-muted">
                PCIe Gen 5x4 Enterprise
              </span>
            </div>
          </Glass>
        )}
      </div>
    </div>
  );
}

export function BlockDualSpecs({ models }) {
  if (!models || models.length < 2) return null;

  const blockU2 = models.find((m) => m.id === "block-u2") || models[0];
  const blockE = models.find((m) => m.id === "block-e") || models[1];

  return (
    <div className="space-y-16">
      {/* 02.1 BRYCK Block U.2 */}
      <div>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-4">
          <div className="flex items-center gap-4">
            <Mono className="text-accent font-bold">02.1</Mono>
            <div className="h-8 md:h-10 relative w-44">
              <Image
                src={blockU2.logo}
                alt={blockU2.name}
                fill
                className="object-contain object-left"
                sizes="176px"
              />
            </div>
            <span className="font-display font-semibold text-ink text-lg hidden sm:inline">
              Technical Specifications
            </span>
          </div>

          <a
            href={blockU2.datasheet}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-2 rounded-none bg-[#161b29] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#3e5bbf]"
          >
            <svg
              className="w-3.5 h-3.5 text-blue-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Download BRYCK Block Datasheet</span>
          </a>
        </div>

        <Glass tone="sheer" className="overflow-hidden rounded-none border border-black/10">
          <dl>
            {blockU2.specs.map(([k, v], i) => (
              <div
                key={k}
                className={`grid grid-cols-1 gap-1.5 px-6 py-4 md:grid-cols-[minmax(240px,1.2fr)_2fr] md:gap-8 ${
                  i > 0 ? "border-t border-line" : ""
                }`}
              >
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                  {k}
                </dt>
                <dd className="text-[14px] text-ink font-medium whitespace-pre-line">
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </Glass>
      </div>

      {/* 02.2 BRYCK Block E */}
      <div>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-4">
          <div className="flex items-center gap-4">
            <Mono className="text-[#9333ea] font-bold">02.2</Mono>
            <div className="h-8 md:h-10 relative w-44">
              <Image
                src={blockE.logo}
                alt={blockE.name}
                fill
                className="object-contain object-left"
                sizes="176px"
              />
            </div>
            <span className="font-display font-semibold text-ink text-lg hidden sm:inline">
              Technical Specifications
            </span>
          </div>

          <a
            href={blockE.datasheet}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-2 rounded-none bg-[#161b29] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#3e5bbf]"
          >
            <svg
              className="w-3.5 h-3.5 text-blue-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Download BRYCK Block E Datasheet</span>
          </a>
        </div>

        <Glass tone="sheer" className="overflow-hidden rounded-none border border-black/10">
          <dl>
            {blockE.specs.map(([k, v], i) => (
              <div
                key={k}
                className={`grid grid-cols-1 gap-1.5 px-6 py-4 md:grid-cols-[minmax(240px,1.2fr)_2fr] md:gap-8 ${
                  i > 0 ? "border-t border-line" : ""
                }`}
              >
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                  {k}
                </dt>
                <dd className="text-[14px] text-ink font-medium whitespace-pre-line">
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </Glass>
      </div>
    </div>
  );
}
