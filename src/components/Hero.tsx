"use client";

import Image from "next/image";
import { LeadForm } from "./LeadForm";
import { Reveal } from "./Reveal";
import { BOOTH_LOCATOR, EVENT_CITY, EVENT_DATES, SHOP_HREF } from "./Brand";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-24 overflow-hidden text-[var(--color-text)]"
    >
      {/* Backdrop video — the Upper Aeon brand reel (matches their .com hero).
          Falls back to the Pavel/NeuroVIZR still as poster so we still get
          a visual on reduced-motion / data-saver / failed-load contexts. */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <video
          src="/hero-bg.mp4"
          poster="/images/hero-pavel-vizr.png"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover object-[55%_30%] opacity-[0.28] mix-blend-luminosity motion-reduce:hidden"
        />
        {/* Reduced-motion fallback — Pavel still */}
        <Image
          src="/images/hero-pavel-vizr.png"
          alt=""
          fill
          priority
          className="object-cover object-[60%_30%] sm:object-[55%_25%] opacity-[0.18] mix-blend-luminosity hidden motion-reduce:block"
        />
      </div>

      {/* Animated orbs — slow, large, drifting violet + cyan blooms */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="orb orb-violet absolute -top-32 -left-32 w-[36rem] h-[36rem] rounded-full" />
        <span className="orb orb-cyan absolute top-1/3 -right-40 w-[32rem] h-[32rem] rounded-full" />
        <span className="orb orb-magenta absolute -bottom-40 left-1/4 w-[30rem] h-[30rem] rounded-full" />
      </div>

      {/* Aurora gradient wash */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none aurora-violet"
      />

      {/* Drifting starfield twinkles */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none starfield drift opacity-60"
      />

      {/* Base navy fade so text always reads */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(2,14,44,0.50) 0%, rgba(2,14,44,0.72) 60%, rgba(2,14,44,0.92) 100%)",
        }}
      />

      {/* Top-edge scanline accent — that festival-laser energy */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(115,84,230,0.0) 15%, rgba(156,132,240,0.85) 50%, rgba(115,84,230,0.0) 85%, transparent 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left: copy */}
        <div className="lg:col-span-7 lg:pt-6 text-center lg:text-left">
          <Reveal variant="up">
            <span className="inline-flex items-center gap-2 glow-pill rounded-full px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-violet-light)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-violet-light)] animate-pulse" />
              {EVENT_CITY} · {EVENT_DATES}
            </span>
          </Reveal>

          <Reveal variant="up" delay={80}>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[3.85rem] xl:text-[4.25rem] font-semibold leading-[1.02] tracking-tight text-white">
              Beyond Biohacking{" "}
              <span className="aurum-glow bg-clip-text text-transparent bg-[linear-gradient(115deg,#d6b87a_0%,#ead9ad_30%,#9c84f0_70%,#ff4dd5_100%)] bg-[length:200%_100%]">
                Conference 2026
              </span>
            </h1>
          </Reveal>

          <Reveal variant="up" delay={140}>
            <p className="mt-4 text-xl sm:text-2xl text-white/85 leading-snug max-w-2xl mx-auto lg:mx-0 font-light">
              The Ultimate Nervous System Reset Experience.
            </p>
          </Reveal>

          <Reveal variant="up" delay={200}>
            <p className="mt-5 text-base sm:text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Experience the future of human optimization at{" "}
              <span className="text-white font-medium">{BOOTH_LOCATOR}</span>.
              For 5 to 15 minutes, your body enters a deeply restorative state
              through a strategic stack of PEMF, infrared, neuro-acoustic
              light, breath, and vagus nerve stimulation. Not theory. An
              experience you can feel within minutes.
            </p>
          </Reveal>

          <Reveal variant="up" delay={260}>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-3 max-w-xl mx-auto lg:mx-0 text-left">
              {[
                "10-minute nervous system reset",
                "Hosted by Pavel Aeon",
                "Free conference samples on-site",
                "$5,000 cohort bonus included",
              ].map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-2.5 text-white text-[14px] sm:text-[15px] font-light"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-aurum)] shrink-0 animate-pulse-soft" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="up" delay={340}>
            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a href="#form" className="btn-primary text-[12px] sm:text-[13px]">
                Book Your Reset Session
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h14M13 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
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
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            </div>
          </Reveal>

          <Reveal variant="up" delay={400}>
            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-x-7 gap-y-3 text-[12px] uppercase tracking-[0.2em] text-[var(--color-text-dim)]">
              <span>Dave Asprey · &ldquo;My go-to reset.&rdquo;</span>
              <span aria-hidden className="hidden sm:block w-px h-3 bg-[var(--color-border)]" />
              <span>Ben Greenfield · &ldquo;Game changer.&rdquo;</span>
              <span aria-hidden className="hidden sm:block w-px h-3 bg-[var(--color-border)]" />
              <span>100K+ served</span>
            </div>
          </Reveal>
        </div>

        {/* Right: Form card */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <Reveal variant="right" delay={120}>
            <div className="relative">
              <div className="hidden lg:flex absolute -top-4 -right-4 z-20 items-center gap-2 glow-pill rounded-xl px-3.5 py-2.5 backdrop-blur">
                <svg
                  className="w-5 h-5 text-[var(--color-aurum-light)] shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3M21 12c0 5-4 9-9 9s-9-4-9-9 4-9 9-9 9 4 9 9z"
                  />
                </svg>
                <div className="text-left">
                  <div className="text-[9px] uppercase tracking-[0.22em] font-semibold text-[var(--color-aurum-light)] leading-none">
                    Limited Daily
                  </div>
                  <div className="text-[12px] font-semibold text-white leading-tight">
                    First-Come, First-Served
                  </div>
                </div>
              </div>

              <LeadForm
                variant="hero"
                headline="Book Your 10-Minute Reset Session"
                subhead="Tell us how to reach you and we'll text your reset window plus the booth locator before doors open."
                ctaLabel="Reserve My Reset Session"
              />
            </div>
          </Reveal>
        </div>
      </div>

      {/* Bottom-edge scanline accent */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(214,184,122,0.0) 15%, rgba(214,184,122,0.6) 50%, rgba(214,184,122,0.0) 85%, transparent 100%)",
        }}
      />
    </section>
  );
}
