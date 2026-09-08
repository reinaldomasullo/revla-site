import { whatsappLink } from "@/lib/site-config";

export default function WhatsAppButton({
  message = "Olá! Vim pelo site e gostaria de falar com um consultor da Revla.",
}: {
  message?: string;
}) {
  return (
    <div role="complementary" aria-label="Atalho de contato pelo WhatsApp">
      <a
        href={whatsappLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-whatsapp)] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-whatsapp)]"
      >
        <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor" aria-hidden="true">
          <path d="M16.02 3C9.4 3 4 8.37 4 14.98c0 2.2.6 4.28 1.66 6.06L4 29l8.2-1.6a12.9 12.9 0 0 0 3.82.58h.01c6.62 0 12.02-5.37 12.02-11.98C28.05 8.37 22.65 3 16.02 3zm0 21.9c-1.9 0-3.68-.5-5.23-1.44l-.37-.22-4.87.95.98-4.75-.24-.39a9.86 9.86 0 0 1-1.5-5.16c0-5.46 4.46-9.9 9.94-9.9 5.47 0 9.93 4.44 9.93 9.9 0 5.46-4.46 9.9-9.94 9.9zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.2 5.06 4.48.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z" />
        </svg>
      </a>
    </div>
  );
}
