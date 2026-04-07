# Tracking GTM — Referência Genérica

## Arquitetura End-to-End
```
LP + Script → GTM Web → GTM Server → GA4 + Google Ads + Meta CAPI + Webhook
                                          ↓
                                     n8n Workflow → Supabase (eventos + lead scoring)
                                                  → CRM (deal com click IDs + UTMs)

CRM (deal fechado) → n8n → Google Ads (offline conversion) + Meta Ads (offline conversion)
```

## Supabase — Tabela `events`
~45 campos: identificação, página, UTMs (first/last touch), click IDs (11), cookies Meta, geo, dados do lead, comportamento, lead scoring, técnico.

## GTM Web Container
- Variáveis: constantes (GA4 ID, Pixel Meta, Tag Google Ads, Server URL), JS customizado (session ID, external ID, GA client ID, lead data, user agent), cookies (23 tipos), DataLayer variables
- Triggers: custom_page_view, form_submit, scroll_depth, time_on_page_heartbeat, janela carregada
- Tags: GA4 config, GA4 events (page_view, generate_lead, scroll_depth, heartbeat), Google Ads (conversão + enhanced conversions + remarketing), Meta Pixel (pageview + lead), geolocalização

## GTM Server Container
- Variáveis Event Data: ~40 variáveis lendo do evento GA4
- Tags: GA4 server-side, Meta CAPI, Google Ads (remarketing + conversão + enhanced), HTTP Request para webhook n8n

## n8n Workflow
- Webhook recebe eventos → mapeia campos → IF generate_lead → busca sessão no Supabase → calcula lead score → insere no Supabase

## Offline Conversion Tracking
- CRM campos customizados: gclid, gbraid, wbraid, fbclid, session_attributes_encoded, UTMs, lead_score
- Schedule trigger busca deals ganhos → formata para Google Ads (Google Sheets) + Meta Ads (Graph API POST)
