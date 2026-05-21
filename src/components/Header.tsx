"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#020e2c]/85 backdrop-blur-md border-b border-[rgba(244,241,234,0.10)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-4">
        <a href="#hero" className="shrink-0" aria-label="Upper Aeon — home">
          <Logo className="h-10 sm:h-12" />
        </a>

        <nav
          className="hidden md:flex items-center gap-7 text-[12px] uppercase tracking-[0.18em] font-medium text-[var(--color-text-muted)]"
          aria-label="Page navigation"
        >
          <a href="#what-youll-experience" className="hover:text-[var(--color-aurum-light)] transition-colors">
            Experience
          </a>
          <a href="#exclusive-offer" className="hover:text-[var(--color-aurum-light)] transition-colors">
            Offer
          </a>
          <a href="#products" className="hover:text-[var(--color-aurum-light)] transition-colors">
            Products
          </a>
          <a href="#visit-us" className="hover:text-[var(--color-aurum-light)] transition-colors">
            Visit
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#form"
            className="btn-primary text-[11px] sm:text-[12px] px-4 sm:px-5 py-2.5"
          >
            Book Reset
          </a>
        </div>
      </div>
    </header>
  );
}
