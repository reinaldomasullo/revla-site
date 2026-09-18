import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTAButton from "@/components/CTAButton";
import FeatureGrid from "@/components/FeatureGrid";
import Container from "@/components/Container";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig, whatsappLink, buildMetadata } from "@/lib/site-config";
import {
  Car,
  CarFleet,
  Tractor,
  Plant,
  Bike,
  Phone,
  Building,
  Briefcase,
  Camera,
  Laptop,
  GameController,
  Devices,
  PartyCalendar,
  HouseKey,
  Machine,
  House,
  Scale,
  Package,
  Truck,
  Plane,
  Heart,
  Gift,
  Users,
  BuildingUsers,
  ShieldUsers,
  Backpack,
  ClockShort,
  Globe,
  Handshake,
  BankShield,
  PiggyBank,
  ShieldCheck,
  DocumentCheck,
  LockDocument,
  Key,
  Receipt,
  Motorcycle,
} from "@/components/icons";

export const metadata: Metadata = buildMetadata({
  title: "Seguro em São Paulo: Auto, Vida e Mais",
  description:
    "Seguro auto, residencial, empresarial, vida, viagem, garantia e fiança locatícia em São Paulo — cotamos em até 18 seguradoras para você.",
  path: "/seguros",
});

// Seguradoras parceiras relevantes pra este hub (Ademicon é de consórcio e
// Prevent Senior é de plano de saúde — não entram aqui).
const seguradorasParceiras = siteConfig.partners.filter(
  (p) => !["Ademicon", "Prevent Senior"].includes(p)
);

const automovel = [
  {
    title: "Auto Individual",
    description: "Cobertura para colisão, roubo, furto, terceiros e assistência 24h para o seu carro.",
    href: "/seguros/auto",
    linkLabel: "Ver seguro auto",
    icon: <Car />,
  },
  {
    title: "Auto Frota",
    description: "Gestão de apólices e sinistros centralizada para frotas de veículos de empresas.",
    icon: <CarFleet />,
  },
  {
    title: "Carta Azul",
    description: "Seguro de responsabilidade civil para máquinas e veículos sem placa, como tratores e equipamentos agrícolas.",
    icon: <Tractor />,
  },
  {
    title: "Moto",
    description: "Cobertura contra colisão, roubo, furto e responsabilidade civil a terceiros, com assistência 24h.",
    href: "/seguros/moto",
    linkLabel: "Ver seguro de moto",
    icon: <Motorcycle />,
  },
];

const ramosElementares = [
  {
    title: "Agronegócios",
    description: "Proteção para produção rural, maquinário agrícola, rebanhos e instalações do agronegócio.",
    icon: <Plant />,
  },
  {
    title: "Bike",
    description: "Cobertura contra roubo, furto e danos para bicicletas comuns e elétricas.",
    href: "/seguros/bicicleta",
    linkLabel: "Ver seguro de bicicleta",
    icon: <Bike />,
  },
  {
    title: "Celular",
    description: "Cobertura contra roubo, furto e quebra acidental do aparelho.",
    href: "/seguros/celular",
    linkLabel: "Ver seguro celular",
    icon: <Phone />,
  },
  {
    title: "Condomínio",
    description: "Proteção para áreas comuns e responsabilidade civil do condomínio.",
    href: "/seguros/condominial",
    linkLabel: "Ver seguro condominial",
    icon: <Building />,
  },
  {
    title: "Empresarial",
    description: "Proteção para patrimônio, faturamento e operação do seu negócio.",
    href: "/seguros/empresarial",
    linkLabel: "Ver seguro empresarial",
    icon: <Briefcase />,
  },
  {
    title: "Foto e Vídeo",
    description: "Cobertura para câmeras, lentes e equipamentos fotográficos e de filmagem.",
    icon: <Camera />,
  },
  {
    title: "Notebook e Tablet",
    description: "Proteção contra roubo, furto e quebra acidental de notebooks e tablets.",
    icon: <Laptop />,
  },
  {
    title: "Smart e Games",
    description: "Cobertura para smartwatches, consoles e outros equipamentos eletrônicos de jogos.",
    icon: <GameController />,
  },
  {
    title: "Equipamentos Portáteis Multi-Itens",
    description: "Uma única apólice para proteger vários equipamentos eletrônicos portáteis ao mesmo tempo.",
    icon: <Devices />,
  },
  {
    title: "Eventos",
    description: "Cobertura para cancelamento, responsabilidade civil e imprevistos em festas e eventos.",
    icon: <PartyCalendar />,
  },
  {
    title: "Imobiliária",
    description: "Proteção para imóveis em construção, reforma ou comercialização, sob responsabilidade de incorporadoras e imobiliárias.",
    icon: <HouseKey />,
  },
  {
    title: "Máquinas e Equipamentos",
    description: "Cobertura contra quebra, roubo e danos para máquinas e equipamentos industriais ou agrícolas.",
    icon: <Machine />,
  },
  {
    title: "Residencial",
    description: "Cobertura para incêndio, roubo, danos elétricos e desastres naturais na sua casa ou apartamento.",
    href: "/seguros/residencial",
    linkLabel: "Ver seguro residencial",
    icon: <House />,
  },
  {
    title: "Responsabilidade Civil",
    description: "Proteção contra indenizações por danos causados a terceiros, no exercício profissional ou empresarial.",
    href: "/seguros/rc-profissional",
    linkLabel: "Ver seguro RC profissional",
    icon: <Scale />,
  },
];

