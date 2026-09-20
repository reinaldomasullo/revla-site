import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTAButton from "@/components/CTAButton";
import Container from "@/components/Container";
import FeatureGrid from "@/components/FeatureGrid";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig, whatsappLink, buildMetadata } from "@/lib/site-config";
import { PercentOff, CalendarDown, HandCoin, Headset } from "@/components/icons";

// Página nacional única de Consórcio de Imóveis (Estratégia 1 — SEO/GEO,
// Onda 1). Antes eram 4 páginas por cidade (São Paulo, Santo André,
// Guarulhos, Osasco): a pesquisa de palavras-chave (Google Ads Keyword
// Planner, 15/09) mostrou demanda nacional forte, mas nenhum sinal real de
// busca diferenciado por cidade — manter 4 páginas quase idênticas era risco
// de doorway page, sem ganho de SEO. Consolidado numa página só, incorporando
// a expressão "casa própria" (volume validado na pesquisa). URLs antigas
// redirecionadas em next.config.ts. Os depoimentos reais (Vinicius/São Paulo,
// Leonardo/Santo André) continuam aqui como prova social, sem vínculo de
// cidade na URL.

const WHATSAPP_MESSAGE = "Olá! Vim pelo site e gostaria de simular um consórcio de imóveis.";
const CTA_LABEL = "Simular consórcio de imóveis";

export const metadata: Metadata = buildMetadata({
  title: "Consórcio de Imóveis para Casa Própria",
  description:
    "Consórcio de imóveis sem juros: carta de crédito a partir de R$ 40.000 para a casa própria. Simulação gratuita e consultoria completa com a Revla.",
  path: "/consorcios/imoveis",
});

const diferenciais = [
  {
    title: "Sem juros",
    description: "Você paga apenas a taxa de administração — não há incidência de juros como em um financiamento.",
    icon: <PercentOff />,
  },
  {
    title: "Parcelas reduzidas",
    description: "Parcelas reduzidas em até 50% durante parte do plano, conforme o grupo escolhido.",
    icon: <CalendarDown />,
  },
  {
    title: "Lance embutido",
    description: "Possibilidade de usar parte da própria carta de crédito como lance para antecipar a contemplação.",
    icon: <HandCoin />,
  },
  {
    title: "Consultoria completa",
    description: "Acompanhamento da simulação até a contemplação, com suporte da Revla em todas as etapas.",
    icon: <Headset />,
  },
];

const testimonials = [
  {
    name: "Vinicius",
    city: "São Paulo",
    quote:
      "Toda vez que tive dúvida sobre o meu consórcio de imóvel, fui respondido rápido pelo WhatsApp, sem enrolação. Isso fez toda diferença pra eu me sentir seguro na decisão.",
  },
  {
    name: "Leonardo",
    city: "Santo André",
    quote:
      "Eu não sabia que dava pra usar consórcio como estratégia de investimento até conversar com a Revla. Me explicaram tudo com calma, sem empurrar nada, e hoje entendo exatamente como funciona cada parcela.",
  },
];

