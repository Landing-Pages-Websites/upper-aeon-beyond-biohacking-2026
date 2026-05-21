"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";
import { SHOP_HREF } from "./Brand";

interface Product {
  name: string;
  tagline: string;
  body: string;
  bestFor: string;
  benefits: string[];
  image: string;
  imageAlt: string;
  shopUrl?: string;
}

const PRODUCTS: Product[] = [
  {
    name: "Lumetol Blue™ Bars",
    tagline: "Advanced methylene blue delivery.",
    body: "A clean, controlled way to dose methylene blue — designed to support mitochondrial energy, mental clarity, focus and cellular performance. The same compound you'll sample at the booth, in a daily-use bar.",
    bestFor:
      "High performers, longevity enthusiasts, cognitive optimization, and recovery support.",
    benefits: [
      "Mitochondrial energy",
      "Mental clarity",
      "Focus & cognition",
      "Cellular performance",
      "Neuroprotection",
    ],
    image: "/images/lumetol-blue.jpg",
    imageAlt: "Lumetol Blue methylene blue bars by Upper Aeon",
    shopUrl: "https://www.upperaeon.com/products/lumetol-blue%E2%84%A2-bars-1",
  },
  {
    name: "NeuroVIZR™ Experience Pack",
    tagline: "Drug-free neurotechnology for state change.",
    body: "Light + sound + neuro-acoustic entrainment in a single headset. 100+ guided sessions for meditation depth, focus, creativity, stress reduction and sleep. The same headset on display at the booth.",
    bestFor:
      "Meditators, creative pros, executives recovering from burnout, and anyone optimizing brain health.",
    benefits: [
      "Brain optimization",
      "Meditation depth",
      "Emotional reset",
      "Creativity & focus",
      "Stress reduction",
    ],
    image: "/images/neurovizr.png",
    imageAlt: "NeuroVIZR Experience Pack — light and sound headset",
    shopUrl: "https://www.upperaeon.com/products/neurovizr-experience-pack",
  },
  {
    name: "Apollo Neuro",
    tagline: "Wearable vagus-nerve technology.",
    body: "Clinically designed vibration patterns that help your body shift between calm, recovery, focus, and energy. Wear it on your wrist or ankle and pair with the SmartVibes app for guided programs.",
    bestFor:
      "Anyone managing stress, sleep debt, or recovery — and athletes who want HRV gains without supplements.",
    benefits: [
      "HRV improvement",
      "Recovery",
      "Calm under pressure",
      "Sleep quality",
      "Cognitive performance",
    ],
    image: "/images/apollo-neuro.png",
    imageAlt: "Apollo Neuro wearable nervous-system technology",
    shopUrl:
      "https://www.upperaeon.com/products/apollo-wearable-1-yr-smartvibes-ai-membership",
  },
  {
    name: "RedLife PEMF Bio-Forge Mat",
    tagline: "PEMF + near & far infrared — at home.",
    body: "The same family of recovery mats featured at the booth experience. Combines pulsed electromagnetic field therapy, near-infrared light, and far-infrared heat to support recovery, circulation, detoxification, and deep nervous-system restoration.",
    bestFor:
      "Recovery-focused athletes, sleep-quality seekers, and anyone integrating a daily nervous-system protocol at home.",
    benefits: [
      "Recovery & circulation",
      "Detoxification",
      "Nervous system regulation",
      "Energy production",
      "Deep restoration",
    ],
    image: "/images/cera-system.png",
    imageAlt: "Recovery mat with PEMF and infrared therapy",
  },
];

export function Products() {
  return (
    <section
      id="products"
      className="relative py-20 sm:py-28 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 aurora-soft pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <Reveal variant="up">
            <p className="eyebrow">The Stack</p>
          </Reveal>
          <Reveal variant="up" delay={80}>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-[1.05] tracking-tight">
              The products powering the reset.
            </h2>
          </Reveal>
          <Reveal variant="up" delay={140}>
            <p className="mt-5 text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
              Each tool was curated to do one job exceptionally well — and to
              stack with the others. Try them at the booth. Take a starter kit
              home. Build your own daily reset protocol.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 space-y-6 sm:space-y-8">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.name} variant="up" delay={60 + i * 50}>
              <article
                className="card-dark-elev p-6 sm:p-8 lg:p-10 grid lg:grid-cols-12 gap-6 lg:gap-10 items-center"
              >
                <div
                  className={`lg:col-span-5 ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[rgba(115,84,230,0.18)] via-[rgba(2,14,44,0.4)] to-[rgba(214,184,122,0.12)] border border-[var(--color-border)]">
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      fill
                      className="object-contain p-6 sm:p-8"
                      sizes="(min-width:1024px) 40vw, 100vw"
                    />
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <p className="text-[10px] uppercase tracking-[0.24em] font-semibold text-[var(--color-aurum)]">
                    {String(i + 1).padStart(2, "0")} / 04
                  </p>
                  <h3 className="mt-2 text-2xl sm:text-3xl font-semibold text-white leading-tight tracking-tight">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-[15px] sm:text-base italic text-[var(--color-aurum)] font-light">
                    {p.tagline}
                  </p>
                  <p className="mt-4 text-[15px] text-[var(--color-text-muted)] leading-relaxed">
                    {p.body}
                  </p>
                  <ul className="mt-5 grid grid-cols-2 gap-x-5 gap-y-2 text-[13px] text-[var(--color-text)] font-light">
                    {p.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--color-aurum)] shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 pt-5 border-t border-[var(--color-border)] text-[13px] text-[var(--color-text-dim)] leading-relaxed">
                    <span className="text-[var(--color-text-muted)] font-medium uppercase tracking-[0.18em] text-[10px]">
                      Best for:
                    </span>{" "}
                    {p.bestFor}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a href="#form" className="btn-primary text-[12px]">
                      Try It at the Booth
                    </a>
                    {p.shopUrl && (
                      <a
                        href={p.shopUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-[12px]"
                      >
                        View on Upper Aeon
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal variant="up" delay={200}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <a
              href={SHOP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-[12px] sm:text-[13px]"
            >
              Shop the Full Stack
            </a>
            <a href="#form" className="btn-secondary text-[12px] sm:text-[13px]">
              Book a Reset First
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
