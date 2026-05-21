// ─── Upper Aeon — Beyond Biohacking Conference 2026 LP — Brand constants ───
// Atlas task: 55de2b30-9767-406d-a227-19af4cd3219f
// This is NOT a paid-ads LP — conference activation booking page only.
// No GTM container, no Meta Pixel, no CTM (per task brief 2026-05-21).
// Standard MegaTag + site key + manual dataLayer push (HARD RULE #4) only.

export const BUSINESS_NAME = "Upper Aeon";
export const TAGLINE = "The Ultimate Nervous System Reset Experience";

// Booth locator copy — task brief specifies this verbatim. Replaces every
// "Booth [#]" placeholder from the source doc until a numeric assignment lands.
export const BOOTH_LOCATOR =
  "Upper Aeon Booth on the First Floor by the Entrance Escalator";
export const EVENT_NAME = "Beyond Biohacking Conference 2026";
export const EVENT_CITY = "Austin, Texas";
export const EVENT_DATES = "End of May 2026";

// ─── External destinations ───
// SHOP CTA links straight to the customer's top-sellers collection on Shopify.
export const SHOP_HREF =
  "https://www.upperaeon.com/collections/shop-all?category=top-sellers";

// Notification email for form submissions (per task brief; standard
// useMegaLeadForm posts to Mega lead inbox — this is reference copy only).
export const NOTIFICATION_EMAIL = "pavel@upperaeon.com";

// ─── Mega tracking — Upper Aeon owned site already registered ───
// Source: SELECT id, url, site_type FROM sites WHERE customer_id = ...
//   id        = 32f196ec-2cc0-4ce2-ae9d-21c706d7e6fa
//   url       = https://www.upperaeon.com/sitemap.xml  (parent site)
//   site_key  = sk_mmt59j3a_u8831c1b38n
// This is a sub-page activation on the Upper Aeon brand — reusing the
// existing owned-site key/id is the right move (one site, one key).
export const SITE_ID = "32f196ec-2cc0-4ce2-ae9d-21c706d7e6fa";
export const SITE_KEY = "sk_mmt59j3a_u8831c1b38n";
export const CUSTOMER_ID = "c675a743-1067-4ac1-9cff-a055e232992b";
export const SOURCE_PROVIDER = "upper-aeon-beyond-biohacking-2026";

// ─── Form options ───
// Single optional question per task spec: "Are you a clinic owner /
// longevity pro?"  Drives partnership routing. Both answers qualify; the
// flag is only used for CRM segmentation. Empty answer is allowed (the
// question is optional per the brief).
export const PROFESSIONAL_OPTIONS = [
  { value: "clinic_owner",    label: "Yes — clinic owner / operator" },
  { value: "longevity_pro",   label: "Yes — longevity / wellness professional" },
  { value: "consumer",        label: "No — I'm here for myself" },
] as const;

export type ProfessionalValue = (typeof PROFESSIONAL_OPTIONS)[number]["value"];
