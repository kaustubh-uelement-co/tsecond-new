"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { PageHero, Section, Glass, D, Mono } from "@/components/ui";
import { CTA } from "@/components/bits";
import { getAllArticles } from "@/lib/blogData";

const CATEGORIES = [
  "All",
  "NVIDIA & AI",
  "Defense & Federal",
  "Product Releases",
  "Partnerships",
  "Edge Architecture",
];

function matchesCategory(a, tab) {
  if (tab === "All") return true;
  const t = ((a.tags || []).join(" ") + " " + (a.categories || []).join(" ")).toLowerCase();
  const title = (a.title || "").toLowerCase();
  const desc = (a.description || "").toLowerCase();
  const combined = t + " " + title + " " + desc;

  if (tab === "NVIDIA & AI") {
    return combined.includes("nvidia") || combined.includes("ai") || combined.includes("intelligence");
  }
  if (tab === "Defense & Federal") {
    return (
      combined.includes("defense") ||
      combined.includes("military") ||
      combined.includes("crada") ||
      combined.includes("devcom") ||
      combined.includes("army") ||
      combined.includes("sosa") ||
      combined.includes("federal") ||
      combined.includes("public sector")
    );
  }
  if (tab === "Product Releases") {
    return (
      combined.includes("bryck") ||
      combined.includes("launch") ||
      combined.includes("release") ||
      combined.includes("product") ||
      combined.includes("namespace") ||
      combined.includes("startup")
    );
  }
  if (tab === "Partnerships") {
    return (
      combined.includes("partner") ||
      combined.includes("collaborat") ||
      combined.includes("agreement") ||
      combined.includes("carahsoft") ||
      combined.includes("bigbear") ||
      combined.includes("red") ||
      combined.includes("picture shop")
    );
  }
  if (tab === "Edge Architecture") {
    return (
      combined.includes("edge") ||
      combined.includes("cloud") ||
      combined.includes("migration") ||
      combined.includes("storage") ||
      combined.includes("transfer") ||
      combined.includes("architecture") ||
      combined.includes("data")
    );
  }
  return true;
}

