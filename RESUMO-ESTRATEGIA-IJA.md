# Resumo Estratégico — Projeto IJA Growth Marketing

## O Que Foi Feito

### 1. Documentação Completa
Toda a base de conhecimento da IJA foi estruturada em arquivos de referência reutilizáveis:

- **contexto-completo.md** (394 linhas) — Quem é a IJA, história, método Tripé da Expansão, 4 soluções, processo comercial, 8 áreas de gestão
- **icp-restaurantes.md** (459 linhas) — Perfil detalhado do cliente ideal: donos de restaurantes com 1-10 unidades, R$50k-2M/mês de faturamento. Inclui demografia, psicografia, dores específicas, objeções e como quebrá-las, keywords de busca
- **solucoes-detalhadas.md** (372 linhas) — As 4 soluções com framework Dores → Perguntas Diagnósticas → Resultados Esperados para cada uma
- **estrategia-canais.md** (734 linhas) — Estratégia completa por canal: Google Ads (keywords por estágio, estrutura de campanhas, budgets), Meta Ads (lookalike, retargeting, criativos), SEO/Blog (temas e calendário), Email Marketing (sequências e automação), WhatsApp (scripts), Conteúdo (formatos e frequência)
- **briefing-perguntas.md** (639 linhas) — 44 perguntas estratégicas organizadas por seção para extrair informação do cliente

### 2. Skill Claude Code
Criada a skill `ija-growth-marketing` com SKILL.md + 5 arquivos de referência. Qualquer conversa futura que mencione IJA, João Pedro, Tripé da Expansão ou consultoria para restaurantes ativará automaticamente todo esse contexto.

**Localização:** `Projeto - IJA/skills/ija-growth-marketing/`

### 3. Formulário de Briefing
Formulário React completo, conectado ao Supabase, com download de PDF:

**Funcionalidades:**
- Tela de introdução com visão geral do processo
- 8 seções com 44 perguntas (campos obrigatórios e opcionais)
- Barra de progresso e navegação entre seções
- Salvamento automático no Supabase ao enviar
- Download de PDF formatado com todas as respostas
- Design dark com acentos em laranja (identidade IJA)
- Responsivo para mobile e desktop

**Banco de Dados:**
- Projeto Supabase: LP Lista de Espera (`ofxchwdlxheiozjkaopz`)
- Tabela: `ija_client_briefings` com 37 campos + timestamps
- RLS: inserção anônima (público pode preencher), leitura autenticada (só admin vê)

**Arquivo:** `ija-briefing-form.html` (878KB, self-contained)

---

## Estratégia Macro

### Situação Atual
A IJA tem crescimento 100% orgânico via indicação. Nunca fez marketing estruturado. João Pedro é referência no mercado de food service em Cabo Frio/RJ, mas o crescimento é limitado pela falta de canais ativos de aquisição.

### A Máquina de Crescimento (Growth Machine)

O plano é construir uma máquina de marketing completa em fases:

**Fase 1 — Coleta de Inteligência (AGORA)**
O briefing que João Pedro vai preencher é a base de tudo. Com as respostas dele (nas palavras dele), vamos criar:
- Pesquisa de mercado validada com dados reais
- ICP refinado com linguagem do cliente
- Persona principal (dono de restaurante) com dores reais
- Posicionamento diferenciado vs concorrência

**Fase 2 — Fundação Digital**
- Estrutura do site/LP com copy baseada nas dores do ICP
- Blog com conteúdo SEO para as 4 soluções
- Sequências de email (nurture, onboarding, reengajamento)
- Scripts de WhatsApp para qualificação e follow-up

**Fase 3 — Aquisição Ativa**
- Google Ads focado em keywords de decisão ("consultoria restaurante", "gestão financeira restaurante")
- Meta Ads com criativos validados (dor → solução → prova social)
- Retargeting para visitantes do site e engajadores de conteúdo

**Fase 4 — Escala**
- Webinars temáticos (1 por mês, cada um sobre 1 das 4 soluções)
- Funil de webinar → diagnóstico gratuito → proposta
- Conteúdo LinkedIn para posicionar João Pedro como autoridade

### KPIs Sugeridos
- Leads qualificados/mês (meta: 30-50)
- Taxa de conversão lead → diagnóstico (meta: 20-30%)
- Taxa de conversão diagnóstico → cliente (meta: 40-50%)
- CAC (Custo de Aquisição de Cliente)
- LTV (Lifetime Value do cliente)
- ROI por canal

---

## Próximos Passos Imediatos

1. **Enviar o formulário para João Pedro** — Ele preenche o briefing completo
2. **Analisar as respostas** — Usar as palavras exatas dele para refinar ICP e copy
3. **Criar documentos de marca IJA** — Brand guide + ICP final (seguindo modelo do Evolutto)
4. **Montar LP de captação** — Primeira landing page com oferta de diagnóstico gratuito
5. **Configurar email marketing** — Sequência de boas-vindas + nutrição
6. **Lançar campanhas Google Ads** — Começar com keywords de decisão e budget de R$1-2k/mês

---

## Arquivos Entregues

| Arquivo | Descrição |
|---------|-----------|
| `ija-briefing-form.html` | Formulário completo (abrir no navegador) |
| `skills/ija-growth-marketing/SKILL.md` | Skill principal |
| `skills/ija-growth-marketing/references/contexto-completo.md` | Contexto da IJA |
| `skills/ija-growth-marketing/references/icp-restaurantes.md` | ICP detalhado |
| `skills/ija-growth-marketing/references/solucoes-detalhadas.md` | 4 soluções da IJA |
| `skills/ija-growth-marketing/references/estrategia-canais.md` | Estratégia de canais |
| `skills/ija-growth-marketing/references/briefing-perguntas.md` | 44 perguntas do briefing |
