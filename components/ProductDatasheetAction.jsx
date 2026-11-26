"use client";

import Link from "next/link";
import { useCountry, getProductDatasheet } from "@/lib/CountryContext";

export default function ProductDatasheetAction({ product }) {
  const { country } = useCountry();
  const datasheetUrl = getProductDatasheet(product, country);
  const isIndia = country === "IN";
  const editionLabel = isIndia ? "IN Edition" : "US Edition";

  return (
    <div className="flex flex-wrap items-center gap-3">
      {product?.datasheets && product.datasheets.length > 0 ? (
        product.datasheets.map((ds, idx) => (
          <a
            key={idx}
            href={ds.file}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="group inline-flex items-center gap-2.5 rounded-none bg-[#161b29] px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-[#3e5bbf] hover:shadow-lg"
          >
            <svg
              className="w-4 h-4 text-blue-400 group-hover:text-white transition-colors"
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
            <span>{ds.label}</span>
            {ds.badge && (
              <span className="rounded-none bg-white/15 px-2 py-0.5 text-[9px] font-semibold text-blue-200">
                {ds.badge}
              </span>
            )}
          </a>
        ))
      ) : (
        <a
          href={datasheetUrl}
          target="_blank"
          rel="noopener noreferrer"
          download
          className="group inline-flex items-center gap-2.5 rounded-none bg-[#161b29] px-6 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-[#3e5bbf] hover:shadow-lg"
        >
          <svg
            className="w-4 h-4 text-blue-400 group-hover:text-white transition-colors"
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
          <span>Download Datasheet</span>
          <span className="rounded-none bg-white/15 px-2 py-0.5 text-[9px] font-semibold text-blue-200">
            {editionLabel}
          </span>
        </a>
      )}

      <Link
        href="/contact"
        className="inline-flex items-center gap-2 rounded-none border border-gray-300/80 bg-white/70 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-gray-800 backdrop-blur-md transition-all duration-300 hover:bg-white hover:border-gray-400"
      >
        Request a Demo
      </Link>

      {!isIndia && (
        <Link
          href="/procure"
          className="inline-flex items-center gap-2 rounded-none px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-white shadow-md transition-all duration-300 hover:brightness-110"
          style={{
            background: "linear-gradient(90.05deg, #AA00F8 -11.07%, #008DFF 105.59%)",
          }}
        >
          <span>How to Procure</span>
          <span>→</span>
        </Link>
      )}
    </div>
  );
}
