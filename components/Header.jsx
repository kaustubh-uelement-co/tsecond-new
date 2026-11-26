"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCountry, COUNTRIES, defenceText } from "@/lib/CountryContext";

export default function Header() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState(null);
  const [showLangDesktop, setShowLangDesktop] = useState(false);
  const pathname = usePathname();
  const navRef = useRef(null);
  const langRef = useRef(null);

  const { country, changeCountry } = useCountry();
  const selectedCountry = COUNTRIES.find((c) => c.code === country) || COUNTRIES[0];

  useEffect(() => {
    setHoveredItem(null);
    setMobileOpen(false);
    setExpandedMobile(null);
    setShowLangDesktop(false);
  }, [pathname]);

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setHoveredItem(null);
      }
      if (langRef.current && !langRef.current.contains(e.target)) {
        setShowLangDesktop(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  const navItems = [
    { name: "Products", href: "/products", hasDropdown: true },
    { name: "Industries", href: "/industries", hasDropdown: true },
    { name: "Solutions", href: "/solutions", hasDropdown: true },
    { name: "About us", href: "/company", hasDropdown: false },
    { name: "Careers", href: "/company/careers", hasDropdown: false },
    { name: "News", href: "/news", hasDropdown: false },
  ];

  const isIndia = country === "IN";

  const productsData = {
    title: "Products",
    viewAllHref: "/products",
    columns: [
      {
        sections: [
          {
            title: "EDGE HPC",
            href: "/products/bryck-turbo-hpc",
            items: [
              {
                id: "bryck-turbo-hpc",
                name: "BRYCK Turbo HPC",
                desc: "Tactical Edge AI and Compute Powerhouse",
                href: "/products/bryck-turbo-hpc",
              },
              {
                id: "bryck-fxr",
                name: "BRYCK-FXR",
                desc: "Ruggedized Edge AI Kit",
                href: "/products/bryck-fxr",
              },
              {
                id: "bryck-cube",
                name: "BRYCK CUBE",
                desc: "Enterprise storage solution",
                href: "/products/bryck-cube",
              },
            ],
          },
          ...(isIndia
            ? [
                {
                  title: "DATA CENTER",
                  href: "/products/bryck-fx",
                  items: [
                    {
                      id: "bryck-fx",
                      name: "BRYCK-FX",
                      desc: "Flexible compute node",
                      href: "/products/bryck-fx",
                    },
                  ],
                },
              ]
            : []),
        ],
      },
      {
        sections: [
          {
            title: "EDGE AI",
            href: "/products/bryck-mini",
            items: [
              {
                id: "bryck-mini",
                name: "BRYCK Mini",
                desc: "Portable high-speed storage",
                href: "/products/bryck-mini",
              },
              {
                id: "bryck-ai-mini-gpu",
                name: "BRYCK AI Mini GPU",
                desc: "GPU accelerated edge AI",
                href: "/products/bryck-mini",
              },
              {
                id: "bryck-micro-r",
                name: "BRYCK Micro-R",
                desc: "Micro edge compute",
                href: "/products/bryck-micro-r",
              },
            ],
          },
          ...(isIndia
            ? [
                {
                  title: "SOFTWARE",
                  href: "/products/bryck-os",
                  items: [
                    {
                      id: "bronto-stor",
                      name: "BRONTO STOR",
                      desc: "Massive scale storage",
                      href: "/products/bronto-stor",
                    },
                  ],
                },
              ]
            : []),
        ],
      },
      {
        sections: [
          {
            title: "EDGE STORAGE",
            href: "/products/bryck",
            items: [
              {
                id: "bryck",
                name: "BRYCK",
                desc: "Scalable enterprise storage",
                href: "/products/bryck",
              },
              {
                id: "bryck-block",
                name: "BRYCK Block",
                desc: "Modular storage block",
                href: "/products/bryck-block",
              },
            ],
          },
          {
            title: "DATA MOVEMENT",
            href: "/products/data-dart",
            items: [
              {
                id: "data-dart",
                name: "DATA DART",
                desc: "Fastest data transfer tool",
                href: "/products/data-dart",
              },
            ],
          },
        ],
      },
    ],
  };

  const industriesData = {
    title: "Industries",
    viewAllHref: "/industries",
    items: [
      {
        id: "defence",
        name: `Federal & ${defenceText(country, { capitalize: true })}`,
        desc: "Air-gapped security for tactical environments",
        href: "/industries/defence",
      },
      {
        id: "aerospace",
        name: "Aerospace",
        desc: "Extreme environment data solutions",
        href: "/industries/aerospace",
      },
      {
        id: "enterprise",
        name: "Enterprise",
        desc: "Scalable edge AI and storage",
        href: "/industries/critical-infrastructure",
      },
      {
        id: "manufacturing",
        name: "Manufacturing",
        desc: "Smart manufacturing with edge AI",
        href: "/industries/media-production",
      },
      {
        id: "media-entertainment",
        name: "Media & Entertainment",
        desc: "High-performance media production",
        href: "/industries/media-production",
      },
      {
        id: "energy",
        name: "Energy",
        desc: "Intelligent energy infrastructure",
        href: "/industries/energy-subsurface",
      },
    ],
  };

  const solutionsData = {
    title: "Solutions",
    viewAllHref: "/solutions",
    items: [
      {
        id: "distributed-command-control",
        name: "Distributed Command & Control",
        desc: "Enabling autonomous, secure & coordinated decision-making",
        href: "/solutions/distributed-command-control",
      },
      {
        id: "autonomous-guidance-navigation",
        name: "Guidance & Navigation",
        desc: "Real-time autonomous management of unmanned systems",
        href: "/solutions/autonomous-unmanned-navigation",
      },
      {
        id: "public-safety",
        name: "Public Safety",
        desc: "Air-gapped protection for sensitive information",
        href: "/solutions/critical-infrastructure-protection",
      },
      {
        id: "intelligent-logistics",
        name: "Intelligent Logistics",
        desc: "Autonomous UGV navigation with adaptive pathfinding & terrain analysis",
        href: "/solutions/autonomous-unmanned-navigation",
      },
      {
        id: "field-parts-manufacturing",
        name: "Field Parts Manufacturing",
        desc: "AI-powered detection, tagging & redaction of sensitive data in documents",
        href: "/solutions/real-time-threat-detection",
      },
      {
        id: "real-time-threat-identification",
        name: "Real time threat Identification",
        desc: "Edge AI application using Computer Vision for real-time, localized Object Detection",
        href: "/solutions/real-time-threat-detection",
      },
      {
        id: "tsecond-nvidia",
        name: "Tsecond-NVIDIA",
        desc: "Solutions built for Autonomy, Security and Speed",
        href: "/solutions",
      },
    ],
  };

  const frostedGlassStyle = {
    background:
      "radial-gradient(ellipse 90% 40% at 50% 0%, rgba(130, 170, 240, 0.22) 0%, transparent 75%), linear-gradient(135deg, rgba(32, 44, 66, 0.82) 0%, rgba(18, 25, 40, 0.90) 100%)",
    backdropFilter: "blur(48px) saturate(200%) brightness(102%)",
    WebkitBackdropFilter: "blur(48px) saturate(200%) brightness(102%)",
    border: "1px solid rgba(255, 255, 255, 0.35)",
    boxShadow:
      "0 35px 80px rgba(0, 0, 0, 0.5), inset 0 1.5px 1px 0 rgba(255, 255, 255, 0.45), inset 0 -1px 1px 0 rgba(255, 255, 255, 0.1), inset 0 0 32px 0 rgba(255, 255, 255, 0.05)",
  };

  const frostedNoiseBg = {
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
    backgroundSize: "140px 140px",
  };

  return (
    <>
      {/* ------------------------------------------------ NAVBAR TOP BAR */}
      <header
        ref={navRef}
        className="fixed inset-x-0 top-0 z-[100] w-full h-[76px] bg-white border-b border-gray-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.05)] transition-all duration-200"
        onMouseLeave={() => setHoveredItem(null)}
      >
        <div className="w-full h-full px-5 sm:px-8 lg:px-12 flex items-center justify-between relative">
          {/* Logo on Left */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="flex items-center py-2">
              <Image
                src="/publicOPT/tsecond-logo.webp"
                alt="Tsecond Logo"
                width={140}
                height={46}
                priority
                className="h-[36px] w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links (Center) */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9 h-full">
            {navItems.map((item) => (
              <div
                key={item.name}
                onMouseEnter={() => item.hasDropdown && setHoveredItem(item.name)}
                onClick={() => {
                  if (item.hasDropdown) {
                    setHoveredItem((prev) => (prev === item.name ? null : item.name));
                  }
                }}
                className="group relative h-full flex items-center cursor-pointer select-none"
              >
                <Link
                  href={item.href}
                  onClick={(e) => {
                    if (item.hasDropdown) {
                      e.preventDefault();
                    }
                  }}
                  className={`flex items-center gap-1.5 text-[15px] font-medium tracking-tight h-full transition-colors duration-200 ${
                    isActive(item.href) || hoveredItem === item.name
                      ? "text-[#161b29]"
                      : "text-[#5a6478] hover:text-[#161b29]"
                  }`}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <span className="text-gray-400 group-hover:text-[#161b29] transition-transform duration-200">
                      {hoveredItem === item.name ? (
                        <svg
                          className="w-3.5 h-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      ) : (
                        <svg
                          className="w-3.5 h-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      )}
                    </span>
                  )}

                  {/* Signature gradient underline indicator */}
                  <span
                    className={`absolute left-0 bottom-0 h-[3.8px] [background:linear-gradient(90.05deg,#AA00F8_-11.07%,#008DFF_105.59%)] transition-all duration-300 ${
                      isActive(item.href) || hoveredItem === item.name
                        ? "w-full opacity-100"
                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`}
                  />
                </Link>
              </div>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            {/* Country Selector */}
            <div className="relative" ref={langRef}>
              <button
                type="button"
                onClick={() => setShowLangDesktop((v) => !v)}
                className="flex items-center gap-2 h-[36px] px-3.5 text-xs font-semibold rounded-none border border-gray-300 bg-white hover:bg-gray-50 text-gray-800 shadow-xs transition-all duration-200 cursor-pointer"
                title="Select Region"
              >
                <div className="relative w-[18px] h-[13px] overflow-hidden rounded-[1px] shadow-xs">
                  <Image
                    src={selectedCountry.flag}
                    alt={selectedCountry.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="font-mono text-[11px] tracking-wider uppercase">{selectedCountry.name}</span>
                <svg
                  className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 ${
                    showLangDesktop ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {showLangDesktop && (
                <div
                  className="absolute top-full right-0 mt-1.5 w-40 py-1 rounded-none border border-white/35 shadow-2xl z-50 text-white overflow-hidden animate-in fade-in zoom-in-95 duration-150"
                  style={frostedGlassStyle}
                >
                  <div
                    className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-overlay z-0"
                    style={frostedNoiseBg}
                  />
                  <div className="relative z-10">
                    <div className="px-3.5 py-1 text-[10px] font-mono uppercase tracking-[0.16em] text-gray-300 border-b border-white/15 mb-1">
                      Select Region
                    </div>
                    {COUNTRIES.map((c) => (
                      <button
                        key={c.code}
                        onClick={() => {
                          changeCountry(c.code);
                          setShowLangDesktop(false);
                        }}
                        className={`flex items-center justify-between px-3.5 py-2 text-[13px] w-full text-left transition-colors hover:bg-white/10 ${
                          c.code === country
                            ? "bg-white/15 text-blue-300 font-semibold"
                            : "text-gray-200"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="relative w-[18px] h-[13px] overflow-hidden rounded-[1px] shrink-0">
                            <Image src={c.flag} alt={c.name} fill className="object-cover" />
                          </div>
                          <span>{c.name}</span>
                        </div>
                        {c.code === country && (
                          <span className="text-blue-400 text-xs">●</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="text-[13.5px] font-medium text-[#5a6478] transition-colors hover:text-[#161b29]"
            >
              Partner Log In
            </Link>
            <Link
              href="/contact"
              className="group relative inline-flex items-center overflow-hidden rounded-none bg-[#161b29] px-6 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-[#3e5bbf]"
            >
              <span className="relative">Contact Us</span>
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="lg:hidden p-2 text-[#161b29] rounded-none hover:bg-gray-100 transition-colors"
          >
            {mobileOpen ? (
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>

          {/* ------------------------------------------------ DESKTOP FROSTED GLASS DROPDOWN */}
          {/* Products Dropdown */}
          <div
            className={`absolute top-full left-1/2 -translate-x-1/2 w-fit pt-1 z-50 transition-all duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${
              hoveredItem === "Products"
                ? "opacity-100 visible translate-y-0 pointer-events-auto"
                : "opacity-0 invisible -translate-y-2 pointer-events-none"
            }`}
          >
            <div
              className="text-white border border-white/35 rounded-none overflow-hidden relative shadow-[0_35px_80px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.2)_inset]"
              style={frostedGlassStyle}
            >
              {/* Frosted noise texture */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-overlay z-0"
                style={frostedNoiseBg}
              />

              <div className="relative z-10">
                {/* Top Title Bar */}
                <div className="flex gap-4 items-center pt-6 px-6 pb-2">
                  <span className="text-[17px] font-semibold text-white tracking-tight">
                    Products
                  </span>
                  <span className="text-white/40">|</span>
                  <Link
                    href="/products"
                    className="text-[15.5px] font-medium text-white/90 hover:text-white hover:underline flex items-center gap-2 transition-colors"
                  >
                    View All Products
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>

                {/* Sub-divider line */}
                <div className="h-[1px] bg-white/30 mt-1 mx-6" />

                {/* 3 Column Grid */}
                <div className="grid grid-cols-3 w-full min-w-[1140px] max-w-[1240px]">
                  {productsData.columns.map((col, cIdx) => (
                    <div
                      key={cIdx}
                      className={`flex flex-col p-6 pt-5 pb-8 ${
                        cIdx > 0 ? "border-l border-white/30" : ""
                      }`}
                    >
                      {col.sections.map((sec, sIdx) => (
                        <div key={sec.title} className={sIdx > 0 ? "mt-6" : ""}>
                          <Link
                            href={sec.href}
                            className="text-[16.5px] font-semibold uppercase tracking-wider text-white pb-1.5 border-b border-white/40 block mb-2 hover:text-blue-300 transition-colors"
                          >
                            {sec.title}
                          </Link>
                          <div className="space-y-1">
                            {sec.items.map((subItem) => (
                              <Link
                                key={subItem.id}
                                href={subItem.href}
                                className="group block py-2 px-2.5 rounded-none hover:bg-white/10 transition-colors"
                              >
                                <div className="text-[15px] font-medium text-white group-hover:text-blue-200 transition-colors">
                                  {subItem.name}
                                </div>
                                {subItem.desc && (
                                  <div className="text-[12.5px] text-gray-300 leading-snug">
                                    {subItem.desc}
                                  </div>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}

                      {cIdx === 0 && !isIndia && (
                        <div className="mt-auto pt-6">
                          <Link
                            href="/procure"
                            className="group relative inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-none text-[13px] font-semibold text-white tracking-wide shadow-md transition-all duration-300 hover:brightness-110"
                            style={{
                              background:
                                "linear-gradient(90.05deg, #AA00F8 -11.07%, #008DFF 105.59%)",
                            }}
                          >
                            <span>How to Procure</span>
                            <span className="transition-transform group-hover:translate-x-1">→</span>
                          </Link>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Industries Dropdown */}
          <div
            className={`absolute top-full left-1/2 -translate-x-1/2 w-fit pt-1 z-50 transition-all duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${
              hoveredItem === "Industries"
                ? "opacity-100 visible translate-y-0 pointer-events-auto"
                : "opacity-0 invisible -translate-y-2 pointer-events-none"
            }`}
          >
            <div
              className="text-white border border-white/35 rounded-none overflow-hidden relative shadow-[0_35px_80px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.2)_inset]"
              style={frostedGlassStyle}
            >
              {/* Frosted noise texture */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-overlay z-0"
                style={frostedNoiseBg}
              />

              <div className="relative z-10">
                {/* Top Title Bar */}
                <div className="flex gap-4 items-center pt-6 px-6 pb-2">
                  <span className="text-[17px] font-semibold text-white tracking-tight">
                    Industries
                  </span>
                  <span className="text-white/40">|</span>
                  <Link
                    href="/industries"
                    className="text-[15.5px] font-medium text-white/90 hover:text-white hover:underline flex items-center gap-2 transition-colors"
                  >
                    View All Industries
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>

                {/* Sub-divider line */}
                <div className="h-[1px] bg-white/30 mt-1 mx-6" />

                {/* 2 Column Grid */}
                <div className="grid grid-cols-2 w-full min-w-[880px] p-6 pt-5 pb-8 relative">
                  {/* Center dividing border */}
                  <div className="w-[1px] h-[85%] absolute left-1/2 -translate-x-1/2 border-r border-white/30 top-1/2 -translate-y-1/2" />

                  {industriesData.items.map((subItem, idx) => (
                    <div key={subItem.id} className={idx % 2 !== 0 ? "ps-6" : "pe-6"}>
                      <Link
                        href={subItem.href}
                        className="group block p-3 rounded-none hover:bg-white/10 transition-colors"
                      >
                        <div className="text-[15.5px] font-medium text-white group-hover:text-blue-200 transition-colors">
                          {subItem.name}
                        </div>
                        {subItem.desc && (
                          <div className="text-[13px] text-gray-300 leading-snug mt-0.5">
                            {subItem.desc}
                          </div>
                        )}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Solutions Dropdown */}
          <div
            className={`absolute top-full left-1/2 -translate-x-1/2 w-fit pt-1 z-50 transition-all duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${
              hoveredItem === "Solutions"
                ? "opacity-100 visible translate-y-0 pointer-events-auto"
                : "opacity-0 invisible -translate-y-2 pointer-events-none"
            }`}
          >
            <div
              className="text-white border border-white/35 rounded-none overflow-hidden relative shadow-[0_35px_80px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.2)_inset]"
              style={frostedGlassStyle}
            >
              {/* Frosted noise texture */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-overlay z-0"
                style={frostedNoiseBg}
              />

              <div className="relative z-10">
                {/* Top Title Bar */}
                <div className="flex gap-4 items-center pt-6 px-6 pb-2">
                  <span className="text-[17px] font-semibold text-white tracking-tight">
                    Solutions
                  </span>
                  <span className="text-white/40">|</span>
                  <Link
                    href="/solutions"
                    className="text-[15.5px] font-medium text-white/90 hover:text-white hover:underline flex items-center gap-2 transition-colors"
                  >
                    View All Solutions
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>

                {/* Sub-divider line */}
                <div className="h-[1px] bg-white/30 mt-1 mx-6" />

                {/* 2 Column Grid */}
                <div className="grid grid-cols-2 w-full min-w-[880px] p-6 pt-5 pb-8 relative">
                  {/* Center dividing border */}
                  <div className="w-[1px] h-[85%] absolute left-1/2 -translate-x-1/2 border-r border-white/30 top-1/2 -translate-y-1/2" />

                  {solutionsData.items.map((subItem, idx) => (
                    <div key={subItem.id} className={idx % 2 !== 0 ? "ps-6" : "pe-6"}>
                      <Link
                        href={subItem.href}
                        className="group block p-3 rounded-none hover:bg-white/10 transition-colors"
                      >
                        <div className="text-[15.5px] font-medium text-white group-hover:text-blue-200 transition-colors">
                          {subItem.name}
                        </div>
                        {subItem.desc && (
                          <div className="text-[13px] text-gray-300 leading-snug mt-0.5">
                            {subItem.desc}
                          </div>
                        )}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ------------------------------------------------ MOBILE DRAWER */}
      <div
        className={`fixed inset-0 z-[110] lg:hidden transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
          onClick={() => setMobileOpen(false)}
        />

        {/* Slide-out drawer */}
        <div
          className={`absolute top-0 right-0 w-[min(380px,88vw)] h-full bg-[#161c2a] text-white p-6 shadow-2xl flex flex-col overflow-y-auto transform transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
          }}
        >
          {/* Top Bar inside Drawer */}
          <div className="flex items-center justify-between pb-6 border-b border-white/15">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image
                src="/publicOPT/TSECOND-Logo-White.png"
                alt="Tsecond Logo"
                width={120}
                height={38}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-1.5 text-gray-400 hover:text-white"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Mobile Region Selector */}
          <div className="py-3 px-1 border-b border-white/10 flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-gray-400">
              Region:
            </span>
            <div className="flex items-center gap-1.5">
              {COUNTRIES.map((c) => (
                <button
                  key={c.code}
                  onClick={() => changeCountry(c.code)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-none text-xs font-medium transition-all ${
                    c.code === country
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  <div className="relative w-[14px] h-[10px] overflow-hidden rounded-[1px]">
                    <Image src={c.flag} alt={c.name} fill className="object-cover" />
                  </div>
                  <span>{c.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Accordion Items */}
          <div className="flex flex-col divide-y divide-white/10 mt-3 flex-1">
            {navItems.map((item) => (
              <div key={item.name} className="py-2.5">
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() =>
                        setExpandedMobile((prev) => (prev === item.name ? null : item.name))
                      }
                      className="w-full flex items-center justify-between py-2 text-left text-[16.5px] font-medium"
                    >
                      <span className={expandedMobile === item.name ? "text-blue-300" : "text-white"}>
                        {item.name}
                      </span>
                      <span className="text-gray-400">
                        {expandedMobile === item.name ? "−" : "+"}
                      </span>
                    </button>

                    {expandedMobile === item.name && (
                      <div className="pl-3 pr-1 py-2 space-y-2 border-l border-white/20 mt-1">
                        {item.name === "Products" && (
                          <div className="space-y-3">
                            <Link
                              href="/products"
                              onClick={() => setMobileOpen(false)}
                              className="block text-[13.5px] font-semibold text-blue-300 hover:underline"
                            >
                              View All Products →
                            </Link>
                            {productsData.columns
                              .flatMap((col) => col.sections)
                              .map((sec) => (
                                <div key={sec.title} className="space-y-1">
                                  <div className="text-[12px] font-mono uppercase text-gray-400 tracking-wider">
                                    {sec.title}
                                  </div>
                                  {sec.items.map((sub) => (
                                    <Link
                                      key={sub.id}
                                      href={sub.href}
                                      onClick={() => setMobileOpen(false)}
                                      className="block py-1 text-[14px] text-gray-200 hover:text-white"
                                    >
                                      {sub.name}
                                    </Link>
                                  ))}
                                </div>
                              ))}
                            {!isIndia && (
                              <Link
                                href="/procure"
                                onClick={() => setMobileOpen(false)}
                                className="block mt-4 py-2.5 px-3 text-center rounded-none text-[13px] font-semibold text-white tracking-wide shadow-md transition-all duration-300 hover:brightness-110"
                                style={{
                                  background:
                                    "linear-gradient(90.05deg, #AA00F8 -11.07%, #008DFF 105.59%)",
                                }}
                              >
                                How to Procure →
                              </Link>
                            )}
                          </div>
                        )}

                        {item.name === "Industries" && (
                          <div className="space-y-1.5">
                            <Link
                              href="/industries"
                              onClick={() => setMobileOpen(false)}
                              className="block text-[13.5px] font-semibold text-blue-300 hover:underline mb-2"
                            >
                              View All Industries →
                            </Link>
                            {industriesData.items.map((sub) => (
                              <Link
                                key={sub.id}
                                href={sub.href}
                                onClick={() => setMobileOpen(false)}
                                className="block py-1 text-[14px] text-gray-200 hover:text-white"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}

                        {item.name === "Solutions" && (
                          <div className="space-y-1.5">
                            <Link
                              href="/solutions"
                              onClick={() => setMobileOpen(false)}
                              className="block text-[13.5px] font-semibold text-blue-300 hover:underline mb-2"
                            >
                              View All Solutions →
                            </Link>
                            {solutionsData.items.map((sub) => (
                              <Link
                                key={sub.id}
                                href={sub.href}
                                onClick={() => setMobileOpen(false)}
                                className="block py-1 text-[14px] text-gray-200 hover:text-white"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-[16.5px] font-medium text-white hover:text-blue-300 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Actions inside Mobile Drawer */}
          <div className="pt-6 border-t border-white/15 space-y-3">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center text-sm text-gray-300 hover:text-white py-1.5"
            >
              Partner Log In
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center rounded-none bg-blue-600 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-white font-medium hover:bg-blue-500 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
