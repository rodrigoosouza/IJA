# Google Notícias — Estratégia de Indexação (Genérica)

Adaptável para qualquer cliente. Framework reutilizável para indexação editorial.

## O Que É
Estratégia para indexar conteúdo editorial no Google Notícias, Google Discover e aba Notícias do Google Search. Diferente de SEO tradicional: prioriza credibilidade editorial, frequência e relevância temática.

## Ambientes de Distribuição
| Ambiente | Como Entrar |
|---|---|
| Google Search — Aba Notícias | Schema markup + News Sitemap |
| Google Discover | Conteúdo de alta qualidade + Schema |
| App Google Notícias | Publisher Center + verificação editorial |
| Featured Snippets de Notícias | Alta frequência + autoridade de domínio |

## Critérios do Algoritmo (Googlebot News)
- E-E-A-T (Experiência, Especialidade, Autoridade, Confiabilidade)
- Frescor (artigos < 48h têm vantagem)
- Originalidade (penaliza conteúdo replicado)
- Relevância temática (consistência no assunto)
- Sinais técnicos (Schema, News Sitemap, Core Web Vitals)

## 4 Pilares Técnicos

### 1. Schema Markup (NewsArticle)
```json
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "Título do artigo",
  "datePublished": "2026-03-10T08:00:00-03:00",
  "dateModified": "2026-03-10T08:00:00-03:00",
  "author": { "@type": "Person", "name": "Nome do Especialista" },
  "publisher": {
    "@type": "Organization",
    "name": "Nome da Empresa",
    "logo": { "@type": "ImageObject", "url": "https://site.com/logo.png" }
  },
  "image": "https://site.com/imagem-do-artigo.jpg"
}
```

### 2. News Sitemap
- XML com artigos das últimas 48h
- Atualizado automaticamente via CMS
- Submeter no Google Search Console
- URL: `site.com.br/news-sitemap.xml`

### 3. Google Publisher Center
1. publishercenter.google.com → "Adicionar publicação"
2. Informar URL + nome da publicação
3. Verificar via Google Search Console
4. Configurar seções, idioma, categorias
5. Aguardar revisão (1-3 dias úteis)

### 4. Sinais Editoriais
| Sinal | Impacto |
|---|---|
| Página "Sobre" detalhada | Alto |
| Bio de autores com credenciais | Alto |
| Política editorial publicada | Médio |
| Data/horário visíveis no artigo | Alto |
| Imagem original de alta qualidade | Alto |
| Links internos + fontes externas | Médio |

## Plano de Ação (3 Fases)

### Fase 1 — Fundação Técnica (Semanas 1-2)
- Instalar Schema NewsArticle no CMS
- Criar e submeter News Sitemap
- Verificar Core Web Vitals (LCP, FID, CLS)
- Criar página "Sobre" editorial
- Criar bio de autores/especialistas
- Publicar política editorial
- Registrar no Publisher Center
- Validar Schema com Rich Results Test

### Fase 2 — Lançamento Editorial (Semanas 3-6)
- Mínimo 3 artigos/semana
- Cada artigo: 800+ palavras, imagem original, autor nomeado, data visível
- Monitorar indexação via Search Console semanalmente

### Fase 3 — Escala e Autoridade (Mês 2+)
- Passar para 5 artigos/semana
- Link building editorial (parcerias com portais)
- Mix 70% evergreen / 30% notícias do setor
- Relatório mensal de performance
- Testes A/B de headlines para CTR

## 4 Tipos de Conteúdo
| Tipo | Frequência |
|---|---|
| Notícia do setor (regulatório, tendências) | 2-3x/semana |
| Artigo educacional (guias, passo-a-passo) | 2-3x/semana |
| Caso de sucesso (resultados reais) | 1x/semana |
| Opinião de especialista | 1x/semana |

**NUNCA:** conteúdo puramente publicitário — Google desindexa domínio inteiro.

## Estrutura Padrão de Artigo
- Título com keyword principal (60-80 chars)
- Subtítulo / resumo (1-2 linhas)
- Imagem destaque original (mín 1200x630px)
- Introdução direta — informação principal no 1º parágrafo
- Seções com H2/H3
- Dados, pesquisas ou exemplos concretos
- CTA contextual (não invasivo)
- Bio do autor com foto

## KPIs (Metas)
| Métrica | 3 meses | 6 meses |
|---|---|---|
| Artigos indexados | 10+ | 30+ |
| Impressões mensais | 5.000+ | 20.000+ |
| Cliques mensais | 500+ | 3.000+ |
| Posição média | < 10 | < 5 |

## Aplicação para IJA
- **Temas editoriais potenciais:** gestão de restaurantes, food service, expansão de franquias, como abrir filial, gestão financeira de restaurantes, Método Tripé da Expansão
- **Autor:** João Pedro Alves (fundador, especialista)
- **Posicionamento:** principal referência editorial sobre gestão e expansão de restaurantes no Brasil
- **Vantagem:** nicho pouco explorado editorialmente — oportunidade de dominar rápido
