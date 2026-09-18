import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // Redirecionamentos permanentes (308, equivalente a 301 pra buscadores)
  // das URLs do site antigo em WordPress (pré-migração, 20/08/2026) pras
  // páginas equivalentes no site atual. Sem isso, quem chega por um link
  // antigo (resultado de busca já indexado, backlink externo, ou uma IA que
  // ainda tenha a URL antiga em cache) cai direto no erro 404, e o site
  // perde qualquer autoridade que esses links antigos ainda carregavam.
  //
  // Só é preciso declarar a versão SEM barra final — o Next.js já remove a
  // barra final de qualquer URL automaticamente antes de checar esta lista
  // (ver `trailingSlash`, padrão `false`), então uma regra pra "/x" também
  // cobre quem acessa "/x/" (só passa por um redirecionamento interno a
  // mais, invisível pro usuário e sem problema pra buscadores).
  //
  // Lista compilada a partir do relatório "Páginas indexadas"/"Detectada,
  // mas não indexada" do Google Search Console (auditoria de 10/09) + URLs
  // antigas encontradas ainda aparecendo em buscas (14/09). Cobre as URLs
  // conhecidas até agora — se aparecer alguma URL antiga nova (ex.: via
  // busca "site:revlacorretora.com.br" ou no Search Console), é só
  // adicionar mais uma entrada nesta lista, seguindo o mesmo padrão.
  async redirects() {
    return [
      // Páginas institucionais antigas → equivalente atual
      { source: "/sobre-nos", destination: "/sobre-a-revla", permanent: true },
      { source: "/contato", destination: "/", permanent: true },
      { source: "/produtos", destination: "/", permanent: true },
      { source: "/beneficios", destination: "/", permanent: true },

      // Produtos/páginas antigas de seguro → hub /seguros atual
      { source: "/seguradoras-parceiras", destination: "/seguros", permanent: true },
      { source: "/seguro-fianca", destination: "/seguros", permanent: true },
      { source: "/titulo-de-capitalizacao", destination: "/seguros", permanent: true },

      // Plano de saúde antigo → hub /plano-de-saude atual
      { source: "/plano-de-saude-individual", destination: "/plano-de-saude", permanent: true },

      // Posts antigos do blog WordPress com assunto equivalente num destino
      // específico do site atual; sem equivalente direto, manda pro /blog
      { source: "/consorcio-ademicon-o-melhor-do-brasil", destination: "/consorcios", permanent: true },
      { source: "/planos-de-saude-mais-baratos-em-2025-comparacao-de-precos", destination: "/plano-de-saude", permanent: true },
      { source: "/as-10-maiores-corretoras-de-seguros-do-brasil-em-2025", destination: "/blog", permanent: true },

      // Achados na auditoria de indexação (18/09): mais 5 URLs 404 do
      // relatório "Páginas" do Search Console, ainda sem redirect —
      // posts antigos do WordPress com equivalente de assunto no site atual.
      { source: "/seguro-residencial-quanto-custa-e-como-escolher-o-melhor", destination: "/blog/seguro-residencial-o-que-cobre-quanto-custa", permanent: true },
      { source: "/seguro-de-vida-como-investimento-verdade-ou-mito", destination: "/blog/seguro-de-vida-vale-a-pena-com-plano-de-saude", permanent: true },
      { source: "/consorcio-de-servicos-como-usar-para-cirurgias-e-viagens", destination: "/consorcios/servicos", permanent: true },
      { source: "/os-beneficios-dos-planos-de-saude-para-a-prevencao-de-doencas", destination: "/plano-de-saude", permanent: true },
      { source: "/vantagens-dos-consorcios-na-aquisicao-de-bens-e-servicos", destination: "/consorcios", permanent: true },

      // Taxonomias do WordPress (categorias e tags) — qualquer URL antiga
      // nesse formato manda pra listagem atual do blog
      { source: "/category/:path*", destination: "/blog", permanent: true },
      { source: "/tag/:path*", destination: "/blog", permanent: true },

      // Consórcio de Imóveis (Estratégia 1, Onda 1, 15/09): as 4 páginas por
      // cidade viraram uma única página nacional — sem sinal real de busca
      // diferenciado por cidade nos dados do Keyword Planner. Redireciona
      // qualquer link/indexação antiga das 4 URLs pra página nova.
      { source: "/consorcios/imoveis/sao-paulo", destination: "/consorcios/imoveis", permanent: true },
      { source: "/consorcios/imoveis/santo-andre", destination: "/consorcios/imoveis", permanent: true },
      { source: "/consorcios/imoveis/guarulhos", destination: "/consorcios/imoveis", permanent: true },
      { source: "/consorcios/imoveis/osasco", destination: "/consorcios/imoveis", permanent: true },

      // Amparo Funeral → Plano Funerário (Estratégia 1, Onda 7, 15/09): o
      // termo real de busca é "plano funerário"/"plano funeral" — "amparo
      // funeral" é o nome da marca PASI, com volume de busca pública quase
      // nulo. Redireciona a URL antiga (e qualquer indexação/backlink já
      // existente) pra página nova, que mantém "Amparo Funeral" citado no
      // conteúdo como o nome real do produto.
      { source: "/amparo-funeral", destination: "/plano-funerario", permanent: true },

      // Empréstimo com Garantia de Imóvel/Veículo (17/09): produtos
      // descontinuados no site e no Google Meu Negócio — a Revla não tem
      // registro de correspondente bancário no Bacen e nunca comercializou
      // esses produtos de crédito (mesmo constando no portfólio da
      // Ademicon), então foram retirados por prudência regulatória.
      // Redireciona as URLs já indexadas pro hub /consorcios.
      { source: "/consorcios/emprestimo-garantia-imovel", destination: "/consorcios", permanent: true },
      { source: "/consorcios/emprestimo-garantia-veiculo", destination: "/consorcios", permanent: true },
    ];
  },
};

export default nextConfig;
