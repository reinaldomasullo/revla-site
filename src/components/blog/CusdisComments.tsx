"use client";

import { useEffect } from "react";
import { siteConfig } from "@/lib/site-config";

/**
 * Widget de comentários Cusdis (cusdis.com) — gratuito, código aberto,
 * comentário sem exigir login do visitante (só nome, opcionalmente e-mail),
 * com fila de moderação antes de publicar. O script oficial escaneia a
 * página em busca da div #cusdis_thread no carregamento; como cada post do
 * blog é uma rota própria do App Router (esse componente desmonta e
 * remonta de verdade a cada navegação entre posts, não é um estado
 * compartilhado), basta reinjetar o <script> a cada montagem para garantir
 * que o widget sempre inicialize certinho para o post atual.
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
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cusdis.com/js/cusdis.es.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [slug]);

  return (
    <div
      id="cusdis_thread"
      data-host="https://cusdis.com"
      data-app-id={siteConfig.cusdisAppId}
      data-page-id={slug}
      data-page-url={url}
      data-page-title={title}
    />
  );
}
