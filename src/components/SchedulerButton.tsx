"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import AgendadorForm from "@/components/AgendadorForm";

export default function SchedulerButton() {
  const pathname = usePathname();

  const [aberto, setAberto] = useState(false);
  // Muda a cada abertura, pra forçar o React a remontar o <AgendadorForm />
  // do zero (sem precisar levantar seu estado interno pra cá).
  const [instancia, setInstancia] = useState(0);

  // A página /links já tem layout próprio, estilo Linktree — não exibe o
  // atalho flutuante do agendador. A própria página /agendar também não
  // precisa do botão flutuante, já que a pessoa já está no formulário.
  const esconder = pathname === "/links" || pathname === "/agendar";

  useEffect(() => {
    if (!aberto) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [aberto]);

  if (esconder) return null;

  function abrir() {
    setAberto(true);
  }

  function fechar() {
    setAberto(false);
    // reseta depois de fechar, pra não "piscar" o formulário vazio durante
    // a animação/transição de fechamento
    setTimeout(() => {
      setInstancia((n) => n + 1);
    }, 200);
  }

  return (
    <>
      <button
        type="button"
        onClick={abrir}
        aria-label="Agendar reunião"
        className="fixed bottom-24 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-primary)] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
      >
        <svg
          viewBox="0 0 24 24"
          width="26"
          height="26"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="4.5" width="18" height="16" rx="2.5" />
          <path d="M3 9.5h18" />
          <path d="M8 3v3" />
          <path d="M16 3v3" />
          <path d="M8 14.5h.01" />
          <path d="M12 14.5h.01" />
          <path d="M16 14.5h.01" />
          <path d="M8 18h.01" />
          <path d="M12 18h.01" />
        </svg>
      </button>

      {aberto && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-black/50 px-0 sm:items-center sm:px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Agendar reunião"
          onClick={(e) => {
            if (e.target === e.currentTarget) fechar();
          }}
        >
          <div className="flex max-h-[92vh] w-full max-w-md flex-col overflow-y-auto rounded-t-2xl bg-white p-6 shadow-xl sm:rounded-2xl">
            <AgendadorForm key={instancia} onClose={fechar} />
          </div>
        </div>
      )}
    </>
  );
}
