"use client";

import { Reveal } from "./Reveal";
import { LeadForm } from "./LeadForm";
import { BOOTH_LOCATOR } from "./Brand";

export function FormBlock() {
  return (
    <section
      id="form"
      className="relative py-20 sm:py-28 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 aurora-violet pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-6">
          <Reveal variant="up">
            <p className="eyebrow">Reset Session Booking</p>
          </Reveal>
          <Reveal variant="up" delay={80}>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[2.85rem] font-semibold text-white leading-[1.05] tracking-tight">
              Reserve your{" "}
              <span className="bg-clip-text text-transparent bg-[linear-gradient(115deg,#d6b87a_10%,#ead9ad_55%,#9c84f0_95%)]">
                10-minute reset
              </span>{" "}
              at the booth.
            </h2>
          </Reveal>
          <Reveal variant="up" delay={140}>
            <p className="mt-5 text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
              Sessions run continuously throughout each day of the conference
              and they fill quickly. Drop your details and we&apos;ll text you
              a confirmation with your reset window plus the booth locator
              before doors open.
            </p>
          </Reveal>

          <Reveal variant="up" delay={200}>
            <div className="mt-8 card-dark p-6 sm:p-7">
              <h3 className="text-[11px] uppercase tracking-[0.24em] font-semibold text-[var(--color-aurum)]">
                What you&rsquo;ll get
              </h3>
              <ul className="mt-4 space-y-2.5 text-[14px] sm:text-[15px] text-[var(--color-text)] font-light">
                {[
                  "A confirmed reset session at the booth (5–15 minutes)",
                  "Free SATORI, Trilogy and methylene-blue samples on-site",
                  "Eligibility for the $5,000 cohort bonus with Pavel",
                  "Text confirmation with the booth locator + reset window",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <svg
                      className="w-4 h-4 mt-1 text-[var(--color-violet-light)] shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.8"
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

              <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
                <p className="text-[10px] uppercase tracking-[0.24em] font-semibold text-[var(--color-text-dim)]">
                  Where to find us
                </p>
                <p className="mt-1.5 text-[14px] text-white leading-snug">
                  {BOOTH_LOCATOR}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal variant="right" delay={120}>
            <LeadForm
              variant="section"
              headline="Reserve My Reset Session"
              subhead="Takes ten seconds. We'll text you your reset window."
              ctaLabel="Reserve My Reset Session"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
