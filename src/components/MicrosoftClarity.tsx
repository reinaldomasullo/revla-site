"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { siteConfig } from "@/lib/site-config";
import { CONSENT_EVENT } from "@/components/GoogleAnalytics";

const STORAGE_KEY = "revla-cookie-consent";

/**
 * Carrega o Microsoft Clarity (gravação de sessão, mapas de calor e
 * indicadores de frustração — ID do projeto em siteConfig.clarityProjectId)
 * só depois que o visitante aceita cookies analíticos no banner de
 * consentimento. Mesmo padrão consent-gated do GoogleAnalytics.tsx e do
 * MetaPixel.tsx: lê o localStorage no mount + escuta o evento customizado
 * disparado pelo CookieConsent.
 *
 * Depois de carregar, sinaliza o consentimento à própria API do Clarity
 * (`clarity("consent")`), exigida pela Microsoft para visitantes do Brasil,
 * da UE e de outras regiões com lei de proteção de dados.
 *
 * Sem ID configurado, não renderiza nada.
 */
export default function MicrosoftClarity() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(STORAGE_KEY) === "all") setAllowed(true);
    } catch {
      // localStorage indisponível (ex.: modo privado) — segue sem carregar
    }

    function handleConsentChange(event: Event) {
      const detail = (event as CustomEvent<string>).detail;
      if (detail === "all") setAllowed(true);
    }

    window.addEventListener(CONSENT_EVENT, handleConsentChange);
    return () => window.removeEventListener(CONSENT_EVENT, handleConsentChange);
  }, []);

  if (!allowed || !siteConfig.clarityProjectId) return null;

  return (
    <Script id="microsoft-clarity" strategy="afterInteractive">
      {`(function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${siteConfig.clarityProjectId}");
        window.clarity("consent");`}
    </Script>
  );
}
