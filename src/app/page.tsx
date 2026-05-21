"use client";

import { useTracking } from "@/hooks/useTracking";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { ExclusiveOffer } from "@/components/ExclusiveOffer";
import { Products } from "@/components/Products";
import { WhyThisStack } from "@/components/WhyThisStack";
import { ForProfessionals } from "@/components/ForProfessionals";
import { VisitUs } from "@/components/VisitUs";
import { FormBlock } from "@/components/FormBlock";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { QueryParamPersistence } from "@/components/QueryParamPersistence";
import { SITE_ID, SITE_KEY } from "@/components/Brand";

export default function UpperAeonBeyondBiohackingPage() {
  // MegaTag client-side bootstrap. Layout writes MEGA_TAG_CONFIG first so the
  // optimizer can grab it at first paint; this hook is the belt-and-braces.
  // No gtmId / gaId / pixelId on this conference build — Peter spec 2026-05-21.
  useTracking({ siteKey: SITE_KEY, siteId: SITE_ID });

  return (
    <main className="relative">
      <QueryParamPersistence />
      <Header />
      <Hero />
      <Experience />
      <ExclusiveOffer />
      <Products />
      <WhyThisStack />
      <ForProfessionals />
      <VisitUs />
      <FormBlock />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
