# Arquitetura do Site — Instituto João Alves

> Visão de Growth Marketing | Baseado em: ICP, Personas, Posicionamento, Pesquisa de Mercado
> Data: 11/03/2026

---

## 1. Objetivo do Site

O site do IJA não é um "cartão de visita digital". É uma **máquina de geração de leads qualificados** que:

1. **Atrai** donos de restaurantes via SEO, blog e tráfego pago
2. **Educa** sobre gestão e posiciona o IJA como autoridade
3. **Converte** visitantes em leads (diagnóstico gratuito, materiais, webinars)
4. **Nutre** leads até estarem prontos para comprar

---

## 2. Mapa do Site (Sitemap)

```
/                           → Home (página principal)
│
├── /sobre                  → Sobre o IJA + João Pedro Alves
├── /metodo                 → Método Tripé da Expansão
│
├── /solucoes               → Overview das 4 soluções
│   ├── /solucoes/gestao-financeira
│   ├── /solucoes/planejamento-estrategico
│   ├── /solucoes/lideranca-organizacional
│   └── /solucoes/gestao-comercial-marketing
│
├── /cases                  → Cases de sucesso
│   ├── /cases/outros-500
│   └── /cases/herois-super-burguer
│
├── /blog                   → Blog (hub de conteúdo / SEO)
│   ├── /blog/[slug]        → Artigo individual
│   ├── /blog/categoria/[cat] → Filtro por categoria
│   └── /blog/autor/[autor]  → Página do autor
│
├── /materiais              → Materiais gratuitos (lead magnets)
│   └── /materiais/[slug]   → LP de material específico
│
├── /diagnostico            → LP do Diagnóstico Gratuito (conversão principal)
├── /mentoria               → LP da Mentoria Online (produto de entrada)
│
├── /contato                → Formulário de contato + WhatsApp
│
├── /acesso                 → Login admin (gestão de blog/conteúdo)
│   ├── /acesso/dashboard   → Painel administrativo
│   ├── /acesso/artigos     → CRUD de artigos
│   ├── /acesso/artigos/novo → Editor de artigo
│   └── /acesso/artigos/[id] → Editar artigo
│
├── /politica-privacidade   → Política de privacidade (LGPD)
└── /termos                 → Termos de uso
```

---

## 3. Detalhamento por Página

### 3.1 Home (`/`)

**Objetivo:** Capturar atenção em 5 segundos + direcionar para conversão

| Seção | Conteúdo | Propósito |
|---|---|---|
| **Hero** | Headline: "Estruturamos seu restaurante para expansão" + Sub: "Liberdade e lucro para quem vive preso no próprio restaurante" + CTA: "Agende seu diagnóstico gratuito" | Impacto imediato |
| **Problema** | "35% dos restaurantes fecham em 2 anos. A causa não é a crise — é falta de gestão." + Dores do ICP | Identificação |
| **Método** | Tripé da Expansão visual (3 pilares) + "80% prática / 20% teoria" | Diferenciação |
| **Soluções** | 4 cards com as soluções (link para cada) | Orientação |
| **Números** | +120 negócios, +R$ 40M lucro, +700 líderes, 14 anos | Prova social |
| **Cases** | 2 cases resumidos (Outros 500, Heróis) com resultados | Credibilidade |
| **Depoimentos** | Quotes de clientes (quando disponíveis) | Confiança |
| **CTA Final** | "Seu restaurante pode ser o próximo case de sucesso" + botão diagnóstico | Conversão |
| **Blog Preview** | 3 últimos artigos do blog | SEO + autoridade |

### 3.2 Sobre (`/sobre`)

**Objetivo:** Construir confiança e conexão humana

| Seção | Conteúdo |
|---|---|
| **História** | De onde veio o IJA, por que existe, a missão |
| **João Pedro Alves** | Foto, bio, credenciais, 14 anos de experiência |
| **Tese** | "Apenas 4 em 100 empresas têm alguém com conhecimento de gestão" |
| **Impacto** | Números comprovados (120 negócios, R$ 40M, 4 estados) |
| **Valores** | Liberdade, Qualidade de Vida, Resultados Práticos |
| **CTA** | "Conheça nosso método" → /metodo |

**SEO:** Reforça E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) para Google News e busca orgânica.

### 3.3 Método (`/metodo`)

