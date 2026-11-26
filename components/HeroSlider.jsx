"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Lab, Lede, Btn } from "@/components/ui";
import { HeroArt } from "@/components/bits";
import { useCountry, defenceText } from "@/lib/CountryContext";

export default function HeroSlider() {
  const [slide, setSlide] = useState(0); // 0 = White Architecture, 1 = Tactical Video
  const { country } = useCountry();
  const defenceWord = defenceText(country);

  // Typewriter and subtitle cycling for Slide 1 (Tactical Video Hero)
  const titles = [
    "Enabling Mission-Critical teams with BRYCK",
    "Designed for Tactical Edge.",
    "Air-gapped AI Infrastructure.",
    "Ready for the Mission.",
    "Petabyte-scale rugged Storage.",
  ];

  const subtitles = [
    `Shaping the Future of ${defenceWord} Data.`,
    "High-Throughput, Rugged Edge AI Storage with On-Device Inferencing",
    `Zero-trust security designed for ${defenceWord} operations.`,
    "Delivering real-time intelligence at the tactical edge.",
  ];

  const [displayedText, setDisplayedText] = useState(titles[0]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(titles[0].length);
  const [deleting, setDeleting] = useState(false);
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  // Subtitle cycling
  useEffect(() => {
    const timer = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % subtitles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [subtitles.length]);

  // Typing animation for Slide 1
  useEffect(() => {
    if (slide !== 1) return;
    const currentLine = titles[lineIndex];
    const speed = deleting ? 45 : 85;

    const timeout = setTimeout(() => {
      if (!deleting && charIndex < currentLine.length) {
        setDisplayedText(currentLine.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (deleting && charIndex > 0) {
        setDisplayedText(currentLine.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!deleting && charIndex === currentLine.length) {
        setTimeout(() => setDeleting(true), 4000);
      } else if (deleting && charIndex === 0) {
        setLineIndex((prev) => (prev + 1) % titles.length);
        setDeleting(false);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [slide, charIndex, deleting, lineIndex, titles]);

  // Autoplay video when switched to slide 1
  useEffect(() => {
    if (slide === 1 && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [slide]);

  // Read URL query params on mount (?hero=video or ?slide=1)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const h = params.get("hero") || params.get("slide");
      if (h === "video" || h === "1") {
        setSlide(1);
      }
    }
  }, []);

  const handleSlideChange = (newSlide) => {
    setSlide(newSlide);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (newSlide === 1) {
        url.searchParams.set("hero", "video");
      } else {
        url.searchParams.delete("hero");
      }
      window.history.replaceState({}, "", url.toString());
    }
  };

  const posterImg =
    country === "IN"
      ? "/landingOPT/India_Landing_Page-new.webp"
      : "/landingOPT/USA-Landing-Page01.webp";

  return (
    <div className="relative w-full h-[calc(100vh-76px)] mt-[76px] overflow-hidden select-none bg-white">
      {/* ------------------------------------------------------------- SLIDE 0: CURRENT WHITE HERO */}
      <div
        className={`absolute inset-0 w-full h-full flex flex-col justify-center transition-opacity duration-700 ease-in-out ${
          slide === 0
            ? "opacity-100 z-10 pointer-events-auto"
            : "opacity-0 z-0 pointer-events-none"
        }`}
      >
        <div className="wrap w-full py-6 md:py-10">
          <div className="grid items-center gap-[clamp(24px,3.5vw,48px)] lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="rv">
                <Lab n="01" className="mb-3">Mission Environments</Lab>
              </div>
              <h1 className="font-display text-[clamp(34px,5.2vw,70px)] font-semibold leading-[1.05] tracking-[-0.035em] text-ink">
                <span className="ml"><i>Enabling mission</i></span>
                <span className="ml"><i>critical teams</i></span>
                <span className="ml"><i>with <em className="not-italic text-accent">BRYCK</em></i></span>
              </h1>
              <div className="rv" data-d="420">
                <Lede className="mt-4 text-base md:text-lg max-w-2xl">
                  Delivering real-time intelligence at the tactical edge through hyperconverged
                  Edge AI, Storage &amp; Compute solutions.
                </Lede>
              </div>
              <div className="rv mt-6 flex flex-wrap gap-3" data-d="540">
                <Btn href="/solutions">Explore More Solutions</Btn>
                <Btn href="#pipeline" variant="glass">See the pipeline</Btn>
              </div>
            </div>

            <div className="rv flex justify-center items-center max-w-[420px] lg:max-w-none mx-auto w-full" data-d="300">
              <HeroArt />
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- SLIDE 1: TACTICAL VIDEO HERO */}
      <div
        className={`absolute inset-0 w-full h-full flex flex-col justify-center transition-opacity duration-700 ease-in-out ${
          slide === 1
            ? "opacity-100 z-10 pointer-events-auto"
            : "opacity-0 z-0 pointer-events-none"
        }`}
      >
        {/* Full-bleed Background Video & Poster */}
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#090d16]">
          {/* Fallback image */}
          <Image
            src={posterImg}
            alt="Tactical Edge Defense"
            fill
            priority={slide === 1}
            className={`object-cover transition-opacity duration-1000 ${
              videoLoaded ? "opacity-0" : "opacity-100"
            }`}
            sizes="100vw"
          />

          {/* Desktop & Mobile Video */}
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            src="/videos/tsecond-intro-desktop-v3.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onLoadedData={() => setVideoLoaded(true)}
          />

          {/* Dark Tactical Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/40 z-10" />
          <div className="absolute inset-0 bg-black/30 z-10" />
        </div>

        {/* Content Box */}
        <div className="wrap relative z-20 w-full py-6 md:py-10 text-white">
          <div className="max-w-3xl">
            {/* Gradient Kicker matching tsecond-website-next */}
            <div className="mb-3 inline-block">
              <span
                className="font-mono text-sm md:text-base font-bold uppercase tracking-[0.22em]"
                style={{
                  background: "linear-gradient(90deg, #7214FF 0%, #14B7FF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Edge. AI. Compute
              </span>
            </div>

            {/* Dynamic Headline with Typing Animation */}
            <h1 className="font-display text-[clamp(34px,5.2vw,66px)] font-bold leading-[1.08] tracking-[-0.03em] text-white">
              <span>{displayedText}</span>
              <span className="ml-1 inline-block w-[3px] h-[0.8em] bg-[#14B7FF] align-baseline animate-pulse" />
            </h1>

            {/* Cycling Subtitle */}
            <div className="relative mt-5 min-h-[3.2em] text-base md:text-xl text-gray-200">
              {subtitles.map((sub, i) => (
                <p
                  key={i}
                  className={`absolute inset-x-0 top-0 transition-all duration-700 leading-relaxed ${
                    i === subtitleIndex
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  {sub}
                </p>
              ))}
            </div>

            {/* Action Buttons matching tsecond-website-next styling with sharp edges */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="group relative inline-flex items-center gap-2.5 rounded-none px-7 py-3.5 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-lg transition-all duration-300 hover:brightness-110 hover:shadow-cyan-500/25"
                style={{
                  background: "linear-gradient(90.05deg, #AA00F8 -11.07%, #008DFF 105.59%)",
                }}
              >
                <span>Explore Products</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 rounded-none border border-white/40 bg-black/40 px-7 py-3.5 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black hover:border-white shadow-lg"
              >
                <span>Schedule a Demo</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- FIXED STATIONARY TOGGLE VIEW BUTTON */}
      {/* Stays in the EXACT same pixel position at bottom-right of the hero screen */}
      <button
        type="button"
        onClick={() => handleSlideChange(slide === 0 ? 1 : 0)}
        aria-label={slide === 0 ? "Switch to Tactical Video View" : "Switch to Architecture View"}
        title={slide === 0 ? "Toggle View: Tactical Video" : "Toggle View: Architecture View"}
        className={`group absolute bottom-6 right-6 md:bottom-8 md:right-12 z-30 inline-flex items-center gap-2.5 rounded-none border px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] shadow-lg backdrop-blur-md transition-all duration-300 select-none ${
          slide === 0
            ? "border-black/20 bg-white/95 text-ink hover:border-[#161b29] hover:bg-[#161b29] hover:text-white"
            : "border-white/30 bg-black/75 text-white hover:border-white hover:bg-white hover:text-black"
        }`}
      >
        <span>Toggle View</span>
        <span
          className={`flex h-5 w-5 items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 ${
            slide === 0 ? "bg-black/10 group-hover:bg-white/20" : "bg-white/15 group-hover:bg-black/20"
          }`}
        >
          <svg
            className="w-3.5 h-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </span>
      </button>
    </div>
  );
}
