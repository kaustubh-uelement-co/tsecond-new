"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/* Marks <html> as scripted, then reveals .rv / .ml as they enter view.
   The hiding rule is scoped to .js, so without script the page is fully
   visible — an animation must never be able to blank the content. */
export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");

    const nodes = document.querySelectorAll(".rv:not(.in), .ml:not(.in)");

    if (!("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          const d = Number(en.target.dataset.d || 0);
          setTimeout(() => en.target.classList.add("in"), d);
          io.unobserve(en.target);
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.05 }
    );
    nodes.forEach((n) => io.observe(n));

    // anything already on screen reveals immediately
    const prime = requestAnimationFrame(() => {
      document.querySelectorAll(".ml:not(.in)").forEach((n) => {
        if (n.getBoundingClientRect().top < window.innerHeight * 0.92) n.classList.add("in");
      });
    });

    // failsafe — never leave content hidden
    const t = setTimeout(() => {
      document.querySelectorAll(".rv:not(.in), .ml:not(.in)").forEach((n) => {
        if (n.getBoundingClientRect().top < window.innerHeight * 1.3) n.classList.add("in");
      });
    }, 1600);

    return () => {
      io.disconnect();
      cancelAnimationFrame(prime);
      clearTimeout(t);
    };
  }, [pathname]);

  return null;
}
