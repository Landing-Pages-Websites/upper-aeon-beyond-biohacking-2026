"use client";

import { Reveal } from "./Reveal";

interface Pillar {
  label: string;
  body: string;
  glyph: React.ReactNode;
}

const PILLARS: Pillar[] = [
  {
    label: "Light",
    body: "Mitochondrial stimulation and tissue-level recovery — the catalyst.",
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="4" />
        <path strokeLinecap="round" d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
      </svg>
    ),
  },
  {
    label: "Sound",
    body: "Direct influence on brainwave state and mental regulation.",
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" d="M3 12c2-4 4-4 6 0s4 4 6 0 4-4 6 0" />
        <path strokeLinecap="round" d="M3 17c2-2 4-2 6 0s4 2 6 0 4-2 6 0" opacity=".5" />
      </svg>
    ),
  },
  {
    label: "Vibration",
    body: "Supports vagal tone and autonomic balance — moment to moment.",
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" d="M5 8v8M9 5v14M13 8v8M17 5v14M21 8v8" />
      </svg>
    ),
  },
  {
    label: "Breath",
    body: "Direct lever on CO2 tolerance, HRV, and the stress response.",
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 12c2-6 14-6 16 0M5 16c1.5-3 12.5-3 14 0M8 19c.8-1.5 7.2-1.5 8 0" />
      </svg>
    ),
  },
  {
    label: "Compounds",
    body: "Mitochondrial fuel and neuroprotection at the cellular level.",
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="6.5" cy="9" r="2" />
        <circle cx="17.5" cy="15" r="2" />
        <path strokeLinecap="round" d="M8.5 9h7M8.5 15h7M6.5 11v2M17.5 11v2" />
      </svg>
    ),
  },
  {
    label: "Environment",
    body: "Shapes the body's perception of safety, recovery, and coherence.",
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6" />
      </svg>
    ),
  },
];

export function WhyThisStack() {
  return (
    <section
      id="why-this-stack-works"
      className="relative py-20 sm:py-28 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 50% at 50% 0%, rgba(115,84,230,0.16), transparent 60%)",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <Reveal variant="up">
              <p className="eyebrow">Why This Stack Works</p>
            </Reveal>
            <Reveal variant="up" delay={80}>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[2.85rem] font-semibold text-white leading-[1.05] tracking-tight">
                Most wellness tech is used alone.
                <span className="block text-[var(--color-aurum)] font-light mt-2 text-2xl sm:text-3xl">
                  We combine them strategically.
                </span>
              </h2>
            </Reveal>
            <Reveal variant="up" delay={140}>
              <p className="mt-5 text-[15px] sm:text-base text-[var(--color-text-muted)] leading-relaxed">
                Each modality is a lever. Layered in sequence — light into
                sound into vibration into breath, with compounds and
                environment doing the rest — you get a measurable shift in
                state. Not theory. An experience you can feel within minutes.
              </p>
            </Reveal>
            <Reveal variant="up" delay={200}>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#form" className="btn-primary text-[12px]">
                  Book Your Reset
                </a>
                <a href="#exclusive-offer" className="btn-secondary text-[12px]">
                  See the Offer
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              {PILLARS.map((p, i) => (
                <Reveal key={p.label} variant="up" delay={120 + i * 60}>
                  <article className="card-dark p-6 h-full">
                    <div className="w-11 h-11 rounded-lg bg-[var(--color-violet)]/10 border border-[var(--color-violet)]/40 text-[var(--color-violet-light)] flex items-center justify-center">
                      <span className="w-6 h-6 block">{p.glyph}</span>
                    </div>
                    <h3 className="mt-4 text-base sm:text-lg font-semibold text-white tracking-tight">
                      {p.label}
                    </h3>
                    <p className="mt-2 text-[14px] text-[var(--color-text-muted)] leading-relaxed font-light">
                      {p.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
