import Image from "next/image";
import type { ContentBlock } from "@/lib/posts";
import { renderInline } from "@/lib/inline-markdown";

export default function PostContent({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="prose-revla space-y-5">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return (
              <p key={i} className="text-base leading-relaxed text-[var(--color-ink)]/85">
                {renderInline(block.text)}
              </p>
            );
          case "h2":
            return (
              <h2
                key={i}
                id={block.id}
                className="!mt-10 scroll-mt-24 text-xl font-bold tracking-tight text-[var(--color-primary)] sm:text-2xl"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                id={block.id}
                className="!mt-7 scroll-mt-24 text-lg font-semibold tracking-tight text-[var(--color-ink)]"
              >
                {block.text}
              </h3>
            );
          case "ul":
            return (
              <ul key={i} className="list-disc space-y-2 pl-5">
                {block.items.map((item, j) => (
                  <li key={j} className="text-base leading-relaxed text-[var(--color-ink)]/85">
                    {renderInline(item)}
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="list-decimal space-y-2 pl-5">
                {block.items.map((item, j) => (
                  <li key={j} className="text-base leading-relaxed text-[var(--color-ink)]/85">
                    {renderInline(item)}
                  </li>
                ))}
              </ol>
            );
          case "image":
            return (
              <figure key={i} className="!my-8">
                <Image
                  src={block.src}
                  alt={block.alt}
                  width={block.width}
                  height={block.height}
                  sizes="(min-width: 768px) 768px, 100vw"
                  className="w-full rounded-2xl border border-[var(--color-border)]"
                />
                {block.caption && (
                  <figcaption className="mt-2 text-center text-xs text-[var(--color-ink)]/70">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