export default function NewsPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");

  const allArticles = useMemo(() => getAllArticles(), []);

  const filteredArticles = useMemo(() => {
    return allArticles.filter((a) => {
      const matchSearch =
        search === "" ||
        a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.description?.toLowerCase().includes(search.toLowerCase()) ||
        a.tags?.some((t) => t.toLowerCase().includes(search.toLowerCase()));

      if (!matchSearch) return false;
      return matchesCategory(a, activeTab);
    });
  }, [allArticles, activeTab, search]);

  const featured = allArticles[0];
  const isDefaultView = activeTab === "All" && search === "";

  return (
    <>
      <PageHero
        n="01"
        label="Newsroom & Insights"
        title="Field Dispatches & Architecture"
        lede="Programme notices, tactical deployments, technology partnerships and research publications from Tsecond."
      >
        {/* Search Input */}
        <div className="rv mt-8 max-w-[480px]" data-d="180">
          <div className="relative flex items-center">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles, topics or systems..."
              className="w-full rounded-none border border-gray-200/90 bg-white/80 px-5 py-3 pl-11 text-xs text-ink placeholder-gray-400 backdrop-blur-md shadow-xs transition-all focus:border-accent focus:bg-white focus:outline-none"
            />
            <svg
              className="absolute left-4 h-4 w-4 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>
      </PageHero>

      <Section className="py-[clamp(28px,3.5vw,48px)]">
        {/* Featured Hero Article */}
        {featured && isDefaultView && (
          <div className="rv mb-12">
            <Glass
              as={Link}
              href={`/news/${featured.slug}`}
              lift
              className="group grid grid-cols-1 overflow-hidden rounded-none transition-all duration-300 lg:grid-cols-12"
            >
              <div className="relative min-h-[300px] lg:min-h-[360px] bg-black/5 lg:col-span-7">
                {featured.image && (
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                )}
                <div className="absolute top-4 left-4">
                  <span className="rounded-none bg-[#161b29]/85 px-3.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-white backdrop-blur-md">
                    Featured Dispatch
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-between p-8 sm:p-10 lg:col-span-5">
                <div>
                  <div className="flex items-center gap-3">
                    <Mono className="text-accent">
                      {featured.tags?.[0] || "Strategic"}
                    </Mono>
                    <span className="text-xs text-gray-300">·</span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                      {featured.date}
                    </span>
                  </div>

                  <D as="h2" size="sm" className="mt-4 group-hover:text-accent transition-colors">
                    {featured.title}
                  </D>

                  <p className="mt-3 text-[13.5px] leading-[1.65] text-body line-clamp-3">
                    {featured.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-line pt-4">
                  <div className="flex items-center gap-3">
                    {featured.author?.avatar && (
                      <div className="relative h-8 w-8 overflow-hidden rounded-none bg-gray-200">
                        <Image
                          src={featured.author.avatar}
                          alt={featured.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <p className="text-[12px] font-semibold text-ink">
                        {featured.author?.name || "Tsecond Editorial"}
                      </p>
                      <p className="text-[10px] text-muted">
                        {featured.readTime || "8 min read"}
                      </p>
                    </div>
                  </div>

                  <span className="font-mono text-[10px] uppercase tracking-wider text-accent group-hover:translate-x-1 transition-transform">
                    Read article →
                  </span>
                </div>
              </div>
            </Glass>
          </div>
        )}

        {/* Filter Category Tabs */}
        <div className="rv mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-none px-4 py-2 font-mono text-[10.5px] uppercase tracking-[0.14em] transition-all cursor-pointer ${
                  activeTab === tab
                    ? "bg-[#161b29] text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="font-mono text-xs text-muted">
            Showing {isDefaultView ? filteredArticles.length : filteredArticles.length} dispatch{filteredArticles.length === 1 ? "" : "es"}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(isDefaultView ? filteredArticles.slice(1) : filteredArticles).map((art) => (
            <Glass
              as={Link}
              href={`/news/${art.slug}`}
              key={art.slug}
              lift
              className="group flex flex-col justify-between overflow-hidden rounded-none p-0 transition-all duration-300 hover:border-accent/40"
            >
              <div>
                {/* Thumbnail Image */}
                <div className="relative h-48 w-full overflow-hidden bg-black/5">
                  {art.image ? (
                    <Image
                      src={art.image}
                      alt={art.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-106"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gray-100 font-mono text-[10px] uppercase tracking-widest text-gray-400">
                      Tsecond Dispatch
                    </div>
                  )}

                  {art.tags?.[0] && (
                    <span className="absolute top-3 left-3 rounded-none bg-[#161b29]/85 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-white backdrop-blur-md">
                      {art.tags[0]}
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 font-mono text-[10px] text-muted">
                    <span>{art.date}</span>
                    <span>·</span>
                    <span>{art.readTime || "6 min read"}</span>
                  </div>

                  <h3 className="mt-3 font-display text-[16px] font-semibold leading-[1.3] text-ink group-hover:text-accent transition-colors line-clamp-2">
                    {art.title}
                  </h3>

                  <p className="mt-2 text-[12.5px] leading-[1.6] text-muted line-clamp-3">
                    {art.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="flex items-center justify-between border-t border-line pt-4">
                  {art.author ? (
                    <div className="flex items-center gap-2.5">
                      {art.author.avatar && (
                        <div className="relative h-6 w-6 overflow-hidden rounded-none bg-gray-200 shrink-0">
                          <Image
                            src={art.author.avatar}
                            alt={art.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <span className="text-[11.5px] font-medium text-gray-700 truncate max-w-[150px]">
                        {art.author.name}
                      </span>
                    </div>
                  ) : (
                    <span className="text-[11px] font-mono text-faint">
                      Tsecond Research
                    </span>
                  )}

                  <span className="font-mono text-[9.5px] uppercase tracking-wider text-accent group-hover:translate-x-1 transition-transform">
                    Read ↗
                  </span>
                </div>
              </div>
            </Glass>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="py-16 text-center rounded-none border border-dashed border-gray-300">
            <p className="text-[15px] text-gray-500">
              No dispatches match the selected filter or search term.
            </p>
            <button
              onClick={() => {
                setActiveTab("All");
                setSearch("");
              }}
              className="mt-4 rounded-none bg-gray-900 px-5 py-2 font-mono text-[10.5px] uppercase tracking-wider text-white hover:bg-accent transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </Section>

      <CTA n="02" />
    </>
  );
}