**Objetivo:** Explicar o diferencial e criar desejo

| Seção | Conteúdo |
|---|---|
| **O Problema** | Empreendedor tem garra mas não sabe gestão. Instituições são teóricas. |
| **A Solução** | Tripé da Expansão — visual com os 3 pilares |
| **Pilar 1** | Padronização de Processos — o que é, por que importa |
| **Pilar 2** | Universidade Corporativa — como funciona |
| **Pilar 3** | Controle de Qualidade — como garante o padrão |
| **8 Áreas** | As 8 áreas de gestão que o IJA trabalha |
| **Resultado** | "Modelo estruturado e replicável em até 12 meses" |
| **CTA** | "Veja como aplicamos" → /cases |

### 3.4 Soluções (`/solucoes`)

**Overview:** 4 cards com resumo de cada solução + link para página individual

**Cada página de solução (`/solucoes/[slug]`):**

| Seção | Conteúdo |
|---|---|
| **Dor** | "Você se identifica?" — lista de dores específicas |
| **O que é** | Descrição da solução |
| **O que entregamos** | Lista de entregas (da proposta comercial) |
| **Ferramentas** | Ferramentas digitais incluídas (para Gestão Financeira) |
| **Resultados esperados** | Métricas e prazos |
| **Case relacionado** | Mini case de sucesso |
| **FAQ** | Perguntas frequentes sobre a solução |
| **CTA** | "Agende seu diagnóstico gratuito" |

**SEO:** Cada página é uma landing page para keywords de fundo de funil ("consultoria gestão financeira restaurante", "como organizar RH restaurante", etc.)

### 3.5 Cases (`/cases`)

**Objetivo:** Prova social concreta — transformar descrentes em interessados

**Cada case (`/cases/[slug]`):**

| Seção | Conteúdo |
|---|---|
| **Antes** | Situação inicial (números, problemas) |
| **Processo** | O que o IJA fez (quais soluções aplicou) |
| **Depois** | Resultados concretos (unidades, faturamento, equipe) |
| **Timeline** | Linha do tempo visual da transformação |
| **Quote** | Depoimento do cliente |
| **CTA** | "Seu restaurante pode ser o próximo" |

### 3.6 Blog (`/blog`)

**Objetivo:** Motor de SEO + autoridade + geração de leads orgânicos

→ Detalhado na seção 4 abaixo

### 3.7 Materiais / Lead Magnets (`/materiais`)

**Objetivo:** Capturar email em troca de conteúdo de valor

| Material | Formato | Persona |
|---|---|---|
| "Planilha: Descubra seu Lucro Real em 30 minutos" | Excel/Sheets | Roberto |
| "Guia: Como Padronizar seu Restaurante em 90 Dias" | PDF | Roberto/Marcos |
| "Checklist: 20 Sinais de que seu Restaurante está Pronto para Expandir" | PDF | Marcos |
| "Calculadora de CMV para Restaurantes" | Excel/Sheets | Roberto/Fernanda |
| "E-book: O Método Tripé da Expansão" | PDF | Todos |

Cada material tem LP própria com:
- Headline do benefício
- 3-5 bullets do que contém
- Formulário (nome + email + telefone + segmento)
- Preview visual do material

### 3.8 Diagnóstico Gratuito (`/diagnostico`)

**Objetivo:** Conversão principal — agendar call de diagnóstico

| Seção | Conteúdo |
|---|---|
| **Hero** | "Diagnóstico Gratuito: Descubra o que está travando seu restaurante" |
| **O que é** | Sessão de 30-45min com consultor do IJA |
| **O que você recebe** | Análise das 8 áreas + plano de ação personalizado |
| **Para quem é** | Critérios do ICP (faturamento, unidades, dores) |
| **Prova social** | Números + mini cases |
| **Formulário** | Nome, email, telefone, restaurante, faturamento, maior dor |
| **FAQ** | "É realmente gratuito?", "Quanto tempo dura?", etc. |

### 3.9 Mentoria Online (`/mentoria`)

**Objetivo:** Converter leads sensíveis a preço — produto de entrada

