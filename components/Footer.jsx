"use client";

import Link from "next/link";
import Image from "next/image";
import { useCountry, defenceText } from "@/lib/CountryContext";

export default function Footer() {
  const { country } = useCountry();
  const isIndia = country === "IN";

  return (
    <footer className="relative mt-[clamp(40px,6vw,80px)] bg-[#0d111c] text-white overflow-hidden border-t border-white/10">
      <div className="wrap pt-14 pb-12">
        <div className="hair mb-[clamp(34px,4.5vw,50px)] bg-white/15" />

        <p
          className="mb-[clamp(30px,4vw,50px)] font-display text-[clamp(40px,9vw,130px)] font-bold leading-[0.88] tracking-[-0.04em] text-transparent select-none"
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.14)" }}
        >
          EDGE. AI.
          <br />
          COMPUTE.
        </p>

        <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Col */}
          <div className="lg:col-span-2 pr-0 lg:pr-8">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/publicOPT/TSECOND-Logo-White.png"
                alt="Tsecond Logo"
                width={150}
                height={46}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="mt-2 max-w-[42ch] text-[13.5px] leading-[1.7] text-gray-400">
              Tsecond is a {defenceText(country)}-tech company specializing in mission-critical,
              low-SWaP Edge AI and storage infrastructure for tactical operations. Its
              hyperconverged BRYCK platform integrates AI inferencing, petabyte-scale storage,
              and high-performance compute into ruggedized systems engineered for air-gapped and
              DDIL environments.
            </p>
          </div>

          {/* Products Col */}
          <div>
            <h5 className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400">
              Products
            </h5>
            <ul className="space-y-2.5">
              <li>
                <Link href="/products/bryck-mini" className="text-[13.5px] text-gray-300 hover:text-white transition-colors">
                  Edge AI
                </Link>
              </li>
              <li>
                <Link href="/products/bryck-turbo-hpc" className="text-[13.5px] text-gray-300 hover:text-white transition-colors">
                  Edge HPC
                </Link>
              </li>
              <li>
                <Link href="/products/bryck" className="text-[13.5px] text-gray-300 hover:text-white transition-colors">
                  Edge Storage
                </Link>
              </li>
              <li>
                <Link href="/products/data-dart" className="text-[13.5px] text-gray-300 hover:text-white transition-colors">
                  Data Movement
                </Link>
              </li>
              {isIndia && (
                <>
                  <li>
                    <Link href="/products/bryck-fx" className="text-[13.5px] text-gray-300 hover:text-white transition-colors">
                      Data Center
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/bryck-os" className="text-[13.5px] text-gray-300 hover:text-white transition-colors">
                      Software
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Industries Col */}
          <div>
            <h5 className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400">
              Industries
            </h5>
            <ul className="space-y-2.5">
              <li>
                <Link href="/industries/defence" className="text-[13.5px] text-gray-300 hover:text-white transition-colors">
                  Federal &amp; {defenceText(country, { capitalize: true })}
                </Link>
              </li>
              <li>
                <Link href="/industries/aerospace" className="text-[13.5px] text-gray-300 hover:text-white transition-colors">
                  Aerospace
                </Link>
              </li>
              <li>
                <Link href="/industries/critical-infrastructure" className="text-[13.5px] text-gray-300 hover:text-white transition-colors">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/industries/media-production" className="text-[13.5px] text-gray-300 hover:text-white transition-colors">
                  M&amp;E
                </Link>
              </li>
              <li>
                <Link href="/industries/energy-subsurface" className="text-[13.5px] text-gray-300 hover:text-white transition-colors">
                  Energy
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Partnerships Col */}
          <div>
            <h5 className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400">
              Resources
            </h5>
            <ul className="space-y-2.5">
              {isIndia ? (
                <li>
                  <Link
                    href="/downloadresources"
                    className="text-[13.5px] font-medium text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1.5"
                  >
                    <span>Download Resources</span>
                    <span>→</span>
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    href="/procure"
                    className="text-[13.5px] font-medium text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1.5"
                  >
                    <span>How to Procure</span>
                    <span>→</span>
                  </Link>
                </li>
              )}
              {!isIndia && (
                <li>
                  <Link href="/procure" className="text-[13.5px] text-gray-300 hover:text-white transition-colors">
                    US Army (DEVCOM)
                  </Link>
                </li>
              )}
              <li>
                <Link href="/solutions" className="text-[13.5px] text-gray-300 hover:text-white transition-colors">
                  NVIDIA Partnership
                </Link>
              </li>
              <li>
                <a
                  href="/Tsecond-Privacy-Policy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13.5px] text-gray-300 hover:text-white transition-colors"
                >
                  Privacy Policy (PDF)
                </a>
              </li>
              <li>
                <Link href="/company/careers" className="text-[13.5px] text-gray-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="hair bg-white/10" />
        <div className="flex flex-wrap items-center justify-between gap-x-9 gap-y-3 py-6 font-mono text-[10px] uppercase tracking-[0.14em] text-gray-400">
          <span>
            © {new Date().getFullYear()} Tsecond {isIndia ? "Technologies Pvt. Ltd." : "Inc."}
          </span>
          <span>
            {isIndia
              ? "Bengaluru, Karnataka, India"
              : "1735 N 1st St, Suite 110, San Jose, CA 95112"}
          </span>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <span>·</span>
            <a
              href="/Tsecond-Privacy-Policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <span>·</span>
            <Link href="/legal" className="hover:text-white transition-colors">
              Legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
