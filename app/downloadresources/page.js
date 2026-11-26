"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PageHero, Section, Head, Glass, D, Mono } from "@/components/ui";
import { useCountry, COUNTRIES, getProductDatasheet } from "@/lib/CountryContext";
import { PRODUCTS } from "@/lib/data";

const WHITEPAPERS = [
  {
    title: "AWS & Tsecond: Tactical Edge Data Ingestion",
    filename: "/whitepapers/Tsecond_AWS_DT2_WP.pdf",
    category: "whitepapers",
    type: "Whitepaper",
    size: "983 KB",
    date: "2024",
    desc: "Accelerating hybrid cloud data workflows with petabyte-scale, air-gapped physical transport into AWS infrastructure.",
  },
  {
    title: "Air-Gapped Ransomware Resilience at the Edge",
    filename: "/whitepapers/Tsecond_Ransomeware_Whitepaper_v4.0.pdf",
    category: "whitepapers",
    type: "Security Architecture",
    size: "567 KB",
    date: "2024",
    desc: "How immutable zero-trust physical media eliminates remote attack surfaces and prevents ransomware propagation.",
  },
  {
    title: "Equinix Edge Integration & Interconnect",
    filename: "/whitepapers/TsecondExuinixWhitepaper.pdf",
    category: "whitepapers",
    type: "Technical Report",
    size: "572 KB",
    date: "2024",
    desc: "Unified edge-to-core interconnection strategy utilizing BRYCK hardware inside Equinix colocation hubs.",
  },
  {
    title: "RED Digital Cinema & High-Throughput Production",
    filename: "/whitepapers/Tsecond_RED_Whitepaper_v1.2.pdf",
    category: "case-studies",
    type: "Case Study",
    size: "279 KB",
    date: "2024",
    desc: "Zero-latency camera-to-cloud workflows processing uncompressed 8K RAW streams directly on remote film sets.",
  },
  {
    title: "Picture Shop Enterprise Post-Production Workflow",
    filename: "/whitepapers/Tsecond_Picture Shop_Whitepaper_v1.7.pdf",
    category: "case-studies",
    type: "Case Study",
    size: "1.0 MB",
    date: "2024",
    desc: "How premier post-production facility Picture Shop accelerated global dailies distribution with Tsecond systems.",
  },
];

export default function DownloadResourcesPage() {
  const { country, changeCountry } = useCountry();
  const [filter, setFilter] = useState("all");
  const isIndia = country === "IN";

  const datasheetResources = PRODUCTS.map((p) => {
    const file = getProductDatasheet(p, country);
    return {
      title: `${p.name} Datasheet`,
      filename: file,
      category: "datasheets",
      type: `${isIndia ? "India" : "US"} Edition Datasheet`,
      size: "350 KB - 1.2 MB",
      date: `Rev ${p.rev}`,
      image: p.image,
      desc: p.tagline,
      badge: isIndia ? "IN" : "US",
    };
  });

  const portfolioDatasheet = {
    title: "Tsecond Full Product Portfolio Datasheet",
    filename: "/Tsecond_Product_Portfolio_Datasheet.pdf",
    category: "datasheets",
    type: "Comprehensive Catalog",
    size: "5.9 MB",
    date: "2024",
    desc: "Complete architectural specifications across all Edge HPC, Edge AI, Storage, and Data Movement systems.",
    badge: "GLOBAL",
  };

  const allResources = [portfolioDatasheet, ...datasheetResources, ...WHITEPAPERS];

  const filteredResources =
    filter === "all"
      ? allResources
      : allResources.filter((r) => r.category === filter);

  return (
    <>
      <PageHero
        crumb={{ href: "/", label: "Home / Resources" }}
        n="08"
        label="Technical Library"
        title="Download Resources"
        lede="Access official datasheets, architectural whitepapers, and operational deployment guides for Tsecond systems worldwide."
      >
        {/* Country toggle banner */}
        <div className="rv mt-8 flex flex-wrap items-center gap-3" data-d="170">
          <div className="flex items-center gap-2 rounded-none border border-gray-200 bg-white/80 px-4 py-2 text-xs font-medium text-gray-700 shadow-xs backdrop-blur-md">
            <span className="text-gray-400">Current Region:</span>
            <span className="font-semibold text-blue-600">
              {COUNTRIES.find((c) => c.code === country)?.name || "USA"}
            </span>
          </div>

          <div className="flex items-center gap-1">
            {COUNTRIES.map((c) => (
              <button
                key={c.code}
                onClick={() => changeCountry(c.code)}
                className={`flex items-center gap-1.5 rounded-none px-3.5 py-2 text-xs font-semibold transition-all cursor-pointer ${
                  c.code === country
                    ? "bg-[#161b29] text-white shadow-sm"
                    : "bg-white/60 text-gray-600 hover:bg-white border border-gray-200"
                }`}
              >
                <div className="relative h-2.5 w-3.5 overflow-hidden rounded-[1px]">
                  <Image src={c.flag} alt={c.name} fill className="object-cover" />
                </div>
                <span>{c.name}</span>
              </button>
            ))}
          </div>
        </div>
      </PageHero>

      <Section className="py-[clamp(34px,5vw,70px)]">
        {/* Category Filter Tabs */}
        <div className="rv mb-10 flex flex-wrap gap-2 border-b border-gray-200/80 pb-4">
          {[
            { id: "all", label: "All Resources" },
            { id: "datasheets", label: "Product Datasheets" },
            { id: "whitepapers", label: "Technical Whitepapers" },
            { id: "case-studies", label: "Case Studies" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`rounded-none px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-all cursor-pointer ${
                filter === tab.id
                  ? "bg-[#161b29] text-white shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredResources.map((res, i) => (
            <Glass
              key={`${res.title}-${i}`}
              lift
              className="group flex flex-col justify-between rounded-none p-6 transition-all duration-300 hover:border-blue-400/50"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-blue-600">
                    {res.type}
                  </span>
                  {res.badge && (
                    <span className="rounded-none bg-blue-50 px-2 py-0.5 font-mono text-[9px] font-bold text-blue-700">
                      {res.badge}
                    </span>
                  )}
                </div>

                {res.image && (
                  <div className="relative my-4 h-28 w-full overflow-hidden rounded-none bg-black/[0.03] p-2 flex items-center justify-center">
                    <Image
                      src={res.image}
                      alt={res.title}
                      fill
                      className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                  </div>
                )}

                <h3 className="mt-3 text-[16px] font-semibold tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors">
                  {res.title}
                </h3>
                <p className="mt-2 text-[12.5px] leading-[1.6] text-gray-600 line-clamp-2">
                  {res.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="font-mono text-[10px] text-gray-400">
                  <span>{res.date}</span> · <span>{res.size}</span>
                </div>

                <a
                  href={res.filename}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="inline-flex items-center gap-1.5 rounded-none bg-gray-900 px-3.5 py-2 font-mono text-[10px] uppercase tracking-wider text-white transition-all group-hover:bg-blue-600"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span>Download</span>
                </a>
              </div>
            </Glass>
          ))}
        </div>
      </Section>
    </>
  );
}
