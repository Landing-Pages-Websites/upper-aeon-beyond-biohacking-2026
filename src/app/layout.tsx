import type { Metadata, Viewport } from "next";
import { Readex_Pro } from "next/font/google";
import "./globals.css";
import { SITE_ID, SITE_KEY, BUSINESS_NAME } from "@/components/Brand";

// Readex Pro is the typeface upperaeon.com uses (font-heading-family +
// font-body-family in their Shopify theme). Keeping the LP visually
// continuous with the parent brand.
const readex = Readex_Pro({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-readex",
});

const PAGE_TITLE =
  "Beyond Biohacking Conference 2026 — Nervous System Reset | Upper Aeon";
const PAGE_DESCRIPTION =
  "Visit Upper Aeon at the Beyond Biohacking Conference 2026 in Austin. Experience a 10-minute nervous system reset, PEMF + infrared therapy, NeuroVIZR light-and-sound, Apollo Neuro and our methylene blue protocol — plus an exclusive conference offer with a free 8-week cohort with Pavel Aeon.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "website",
    siteName: BUSINESS_NAME,
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  // Conference activation page — keep out of search index until client review
  // signs off. Director will flip this to index:true if appropriate post-review.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#020e2c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${readex.variable} h-full antialiased`}
      style={{ backgroundColor: "#020e2c" }}
    >
      <head>
        <meta name="mega-site-id" content={SITE_ID} />
        {/* MegaTag config — Upper Aeon site key. NO GTM, NO Meta Pixel,
            NO CTM on this build (conference activation, not paid ads).
            window.dataLayer is still initialized so the manual
            form_submission push (HARD RULE #4) has somewhere to land. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.MEGA_TAG_CONFIG={siteKey:"${SITE_KEY}",siteId:"${SITE_ID}"};window.dataLayer=window.dataLayer||[];`,
          }}
        />
        <script
          id="optimizer-script"
          src="https://cdn.gomega.ai/scripts/optimizer.min.js"
          data-site-id={SITE_ID}
          async
        />
      </head>
      <body
        className="min-h-full flex flex-col"
        style={{ backgroundColor: "#020e2c", color: "var(--color-text)" }}
      >
        {children}
      </body>
    </html>
  );
}
