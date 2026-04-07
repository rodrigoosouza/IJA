# Site IJA — Documentação de Implementação

> Estado atual do site | Atualizado em: 12/03/2026

---

## 1. Stack Técnica

| Camada | Tecnologia | Versão |
|---|---|---|
| **Framework** | Next.js (App Router) | 16.1.6 |
| **Linguagem** | TypeScript | 5.x |
| **Styling** | Tailwind CSS | v4 (usa `@theme inline` no CSS) |
| **Animações** | Framer Motion | 12.x |
| **Ícones** | Lucide React | — |
| **Fontes** | Inter (sans) + Playfair Display (serif) | next/font/google |
| **Deploy** | Vercel | — |
| **Package Manager** | npm | — |

---

## 2. Design System

### 2.1 Cores

| Token | Valor | Uso |
|---|---|---|
| `cream` | `#faf7f2` | Background principal |
| `cream-dark` | `#f5f0e8` | Background alternativo |
| `cream-darker` | `#ede5d8` | Background terciário |
| `navy-50` → `navy-950` | Escala baseada em `#011735` | Textos, cards, headers |
| `accent` | `#F97316` (orange-500) | CTAs, highlights, links |
| `accent-dark` | `#EA580C` | Hover do accent |
| `accent-light` | `#FB923C` | Variação clara |

### 2.2 Tipografia

| Fonte | Variável CSS | Uso |
|---|---|---|
| **Inter** | `--font-inter` | Texto geral (sans-serif) |
| **Playfair Display** | `--font-playfair` | Títulos em itálico (serif) — classe `.serif-italic` |

### 2.3 Classes Utilitárias Customizadas (globals.css)

| Classe | Efeito |
|---|---|
| `.serif-italic` | Playfair Display italic — para destaques em headings |
| `.gradient-text` | Gradiente laranja no texto (accent → orange-700) |
| `.noise-overlay` | Textura de ruído sutil em seções escuras |
| `.dot-pattern` | Padrão de pontos para backgrounds alternados |
| `.line-pattern` | Padrão de linhas para backgrounds |
| `.card-hover` | Animação de hover em cards (scale + shadow) |
| `.glow-orange-sm` | Glow laranja em botões CTA |
| `.glassmorphism` | Efeito glass (backdrop-blur + opacidade) |

### 2.4 Padrão Visual

- **Backgrounds:** Alternam entre `bg-cream`, `bg-cream-dark`, `bg-navy-950`
- **Cards:** `rounded-3xl border border-navy-100/50 bg-white`
- **Seções escuras:** `bg-navy-950 noise-overlay` com radial-gradient accent
- **Headings:** Palavras-chave em `<span className="serif-italic gradient-text">`
- **CTAs primários:** `bg-accent rounded-2xl` com hover scale + glow
- **CTAs secundários:** `border border-white/10 bg-white/5 backdrop-blur-sm`

---

## 3. Logos e Imagens

### 3.1 Logos (`/public/images/logo/`)

| Arquivo | Dimensão | Uso |
|---|---|---|
| `ija-logo-azul.png` | 936×314 (recortado) | Header desktop |
| `ija-logo-branca.png` | 936×314 (recortado) | Footer |
| `ija-icone-azul.png` | 3143×3202 | Header mobile (só o símbolo) |
| `ija-vertical-azul.png` | — | Disponível (não usado) |
| `ija-marca-2025.png` | — | Disponível (não usado) |

> **Nota:** Os logos horizontal (azul e branco) foram recortados via Python/PIL para remover ~70% de whitespace dos PNGs originais (1080×1080 → 936×314).

### 3.2 Logos de Clientes (`/public/images/clientes/`)

27 logos de clientes em JPG/PNG. Usados no carrossel Marquee da home page (duas fileiras: uma scroll esquerda, outra direita).

### 3.3 Equipe (`/public/images/equipe/`)

Pasta criada para fotos da equipe. **Pendente:** foto do João Pedro Alves (CEO).

---

## 4. Componentes Principais

### 4.1 Header (`src/components/Header.tsx`)

- **Desktop:** Logo horizontal + nav links + dropdown de Segmentos + CTA "Diagnóstico Gratuito"
- **Mobile:** Logo ícone (só símbolo) + menu hamburger
- **Menu mobile:** Layout compacto com divide-y, Segmentos expandem em grid 2 colunas, WhatsApp + CTA no rodapé
- **Scroll:** Background muda de `bg-cream/80` para `bg-cream/95` com shadow
- **Header height:** h-16 mobile / h-20 desktop

### 4.2 Footer (`src/components/Footer.tsx`)