| Seção | Conteúdo |
|---|---|
| **Hero** | "Gestão afiada sem sair do seu restaurante" |
| **Para quem** | Donos que querem organizar mas não podem investir em consultoria completa |
| **O que inclui** | Encontros online, ferramentas, acompanhamento |
| **Diferença** | Mentoria vs Consultoria (tabela comparativa) |
| **Investimento** | Preço acessível (a definir) |
| **CTA** | "Quero participar" ou "Falar com consultor" |

### 3.10 Contato (`/contato`)

| Elemento | Conteúdo |
|---|---|
| **Formulário** | Nome, email, telefone, assunto, mensagem |
| **WhatsApp** | Botão direto para 22 99974-6006 |
| **Email** | consultorjoao.alves@gmail.com |
| **Localização** | Cabo Frio, RJ (atendimento em RJ, SP, ES, RS) |
| **Redes sociais** | Links para Instagram, YouTube, LinkedIn |

### 3.11 Área Admin (`/acesso`)

→ Detalhado na seção 5 abaixo

---

## 4. Estrutura do Blog

### 4.1 Objetivo
- **SEO:** Ranquear para keywords informacionais e de dor
- **Autoridade:** Posicionar João Pedro Alves como referência em gestão de restaurantes
- **Leads:** Converter leitores em leads via CTAs e lead magnets
- **Google News:** Indexar conteúdo editorial (seguindo estratégia já documentada)

### 4.2 Categorias

| Categoria | Slug | Foco |
|---|---|---|
| Gestão Financeira | `/blog/categoria/gestao-financeira` | CMV, lucro, fluxo de caixa, markup |
| Gestão de Pessoas | `/blog/categoria/gestao-de-pessoas` | RH, turnover, liderança, treinamento |
| Processos e Operação | `/blog/categoria/processos-operacao` | Padronização, estoque, qualidade |
| Expansão e Franquias | `/blog/categoria/expansao-franquias` | Rede, franquia, segunda unidade |
| Marketing para Restaurantes | `/blog/categoria/marketing-restaurantes` | Vendas, fidelização, delivery |
| Casos de Sucesso | `/blog/categoria/casos-de-sucesso` | Stories de transformação |
| Mercado e Tendências | `/blog/categoria/mercado-tendencias` | Notícias do setor, dados, análises |

### 4.3 Estrutura de um Artigo

```
/blog/[slug]

├── Breadcrumb (Home > Blog > Categoria > Artigo)
├── Título (H1) — com keyword principal
├── Meta (data, autor, tempo de leitura, categoria)
├── Imagem destaque (mín 1200x630px para OG/News)
├── Conteúdo
│   ├── Introdução (informação principal no 1º parágrafo)
│   ├── Corpo com H2/H3
│   ├── Dados, exemplos, cases
│   └── Conclusão
├── CTA contextual (lead magnet ou diagnóstico)
├── Bio do autor (foto, nome, credenciais)
├── Artigos relacionados (3)
├── Schema markup (NewsArticle)
└── Compartilhamento social
```

### 4.4 SEO Técnico do Blog

| Elemento | Implementação |
|---|---|
| **Schema** | `NewsArticle` em cada post (para Google News) |
| **Sitemap** | `/news-sitemap.xml` (artigos das últimas 48h) + `/sitemap.xml` (geral) |
| **Open Graph** | Título, descrição, imagem para cada artigo |
| **Canonical** | URL canônica em cada artigo |
| **Heading hierarchy** | H1 → H2 → H3 (sem pular níveis) |
| **Internal linking** | Cada artigo linka 2-3 artigos relacionados + 1 página de solução |
| **Core Web Vitals** | LCP < 2.5s, FID < 100ms, CLS < 0.1 |
| **Imagens** | WebP, lazy loading, alt text descritivo |
| **URL** | `/blog/como-calcular-cmv-restaurante` (slug limpo, com keyword) |

### 4.5 Página do Autor (`/blog/autor/[autor]`)

| Elemento | Conteúdo |
|---|---|
| **Foto** | Foto profissional do João Pedro |
| **Bio completa** | Experiência, credenciais, áreas de expertise |
| **Números** | 14 anos, 120+ negócios, R$ 40M gerados |
| **Artigos** | Lista de todos os artigos do autor |
| **Redes sociais** | Links para perfis |
| **Schema** | `Person` com `sameAs` para redes sociais |

> Essencial para E-E-A-T do Google e indexação no Google News.

---

