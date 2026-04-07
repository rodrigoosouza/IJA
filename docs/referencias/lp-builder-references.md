# LP Builder — Referências Externas

Localização original: `/Users/rodrigosouza/Downloads/Business/estrutura de landing page/`

## Arquivos Disponíveis

### 1. design-system.md
- CSS variables completas (cores, espaçamento, bordas, sombras, transições, fontes)
- Reset base, tipografia (h1-h3, p), botões (.btn, .btn-primary, .btn-submit)
- Formulário (.form-group, .form-card), seções (hero, features, testimonials, FAQ, CTA, footer)
- Componentes (badge, divider, stats, trust logos)
- 7 paletas de cores prontas (corporativo, tech, saúde, bold, elegante, educação, energia)
- 5 combos de fontes Google recomendados

### 2. section-library.md
- Catálogo de 17 seções reutilizáveis com HTML padrão
- Layouts padrão por objetivo: captura de leads, vendas, lista de espera, evento, download
- Regras: toda LP = hero + cta-form + footer mínimo, máx 8 seções

### 3. animations.md / briefing-efeitos-animacoes.md (mesmo conteúdo)
- Catálogo de 12 efeitos: fade-in, slide-in, scale-up, borda pulsante, borda rotativa, glow pulsante, SVG ring, shimmer, border slide, CTA glow, 3D tilt, partículas canvas, texto gradiente, contador animado
- Obrigatórios: fade-in scroll, bg grid+glow, CTA glow, texto gradiente H1, delays escalonados, focus glow inputs
- Easing chave: `cubic-bezier(0.16,1,0.3,1)`

### 4. tracking-integration.md
- Script completo de tracking (cookie management, session ID via sessionStorage, referrer mapping)
- Hidden inputs: 5 UTMs + 10 click IDs + 4 sessão = 19 campos ocultos
- Form submit via fetch() POST JSON para webhook
- DataLayer events: custom_page_view, scroll_depth (25/50/75/90%), time_on_page_heartbeat (30s), form_submit
- Session attributes encoded (base64 JSON)
- Feedback visual (sucesso/erro), máscara telefone, FAQ accordion, scroll reveal
- Placeholders: {{COOKIE_DOMAIN}}, {{WEBHOOK_URL}}, {{TEXTO_CTA}}

### 5. skill-completa-v1.md (GTM Tracking Completo)
- Arquitetura end-to-end: LP → GTM Web → GTM Server → GA4 + Google Ads + Meta CAPI + n8n → Supabase
- Supabase: tabela `events` com ~45 campos, view `events_br` com timezone
- GTM Web: variáveis, triggers, tags
- GTM Server: variáveis Event Data, tags
- n8n: workflow webhook → lead scoring → insert
- Lead scoring: scroll (max 30pts) + tempo (max 40pts) + heartbeats (max 30pts) = 0-100
- Offline Conversion Tracking: CRM → Google Ads + Meta Ads

### 6. skill-v2.md (Landing Page Builder Skill)
- Fluxo: briefing → ler referências → gerar HTML → revisar
- 10 perguntas obrigatórias do briefing
- Estrutura HTML: arquivo único, CSS inline, JS inline, mobile-first, sem frameworks
- Checklist final: design (6), formulário (8), tracking (12), SEO (4), entrega (4)

### 7. base-structure.html
- Template HTML com variáveis {{...}} para geração dinâmica
- CSS variables, reset, tipografia, fade-in, responsividade