const faqItems = [
  {
    question: "Consórcio tem juros?",
    answer:
      "Não. No consórcio você paga apenas a taxa de administração da administradora, sem incidência de juros como ocorre em um financiamento.",
  },
  {
    question: "Como funciona a contemplação?",
    answer:
      "A contemplação ocorre por sorteio mensal entre os participantes do grupo, ou por lance — quando você oferece antecipar parte do saldo devedor para aumentar suas chances.",
  },
  {
    question: "A Revla é uma administradora de consórcio?",
    answer:
      "Não. A Revla é uma corretora parceira que pesquisa entre administradoras autorizadas pelo Banco Central para encontrar o grupo mais vantajoso para você.",
  },
  {
    question: "Com quais administradoras de consórcio de imóveis a Revla trabalha?",
    answer:
      "A Revla é homologada em três administradoras de consórcio: Ademicon, Porto Seguro e Rodobens. Comparamos as opções entre elas — taxa de administração, prazo e histórico de lances do grupo — para indicar a que faz mais sentido pro seu objetivo com o imóvel.",
  },
  {
    question: "A Revla tem registro na SUSEP?",
    answer:
      `Sim. A Revla Corretora de Seguros é registrada na SUSEP (Superintendência de Seguros Privados) sob o nº ${siteConfig.susep}, órgão federal que regula e fiscaliza a atividade de corretagem no Brasil.`,
  },
  {
    question: "A Revla atende consórcio de imóveis em quais cidades?",
    answer:
      "Nosso escritório fica na Avenida Paulista, em São Paulo, com atendimento presencial na capital. Também atendemos por telefone e WhatsApp em todo o Brasil, com o mesmo acompanhamento consultivo até a contemplação.",
  },
  {
    question: "Tem consórcio de imóveis perto de mim?",
    answer:
      "Se você está em São Paulo, sim — nosso escritório fica na Avenida Paulista, com atendimento presencial na capital. Se estiver em outra cidade, atendemos do mesmo jeito consultivo pelo telefone e WhatsApp, sem você precisar se deslocar até um escritório físico.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Corretagem de consórcio de imóveis",
  provider: {
    "@type": "InsuranceAgency",
    name: siteConfig.legalName,
  },
  areaServed: "BR",
  description:
    "Corretagem de consórcio de imóveis sem juros, para comprar, quitar ou reformar a casa própria, terreno ou sala comercial.",
};

export default function ConsorcioImoveisPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs items={[{ label: "Consórcios", href: "/consorcios" }, { label: "Imóveis", href: "/consorcios/imoveis" }]} />
      <Hero
        eyebrow="Consórcio de Imóveis · Casa Própria sem Juros"
        title="Consórcio de imóveis: o caminho sem juros até a casa própria"
        description="Somos corretora homologada na Ademicon, Porto Seguro e Rodobens e comparamos as opções entre elas para encontrar a carta de crédito com o prazo e a parcela certos para comprar, quitar ou reformar seu imóvel — sem juros, só taxa de administração. Atendimento presencial na Avenida Paulista, em São Paulo, e consultoria remota para todo o Brasil."
        compact
      >
        <CTAButton href={whatsappLink(WHATSAPP_MESSAGE)} external>
          {CTA_LABEL}
        </CTAButton>
      </Hero>

      <section className="py-10 sm:py-12">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--color-primary)] sm:text-3xl">
            Por que fazer consórcio de imóveis com a Revla
          </h2>
          <div className="mt-4 space-y-4">
            <p className="text-base leading-relaxed text-[var(--color-ink)]/75">
              A Revla é homologada em três administradoras de consórcio — Ademicon, Porto Seguro e Rodobens — e compara
              as opções entre elas para encontrar o grupo de consórcio de imóveis com o prazo e o valor de parcela que
              fazem sentido para o seu caso — seja para comprar a casa própria, um terreno, uma sala comercial ou
              quitar um financiamento em andamento.
            </p>
            <p className="text-base leading-relaxed text-[var(--color-ink)]/75">
              Nosso escritório fica na Avenida Paulista, no coração de São Paulo, com atendimento presencial na
              capital. Também atendemos por telefone e WhatsApp em todo o Brasil, com a mesma consultoria completa —
              da simulação até a contemplação.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-muted">
        <FeatureGrid title="Diferenciais do consórcio de imóveis com a Revla" columns={4} items={diferenciais} />
      </section>

      <Testimonials title="Quem já fez consórcio de imóveis com a Revla" items={testimonials} accentCards />

      <FAQ items={faqItems} />

      <CTASection
        title="Simule seu consórcio de imóveis"
        description="Fale com um consultor da Revla e receba uma simulação gratuita e sem compromisso, para comprar, quitar ou reformar seu imóvel."
        whatsappMessage={WHATSAPP_MESSAGE}
        buttonLabel={CTA_LABEL}
      />
    </>
  );
}