- 5 colunas: Brand, Soluções, Segmentos, Contato + Navegação
- Logo branca + tagline + redes sociais (Instagram, YouTube, LinkedIn)
- Links para Política de Privacidade e Termos

### 4.3 Animações (`src/components/animations.tsx`)

15+ componentes de animação com Framer Motion:

| Componente | Descrição |
|---|---|
| `FadeInUp/Down/Left/Right` | Entrada com fade + direção |
| `ScaleIn` | Entrada com scale |
| `SlideUp` | Entrada com slide vertical (maior deslocamento) |
| `StaggerContainer/Item` | Container com stagger entre filhos |
| `CountUp` | Contador animado (useMotionValue + useSpring) |
| `TextReveal` | Revelação palavra por palavra com blur |
| `LineReveal` | Linha horizontal que se expande |
| `ProgressBar` | Barra de progresso animada |
| `Marquee/MarqueeReverse` | Carrossel infinito (esquerda/direita) |
| `FloatingElement` | Flutuação vertical contínua |
| `PulseGlow` | Pulse de glow laranja |
| `ParallaxText` | Parallax baseado em scroll |
| `HoverCard` | Card com hover elevação |
| `AnimatedBlob` | Blob de background animado |

### 4.4 WhatsAppButton (`src/components/WhatsAppButton.tsx`)

Botão flutuante fixo no canto inferior direito.

### 4.5 BlogArticleLayout (`src/components/BlogArticleLayout.tsx`)

Template de artigo estilo G4 Educação:
- Sidebar sticky com TOC (IntersectionObserver), CTA banner, "Guias e Ferramentas"
- Mobile: TOC como bottom sheet
- Breadcrumbs, back-to-top, artigos relacionados

---

## 5. Páginas Implementadas

### 5.1 Rotas Estáticas

| Rota | Arquivo | Status |
|---|---|---|
| `/` | `src/app/page.tsx` | Completo |
| `/sobre` | `src/app/sobre/page.tsx` | Completo |
| `/metodo` | `src/app/metodo/page.tsx` | Completo |
| `/solucoes` | `src/app/solucoes/page.tsx` | Completo |
| `/cases` | `src/app/cases/page.tsx` | Completo |
| `/eventos` | `src/app/eventos/page.tsx` | Completo |
| `/blog` | `src/app/blog/page.tsx` | Placeholder (sem CMS) |
| `/contato` | `src/app/contato/page.tsx` | Completo + GTM tracking |
| `/diagnostico` | `src/app/diagnostico/page.tsx` | Completo + GTM tracking |

### 5.2 Rotas Dinâmicas (SSG com generateStaticParams)

| Rota | Dados | Páginas |
|---|---|---|
| `/solucoes/[slug]` | `SOLUTIONS` (4) | gestao-financeira, planejamento-estrategico, lideranca-organizacional, gestao-comercial-marketing |
| `/cases/[slug]` | `CASES` (2) | outros-500, herois-super-burguer |
| `/segmentos/[slug]` | `SEGMENTS` (6) | restaurantes, hamburguerias, pizzarias, bares, cafeterias, food-service |
| `/eventos/[slug]` | `EVENTS` (3) | lucro-real-30-minutos, 3-erros-crescimento, lideranca-gerentes-donos |

### 5.3 Home Page (`/`)

Seções (em ordem):
1. **Hero** — 8xl typography, serif italic "expansão", AnimatedBlob backgrounds
2. **Trust Numbers** — CountUp animados (120+ negócios, R$ 40M+, etc.)
3. **Client Logos** — Dual-row Marquee (Row 1 esquerda, Row 2 direita via MarqueeReverse)
4. **Market Data** — Estatísticas do ICP (R$ 215B mercado, 35% fecham em 2 anos, etc.)
5. **Segments Grid** — 6 segmentos com hover
6. **Problem Section** — Estatísticas com porcentagens (85%, 90%, 65%)
7. **Método Tripé** — 3 pilares em cards premium
8. **Solutions Grid** — 4 soluções
9. **Animated Numbers** — CountUp (120+, R$ 40M+, 700+, 14 anos)
10. **Cases** — Before/after com Quote
11. **Progress Bars** — Dores do ICP (Gestão financeira 90%, Preso na operação 85%, etc.)
12. **"Por que o IJA"** — Diferenciais
13. **CTA Final** — AnimatedBlob + botões

### 5.4 Segment Pages (`/segmentos/[slug]`)

