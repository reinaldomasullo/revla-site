"use client";

import { useState } from "react";
import Image from "next/image";

// Mostra a capa escolhida por nós e só carrega o player do YouTube no clique.
// Assim a capa no site não depende da miniatura aleatória do YouTube e a página fica mais leve.
export default function VideoEmbed({
  youtubeId,
  title,
  poster,
  vertical,
}: {
  youtubeId: string;
  title: string;
  poster?: string;
  vertical?: boolean;
}) {
  const [playing, setPlaying] = useState(false);
  const box = vertical
    ? "relative mx-auto aspect-[9/16] w-full max-w-[360px] overflow-hidden rounded-2xl border border-[var(--color-border)] bg-black"
    : "relative aspect-video w-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-black";

  return (
    <div className={box}>
      {playing || !poster ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}${playing ? "?autoplay=1" : ""}`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Assistir ao vídeo: ${title}`}
          className="group absolute inset-0 h-full w-full"
        >
          <Image
            src={poster}
            alt={title}
            fill
            sizes="(min-width: 768px) 360px, 100vw"
            className="object-cover"
          />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 transition group-hover:bg-[var(--color-accent)]">
            <svg viewBox="0 0 24 24" className="ml-1 h-8 w-8 fill-white" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
