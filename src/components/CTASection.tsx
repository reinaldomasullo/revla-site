import Container from "./Container";
import CTAButton from "./CTAButton";
import { whatsappLink } from "@/lib/site-config";

export default function CTASection({
  title,
  description,
  whatsappMessage,
  buttonLabel = "Falar com um consultor",
}: {
  title: string;
  description: string;
  whatsappMessage: string;
  buttonLabel?: string;
}) {
  return (
    <section className="bg-[var(--color-primary)] py-12 text-white sm:py-14">
      <Container className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
          <p className="mt-3 text-base leading-relaxed text-white/75">{description}</p>
        </div>
        <CTAButton href={whatsappLink(whatsappMessage)} variant="secondary" external>
          {buttonLabel}
        </CTAButton>
      </Container>
    </section>
  );
}