## 5. Área Administrativa (`/acesso`)

### 5.1 Rotas e Funcionalidades

| Funcionalidade | Rota | Descrição |
|---|---|---|
| **Login** | `/acesso` | Tela de login (email + senha) |
| **Dashboard** | `/acesso/painel` | Visão geral: artigos publicados, rascunhos, views |
| **Listar artigos** | `/acesso/artigos` | Tabela com filtro por status (published/draft) e categoria |
| **Novo artigo** | `/acesso/artigos/novo` | Editor completo com preview |
| **Editar artigo** | `/acesso/artigos/[id]` | Editar artigo existente |
| **Usuários** | `/acesso/usuarios` | Gerenciar usuários (apenas admin) |
| **Lead Magnets** | `/acesso/materiais` | CRUD de materiais gratuitos |

### 5.2 Roles e Permissões

| Role | Artigos | Usuários | Materiais | Configurações |
|---|---|---|---|---|
| **admin** | CRUD completo | CRUD completo | CRUD completo | Sim |
| **editor** | CRUD (apenas seus) | Não | Não | Não |

### 5.3 Editor de Artigos

| Campo | Tipo | Obrigatório | Detalhes |
|---|---|---|---|
| **Título** | Text input | Sim | Gera slug automaticamente |
| **Slug** | Auto-gerado (editável) | Sim | URL amigável, sanitizado |
| **Categoria** | Select (7 categorias) | Sim | — |
| **Imagem destaque** | Upload (drag & drop + file input) | Sim | Mín 1200x630px, Supabase Storage |
| **Resumo/Excerpt** | Textarea (máx 160 chars) | Sim | Usado como meta description |
| **Conteúdo** | Rich text editor (Tiptap) | Sim | Toolbar: bold, italic, H2/H3, listas, links, imagens, quotes |
| **Autor** | Select (pré-cadastrados) | Sim | — |
| **Tags** | Multi-select / input livre | Não | — |
| **Status** | Rascunho / Publicado / Agendado | Sim | — |
| **Data de publicação** | Date picker | Sim | Para agendamento |
| **SEO Preview** | Preview Google | Auto | Mostra como aparecerá na busca |
| **Preview do artigo** | Visualização renderizada | Auto | Ver como ficará publicado |

### 5.4 Funcionalidades do CMS

| Feature | Descrição |
|---|---|
| **Slug automático** | Gerado a partir do título (remove acentos, espaços → hífens, lowercase) |
| **Preview antes de publicar** | Renderiza o artigo como ficará no blog |
| **Upload de imagens** | Drag & drop + file input → Supabase Storage (max 2MB) |
| **Filtros na listagem** | Por status (published/draft/scheduled) e categoria |
| **Contagem de views** | Incrementa automaticamente a cada visita no artigo |
| **Tempo de leitura** | Calculado automaticamente (palavras ÷ 200) |
| **Sidebar no painel** | Navegação: Dashboard, Artigos, Novo Artigo, Materiais, Usuários |

### 5.5 Tabelas Supabase

#### `blog_posts`

| Coluna | Tipo | Descrição |
|---|---|---|
| `id` | uuid (PK) | ID único |
| `created_at` | timestamptz | Data de criação |
| `updated_at` | timestamptz | Última edição |
| `published_at` | timestamptz | Data de publicação (para agendamento) |
| `title` | text | Título do artigo |
| `slug` | text (unique) | URL amigável |
| `excerpt` | text | Resumo / meta description |
| `content` | text | Conteúdo em HTML (do rich text editor) |
| `cover_image` | text | URL da imagem no Supabase Storage |
| `category` | text | Categoria do artigo |
| `tags` | text[] | Array de tags |
| `author_id` | uuid (FK) | Referência para `blog_authors` |
| `status` | text | `draft` / `published` / `scheduled` |
| `reading_time` | int | Tempo de leitura (minutos, auto-calculado) |
| `views` | int (default 0) | Contador de visualizações |

#### `blog_authors`

| Coluna | Tipo | Descrição |
|---|---|---|
| `id` | uuid (PK) | ID único |
| `name` | text | Nome completo |
| `slug` | text (unique) | URL do perfil (`/blog/autor/[slug]`) |
| `bio` | text | Biografia completa |
| `avatar` | text | URL da foto no Supabase Storage |
| `credentials` | text | Credenciais / título profissional |
| `social_links` | jsonb | `{ instagram, linkedin, youtube }` |

