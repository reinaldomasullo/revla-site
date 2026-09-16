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
import { BankShield, ClockCheck, Users, TrendingUp } from "@/components/icons";

// Página institucional Ademicon (Estratégia 1 — SEO/GEO, Onda 3).
// Pesquisa de palavras-chave (Google Ads Keyword Planner, 15/09) mostrou um
// padrão de busca real bem específico: quase ninguém busca "ademicon vale a
// pena" (10–100) ou "opiniões" (0–10) — o volume forte está em checar
// confiança ("ademicon é confiável", 1 mil–10 mil) e entender o que é / como
// contatar ("ademicon o que é", "empresa ademicon", 1 mil–10 mil; "ademicon
// telefone"/"contato", 100–1 mil cada). "ademicon" sozinho tem volume
// altíssimo (100 mil–1 mi), mas pela regra do treinamento de parceiro a marca
// nunca pode ir na URL — só no título, H1 e conteúdo. Por isso a URL é
// /consorcios/e-confiavel (decisão confirmada com o usuário), enquanto o
// título/H1 lideram com "Ademicon é confiável?", a pergunta de maior volume
// real testada. Sem depoimento nesta página — o objetivo aqui é prova
// institucional (regulamentação, histórico, números reais da Ademicon), não
// relato de experiência com a Revla.
//
// DECISÃO (16/09): a página NÃO mira mais "ademicon reclame aqui" (8,1 mil
// buscas/mês, mesmo volume alto). Apesar do volume, a intenção de busca real
// (dado do Ubersuggest) é informacional com dificuldade paga de só 1/100 —
// ou seja, quase nenhum anunciante disputa o termo, sinal de que é
// majoritariamente gente já insatisfeita procurando desabafo, não um cliente
// em potencial pra Revla. O usuário decidiu não perseguir esse público — o
// FAQ "A Ademicon tem reclamações?" que respondia a esse termo foi removido.

const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site e queria entender melhor sobre a Ademicon e o consórcio.";
const CTA_LABEL = "Falar com um consultor sobre a Ademicon";

export const metadata: Metadata = buildMetadata({
  title: "Ademicon é Confiável? Veja a Resposta",
  description:
    "Ademicon é confiável? Regulamentada pelo Banco Central, com 35+ anos de história e R$ 145,8 bi em créditos comercializados. Saiba mais com a Revla.",
  path: "/consorcios/e-confiavel",
});

const confiabilidade = [
  {
    title: "Regulamentada pelo Banco Central",
    description:
      "A Ademicon segue a Lei nº 11.795/2008 (Sistema de Consórcios), com fiscalização oficial do Banco Central do Brasil.",
    icon: <BankShield />,
  },
  {
    title: "35+ anos de história",
    description: "Uma das administradoras de consórcio com mais tempo de atividade em operação no país.",
    icon: <ClockCheck />,
  },
  {
    title: "+675 mil clientes atendidos",
    description: "Uma base grande de clientes atendidos em cartas de consórcio de diversas categorias.",
    icon: <Users />,
  },
  {
    title: "R$ 145,8 bi em créditos comercializados",
    description: "Volume expressivo de créditos administrados, um indicador de solidez da operação.",
    icon: <TrendingUp />,
  },
];

