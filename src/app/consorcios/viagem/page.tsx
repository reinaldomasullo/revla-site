import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTAButton from "@/components/CTAButton";
import Container from "@/components/Container";
import FeatureGrid from "@/components/FeatureGrid";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig, whatsappLink, buildMetadata } from "@/lib/site-config";
import { Plane, Globe, Compass, CalendarDown, Receipt } from "@/components/icons";

// Consórcio para Viagem (Estratégia 1, Onda 5, 15/09): pesquisa real mostrou
// "consórcio viagem" e "consórcio para viagem" empatados em 1 mil–10 mil
// buscas/mês — bem à frente de "consórcio de viagem" (100–1 mil). Por isso
// título/H1 lideram sem o "de". "Consórcio de viagem internacional" também
// aparece (10–100), citado no conteúdo.

const WHATSAPP_MESSAGE = "Olá! Vim pelo site e gostaria de simular um consórcio para viagem.";
const CTA_LABEL = "Simular consórcio de viagem";

export const metadata: Metadata = buildMetadata({
  title: "Consórcio para Viagem Sem Juros",
  description:
    "Consórcio para viagem sem juros: carta de crédito para pacotes, passagens e hospedagem no Brasil ou no exterior. Simulação gratuita com a Revla.",
  path: "/consorcios/viagem",
});

const diferenciais = [
  {
    title: "Sem juros",
    description: "Você paga apenas a taxa de administração — não há incidência de juros como em um financiamento.",
    icon: <CalendarDown />,
  },
  {
    title: "Nacional ou internacional",
    description: "Pacotes, passagens, hospedagem e cruzeiros em qualquer destino — viagem de férias, lua de mel, formatura, intercâmbio ou casamento no exterior.",
    icon: <Globe />,
  },
  {
    title: "Escolha a agência que quiser",
    description: "Sem rede credenciada obrigatória — use a carta com a agência de viagens ou plataforma de sua preferência.",
    icon: <Compass />,
  },
  {
    title: "Planeje com antecedência",
    description: "Parcele hoje e use a carta quando for viajar, com prazos flexíveis conforme o grupo escolhido.",
    icon: <Plane />,
  },
  {
    title: "Pagamento direto à agência",
    description: "A administradora paga a agência ou companhia aérea diretamente, à vista, mediante nota fiscal.",
    icon: <Receipt />,
  },
];

