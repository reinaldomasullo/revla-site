"use client";

import { useEffect } from "react";

// Componente cliente minúsculo: dispara o redirecionamento de verdade pro
// visitante humano assim que a página carrega no navegador. Bots que só
// leem o HTML inicial (ex: o crawler de preview do WhatsApp/Meta) nunca
// executam esse efeito, então continuam vendo só o title/description reais
// da página (definidos via metadata em page.tsx) — é exatamente esse
// descompasso proposital que permite ter uma prévia em português apontando
// pra um destino final (g.page) cujo próprio preview é fixo em inglês.
export default function RedirectTo({ url }: { url: string }) {
  useEffect(() => {
    window.location.replace(url);
  }, [url]);

  return null;
}
