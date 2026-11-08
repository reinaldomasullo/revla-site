"use client";

import { OPEN_COOKIE_PREFS_EVENT } from "@/components/CookieConsent";

/** Reabre o banner de cookies nas preferências, para rever ou revogar o consentimento. */
export default function CookiePreferencesButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_PREFS_EVENT))}
      className="font-semibold text-[var(--color-secondary)] underline hover:no-underline"
    >
      Alterar minhas preferências de cookies
    </button>
  );
}
