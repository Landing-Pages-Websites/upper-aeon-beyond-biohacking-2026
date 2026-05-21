"use client";

import { useId, useRef, useState } from "react";
import { useMegaLeadForm } from "@/hooks/useMegaLeadForm";
import {
  CUSTOMER_ID,
  SITE_ID,
  SOURCE_PROVIDER,
  PROFESSIONAL_OPTIONS,
  type ProfessionalValue,
} from "./Brand";

interface LeadFormProps {
  variant?: "hero" | "section";
  headline?: string;
  subhead?: string;
  ctaLabel?: string;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  professional: ProfessionalValue | "";
}

const initial: FormData = {
  fullName: "",
  email: "",
  phone: "",
  professional: "",
};

type FieldKey = keyof FormData;
type FieldErrors = Partial<Record<FieldKey, string>>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    MegaTag?: {
      trackEvent?: (
        eventName: string,
        eventData?: Record<string, unknown>
      ) => void;
      [k: string]: unknown;
    };
  }
}

const EMAIL_RE = /^[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/;

function validateField(key: FieldKey, value: string): string | undefined {
  switch (key) {
    case "fullName": {
      const v = value.trim();
      if (!v) return "Please enter your full name.";
      if (v.length < 2) return "Please enter your full name.";
      return undefined;
    }
    case "email": {
      const v = value.trim();
      if (!v) return "Please enter your email address.";
      if (!EMAIL_RE.test(v)) return "Please enter a valid email address.";
      return undefined;
    }
    case "phone": {
      const digits = value.replace(/\D/g, "");
      if (!digits) return "Please enter your phone number.";
      if (digits.length !== 10) return "Phone must be a 10-digit number.";
      return undefined;
    }
    case "professional":
      // OPTIONAL field per brief — no validation error if empty.
      return undefined;
  }
}

function validateAll(data: FormData): FieldErrors {
  const errors: FieldErrors = {};
  (Object.keys(data) as FieldKey[]).forEach((k) => {
    const err = validateField(k, data[k]);
    if (err) errors[k] = err;
  });
  return errors;
}

export function LeadForm({
  variant = "hero",
  headline,
  subhead,
  ctaLabel = "Reserve My Reset Session",
}: LeadFormProps) {
  const { status, errorMessage, submitLead } = useMegaLeadForm({
    customerId: CUSTOMER_ID,
    siteId: SITE_ID,
    sourceProvider: SOURCE_PROVIDER,
  });

  const fid = useId();
  const id = (k: string) => `${k}-${fid}`;
  const errId = (k: string) => `${k}-${fid}-err`;

  const formRef = useRef<HTMLFormElement>(null);
  const fieldRefs = useRef<Partial<Record<FieldKey, HTMLElement | null>>>({});
  const [data, setData] = useState<FormData>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<FieldKey, boolean>>>({});
  const inFlightRef = useRef(false);

  const update = <K extends FieldKey>(k: K, v: FormData[K]) => {
    setData((d) => ({ ...d, [k]: v }));
    // Live-clear error as soon as value becomes valid.
    setErrors((prev) => {
      if (!prev[k]) return prev;
      const err = validateField(k, String(v));
      if (err) return prev;
      const next = { ...prev };
      delete next[k];
      return next;
    });
  };

  const markTouched = (k: FieldKey, currentValue: string) => {
    setTouched((t) => ({ ...t, [k]: true }));
    const err = validateField(k, currentValue);
    setErrors((prev) => {
      const next = { ...prev };
      if (err) next[k] = err;
      else delete next[k];
      return next;
    });
  };

  const submitting = status === "submitting";
  const success = status === "success" || submitted;

  const formatPhone = (raw: string) => {
    const d = raw.replace(/\D/g, "").slice(0, 10);
    const p: string[] = [];
    if (d.length > 0) p.push(d.slice(0, 3));
    if (d.length >= 4) p.push(d.slice(3, 6));
    if (d.length >= 7) p.push(d.slice(6, 10));
    return p.join("-");
  };

  // type="button" + handleClick — bypass the optimizer's capture-phase submit
  // listener so empty submits never fire a phantom form_submit event.
  // (SHLY Optimizer Empty-Submit fix.)
  const handleClick = async () => {
    if (submitting || success || inFlightRef.current) return;
    const required: FieldKey[] = ["fullName", "email", "phone"];
    const allErrors = validateAll(data);

    // professional is optional; never block on it
    if (Object.keys(allErrors).filter((k) => k !== "professional").length > 0) {
      setErrors(allErrors);
      setTouched({
        fullName: true,
        email: true,
        phone: true,
        professional: false,
      });
      const firstBad = required.find((k) => allErrors[k]);
      if (firstBad) {
        const el = fieldRefs.current[firstBad];
        if (el) {
          try {
            (el as HTMLInputElement).focus({ preventScroll: false });
          } catch {
            el.focus();
          }
        }
      }
      return;
    }
    inFlightRef.current = true;

    const fullName = data.fullName.trim();
    // Best-effort split — store both the original and a derived first/last
    // so the Mega lead inbox and the AM's notification email both have
    // sensible columns. Keystone treats firstName/lastName as primary keys.
    const nameParts = fullName.split(/\s+/);
    const firstName = nameParts[0] || fullName;
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";
    const email = data.email.trim();
    const phone = data.phone.replace(/\D/g, "");
    const professional = data.professional as ProfessionalValue | "";
    const professionalLabel =
      PROFESSIONAL_OPTIONS.find((o) => o.value === professional)?.label ??
      (professional || "Not specified");
    const isProfessional =
      professional === "clinic_owner" || professional === "longevity_pro";

    try {
      // 1. Send to lead API — every form fill is a lead.
      await submitLead({
        firstName,
        lastName,
        fullName,
        email,
        phone,
        professional,
        professionalLabel,
        isProfessional: isProfessional ? "yes" : "no",
        formLocation: variant,
        leadType: "conference_reset_booking",
      });

      // 2. Manually fire form_submit event through MegaTag so the
      //    Conversions tab shows separated field keys per HARD RULE.
      if (typeof window !== "undefined" && window.MegaTag?.trackEvent) {
        try {
          window.MegaTag.trackEvent("form_submit", {
            element: `form-${variant}`,
            firstName,
            lastName,
            fullName,
            email,
            phone,
            professional,
            professionalLabel,
            isProfessional: isProfessional ? "yes" : "no",
            leadType: "conference_reset_booking",
          });
        } catch {
          /* silent */
        }
      }

      // 3. Push to GTM dataLayer for internal analytics (HARD RULE #4).
      //    No GTM container on this build, but dataLayer pushes are still
      //    required so downstream listeners can pick it up.
      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "form_submission",
          form_id: `upper-aeon-beyond-biohacking-2026-${variant}`,
          is_professional: isProfessional ? "yes" : "no",
        });
      }

      setSubmitted(true);
    } finally {
      inFlightRef.current = false;
    }
  };

  const handleNativeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  // ─── Success state ───
  if (success) {
    return (
      <div className="relative rounded-2xl p-8 sm:p-10 overflow-hidden card-dark-elev glow-border">
        <div className="absolute inset-0 pointer-events-none aurora-violet opacity-60" />
        <div className="relative flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-[var(--color-violet)]/20 border border-[var(--color-violet)]/45 flex items-center justify-center mb-5 animate-pulse-soft">
            <svg
              className="w-8 h-8 text-[var(--color-violet-light)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <path
                d="M20 6 9 17l-5-5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-3 tracking-tight">
            You&rsquo;re on the list{data.fullName ? `, ${data.fullName.split(/\s+/)[0]}` : ""}.
          </h3>
          <p className="text-[var(--color-text-muted)] max-w-md leading-relaxed">
            We&rsquo;ll text you a confirmation with your reset window and the
            booth locator before the conference opens. Sessions are
            first-come-first-served on-site, so arriving early on your
            chosen day is recommended.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[var(--color-aurum)]">
            Beyond Biohacking 2026 · Austin, Texas
          </p>
        </div>
      </div>
    );
  }

  const showErr = (k: FieldKey) => Boolean(touched[k] && errors[k]);
  const inputCls = (k: FieldKey) =>
    `lp-input ${showErr(k) ? "lp-input-error" : ""}`;

  return (
    <form
      ref={formRef}
      onSubmit={handleNativeSubmit}
      noValidate
      className={`relative overflow-hidden rounded-2xl p-6 sm:p-8 card-dark-elev glow-border`}
      aria-describedby={status === "error" && errorMessage ? errId("form") : undefined}
    >
      <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full pointer-events-none animate-pulse-soft"
           style={{ background: "radial-gradient(circle, rgba(115,84,230,0.35), transparent 65%)" }}
           aria-hidden="true" />
      <div className="absolute -bottom-24 -left-24 w-56 h-56 rounded-full pointer-events-none animate-pulse-soft"
           style={{ background: "radial-gradient(circle, rgba(255,77,213,0.22), transparent 65%)", animationDelay: "1.6s" }}
           aria-hidden="true" />

      {(headline || subhead) && (
        <div className="relative mb-5 sm:mb-6">
          {variant === "hero" && (
            <p className="eyebrow mb-3">Reserve Your Session</p>
          )}
          {headline && (
            <h3 className="text-xl sm:text-2xl font-semibold text-white leading-tight tracking-tight">
              {headline}
            </h3>
          )}
          {subhead && (
            <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">
              {subhead}
            </p>
          )}
        </div>
      )}

      <div className="relative">
        <label htmlFor={id("fullName")} className="sr-only">
          Full name
        </label>
        <input
          ref={(el) => {
            fieldRefs.current.fullName = el;
          }}
          id={id("fullName")}
          name="fullName"
          type="text"
          autoComplete="name"
          placeholder="Full name"
          className={inputCls("fullName")}
          value={data.fullName}
          onChange={(e) => update("fullName", e.target.value)}
          onBlur={(e) => markTouched("fullName", e.target.value)}
          disabled={submitting}
          aria-invalid={showErr("fullName") || undefined}
          aria-describedby={showErr("fullName") ? errId("fullName") : undefined}
        />
        {showErr("fullName") && (
          <p
            id={errId("fullName")}
            role="alert"
            aria-live="polite"
            className="lp-field-error"
          >
            {errors.fullName}
          </p>
        )}
      </div>

      <div className="mt-3">
        <label htmlFor={id("email")} className="sr-only">
          Email
        </label>
        <input
          ref={(el) => {
            fieldRefs.current.email = el;
          }}
          id={id("email")}
          name="email"
          type="email"
          autoComplete="email"
          pattern="^[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$"
          placeholder="Email address"
          className={inputCls("email")}
          value={data.email}
          onChange={(e) => update("email", e.target.value)}
          onBlur={(e) => markTouched("email", e.target.value)}
          disabled={submitting}
          aria-invalid={showErr("email") || undefined}
          aria-describedby={showErr("email") ? errId("email") : undefined}
        />
        {showErr("email") && (
          <p
            id={errId("email")}
            role="alert"
            aria-live="polite"
            className="lp-field-error"
          >
            {errors.email}
          </p>
        )}
      </div>

      <div className="mt-3">
        <label htmlFor={id("phone")} className="sr-only">
          Phone
        </label>
        <input
          ref={(el) => {
            fieldRefs.current.phone = el;
          }}
          id={id("phone")}
          name="phone"
          type="tel"
          inputMode="numeric"
          autoComplete="tel"
          placeholder="Phone number (used to text confirmation)"
          className={inputCls("phone")}
          value={data.phone}
          onChange={(e) => update("phone", formatPhone(e.target.value))}
          onBlur={(e) => markTouched("phone", e.target.value)}
          disabled={submitting}
          aria-invalid={showErr("phone") || undefined}
          aria-describedby={showErr("phone") ? errId("phone") : undefined}
        />
        {showErr("phone") && (
          <p
            id={errId("phone")}
            role="alert"
            aria-live="polite"
            className="lp-field-error"
          >
            {errors.phone}
          </p>
        )}
      </div>

      {/* Optional partnership flag — drives clinic / longevity-pro follow-up. */}
      <div className="mt-4">
        <label
          htmlFor={id("professional")}
          className="block text-[10px] uppercase tracking-[0.22em] font-semibold text-[var(--color-aurum)] mb-1.5"
        >
          Are you a clinic owner or longevity pro?{" "}
          <span className="text-[var(--color-text-dim)] tracking-normal normal-case font-normal">
            (optional)
          </span>
        </label>
        <div className="relative">
          <select
            ref={(el) => {
              fieldRefs.current.professional = el;
            }}
            id={id("professional")}
            name="professional"
            value={data.professional}
            onChange={(e) =>
              update("professional", e.target.value as ProfessionalValue | "")
            }
            disabled={submitting}
            className={`lp-input appearance-none pr-10 ${
              !data.professional ? "text-[rgba(244,241,234,0.42)]" : ""
            }`}
          >
            <option value="">Select an option (optional)</option>
            {PROFESSIONAL_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <svg
              className="w-5 h-5 text-[var(--color-text-dim)]"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </div>

      {errorMessage && status === "error" && (
        <div
          id={errId("form")}
          role="alert"
          aria-live="assertive"
          className="mt-3 text-sm text-[#ff8aa1]"
        >
          {errorMessage}
        </div>
      )}

      <button
        type="button"
        onClick={handleClick}
        disabled={submitting || success}
        className="btn-primary w-full mt-5 text-sm sm:text-base py-3.5 shimmer"
      >
        {submitting ? "Sending…" : ctaLabel}
        {!submitting && (
          <svg
            className="w-4 h-4"
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
        )}
      </button>

      <p className="mt-3 text-[11px] leading-relaxed text-[var(--color-text-dim)] text-center">
        First-come, first-served. We&rsquo;ll text your reset window and the
        booth locator before the conference opens.
      </p>
    </form>
  );
}
