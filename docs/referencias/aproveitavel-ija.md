# O Que Aproveitar para o Projeto IJA

## 1. Animações e Efeitos Visuais

### Obrigatórios (baixa complexidade)
- **Fade-in no scroll** — IntersectionObserver + classe `.fade-in` / `.visible`
- **Delays escalonados** — `.fade-in-delay-1`, `-2`, `-3` (0.1s, 0.25s, 0.4s)
- **CTA com glow** — box-shadow neon + hover lift (-2px)
- **Focus glow nos inputs** — border-color + box-shadow no focus
- **Texto gradiente** — background-clip: text para títulos H1

### Recomendados (baixa/média complexidade)
- **Contador animado** — easeOutCubic, dispara ao entrar na viewport
- **Shimmer / brilho deslizante** — gradiente animado sobre elementos de destaque
- **Borda pulsante** — para badges de urgência ("vagas limitadas")

### Diferenciais (média complexidade)
- **3D tilt nos cards** — perspective + rotateX/Y seguindo mouse (desktop only)
- **Borda rotativa** — conic-gradient girando 360° em cards de destaque
- **Partículas canvas** — background orgânico para seções de impacto

### Easing padrão
```css
cubic-bezier(0.16, 1, 0.3, 1)  /* ease-out agressivo — "snap" profissional */
```

### Código base (IntersectionObserver)
```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
```

---

## 2. Design System (CSS Variables)

### Estrutura de variáveis reutilizável
```css
:root {
  --primary: #CORCLIENTE;
  --primary-dark: #CORCLIENTE_DARK;
  --primary-light: #CORCLIENTE_LIGHT;
  --primary-bg: rgba(COR, 0.08);
  --bg: #COR_FUNDO;
  --bg-alt: #COR_FUNDO_ALT;
  --surface: #COR_CARD;
  --text: #COR_TEXTO;
  --text-secondary: #COR_TEXTO_SEC;
  --text-muted: #COR_TEXTO_DIM;
  --border: #COR_BORDA;
  --success: #22c55e;
  --error: #ef4444;
  --section-py: 80px;
  --max-width: 1200px;
  --radius: 12px;
  --shadow-primary: 0 8px 32px rgba(COR, 0.3);
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --font-main: 'Inter', sans-serif;
  --font-accent: 'Syne', sans-serif;
}
```

### Paletas prontas (para sugerir ao cliente)
- Profissional/Corporativo (azul, fundo claro)
- Tech/Startup (roxo, fundo escuro)
- Saúde/Bem-estar (verde, fundo claro)
- Bold/Impactante (vermelho, fundo escuro)
- Elegante/Premium (dourado, fundo escuro)
- Educação/Confiança (azul claro, fundo claro)
- Energia/Ação (laranja, fundo claro)

### Combos de fontes Google
1. Syne + Inter → Tech/Moderno
2. Plus Jakarta Sans (ambos) → Clean/Profissional
3. Outfit + DM Sans → Friendly/Startup
4. Inter (ambos) → Universal/Seguro
5. Manrope + Inter → Contemporâneo

---

## 3. Tracking Script (para LPs)

### O que o script faz
- Session ID via sessionStorage (único por sessão)
- Cookies first-touch UTMs (nunca sobrescreve)
- Cookies last-touch UTMs (sempre atualiza)
- Captura 11 click IDs (gclid, fbclid, gbraid, wbraid, ttclid, msclkid, li_fat_id, twclid, sck, gad_campaignid, gad_source)
- Referrer mapping automático (Google, Instagram, Facebook, YouTube, ChatGPT, etc.)
- DataLayer events: custom_page_view, scroll_depth (25/50/75/90%), time_on_page_heartbeat (30s), form_submit
- Session attributes encoded (base64 JSON com todos dados de atribuição)
- Preenchimento automático de 19 hidden inputs no formulário
- Form submit via fetch() POST JSON para webhook
- Feedback visual (sucesso/erro)
- Máscara telefone brasileiro
- FAQ accordion
- Scroll reveal animation

### Placeholders a configurar por cliente
- `{{COOKIE_DOMAIN}}` — ex: `.institutojoaoalves.com.br`
- `{{WEBHOOK_URL}}` — URL do webhook (n8n, Zapier, etc.)
- `{{TEXTO_CTA}}` — texto do botão do formulário

---

## 4. Seções de LP (Biblioteca)

### Seções disponíveis (17 tipos)
hero, hero-split, social-proof, stats, benefits, pain-points, solution, how-it-works, testimonials, faq, cta-form, cta-simple, pricing, features, guarantee, about, footer

