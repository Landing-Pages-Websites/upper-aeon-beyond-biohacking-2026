"use client";

import { Logo } from "./Logo";
import { BOOTH_LOCATOR, EVENT_CITY, EVENT_DATES, SHOP_HREF } from "./Brand";

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-border)] py-12 sm:py-14">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(2,14,44,0.85) 80%)",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
        <div className="flex flex-col gap-3">
          <Logo className="h-10" />
          <p className="text-[13px] text-[var(--color-text-muted)] max-w-md leading-relaxed font-light">
            Visit Upper Aeon at the {BOOTH_LOCATOR.toLowerCase()} during{" "}
            {EVENT_CITY}, {EVENT_DATES}.
          </p>
        </div>

        <div className="flex flex-col sm:items-end gap-3 text-[13px] text-[var(--color-text-muted)]">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href="https://www.upperaeon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-aurum-light)] transition-colors"
            >
              upperaeon.com
            </a>
            <a
              href={SHOP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-aurum-light)] transition-colors"
            >
              Shop
            </a>
            <a
              href="#form"
              className="hover:text-[var(--color-aurum-light)] transition-colors"
            >
              Book Reset
            </a>
          </div>
          <p className="text-[12px] uppercase tracking-[0.22em] text-[var(--color-text-dim)]">
            © {new Date().getFullYear()} Upper Aeon · All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
