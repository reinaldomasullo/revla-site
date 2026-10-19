"use client";

import { useState } from "react";

// Vídeo curto (Shorts, 9:16) com carregamento só ao toque: até a pessoa tocar,
// a página mostra apenas a capa local, sem carregar nada do YouTube. Isso
// mantém o PageSpeed. A transcrição fica abaixo, em bloco expansível, porque
// buscadores e IAs leem o texto, não o vídeo.
type Props = {
  youtubeId: string;
  titulo: string;
  capa: string;
  transcricao: string;
  duracaoTexto: string;
};

export default function VideoCurto({ youtubeId, titulo, capa, transcricao, duracaoTexto }: Props) {
  const [tocando, setTocando] = useState(false);

  return (
    <figure className="mx-auto w-full max-w-[280px]">
      <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-[var(--color-primary)] shadow-lg">
        {tocando ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&playsinline=1`}
            title={titulo}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setTocando(true)}
            aria-label={`Assistir ao vídeo: ${titulo}`}
            className="group absolute inset-0 h-full w-full"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={capa}
              alt=""
              width={432}
              height={768}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <span className="absolute inset-x-0 bottom-5 flex justify-center">
              <span className="flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform group-hover:scale-105">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                  <path d="M8 5.5v13l11-6.5z" />
                </svg>
                Assistir ({duracaoTexto})
              </span>
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-3 text-sm font-medium text-[var(--color-ink)]">{titulo}</figcaption>
      <details className="mt-2 text-sm text-[var(--color-ink)]/75">
        <summary className="cursor-pointer font-semibold text-[var(--color-secondary)]">Ler a transcrição</summary>
        <p className="mt-2 leading-relaxed">{transcricao}</p>
      </details>
    </figure>
  );
}
