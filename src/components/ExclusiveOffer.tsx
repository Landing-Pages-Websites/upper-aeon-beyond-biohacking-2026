"use client";

import { Reveal } from "./Reveal";
import { SHOP_HREF } from "./Brand";

const BONUSES = [
  "Complimentary SATORI cognitive formula samples",
  "Complimentary Trilogy samples",
  "Complimentary methylene blue samples",
  "Complimentary 10-minute Nervous System Reset session",
];

const COHORT_INCLUDES = [
  "Breathwork mastery (live with Pavel)",
  "Nervous system regulation protocols",
  "Performance optimization frameworks",
  "Stress resilience systems",
  "Sleep & recovery frameworks",
  "Daily reset practices",
  "Live coaching + implementation calls",
  "Private community access",
];

export function ExclusiveOffer() {
  return (
    <section
      id="exclusive-offer"
      className="relative py-20 sm:py-28 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(115,84,230,0.22), transparent 60%), radial-gradient(ellipse 60% 70% at 50% 100%, rgba(214,184,122,0.10), transparent 60%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal variant="up">
            <p className="eyebrow justify-center inline-flex">Exclusive Conference Offer</p>
          </Reveal>
          <Reveal variant="up" delay={80}>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-[1.05] tracking-tight">
              The Nervous System
              <span className="block bg-clip-text text-transparent bg-[linear-gradient(115deg,#d6b87a_10%,#ead9ad_55%,#9c84f0_95%)]">
                Reset Bundle
              </span>
            </h2>
          </Reveal>
          <Reveal variant="up" delay={140}>
            <p className="mt-5 text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
              Purchase the complete conference stack at the booth and receive a
              FREE 8-week cohort with Pavel Aeon and a daily roster of bonus
              samples — a $5,000 value, included.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Cohort card */}
          <Reveal variant="up" delay={100}>
            <article className="card-dark-elev p-7 sm:p-9 relative h-full">
              <div className="absolute -top-3 left-7 inline-flex items-center gap-2 rounded-full bg-[var(--color-violet)] px-3 py-1 text-[10px] uppercase tracking-[0.22em] font-semibold text-white shadow-lg">
                $5,000 Value · Included
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white leading-tight tracking-tight">
                FREE 8-Week Nervous System Reset Cohort
              </h3>
              <p className="mt-1.5 text-[15px] italic text-[var(--color-aurum)] font-light">
                Led live by Pavel Aeon.
              </p>
              <p className="mt-4 text-[15px] text-[var(--color-text-muted)] leading-relaxed">
                Eight weeks of live training inside the same protocols our
                community uses to rebuild HRV, raise stress capacity, and
                lock in daily reset practices. Real coaching, not a recorded
                course.
              </p>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2.5 text-[13px] text-[var(--color-text)] font-light">
                {COHORT_INCLUDES.map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <svg
                      className="w-3.5 h-3.5 mt-1 text-[var(--color-violet-light)] shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          {/* Bonuses card */}
          <Reveal variant="up" delay={160}>
            <article className="card-dark-elev p-7 sm:p-9 relative h-full">
              <div className="absolute -top-3 left-7 inline-flex items-center gap-2 rounded-full bg-[var(--color-aurum)] px-3 py-1 text-[10px] uppercase tracking-[0.22em] font-semibold text-[#0d152e] shadow-lg">
                Free Conference Bonuses
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white leading-tight tracking-tight">
                Walk Up to the Booth & Receive
              </h3>
              <p className="mt-1.5 text-[15px] italic text-[var(--color-aurum)] font-light">
                Available daily. First-come, first-served.
              </p>
              <ul className="mt-6 space-y-3.5 text-[15px] text-[var(--color-text)] font-light">
                {BONUSES.map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-aurum)] shrink-0" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-[var(--color-border)] text-[12px] uppercase tracking-[0.18em] text-[var(--color-text-dim)]">
                Limited availability each day of the conference.
              </div>
            </article>
          </Reveal>
        </div>

        <Reveal variant="up" delay={220}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <a href="#form" className="btn-primary text-[12px] sm:text-[13px]">
              Reserve My Reset Session
            </a>
            <a
              href={SHOP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-[12px] sm:text-[13px]"
            >
              Shop the Stack
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
