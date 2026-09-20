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
import { HospitalCross, ClipboardCheck, Sparkle, UserCheck, Receipt } from "@/components/icons";

// Consórcio para Cirurgia Plástica (Estratégia 1, Onda 5, 15/09): pesquisa
// real mostrou "consórcio cirurgia plástica" e "consórcio para cirurgia
// plástica" empatados em 1 mil–10 mil buscas/mês — bem à frente de
// "consórcio de cirurgia plástica" (100–1 mil). Por isso título/H1 lideram
// sem o "de". "Consórcio silicone"/"consórcio de silicone" também têm
// volume real (100–1 mil) — citado no conteúdo como exemplo de procedimento
// coberto, sem virar página própria.

const WHATSAPP_MESSAGE = "Olá! Vim pelo site e gostaria de simular um consórcio para cirurgia plástica.";
const CTA_LABEL = "Simular consórcio de cirurgia plástica";

export const metadata: Metadata = buildMetadata({
  title: "Consórcio para Cirurgia Plástica",
  description:
    "Consórcio para cirurgia plástica sem juros: carta de crédito para procedimentos estéticos em qualquer clínica. Simulação gratuita com a Revla.",
  path: "/consorcios/cirurgia-plastica",
});

const diferenciais = [
  {
    title: "Sem juros",
    description: "Você paga apenas a taxa de administração — não há incidência de juros como em um financiamento.",
    icon: <ClipboardCheck />,
  },
  {
    title: "Qualquer clínica ou médico",
    description: "A carta de crédito pode ser usada na clínica e com o médico de sua escolha, sem rede credenciada obrigatória.",
    icon: <UserCheck />,
  },
  {
    title: "Diversos procedimentos",
    description: "Rinoplastia, lipoaspiração, prótese de silicone, abdominoplastia, mamoplastia, blefaroplastia e procedimentos reparadores — inclusive pós-bariátrica.",
    icon: <HospitalCross />,
  },
  {
    title: "Parcelas que cabem no orçamento",
    description: "Prazos e valores de parcela flexíveis, ajustados conforme o grupo e o valor da carta escolhidos.",
    icon: <Sparkle />,
  },
  {
    title: "Pagamento direto ao prestador",
    description: "A administradora paga a clínica diretamente, à vista, mediante nota fiscal — você negocia como comprador à vista.",
    icon: <Receipt />,
  },
];

