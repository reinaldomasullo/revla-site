"use client";

import { useEffect } from "react";
import Script from "next/script";
import { siteConfig } from "@/lib/site-config";
import { useConsent } from "@/components/useConsent";

/**
 * Carrega o Meta Pixel (conjunto de dados "Revla Corretora - Site
 * Principal", ID em siteConfig.metaPixelId) só depois que o visitante
 * aceita COOKIES DE PUBLICIDADE no banner de consentimento (categoria
 * separada dos analíticos desde nov/2026 — ver src/lib/consent.ts). Esse Pixel já
 * existia e rodava no site antigo em WordPress; ficou "órfão" (sem receber
 * eventos) desde a migração pro Next.js — aqui só reinstala o código base
 * no site atual, sem criar um pixel novo.
 *
 * Sem nenhuma relação com a campanha de Meta Ads que usa Formulário
 * Instantâneo nativo + WhatsApp: esse fluxo de lead roda inteiro dentro do
 * Meta e nunca passa pelo site, então esse Pixel não o afeta.
 */
export default function MetaPixel() {
  const allowed = useConsent().ads;

  // Evento padrão "Lead" do Meta: dispara no clique de qualquer link
  // `wa.me` do site (botão flutuante + todo CTAButton que usa
  // whatsappLink()), mesmo padrão de delegação de clique já usado pra
  // conversão do Google Ads em GoogleAnalytics.tsx — cobre o site inteiro
  // sem precisar editar cada botão. Alimenta públicos personalizados de
  // quem entrou em contato pelo WhatsApp via site, pra remarketing e
  // públicos semelhantes futuros. Só registra depois do consentimento e do
  // Pixel carregado.
  useEffect(() => {
    if (!allowed || !siteConfig.metaPixelId) return;

    function handleWhatsAppClick(event: MouseEvent) {
      const link = (event.target as HTMLElement | null)?.closest('a[href^="https://wa.me/"]');
      if (!link) return;
      const fbq = (window as typeof window & { fbq?: (...args: unknown[]) => void }).fbq;
      fbq?.("track", "Lead");
    }

    document.addEventListener("click", handleWhatsAppClick, true);
    return () => document.removeEventListener("click", handleWhatsAppClick, true);
  }, [allowed]);

  if (!allowed || !siteConfig.metaPixelId) return null;

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${siteConfig.metaPixelId}');
          fbq('track', 'PageView');`}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          alt=""
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${siteConfig.metaPixelId}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