const transportesEViagem = [
  {
    title: "Seguros para Embarcadores",
    description: "Proteção para a carga durante o transporte, contratada por quem envia a mercadoria.",
    icon: <Package />,
  },
  {
    title: "Seguros para Transportadoras",
    description: "Cobertura de responsabilidade civil e danos à carga para empresas de transporte.",
    icon: <Truck />,
  },
  {
    title: "Viagem",
    description: "Assistência médica, bagagem e imprevistos em viagens nacionais e internacionais.",
    href: "/seguros/viagem",
    linkLabel: "Ver seguro de viagem",
    icon: <Plane />,
  },
];

const vida = [
  {
    title: "Vida Individual",
    description: "Indenização para a família em caso de morte ou invalidez, com capital segurado definido conforme sua necessidade.",
    href: "/seguros/vida",
    linkLabel: "Ver seguro de vida",
    icon: <Heart />,
  },
  {
    title: "Vida Presente",
    description: "Seguro de vida oferecido como presente para proteger uma pessoa querida, geralmente crianças.",
    icon: <Gift />,
  },
  {
    title: "Vida em Grupo",
    description: "Seguro de vida coletivo contratado pela empresa para proteger seus colaboradores.",
    icon: <Users />,
  },
  {
    title: "Vida PME+",
    description: "Seguro de vida em grupo desenhado especialmente para pequenas e médias empresas.",
    icon: <BuildingUsers />,
  },
  {
    title: "Acidentes Pessoais Coletivos",
    description: "Cobertura para morte ou invalidez por acidente, contratada em grupo pela empresa.",
    icon: <ShieldUsers />,
  },
  {
    title: "Acidentes Pessoais Escolar",
    description: "Proteção para alunos contra acidentes dentro e fora do ambiente escolar.",
    icon: <Backpack />,
  },
  {
    title: "Acidentes Pessoais Prazo Curto",
    description: "Cobertura por acidentes para períodos determinados, como viagens corporativas ou eventos.",
    icon: <ClockShort />,
  },
  {
    title: "Capital Global",
    description: "Apólice de acidentes pessoais para grupos, com um capital segurado único para todos os participantes.",
    icon: <Globe />,
  },
  {
    title: "Convenções Coletivas",
    description: "Seguro de vida em grupo negociado por sindicatos para toda a categoria profissional.",
    icon: <Handshake />,
  },
  {
    title: "Prestamista",
    description: "Quita ou reduz o saldo devedor de um financiamento em caso de morte ou invalidez do titular.",
    icon: <BankShield />,
  },
];

const previdenciaEGarantias = [
  {
    title: "Previdência Individual",
    description: "Planos PGBL e VGBL para construir uma reserva de longo prazo com vantagens tributárias.",
    icon: <PiggyBank />,
  },
  {
    title: "Previdência Infantil",
    description: "Reserva financeira de longo prazo construída em nome de filhos ou netos.",
    icon: <PiggyBank />,
  },
  {
    title: "Proteção Planejada",
    description: "Combina previdência e proteção, com aportes programados conforme seus objetivos de vida.",
    icon: <ShieldCheck />,
  },
  {
    title: "Seguro Garantia",
    description: "Garante o cumprimento de obrigações contratuais e licitações, substituindo caução em dinheiro ou carta fiança.",
    href: "/seguros/garantia",
    linkLabel: "Ver seguro garantia",
    icon: <DocumentCheck />,
  },
  {
    title: "Capitalização Garantia Contratual",
    description: "Título de capitalização usado como garantia em contratos, com possibilidade de resgate.",
    icon: <LockDocument />,
  },
  {
    title: "Fiança Locatícia",
    description: "Substitui o fiador na locação de imóveis, com aprovação mais rápida para o inquilino.",
    href: "/seguros/fianca",
    linkLabel: "Ver seguro fiança",
    icon: <Key />,
  },
  {
    title: "Título de Capitalização Aluguel",
    description: "Título de capitalização usado como garantia de aluguel, no lugar de fiador ou caução.",
    icon: <Receipt />,
  },
];