const faqItems = [
  {
    question: "Posso usar o consórcio de cirurgia plástica pra colocar prótese de silicone?",
    answer:
      "Sim. A carta de crédito cobre qualquer procedimento estético ou reparador, incluindo prótese de silicone, desde que dentro do valor contratado.",
  },
  {
    question: "Preciso escolher o procedimento no momento da contratação?",
    answer:
      "Não é obrigatório — você contrata pelo valor da carta de crédito, e decide o procedimento, a clínica e o médico depois de contemplado.",
  },
  {
    question: "Posso usar em qualquer clínica ou hospital?",
    answer:
      "Sim. Diferente de um plano ou convênio, o consórcio não tem rede credenciada — você escolhe livremente onde fazer o procedimento.",
  },
  {
    question: "Preciso apresentar nota fiscal da clínica pra usar a carta de crédito?",
    answer:
      "Sim. A administradora libera o pagamento mediante contrato de prestação de serviço ou nota fiscal da clínica, com CNPJ ativo, e paga diretamente ao prestador — você não recebe o dinheiro em conta.",
  },
  {
    question: "O consórcio cobre cirurgia reparadora, não só estética?",
    answer:
      "Sim. A carta cobre tanto procedimentos estéticos quanto reparadores — incluindo cirurgia pós-bariátrica, reconstrução e outros procedimentos com indicação médica — dentro do valor contratado.",
  },
  {
    question: "Consórcio para cirurgia plástica tem juros?",
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
    question: "Com quais administradoras de consórcio para cirurgia plástica a Revla trabalha?",
    answer:
      "A Revla é homologada em três administradoras de consórcio: Ademicon, Porto Seguro e Rodobens. Comparamos as opções entre elas — taxa de administração, prazo e histórico de lances do grupo — para indicar a que faz mais sentido pro seu procedimento.",
  },
  {
    question: "A Revla tem registro na SUSEP?",
    answer:
      `Sim. A Revla Corretora de Seguros é registrada na SUSEP (Superintendência de Seguros Privados) sob o nº ${siteConfig.susep}, órgão federal que regula e fiscaliza a atividade de corretagem no Brasil.`,
  },
  {
    question: "A Revla atende consórcio para cirurgia plástica em quais cidades?",
    answer:
      "Nosso escritório fica na Avenida Paulista, em São Paulo, com atendimento presencial na capital. Também atendemos por telefone e WhatsApp em todo o Brasil, com o mesmo acompanhamento consultivo até a contemplação.",
  },
  {
    question: "Tem consórcio para cirurgia plástica perto de mim?",
    answer:
      "Se você está em São Paulo, sim — nosso escritório fica na Avenida Paulista, com atendimento presencial na capital. Se estiver em outra cidade, atendemos do mesmo jeito consultivo pelo telefone e WhatsApp, sem você precisar se deslocar até um escritório físico.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Corretagem de consórcio para cirurgia plástica",
  provider: {
    "@type": "InsuranceAgency",
    name: siteConfig.legalName,
  },
  areaServed: "BR",
  description:
    "Corretagem de cartas de consórcio para procedimentos de cirurgia plástica, sem juros, com administradoras parceiras autorizadas pelo Banco Central.",
};

export default function ConsorcioCirurgiaPlasticaPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs
        items={[
          { label: "Consórcios", href: "/consorcios" },
          { label: "Cirurgia Plástica", href: "/consorcios/cirurgia-plastica" },
        ]}
      />
      <Hero
        eyebrow="Consórcio para Cirurgia Plástica · Administradoras Parceiras da Revla"
        title="Consórcio para cirurgia plástica: carta de crédito sem juros"
        description="Somos corretora homologada na Ademicon, Porto Seguro e Rodobens. Comparamos as opções entre elas pra você fazer procedimentos estéticos ou reparadores sem pagar juros, com liberdade pra escolher clínica e médico, e a possibilidade de dar lances para antecipar a contemplação."
      >
        <CTAButton href={whatsappLink(WHATSAPP_MESSAGE)} external>
          {CTA_LABEL}
        </CTAButton>
      </Hero>

      <FeatureGrid title="Por que fazer consórcio para cirurgia plástica" columns={4} items={diferenciais} />

      <section className="py-10 sm:py-12">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--color-primary)] sm:text-3xl">
            Como funciona na prática, do sorteio até a cirurgia
          </h2>
          <div className="mt-4 space-y-4">
            <p className="text-base leading-relaxed text-[var(--color-ink)]/75">
              Depois de contemplado por sorteio ou lance, você escolhe livremente a clínica e o médico — não existe
              rede credenciada. Pra liberar o pagamento, a administradora pede o contrato de prestação de serviço ou
              a nota fiscal da clínica, com CNPJ ativo, e paga o valor diretamente ao prestador, à vista.
            </p>
            <p className="text-base leading-relaxed text-[var(--color-ink)]/75">
              Isso te coloca na posição de comprador à vista na negociação com a clínica — o que costuma abrir espaço
              pra negociar desconto no valor do procedimento, além de já eliminar os juros do parcelamento no cartão
              ou de um empréstimo pessoal.
            </p>
          </div>
        </Container>
      </section>

      <FAQ items={faqItems} />

      <CTASection
        title="Simule seu consórcio para cirurgia plástica"
        description="Fale com um consultor da Revla e receba uma simulação gratuita e sem compromisso."
        whatsappMessage={WHATSAPP_MESSAGE}
        buttonLabel={CTA_LABEL}
      />
    </>
  );
}
