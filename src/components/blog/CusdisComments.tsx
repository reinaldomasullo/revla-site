"use client";

import { useEffect, useRef, useState } from "react";
import CTAButton from "@/components/CTAButton";
import { siteConfig, whatsappLink } from "@/lib/site-config";

/**
 * Widget de comentários Cusdis (cusdis.com) — gratuito, código aberto,
 * comentário sem exigir login do visitante, com moderação antes de publicar.
 *
 * Plano B: o Cusdis é um serviço externo e pode sair do ar (em 07/11/2026
 * o cusdis.com respondeu erro 521 e a caixa de comentários ficou vazia).
 * Se o formulário não carregar em alguns segundos, mostramos um convite
 * para deixar a dúvida pelo WhatsApp. Quando o Cusdis voltar, o formulário
 * aparece normalmente, sem mexer no código.
 */
export default function CusdisComments({
  slug,
  url,
  title,
}: {
  slug: string;
  url: string;
  title: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [falhou, setFalhou] = useState(false);

  useEffect(() => {
    setFalhou(false);
    let carregou = false;

    // O iframe do Cusdis avisa por postMessage quando monta e quando muda de altura.
    const onMessage = (e: MessageEvent) => {
      try {
        const msg = typeof e.data === "string" ? JSON.parse(e.data) : null;
        if (msg && msg.from === "cusdis") {
          carregou = true;
          setFalhou(false);
        }
      } catch {
        /* mensagens de outras origens */
      }
    };
    window.addEventListener("message", onMessage);

    const script = document.createElement("script");
    script.src = "https://cusdis.com/js/cusdis.es.js";
    script.async = true;
    script.defer = true;
    script.onerror = () => setFalhou(true);
    document.body.appendChild(script);

    const timer = window.setTimeout(() => {
      if (carregou) return;
      // Confere se o formulário foi desenhado dentro do iframe (mesma origem, srcdoc).
      try {
        const iframe = ref.current?.querySelector("iframe");
        const root = iframe?.contentDocument?.getElementById("root");
        if (root && root.childElementCount > 0) return;
      } catch {
        /* sem acesso ao iframe: trata como não carregado */
      }
      setFalhou(true);
    }, 8000);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("message", onMessage);
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, [slug]);

  return (
    <>
      <div
        ref={ref}
        id="cusdis_thread"
        data-host="https://cusdis.com"
        data-app-id={siteConfig.cusdisAppId}
        data-page-id={slug}
        data-page-url={url}
        data-page-title={title}
        className={falhou ? "hidden" : undefined}
      />
      {falhou && (
        <div className="rounded-2xl border border-[var(--color-border)] bg-slate-50 p-6">
          <p className="text-base font-semibold text-[var(--color-primary)]">
            Ficou com alguma dúvida sobre este assunto?
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink)]/70">
            A caixa de comentários está temporariamente indisponível. Mande sua pergunta pelo
            WhatsApp e respondemos por lá.
          </p>
          <div className="mt-4">
            <CTAButton
              href={whatsappLink(`Olá! Li o artigo "${title}" no blog da Revla e tenho uma dúvida.`)}
              variant="secondary"
              external
            >
              Tirar dúvida pelo WhatsApp
            </CTAButton>
          </div>
        </div>
      )}
    </>
  );
}
