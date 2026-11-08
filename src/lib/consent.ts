/**
 * Consentimento de cookies (LGPD) — fonte única para o banner
 * (CookieConsent.tsx) e para cada script de terceiros.
 *
 * Duas categorias opcionais, escolhidas separadamente:
 * - analytics: Google Analytics (GA4) e Microsoft Clarity
 * - ads: Meta Pixel (Facebook/Instagram) e tag do Google Ads
 *
 * Formato salvo no localStorage: JSON {"v":2,"analytics":bool,"ads":bool}.
 * Valores antigos ("all" / "essential", da versão de 2 categorias) continuam
 * sendo lidos: "all" vale como as duas aceitas, "essential" como nenhuma.
 */

export const CONSENT_STORAGE_KEY = "revla-cookie-consent";
export const CONSENT_EVENT = "revla-cookie-consent-changed";

export type ConsentState = { analytics: boolean; ads: boolean };

export const NO_CONSENT: ConsentState = { analytics: false, ads: false };
export const FULL_CONSENT: ConsentState = { analytics: true, ads: true };

export function parseConsent(raw: string | null): ConsentState | null {
  if (!raw) return null;
  if (raw === "all") return FULL_CONSENT;
  if (raw === "essential") return NO_CONSENT;
  try {
    const parsed = JSON.parse(raw) as Partial<ConsentState>;
    return { analytics: parsed.analytics === true, ads: parsed.ads === true };
  } catch {
    return null;
  }
}

export function readConsent(): ConsentState | null {
  try {
    return parseConsent(window.localStorage.getItem(CONSENT_STORAGE_KEY));
  } catch {
    // localStorage indisponível (ex.: modo privado)
    return null;
  }
}

export function saveConsent(state: ConsentState) {
  try {
    window.localStorage.setItem(
      CONSENT_STORAGE_KEY,
      JSON.stringify({ v: 2, analytics: state.analytics, ads: state.ads }),
    );
  } catch {
    // segue sem salvar — o banner pode reaparecer na próxima visita
  }
  window.dispatchEvent(new CustomEvent<ConsentState>(CONSENT_EVENT, { detail: state }));
}