Layout premium por segmento:
1. **Hero** — Split layout: headline + CTAs | Stats card (market data + IJA numbers)
2. **Market Data** — ProgressBars de dores + cards de problemas com stats
3. **Transformation** — Cards de benefícios em dark section + case highlight com quote
4. **Método Tripé** — 3 pilares contextualizados para o segmento
5. **Solutions** — 4 soluções com ícones e links
6. **Numbers** — CountUp animados
7. **Other Segments** — Grid com links
8. **CTA Final** — com glow + AnimatedBlob

### 5.5 Event Pages (`/eventos/[slug]`)

Cada evento tem página individual:
1. **Hero** — Split layout: type badge + título + long description + CTAs | Info card (data, hora, duração, speaker, tags)
2. **Content** — Lista numerada de tópicos + sidebar (para quem é, CTA card, sobre o speaker)
3. **Other Events** — Cards dos outros eventos
4. **CTA Final** — Diagnóstico gratuito

---

## 6. Dados e Constants (`src/lib/constants.ts`)

| Export | Tipo | Qtd |
|---|---|---|
| `SEGMENTS` | Array de segmentos | 6 |
| `SOLUTIONS` | Array de soluções (com pains, deliverables, results) | 4 |
| `CASES` | Array de cases (before/after, quote) | 2 |
| `EVENTS` | Array de eventos (topics, forWho, longDescription) | 3 |
| `NAV_LINKS` | Array de links do menu (com children para Segmentos) | 8 |
| `NUMBERS` | Objeto com métricas (120+, R$ 40M+, etc.) | 6 |
| `SOCIAL` | Objeto com URLs das redes sociais | 3 |
| Strings | SITE_URL, SITE_NAME, SITE_TAGLINE, EMAIL, PHONE, etc. | — |

---

## 7. Tracking (`src/lib/tracking.ts`)

| Função | Uso |
|---|---|
| `getSessionId()` | Gera/recupera `apex_session_id` do sessionStorage |
| `getPageStartTime()` | Retorna timestamp do início da página |
| `getTimeOnPage(start)` | Calcula tempo em segundos |
| `splitName(fullName)` | Separa nome/sobrenome |
| `maskPhone(value)` | Máscara (00) 00000-0000 |
| `pushFormSubmit(data)` | Push para `window.dataLayer` com evento `generate_lead` |

**Campos do dataLayer:**
```
event: "generate_lead"
email, phoneNumber, nome, sobrenome
apex_session_id, time_on_page_at_submit
form_name, ...extraData
```

**Formulários com tracking:** `/contato` e `/diagnostico`

---

## 8. SEO (`src/lib/seo.ts`)

| Função | Schema |
|---|---|
| `generatePageMetadata()` | Metadata do Next.js (title, description, OG, Twitter) |
| `organizationSchema()` | Schema.org Organization |
| `localBusinessSchema()` | Schema.org LocalBusiness |
| `breadcrumbSchema()` | Schema.org BreadcrumbList |
| `faqSchema()` | Schema.org FAQPage |
| `serviceSchema()` | Schema.org Service |

**Implementado em:** Layout global (Organization, LocalBusiness) + cada página (Breadcrumb, FAQ, Service conforme necessidade)

---

## 9. Pendências

### Alta Prioridade
- [ ] **Blog CMS** — Integrar Supabase para CRUD de artigos (tabelas: blog_posts, blog_authors)
- [ ] **Área Admin** (`/acesso`) — Login + dashboard + editor de artigos
- [ ] **Foto do CEO** — Integrar na página Sobre, eventos (speaker), etc.
- [ ] **Página de Segmentos** (`/segmentos`) — Listagem geral (atualmente só as individuais)

### Média Prioridade
- [ ] **Lead Magnets** (`/materiais`) — LPs de materiais gratuitos
- [ ] **Mentoria Online** (`/mentoria`) — LP do produto de entrada
- [ ] **Google Publisher Center** — Configurar para Google News
- [ ] **Cookie Consent** — Banner LGPD
- [ ] **Exit Intent Popup** — Lead magnet após 30s ou scroll 50%

### Baixa Prioridade
- [ ] **Política de Privacidade** (`/politica-privacidade`) — Conteúdo jurídico
- [ ] **Termos de Uso** (`/termos`) — Conteúdo jurídico
- [ ] **Newsletter** — Captura de email no footer
- [ ] **Google Ads / Meta Pixel** — Tags de conversão
- [ ] **Testes A/B** — Headlines, CTAs

---

## 10. Build e Deploy

```bash
# Desenvolvimento
cd site/
npm run dev

# Build
npm run build

# O site é deployado no Vercel automaticamente via git push
# URL: ija-blue.vercel.app (staging)
# URL final: institutojoaoalves.com.br
```

**Total de páginas geradas:** 29 (estáticas + SSG)
