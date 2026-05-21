"use client";

import { Reveal } from "./Reveal";
import {
  BOOTH_LOCATOR,
  EVENT_CITY,
  EVENT_DATES,
  EVENT_NAME,
  SHOP_HREF,
} from "./Brand";

const EXPERIENCE_TAGS = [
  "Deep recovery",
  "Calm under pressure",
  "Cognitive clarity",
  "Nervous system regulation",
  "Human optimization in real time",
];

export function VisitUs() {
  return (
    <section
      id="visit-us"
      className="relative py-20 sm:py-28 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 starfield opacity-40 pointer-events-none" />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(115,84,230,0.30), transparent 65%), linear-gradient(180deg, rgba(2,14,44,0.50) 0%, rgba(2,14,44,0.92) 100%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <Reveal variant="up">
          <p className="eyebrow justify-center inline-flex">Find the Booth</p>
        </Reveal>

        <Reveal variant="up" delay={80}>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-[3rem] font-semibold text-white leading-[1.05] tracking-tight">
            Visit Us at
            <span className="block bg-clip-text text-transparent bg-[linear-gradient(115deg,#d6b87a_10%,#ead9ad_55%,#9c84f0_95%)] mt-2">
              {EVENT_NAME}
            </span>
          </h2>
        </Reveal>

        <Reveal variant="up" delay={140}>
          <div className="mt-8 inline-flex flex-col items-center gap-1.5 glow-pill rounded-2xl px-7 py-5 max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.28em] font-semibold text-[var(--color-aurum)]">
              Where to find us
            </span>
            <span className="text-lg sm:text-xl font-medium text-white leading-snug">
              {BOOTH_LOCATOR}
            </span>
            <span className="mt-2 text-[13px] text-[var(--color-text-muted)] uppercase tracking-[0.18em]">
              {EVENT_CITY} · {EVENT_DATES}
            </span>
          </div>
        </Reveal>

        <Reveal variant="up" delay={200}>
          <p className="mt-9 text-base sm:text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto leading-relaxed">
            Come experience deep recovery, calm under pressure, cognitive
            clarity and nervous-system regulation in real time. Limited reset
            sessions are available each day — reserve your spot now or stop by
            early at the conference.
          </p>
        </Reveal>

        <Reveal variant="up" delay={260}>
          <ul className="mt-7 flex flex-wrap justify-center gap-2.5">
            {EXPERIENCE_TAGS.map((tag) => (
              <li
                key={tag}
                className="text-[12px] uppercase tracking-[0.18em] font-medium text-[var(--color-text-muted)] border border-[var(--color-border-strong)] rounded-full px-3.5 py-1.5"
              >
                {tag}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal variant="up" delay={320}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="#form" className="btn-primary text-[12px] sm:text-[13px]">
              Book Your Reset Session
            </a>
            <a
              href="#exclusive-offer"
              className="btn-gold text-[12px] sm:text-[13px]"
            >
              Claim Conference Offer
            </a>
            <a
              href={SHOP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-[12px] sm:text-[13px]"
            >
              Shop the Stack
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
