"use client";

import { useEffect, useState } from "react";
import { CONSENT_EVENT, NO_CONSENT, readConsent, type ConsentState } from "@/lib/consent";

/**
 * Estado atual do consentimento de cookies. Lê o valor salvo ao montar
 * (visitante recorrente) e escuta o evento do banner, para os scripts
 * carregarem na mesma sessão sem recarregar a página.
 */
export function useConsent(): ConsentState {
  const [consent, setConsent] = useState<ConsentState>(NO_CONSENT);

  useEffect(() => {
    const stored = readConsent();
    if (stored) setConsent(stored);

    function handleConsentChange(event: Event) {
      const detail = (event as CustomEvent<ConsentState>).detail;
      if (detail) setConsent(detail);
    }

    window.addEventListener(CONSENT_EVENT, handleConsentChange);
    return () => window.removeEventListener(CONSENT_EVENT, handleConsentChange);
  }, []);

  return consent;
}
