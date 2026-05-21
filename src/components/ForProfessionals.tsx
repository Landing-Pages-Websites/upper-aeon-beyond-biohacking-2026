"use client";

import { Reveal } from "./Reveal";

const PARTNERS = [
  "Wellness clinics",
  "Recovery centers",
  "Longevity practices",
  "Functional medicine clinics",
  "Performance studios",
  "High-end spas",
  "Biohacking facilities",
];

const PARTNERSHIP_OFFERINGS = [
  {
    title: "Partnership opportunities",
    body: "Co-brand a nervous-system reset offering inside your existing practice. We do the protocol design; you keep the client relationship.",
  },
  {
    title: "Product bundles",
    body: "Curated stacks of Lumetol Blue, NeuroVIZR, Apollo Neuro, and the PEMF mat — sized and priced for clinic and studio settings.",
  },
  {
    title: "Wholesale pricing",
    body: "Tiered wholesale on every Upper Aeon-curated product, with white-glove onboarding for your front desk and recovery team.",
  },
  {
    title: "Experiential wellness integration",
    body: "Bring the full reset experience into your facility — from layout and lighting through breathwork protocols and staff training.",
  },
  {
    title: "Nervous system optimization programming",
    body: "Six and eight-week protocols you can run with your clients, with materials, tracking, and live touch-points with the Upper Aeon team.",
  },
];

export function ForProfessionals() {
  return (
    <section
      id="for-professionals"
      className="relative py-20 sm:py-28 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 0% 50%, rgba(214,184,122,0.16), transparent 60%), radial-gradient(ellipse 55% 50% at 100% 100%, rgba(115,84,230,0.18), transparent 60%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal variant="up">
              <p className="eyebrow">For Clinic Owners & Longevity Pros</p>
            </Reveal>
            <Reveal variant="up" delay={80}>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[2.65rem] font-semibold text-white leading-[1.05] tracking-tight">
                Bring the reset
                <span className="block text-[var(--color-aurum)] font-light mt-2 text-2xl sm:text-3xl">
                  into your practice.
                </span>
              </h2>
            </Reveal>
            <Reveal variant="up" delay={140}>
              <p className="mt-5 text-[15px] sm:text-base text-[var(--color-text-muted)] leading-relaxed">
                If you own or operate a wellness, recovery, or longevity space,
                visit us at the booth to explore how Upper Aeon&apos;s reset
                protocols, products, and live programming can plug into what
                you already do — without competing with it.
              </p>
            </Reveal>

            <Reveal variant="up" delay={200}>
              <ul className="mt-6 grid grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-2 text-[14px] text-[var(--color-text-muted)] font-light">
                {PARTNERS.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-aurum)] shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal variant="up" delay={260}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#form" className="btn-gold text-[12px]">
                  Book a Partnership Conversation
                </a>
                <a href="#visit-us" className="btn-secondary text-[12px]">
                  Find Our Booth
                </a>
              </div>
              <p className="mt-3 text-[12px] text-[var(--color-text-dim)] leading-relaxed">
                Identify yourself as a clinic owner or longevity pro on the
                form and we&apos;ll route you to the partnerships team
                directly.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal variant="up" delay={120}>
              <div className="card-dark-elev p-7 sm:p-9">
                <h3 className="text-base uppercase tracking-[0.22em] text-[var(--color-aurum)] font-semibold">
                  Visit us to explore
                </h3>
                <div className="mt-6 grid sm:grid-cols-2 gap-x-7 gap-y-6">
                  {PARTNERSHIP_OFFERINGS.map((o, i) => (
                    <div key={o.title}>
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-violet-light)] font-semibold">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="flex-1 h-px bg-[var(--color-border)]" />
                      </div>
                      <h4 className="mt-2.5 text-base sm:text-[1.05rem] font-semibold text-white leading-snug tracking-tight">
                        {o.title}
                      </h4>
                      <p className="mt-1.5 text-[14px] text-[var(--color-text-muted)] leading-relaxed font-light">
                        {o.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
