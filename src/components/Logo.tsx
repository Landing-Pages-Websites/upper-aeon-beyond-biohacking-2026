"use client";

import Image from "next/image";

interface LogoProps {
  className?: string;
}

/**
 * Upper Aeon logo lock-up. The source asset already includes the "UPPER AEON"
 * wordmark + the U-mark, rendered white. Sized for header use.
 */
export function Logo({ className = "h-10 sm:h-12" }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Upper Aeon — Biohacking, Nervous System Reset"
      width={600}
      height={244}
      className={`${className} w-auto`}
      priority
    />
  );
}
