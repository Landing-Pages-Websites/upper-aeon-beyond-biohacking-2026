"use client";

import Image from "next/image";

interface LogoProps {
  className?: string;
}

/**
 * Upper Aeon logo lock-up. The source asset already includes the "UPPER AEON"
 * wordmark + the U-mark, rendered white. Wrapped in an inline-block span so
 * flex parents (e.g. footer column with `flex flex-col`) don't stretch it
 * horizontally — Image with `w-auto` alone gets stretched to flex item width
 * because the default align-items is stretch on column flexboxes.
 */
export function Logo({ className = "h-10 sm:h-12" }: LogoProps) {
  return (
    <span className={`inline-block ${className}`} style={{ lineHeight: 0 }}>
      <Image
        src="/logo.png"
        alt="Upper Aeon — Biohacking, Nervous System Reset"
        width={600}
        height={244}
        sizes="(max-width: 640px) 160px, 240px"
        className="h-full w-auto block"
        priority
      />
    </span>
  );
}