const faqItems = [
  {
    question: "Posso usar a carta de crédito pra viagem internacional?",
    answer:
      "Sim. A carta de crédito do consórcio de viagem pode ser usada tanto em destinos nacionais quanto internacionais, dentro do valor contratado.",
  },
  {
    question: "Preciso decidir o destino no momento da contratação?",
    answer:
      "Não é obrigatório — você contrata pelo valor da carta de crédito, e decide o destino, a data e o pacote depois de contemplado.",
  },
  {
    question: "Dá pra usar a carta em qualquer agência de viagens?",
    answer:
      "Sim. Diferente de um pacote fechado, a carta de crédito não tem agência ou plataforma obrigatória — você escolhe livremente onde comprar sua viagem.",
  },
  {
    question: "Como a administradora paga a agência de viagens?",
    answer:
      "Mediante nota fiscal ou comprovante de emissão de passagens e reservas, com CNPJ ativo da agência, companhia aérea ou plataforma de hospedagem. O pagamento é feito diretamente ao fornecedor, à vista.",
  },
  {
    question: "Posso usar o consórcio pra cruzeiro ou intercâmbio?",
    answer:
      "Sim. A carta cobre qualquer modalidade de viagem — pacotes, cruzeiros, intercâmbio, lua de mel ou viagem de formatura — dentro do valor contratado.",
  },
  {
    question: "Consórcio para viagem tem juros?",
    answer:
      "Não. Você paga apenas a taxa de administração da administradora, sem incidência de juros como ocorre em um financiamento tradicional.",
  },
  {
    question: "Como funciona a contemplação?",
    answer:
      "A contemplação ocorre por sorteio mensal entre os participantes do grupo, ou por lance — quando você oferece antecipar parte do saldo devedor para aumentar suas chances.",
  },
  {
    question: "A Revla é uma administradora de consórcio?",
    answer:
      "Não. A Revla é uma corretora parceira que pesquisa entre administradoras autorizadas pelo Banco Central, incluindo Ademicon, Porto Seguro e Rodobens, para encontrar o grupo mais vantajoso para você.",
  },
  {
    question: "Com quais administradoras de consórcio para viagem a Revla trabalha?",
    answer:
      "A Revla é homologada em três administradoras de consórcio: Ademicon, Porto Seguro e Rodobens. Comparamos as opções entre elas — taxa de administração, prazo e histórico de lances do grupo — para indicar a que faz mais sentido pra sua viagem.",
  },
  {
    question: "A Revla tem registro na SUSEP?",
    answer:
      `Sim. A Revla Corretora de Seguros é registrada na SUSEP (Superintendência de Seguros Privados) sob o nº ${siteConfig.susep}, órgão federal que regula e fiscaliza a atividade de corretagem no Brasil.`,
  },
  {
    question: "A Revla atende consórcio para viagem em quais cidades?",
    answer:
      "Nosso escritório fica na Avenida Paulista, em São Paulo, com atendimento presencial na capital. Também atendemos por telefone e WhatsApp em todo o Brasil, com o mesmo acompanhamento consultivo até a contemplação.",
  },
  {
    question: "Tem consórcio para viagem perto de mim?",
    answer:
      "Se você está em São Paulo, sim — nosso escritório fica na Avenida Paulista, com atendimento presencial na capital. Se estiver em outra cidade, atendemos do mesmo jeito consultivo pelo telefone e WhatsApp, sem você precisar se deslocar até um escritório físico.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Corretagem de consórcio para viagem",
  provider: {
    "@type": "InsuranceAgency",
    name: siteConfig.legalName,
  },
  areaServed: "BR",
  description:
    "Corretagem de cartas de consórcio para pacotes, passagens e hospedagem no Brasil ou no exterior, sem juros, com administradoras parceiras autorizadas pelo Banco Central.",
};

export default function ConsorcioViagemPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs
        items={[
          { label: "Consórcios", href: "/consorcios" },
          { label: "Viagem", href: "/consorcios/viagem" },
        ]}
      />
      <Hero
        eyebrow="Consórcio para Viagem · Administradoras Parceiras da Revla"
        title="Consórcio para viagem: carta de crédito sem juros pra sua próxima viagem"
        description="Somos corretora homologada na Ademicon, Porto Seguro e Rodobens. Comparamos as opções entre elas pra você simular seu consórcio de pacotes, passagens e hospedagem sem pagar juros, com liberdade pra escolher o destino e a agência, e a possibilidade de dar lances para antecipar a contemplação."
      >
        <CTAButton href={whatsappLink(WHATSAPP_MESSAGE)} external>
          {CTA_LABEL}
        </CTAButton>
      </Hero>

      <FeatureGrid title="Por que fazer consórcio para viagem" columns={4} items={diferenciais} />

      <section className="py-10 sm:py-12">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--color-primary)] sm:text-3xl">
            Como funciona na prática, do sorteio até a viagem
          </h2>
          <div className="mt-4 space-y-4">
            <p className="text-base leading-relaxed text-[var(--color-ink)]/75">
              Depois de contemplado por sorteio ou lance, você escolhe livremente o destino, a data e a agência —
              não existe rede credenciada. Pra liberar o pagamento, a administradora pede a nota fiscal ou o
              comprovante de emissão de passagens e reservas, com CNPJ ativo da agência ou companhia aérea, e paga
              o valor diretamente ao fornecedor, à vista.
            </p>
            <p className="text-base leading-relaxed text-[var(--color-ink)]/75">
              Isso te coloca na posição de comprador à vista na negociação com a agência — o que costuma abrir
              espaço pra negociar desconto no pacote, além de já eliminar os juros do parcelamento no cartão.
            </p>
          </div>
        </Container>
      </section>

      <FAQ items={faqItems} />

      <CTASection
        title="Simule seu consórcio para viagem"
        description="Fale com um consultor da Revla e receba uma simulação gratuita e sem compromisso."
        whatsappMessage={WHATSAPP_MESSAGE}
        buttonLabel={CTA_LABEL}
      />
    </>
  );
}