const faqItems = [
  {
    question: "Ademicon é confiável?",
    answer:
      "Sim. A Ademicon é uma administradora de consórcio regulamentada pelo Banco Central do Brasil, conforme a Lei nº 11.795/2008 (Sistema de Consórcios), com mais de 35 anos de história e uma base grande de clientes atendidos em todo o país.",
  },
  {
    question: "O que é a Ademicon?",
    answer:
      "É uma administradora de consórcio — uma empresa autorizada pelo Banco Central a organizar grupos de consórcio (de imóveis, veículos, serviços e outras categorias) e gerenciar as contemplações. A Revla é uma corretora parceira que ajuda você a simular, escolher o grupo e acompanhar todo o processo.",
  },
  {
    question: "Como eu entro em contato com a Ademicon?",
    answer:
      "O caminho mais direto é falar com a Revla: como corretora parceira, cuidamos de toda a comunicação com a Ademicon em seu nome — da simulação até a contemplação — para você não precisar lidar sozinho com canais de atendimento genéricos.",
  },
  {
    question: "Vale a pena fazer consórcio com a Ademicon?",
    answer:
      "Para quem busca uma alternativa sem juros ao financiamento, com parcelas flexíveis e a possibilidade de usar lances para antecipar a contemplação, sim — especialmente com o suporte de uma corretora que pesquisa entre administradoras parceiras (não só a Ademicon) para encontrar o grupo mais vantajoso para o seu caso.",
  },
  {
    question: "A Revla é uma administradora de consórcio?",
    answer:
      "Não. A Revla é uma corretora parceira que trabalha com administradoras autorizadas pelo Banco Central, incluindo a Ademicon, para encontrar o grupo mais vantajoso para você — sem nenhum custo adicional por essa intermediação.",
  },
  {
    question: "A Revla atende em quais cidades?",
    answer:
      "Nosso escritório fica na Avenida Paulista, em São Paulo, com atendimento presencial na capital. Também atendemos por telefone e WhatsApp em todo o Brasil, com o mesmo acompanhamento consultivo até a contemplação.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Consultoria sobre consórcio administrado pela Ademicon",
  provider: {
    "@type": "InsuranceAgency",
    name: siteConfig.legalName,
  },
  areaServed: "BR",
  description:
    "Informações sobre a Ademicon (administradora de consórcio regulamentada pelo Banco Central) e consultoria da Revla para simular e contratar cartas de consórcio.",
};

export default function AdemiconEConfiavelPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs
        items={[
          { label: "Consórcios", href: "/consorcios" },
          { label: "A Ademicon é Confiável?", href: "/consorcios/e-confiavel" },
        ]}
      />
      <Hero
        eyebrow="Consórcio Ademicon · Administradora Parceira da Revla"
        title="Ademicon é confiável? Veja a regulamentação, o histórico e como a Revla te acompanha em cada etapa"
        description="A Ademicon é uma das maiores administradoras de consórcio do Brasil, regulamentada pelo Banco Central. Aqui você entende o que ela faz, como funciona a fiscalização e por que contratar através da Revla te dá um acompanhamento pessoal em todo o processo."
        compact
      >
        <CTAButton href={whatsappLink(WHATSAPP_MESSAGE)} external>
          {CTA_LABEL}
        </CTAButton>
      </Hero>

      <section className="py-10 sm:py-12">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--color-primary)] sm:text-3xl">
            O que é a Ademicon
          </h2>
          <div className="mt-4 space-y-4">
            <p className="text-base leading-relaxed text-[var(--color-ink)]/75">
              A Ademicon é uma administradora de consórcio: uma empresa autorizada pelo Banco Central do Brasil a
              organizar grupos de consórcio — de imóveis, veículos, motos, caminhões, máquinas, agro, investimento
              e serviços — e gerenciar sorteios, lances e contemplações conforme a Lei nº 11.795/2008 (Sistema de
              Consórcios).
            </p>
            <p className="text-base leading-relaxed text-[var(--color-ink)]/75">
              A Revla é uma corretora parceira: não é a Ademicon, e também não trabalha com exclusividade. Pesquisamos
              entre administradoras autorizadas pelo Banco Central — incluindo a Ademicon — para te apresentar o
              grupo mais vantajoso, e acompanhamos você da simulação até a contemplação.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-muted">
        <FeatureGrid
          title="Por que a Ademicon é considerada confiável"
          description="Números institucionais da Ademicon, administradora parceira da Revla para consórcios."
          columns={4}
          items={confiabilidade}
        />
      </section>

      <FAQ items={faqItems} />

      <CTASection
        title="Tire suas dúvidas sobre o consórcio Ademicon"
        description="Fale com um consultor da Revla e simule gratuitamente, sem compromisso."
        whatsappMessage={WHATSAPP_MESSAGE}
        buttonLabel={CTA_LABEL}
      />
    </>
  );
}
