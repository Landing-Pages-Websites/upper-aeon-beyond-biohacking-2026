"use client";

import { Reveal } from "./Reveal";

interface ExperienceItem {
  title: string;
  lede: string;
  body: string;
  benefits: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    title: "Full-Body Infrared + PEMF Recharge",
    lede: "Lie down. Let your nervous system come back online.",
    body: "Advanced therapeutic recovery mats combine Pulsed Electromagnetic Field therapy, near-infrared light, and far-infrared heat to downshift the body into deep parasympathetic recovery in minutes.",
    benefits: [
      "Cellular recovery + circulation",
      "HRV optimization",
      "Mitochondrial energy production",
      "Nervous system downregulation",
    ],
  },
  {
    title: "NeuroVIZR Neuro-Stimulation",
    lede: "Drug-free brainwave entrainment through light and sound.",
    body: "Carefully calibrated flickering light plus rhythmic sound entrains the visual cortex to states associated with deep meditation, creativity, focus, and parasympathetic activation. Eyes closed, headphones on, ten minutes — and you walk out different.",
    benefits: [
      "Deep meditative states",
      "Cognitive clarity & creativity",
      "Emotional regulation",
      "Parasympathetic activation",
    ],
  },
  {
    title: "Apollo Neuro Vagus Nerve Stimulation",
    lede: "Wearable vibration that tells the body it&rsquo;s safe.",
    body: "Subtle, scientifically tuned vibrations cue the vagus nerve and shift the body toward calm, focus, and recovery. Clinically validated. Used at the booth and worn home.",
    benefits: [
      "Calm under pressure",
      "Sleep optimization",
      "Stress resilience",
      "Recovery acceleration",
    ],
  },
  {
    title: "Guided Breathwork by Pavel Aeon",
    lede: "A science-backed protocol from a certified Wim Hof instructor.",
    body: "Five minutes of breath, led live, that resets autonomic state, raises oxygen efficiency, and shifts you from over-stimulation into presence. Same protocol that has reset 100,000+ people across 500+ events.",
    benefits: [
      "Increased oxygen efficiency",
      "Autonomic state shift",
      "Cognitive performance",
      "Emotional regulation",
    ],
  },
  {
    title: "Methylene Blue Optimization Stack",
    lede: "Mitochondrial support, on the spot.",
    body: "Sample the same methylene blue protocol our community uses for cognitive performance and cellular respiration. Available at the booth alongside Trilogy and SATORI cognitive formula samples.",
    benefits: [
      "Mitochondrial energy",
      "Cognitive performance",
      "Cellular respiration",
      "Mental endurance",
    ],
  },
];

export function Experience() {
  return (
    <section
      id="what-youll-experience"
      className="relative py-20 sm:py-28 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 aurora-soft pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal variant="up">
          <p className="eyebrow">Not Another Supplement Booth</p>
        </Reveal>
        <Reveal variant="up" delay={80}>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white max-w-4xl leading-[1.05]">
            Your 10-Minute Nervous System Reset
            <span className="block text-[var(--color-aurum)] font-light mt-2 text-2xl sm:text-3xl lg:text-[2.2rem]">
              A fully immersive, multi-sensory experience.
            </span>
          </h2>
        </Reveal>
        <Reveal variant="up" delay={140}>
          <p className="mt-5 text-base sm:text-lg text-[var(--color-text-muted)] max-w-3xl leading-relaxed">
            Designed for high performers, longevity leaders, clinic owners,
            founders, investors, and biohackers who want to feel the difference
            in real time. The result is a rapid shift from stress and
            over-stimulation into clarity, coherence, recovery, and presence.
          </p>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-2 gap-5 sm:gap-6">
          {EXPERIENCES.map((item, i) => (
            <Reveal key={item.title} variant="up" delay={80 + i * 60}>
              <article className="card-dark p-6 sm:p-8 h-full flex flex-col">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-sm font-semibold text-[var(--color-violet-light)] border border-[var(--color-violet)]/40 bg-[var(--color-violet)]/10">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-white leading-tight tracking-tight">
                      {item.title}
                    </h3>
                    <p
                      className="mt-1.5 text-[15px] text-[var(--color-aurum)] font-light italic"
                      dangerouslySetInnerHTML={{ __html: item.lede }}
                    />
                  </div>
                </div>
                <p className="mt-4 text-[15px] text-[var(--color-text-muted)] leading-relaxed">
                  {item.body}
                </p>
                <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-[13px] text-[var(--color-text-muted)]">
                  {item.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-1.5">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--color-aurum)] shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal variant="up" delay={200}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <a href="#form" className="btn-primary text-[12px] sm:text-[13px]">
              Book Your Reset Session
            </a>
            <a
              href="#exclusive-offer"
              className="btn-secondary text-[12px] sm:text-[13px]"
            >
              See the Conference Offer
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
