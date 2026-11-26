"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { PageHero, Section, Head, Glass, D, Mono } from "@/components/ui";
import { CTA } from "@/components/bits";
import { useCountry } from "@/lib/CountryContext";
import { jobsData } from "@/lib/jobsData";

export default function CareersPage() {
  const { country } = useCountry();
  const [selectedCountryFilter, setSelectedCountryFilter] = useState("ALL");
  const [selectedDept, setSelectedDept] = useState("ALL");
  const [search, setSearch] = useState("");
  const [activeJob, setActiveJob] = useState(null);

  // Sync initial filter with user's detected country
  useEffect(() => {
    if (country === "IN") {
      setSelectedCountryFilter("India");
    } else if (country === "US") {
      setSelectedCountryFilter("USA");
    }
  }, [country]);

  // Prevent background scroll when job detail modal is open
  useEffect(() => {
    document.body.style.overflow = activeJob ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeJob]);

  const departments = useMemo(() => {
    const set = new Set(jobsData.map((j) => j.Department).filter(Boolean));
    return ["ALL", ...Array.from(set).sort()];
  }, []);

  const filteredJobs = useMemo(() => {
    return jobsData.filter((job) => {
      const matchSearch =
        search === "" ||
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.location?.toLowerCase().includes(search.toLowerCase()) ||
        job.summary?.toLowerCase().includes(search.toLowerCase());

      if (!matchSearch) return false;

      const matchCountry =
        selectedCountryFilter === "ALL" ||
        job.country?.toLowerCase() === selectedCountryFilter.toLowerCase();

      if (!matchCountry) return false;

      const matchDept =
        selectedDept === "ALL" || job.Department === selectedDept;

      return matchDept;
    });
  }, [selectedCountryFilter, selectedDept, search]);

  return (
    <>
      <PageHero
        crumb={{ href: "/company", label: "Company" }}
        n="01"
        label="Careers & Opportunities"
        title="Build infrastructure that has to work"
        lede="The constraint is always the same: our systems operate in air-gapped, zero-trust and power-constrained conditions where downtime is not an option. Join our teams in Silicon Valley and Bengaluru."
        meta={[
          [`${jobsData.length}+`, "", "Open Positions"],
          ["SJC / BLR", "", "Engineering Hubs"],
          ["Hardware & AI", "", "Disciplines"],
          ["Full-Time", "", "Role Formats"],
        ]}
      />

      <Section className="py-[clamp(28px,3.5vw,48px)]">
        {/* Filters Bar */}
        <div className="rv mb-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Country Selector Tabs */}
            <div className="flex items-center gap-1.5 rounded-none border border-gray-200/90 bg-white/80 p-1.5 backdrop-blur-md">
              {[
                { id: "ALL", label: "All Regions" },
                { id: "USA", label: "🇺🇸 USA (Silicon Valley / DC)" },
                { id: "India", label: "🇮🇳 India (Bengaluru)" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCountryFilter(tab.id)}
                  className={`rounded-none px-4 py-2 font-mono text-[11px] uppercase tracking-wider transition-all cursor-pointer ${
                    selectedCountryFilter === tab.id
                      ? "bg-[#161b29] text-white shadow-xs"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[260px] flex-1 max-w-[380px]">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search roles or departments..."
                className="w-full rounded-none border border-gray-200/90 bg-white/80 px-4 py-2.5 pl-10 text-xs text-ink placeholder-gray-400 backdrop-blur-md shadow-xs focus:border-accent focus:bg-white focus:outline-none"
              />
              <svg
                className="absolute left-3.5 top-3 h-3.5 w-3.5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
          </div>

          {/* Department Pills */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-line">
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted py-1 mr-1">
              Department:
            </span>
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`rounded-none px-3 py-1 font-mono text-[10px] uppercase tracking-wider transition-all cursor-pointer ${
                  selectedDept === dept
                    ? "bg-blue-600 text-white font-semibold"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="rv mb-4 flex items-center justify-between text-xs font-mono text-muted">
          <span>Showing {filteredJobs.length} open position{filteredJobs.length === 1 ? "" : "s"}</span>
          <span>Locations: San Jose, CA · Washington, DC · Bengaluru, India</span>
        </div>

        {/* Jobs List */}
        <div className="rv space-y-3">
          {filteredJobs.map((job) => (
            <Glass
              key={job.id}
              lift
              onClick={() => setActiveJob(job)}
              className="group flex flex-col md:flex-row md:items-center justify-between gap-5 rounded-none p-6 cursor-pointer transition-all duration-300 hover:border-accent/40 hover:bg-white/90"
            >
              <div className="flex-1 space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-none bg-blue-50 px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-wider text-blue-700 font-semibold">
                    {job.Department}
                  </span>
                  <span className="rounded-none bg-gray-100 px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-wider text-gray-700">
                    {job.jobType || "Full Time"}
                  </span>
                  {job.sitting && (
                    <span className="rounded-none bg-purple-50 px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-wider text-purple-700">
                      {job.sitting}
                    </span>
                  )}
                  {job.experience && (
                    <span className="font-mono text-[10px] text-muted">
                      · {job.experience}
                    </span>
                  )}
                </div>

                <h3 className="font-display text-[18px] font-semibold text-ink group-hover:text-accent transition-colors">
                  {job.title}
                </h3>

                <p className="text-[13px] leading-[1.6] text-muted line-clamp-2 max-w-[85ch]">
                  {job.summary}
                </p>
              </div>

              <div className="flex items-center justify-between md:flex-col md:items-end gap-3 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-line">
                <div className="text-left md:text-right">
                  <span className="font-mono text-[10.5px] uppercase tracking-wider text-gray-700 font-medium block">
                    {job.location}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-faint">
                    {job.country}
                  </span>
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-none bg-[#161b29] px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-white shadow-xs transition-all group-hover:bg-accent">
                  <span>View Role</span>
                  <span>→</span>
                </span>
              </div>
            </Glass>
          ))}

          {filteredJobs.length === 0 && (
            <div className="rounded-none border border-dashed border-gray-300 py-16 text-center">
              <p className="text-[15px] text-gray-500">
                No roles match your search or filter criteria.
              </p>
              <button
                onClick={() => {
                  setSelectedCountryFilter("ALL");
                  setSelectedDept("ALL");
                  setSearch("");
                }}
                className="mt-4 rounded-none bg-[#161b29] px-5 py-2 font-mono text-[10.5px] uppercase tracking-wider text-white"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </Section>

      {/* Culture & Engineering Values */}
      <Section className="py-[clamp(28px,3.5vw,48px)] bg-gray-50/50 border-t border-line">
        <Head
          n="02"
          label="Culture & Standards"
          title="Why builders choose Tsecond"
          lede="We build mission-grade compute and petabyte storage that deploys on forward operating bases, aircraft, and zero-trust environments."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              n: "01",
              title: "Tactical Edge Constraints",
              desc: "Solve genuine engineering puzzles: high heat, high vibration, zero connectivity, and microsecond latency.",
            },
            {
              n: "02",
              title: "Global Collaboration",
              desc: "Seamless teamwork across our Silicon Valley headquarters and Bengaluru R&D and manufacturing center.",
            },
            {
              n: "03",
              title: "Rapid Deployment Cycles",
              desc: "Prototype, fabricate, validate, and ship real physical systems to sovereign clients and tier-1 defense programs.",
            },
          ].map((item) => (
            <Glass key={item.n} lift className="rounded-2xl p-6">
              <Mono className="text-accent">{item.n}</Mono>
              <h4 className="mt-3 font-display text-[16px] font-semibold text-ink">
                {item.title}
              </h4>
              <p className="mt-2 text-[13px] leading-[1.65] text-muted">
                {item.desc}
              </p>
            </Glass>
          ))}
        </div>
      </Section>

      {/* Job Details Modal Drawer */}
      {activeJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setActiveJob(null)}
          />

          {/* Modal Content */}
          <div className="relative z-10 max-h-[90vh] w-full max-w-[840px] overflow-y-auto rounded-none border border-white/20 bg-white p-6 shadow-2xl sm:p-10">
            {/* Close Button */}
            <button
              onClick={() => setActiveJob(null)}
              className="absolute top-6 right-6 p-2 rounded-none hover:bg-gray-100 text-gray-500 hover:text-gray-800 transition-colors"
              aria-label="Close details"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="rounded-none bg-blue-50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-blue-700 font-semibold">
                    {activeJob.Department}
                  </span>
                  <span className="rounded-none bg-gray-100 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-gray-700">
                    {activeJob.location}
                  </span>
                  {activeJob.sitting && (
                    <span className="rounded-none bg-purple-50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-purple-700">
                      {activeJob.sitting}
                    </span>
                  )}
                </div>

                <h2 className="font-display text-[26px] sm:text-[32px] font-bold text-ink">
                  {activeJob.title}
                </h2>

                {activeJob.reporting && (
                  <p className="mt-1 font-mono text-[11px] text-muted">
                    Reports to: {activeJob.reporting}
                  </p>
                )}
              </div>

              {/* Summary */}
              <div className="rounded-none bg-gray-50 p-5 border border-line">
                <h4 className="font-mono text-[10px] uppercase tracking-wider text-muted mb-2">
                  Role Overview
                </h4>
                <p className="text-[14px] leading-[1.7] text-gray-800">
                  {activeJob.summary}
                </p>
              </div>

              {/* Responsibilities */}
              {activeJob.responsibilities && activeJob.responsibilities.length > 0 && (
                <div className="space-y-3">
                  <h4 className="font-display text-[17px] font-semibold text-ink">
                    Key Responsibilities
                  </h4>
                  <div className="space-y-2 text-[14px] leading-[1.7] text-gray-700">
                    {activeJob.responsibilities.map((r, i) => (
                      <div
                        key={i}
                        className="pl-2 border-l-2 border-blue-400"
                        dangerouslySetInnerHTML={{ __html: typeof r === "string" ? r : "" }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Required Skills */}
              {activeJob.requiredSkills && activeJob.requiredSkills.length > 0 && (
                <div className="space-y-3">
                  <h4 className="font-display text-[17px] font-semibold text-ink">
                    Required Experience &amp; Capabilities
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-[14px] leading-[1.65] text-gray-700">
                    {activeJob.requiredSkills.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Preferred Skills */}
              {activeJob.preferredSkills && activeJob.preferredSkills.length > 0 && (
                <div className="space-y-3">
                  <h4 className="font-display text-[17px] font-semibold text-ink">
                    Preferred Qualifications
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-[14px] leading-[1.65] text-gray-700">
                    {activeJob.preferredSkills.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Compensation */}
              {activeJob.compensation && (
                <div className="rounded-none border border-line bg-gray-50/70 p-4">
                  <h5 className="font-mono text-[10px] uppercase tracking-wider text-muted mb-1">
                    Compensation &amp; Benefits
                  </h5>
                  <p className="text-[13px] text-gray-800">{activeJob.compensation}</p>
                </div>
              )}

              {/* Apply Action Bar */}
              <div className="pt-6 border-t border-line flex flex-wrap items-center justify-between gap-4">
                <a
                  href={`mailto:careers@tsecond.ai?subject=Application%20for%20${encodeURIComponent(
                    activeJob.title
                  )}%20(${encodeURIComponent(activeJob.location)})`}
                  className="rounded-none bg-[#161b29] px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.16em] text-white hover:bg-accent transition-colors shadow-md"
                >
                  Apply by Email →
                </a>

                <p className="text-[12px] text-muted">
                  Send CV to <strong className="text-ink">careers@tsecond.ai</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <CTA n="03" />
    </>
  );
}