### Layouts por objetivo
- **Captura de leads:** hero → social-proof → benefits → testimonials → cta-form → faq → footer
- **Vendas:** hero → pain-points → solution → benefits → stats → testimonials → pricing → guarantee → cta-form → faq → footer
- **Lista de espera:** hero-split → stats → benefits → how-it-works → cta-simple → footer
- **Evento/Webinar:** hero → about → benefits → how-it-works → testimonials → cta-form → faq → footer

### Regras
- Toda LP = hero + cta-form + footer (mínimo)
- Máximo 8 seções (além de hero e footer)
- Ordem: Problema → Solução → Benefícios → Prova → Ação
- Formulário no hero-split OU no cta-form, nunca nos dois

---

## 5. Lead Scoring (Lógica)

### Cálculo (0-100 pontos)
```
Scroll depth (max 30pts):
  90% = 30pts | 75% = 20pts | 50% = 10pts | 25% = 5pts

Tempo na página (max 40pts):
  300s+ = 40pts | 120s+ = 30pts | 60s+ = 20pts | 30s+ = 10pts

Heartbeats/engajamento (max 30pts):
  3+ heartbeats = 30pts | 2 = 20pts | 1 = 10pts
```

### Temperatura
- 0-30 = frio
- 31-60 = morno
- 61-80 = quente
- 81-100 = muito quente

---

## 6. Formulário com Hidden Inputs (padrão)

### Campos ocultos obrigatórios (19 total)
- 5 UTMs: utm_source, utm_medium, utm_campaign, utm_content, utm_term
- 10 Click IDs: gclid, fbclid, gbraid, wbraid, ttclid, gad_campaignid, gad_source, msclkid, li_fat_id, sck
- 4 Sessão: session_id, landing_page, origin_page, session_attributes_encoded

### Padrão HTML
```html
<!-- UTMs -->
<input type="hidden" name="utm_source" data-field-id="utm_source">
<input type="hidden" name="utm_medium" data-field-id="utm_medium">
<input type="hidden" name="utm_campaign" data-field-id="utm_campaign">
<input type="hidden" name="utm_content" data-field-id="utm_content">
<input type="hidden" name="utm_term" data-field-id="utm_term">

<!-- Click IDs -->
<input type="hidden" name="gclid" data-field-id="gclid">
<input type="hidden" name="fbclid" data-field-id="fbclid">
<input type="hidden" name="gbraid" data-field-id="gbraid">
<input type="hidden" name="wbraid" data-field-id="wbraid">
<input type="hidden" name="ttclid" data-field-id="ttclid">
<input type="hidden" name="gad_campaignid" data-field-id="gad_campaignid">
<input type="hidden" name="gad_source" data-field-id="gad_source">
<input type="hidden" name="msclkid" data-field-id="msclkid">
<input type="hidden" name="li_fat_id" data-field-id="li_fat_id">
<input type="hidden" name="sck" data-field-id="sck">

<!-- Sessão -->
<input type="hidden" name="session_id" id="hidden_session_id">
<input type="hidden" name="landing_page" data-field-id="landing_page">
<input type="hidden" name="origin_page" data-field-id="origin_page">
<input type="hidden" name="session_attributes_encoded" data-field-id="session_attributes_encoded">
```

---

## 7. Checklist para Nova LP

### Design
- [ ] Responsivo (375px, 768px, 1280px)
- [ ] Cores consistentes com marca
- [ ] Tipografia com hierarquia (h1 > h2 > h3 > p)
- [ ] Espaçamento generoso (80px mobile, 120px desktop)
- [ ] Hover/active states nos botões
- [ ] loading="lazy" e alt text nas imagens

### Formulário
- [ ] Hidden inputs UTMs (5)
- [ ] Hidden inputs click IDs (10)
- [ ] Hidden inputs sessão (4)
- [ ] Validação HTML5 (required, type=email/tel)
- [ ] Máscara telefone
- [ ] Feedback visual (loading → sucesso/erro)
- [ ] Webhook URL configurada

### Tracking
- [ ] Script antes de </body>
- [ ] COOKIE_DOMAIN configurado
- [ ] WEBHOOK_URL configurado
- [ ] dataLayer declarado
- [ ] custom_page_view disparando
- [ ] Scroll depth (25/50/75/90%)
- [ ] Heartbeat (30s)
- [ ] form_submit com dados do lead
- [ ] Session attributes encoded
- [ ] Preenchimento automático hidden inputs
