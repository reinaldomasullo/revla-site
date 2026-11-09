// Páginas de consórcio para brasileiros que moram no exterior (além do Japão,
// que tem página própria, mais longa: /consorcios/brasileiros-no-japao).
//
// Criadas em 09/11/2026 a partir da estrutura da página do Japão. Só entrou
// aqui o que vale para qualquer país (contratação online, parcela em reais,
// renda analisada na contemplação, regras da Ademicon). Itens específicos do
// Japão (documentos japoneses, apostila de Haia, ienes, câmbio, horário,
// acordo previdenciário, vídeos, simulador) ficaram de fora.
//
// PENDENTE DE CONFIRMAÇÃO com a Ademicon antes de liberar para o Google:
//  - contratação online com endereço nos Estados Unidos / na Europa;
//  - quais documentos de renda são aceitos e se exigem tradução juramentada ou
//    apostila em cada país (o texto repete a regra do Japão: documento real de
//    renda do país, tradução juramentada, sem apostila de Haia);
//  - horário de atendimento: mesmas janelas do Japão (7h-11h e 19h-23h), no
//    horário local de cada país; ajustar em `horario` se mudar.
// Enquanto isso, as páginas ficam com noindex (INDEXAR = false) e fora do
// sitemap. Para liberar: INDEXAR = true aqui e incluir as rotas em sitemap.ts.

export const INDEXAR = false;
export const EXTERIOR_PUBLICADO = "2026-11-09";
export const EXTERIOR_ATUALIZADO = "2026-11-09";
export const EXTERIOR_ATUALIZADO_LABEL = "09 de novembro de 2026";

export type ExteriorSlug = "estados-unidos" | "europa";

export type ExteriorPais = {
  slug: ExteriorSlug;
  path: string;
  nome: string; // "Estados Unidos"
  em: string; // "nos Estados Unidos"
  moeda: string; // "dólares"
  metaTitle: string;
  metaDescription: string;
  h1: string;
  whatsapp: string;
  horario: string; // horário de atendimento, relativo ao país
};

export const exteriorPaises: ExteriorPais[] = [
  {
    slug: "estados-unidos",
    path: "/consorcios/brasileiros-nos-estados-unidos",
    nome: "Estados Unidos",
    em: "nos Estados Unidos",
    moeda: "dólares",
    metaTitle: "Consórcio para brasileiros nos Estados Unidos",
    metaDescription:
      "Mora nos Estados Unidos? Veja como contratar consórcio de imóvel no Brasil online, pagar a parcela com cartão internacional e comprovar renda na contemplação.",
    h1: "Morando nos Estados Unidos, posso fazer consórcio de imóvel no Brasil?",
    whatsapp: "Olá, Reinaldo! Moro nos Estados Unidos e quero entender o consórcio de imóvel no Brasil.",
    horario: "das 7h às 11h e das 19h às 23h, no horário local de onde você mora",
  },
  {
    slug: "europa",
    path: "/consorcios/brasileiros-na-europa",
    nome: "Europa",
    em: "na Europa",
    moeda: "euros",
    metaTitle: "Consórcio para brasileiros na Europa",
    metaDescription:
      "Mora na Europa? Veja como contratar consórcio de imóvel no Brasil online, pagar a parcela com cartão internacional e comprovar renda na contemplação.",
    h1: "Morando na Europa, posso fazer consórcio de imóvel no Brasil?",
    whatsapp: "Olá, Reinaldo! Moro na Europa e quero entender o consórcio de imóvel no Brasil.",
    horario: "das 7h às 11h e das 19h às 23h, no horário local de onde você mora",
  },
];

export function getExteriorPais(slug: ExteriorSlug): ExteriorPais {
  const p = exteriorPaises.find((x) => x.slug === slug);
  if (!p) throw new Error(`País não encontrado: ${slug}`);
  return p;
}