#### `blog_lead_magnets`

| Coluna | Tipo | Descrição |
|---|---|---|
| `id` | uuid (PK) | ID único |
| `title` | text | Título do material |
| `description` | text | Descrição curta |
| `cta_text` | text | Texto do botão (ex: "Baixar grátis") |
| `file_url` | text | URL do arquivo (PDF, planilha, etc.) |
| `cover_image` | text | URL da imagem de capa |
| `category` | text | Categoria relacionada (para CTAs contextuais) |
| `downloads` | int (default 0) | Contador de downloads |

#### `cms_users`

| Coluna | Tipo | Descrição |
|---|---|---|
| `id` | uuid (PK) | ID único (= Supabase Auth user id) |
| `name` | text | Nome do usuário |
| `email` | text (unique) | Email de login |
| `role` | text | `admin` / `editor` |
| `created_at` | timestamptz | Data de criação |

---

## 6. Elementos Globais (Todas as Páginas)

### Header
- Logo IJA
- Menu: Sobre | Método | Soluções | Cases | Blog | Contato
- CTA: "Diagnóstico Gratuito" (botão highlight)
- Mobile: hamburger menu

### Footer
- Logo + tagline
- Links rápidos (sitemap)
- Contato (email, telefone, WhatsApp)
- Redes sociais
- Newsletter signup (email)
- "© 2026 Instituto João Alves. Todos os direitos reservados."
- Links: Política de Privacidade | Termos de Uso

### Elementos Flutuantes
- **WhatsApp button** — canto inferior direito (fixo)
- **Cookie consent** — banner LGPD
- **Exit intent popup** — lead magnet (após 30s ou scroll 50%)

### Tracking (já documentado em `referencias/`)
- GTM Web Container
- GA4 (page_view, scroll_depth, generate_lead)
- Meta Pixel
- Google Ads tag
- Session ID + UTM tracking
- DataLayer com padrão de campos documentado

---

## 7. Stack Técnica Recomendada

| Camada | Tecnologia | Motivo |
|---|---|---|
| **Framework** | Next.js 14+ (App Router) | SSR para SEO, ISR para blog, API routes |
| **Styling** | Tailwind CSS | Já usado no projeto atual |
| **CMS/DB** | Supabase | Já usado no projeto atual |
| **Auth** | Supabase Auth | Login da área admin |
| **Storage** | Supabase Storage | Imagens do blog |
| **Deploy** | Vercel | Já configurado |
| **Editor** | MDX ou Tiptap | Rich text para artigos |
| **SEO** | next-seo + next-sitemap | Meta tags, sitemap, schema |
| **Analytics** | GTM + GA4 | Já planejado |
| **Imagens** | next/image | Otimização automática |

---

## 8. Prioridade de Desenvolvimento

### Fase 1 — MVP do Site (Semanas 1-3)
- [ ] Home completa
- [ ] Sobre
- [ ] Método
- [ ] 4 páginas de soluções
- [ ] 2 cases
- [ ] Contato + WhatsApp
- [ ] Header + Footer + Mobile
- [ ] SEO básico (meta tags, sitemap, Schema Organization)
- [ ] Tracking (GTM + GA4 + Pixel)

### Fase 2 — Blog + Admin (Semanas 4-6)
- [ ] Blog listing (`/blog`)
- [ ] Artigo individual (`/blog/[slug]`)
- [ ] Categorias
- [ ] Página do autor
- [ ] Login (`/acesso`)
- [ ] Dashboard admin
- [ ] CRUD de artigos
- [ ] Schema NewsArticle + News Sitemap
- [ ] RSS feed

### Fase 3 — Conversão (Semanas 7-8)
- [ ] LP Diagnóstico Gratuito
- [ ] LP Mentoria Online
- [ ] Lead magnets (1-2 materiais)
- [ ] Exit intent popup
- [ ] Cookie consent (LGPD)
- [ ] Email capture no footer

### Fase 4 — Otimização (Contínuo)
- [ ] Testes A/B (headlines, CTAs)
- [ ] Core Web Vitals
- [ ] Google Publisher Center
- [ ] Enhanced conversions
- [ ] Lead scoring via tracking