const faqItems = [
  {
    question: "Quais tipos de seguro a Revla trabalha?",
    answer:
      "Praticamente todos os ramos do mercado: automóvel, ramos elementares (residencial, condomínio, empresarial, bike, celular, entre outros), transportes, viagem, vida individual e empresarial, previdência, seguro garantia e fiança locatícia. Veja o catálogo completo acima.",
  },
  {
    question: "Como funciona a comparação entre seguradoras?",
    answer:
      "Cotamos em até 18 seguradoras, dependendo do produto — parceiras como Porto Seguro, AZOS, Tokio Marine, Icatu, MAG Mongeral e PASI, entre outras — para encontrar a cobertura com melhor custo-benefício para o seu caso, com simulação gratuita e sem compromisso.",
  },
  {
    question: "O que é a Carta Azul?",
    answer:
      "É o seguro de responsabilidade civil para máquinas e veículos que não circulam em via pública com placa, como tratores e equipamentos agrícolas — cobre danos causados a terceiros durante o uso desses equipamentos.",
  },
  {
    question: "Qual a diferença entre Seguro Garantia e Fiança Locatícia?",
    answer:
      "O Seguro Garantia protege o cumprimento de obrigações em contratos e licitações, geralmente entre empresas. A Fiança Locatícia é usada especificamente para substituir o fiador na locação de imóveis.",
  },
  {
    question: "Quanto custa contratar um seguro com a Revla?",
    answer:
      "O valor depende do tipo de seguro, das coberturas escolhidas e da seguradora. Fazemos uma simulação gratuita comparando opções entre parceiros para encontrar o melhor custo-benefício.",
  },
  {
    question: "A Revla é uma corretora regulamentada?",
    answer:
      "Sim. A Revla Corretora de Seguros é registrada na SUSEP (Superintendência de Seguros Privados) sob o nº 232150320, órgão federal que regula e fiscaliza a atividade de corretagem de seguros no Brasil.",
  },
  {
    question: "A Revla atende em quais cidades?",
    answer:
      "Nosso escritório fica na Avenida Paulista, em São Paulo, com atendimento presencial na capital e consultoria remota para todo o Brasil. Já atendemos clientes em São Paulo e em cidades da região do ABC, como Santo André, São Bernardo do Campo, São Caetano do Sul, Diadema e Mauá.",
  },
  {
    question: "Tem seguro perto de mim?",
    answer:
      "Se você está em São Paulo, sim — nosso escritório fica na Avenida Paulista, com atendimento presencial na capital. Se estiver em outra cidade, atendemos do mesmo jeito consultivo pelo telefone e WhatsApp, sem você precisar se deslocar até um escritório físico.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Corretagem de seguros",
  provider: {
    "@type": "InsuranceAgency",
    name: siteConfig.legalName,
  },
  areaServed: "BR",
  description:
    "Corretagem de seguros de automóvel, ramos elementares (residencial, condomínio, empresarial e mais), transportes, viagem, vida individual e empresarial, previdência, seguro garantia e fiança locatícia.",
};

export default function SegurosPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs items={[{ label: "Seguros", href: "/seguros" }]} />
      <Hero
        eyebrow="Seguros em São Paulo"
        title="Seguros para proteger você, sua família, seu negócio e seu patrimônio"
        description="Trabalhamos com praticamente todos os ramos de seguro — automóvel, residencial, empresarial, vida, viagem, transportes, previdência, seguro garantia e fiança locatícia. Cotamos em até 18 seguradoras, dependendo do produto, para encontrar a cobertura ideal, com simulação gratuita. Atendimento presencial em São Paulo e consultoria remota para todo o Brasil."
      >
        <CTAButton href={whatsappLink("Olá! Vim pelo site e gostaria de falar com um consultor da Revla.")} external>
          Cote grátis
        </CTAButton>
      </Hero>

      <section className="bg-[var(--color-primary)] py-6 sm:py-8" aria-label="Seguradoras parceiras">
        <Container>
          <p className="text-center text-xs font-semibold uppercase tracking-wide text-white/60">
            Parceria com as maiores seguradoras do Brasil
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {seguradorasParceiras.map((seguradora) => (
              <span key={seguradora} className="text-sm font-medium text-white/85">
                {seguradora}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <FeatureGrid
        title="Seguro Automóvel"
        description="Para o seu carro, sua frota ou máquinas e veículos sem placa."
        columns={3}
        items={automovel}
      />

      <section className="section-tint-blue">
        <FeatureGrid
          title="Ramos Elementares"
          description="Proteção para bens, equipamentos e negócios — do dia a dia às operações da sua empresa."
          columns={4}
          items={ramosElementares}
        />
      </section>

      <FeatureGrid
        title="Transportes e Viagem"
        description="Cobertura para cargas em trânsito e imprevistos durante viagens."
        columns={3}
        items={transportesEViagem}
      />

      <section className="section-tint-silver">
        <FeatureGrid
          title="Seguro de Vida"
          description="Para você, sua família ou seus colaboradores — individual ou em grupo."
          columns={4}
          items={vida}
        />
      </section>

      <FeatureGrid
        title="Previdência, Garantias e Aluguel"
        description="Soluções de longo prazo e alternativas a caução e fiador."
        columns={4}
        items={previdenciaEGarantias}
      />

      <section className="section-muted">
        <FAQ items={faqItems} />
      </section>

      <CTASection
        title="Descubra qual seguro faz sentido para você"
        description="Fale com um consultor da Revla e receba uma comparação gratuita entre seguradoras."
        whatsappMessage="Olá! Vim pelo site e gostaria de falar com um consultor da Revla."
        buttonLabel="Cote grátis agora"
      />
    </>
  );
}
