# Dashboard de Analytics — Referência

## Stack
Next.js 14 (App Router), Tailwind CSS, Supabase, Recharts, Lucide React, TypeScript

## Design System Dark
- Background: #080810, Surface: #0f0f1a, Card: #12121f, Border: #1c1c30
- Texto: #e2e2f0 (principal), #525270 (muted)
- Accent: #4d85ff (azul), #00e87a (verde), #ff9500 (laranja), #ff3b30 (vermelho)
- Fontes: Syne (headings), Inter (body), IBM Plex Mono (labels)

## Cores de Temperatura
- Frio: #525270 (cinza)
- Morno: #4d85ff (azul)
- Quente: #ff9500 (laranja)
- Muito Quente: #ff3b30 (vermelho)

## Componentes Reutilizáveis
- KPICard (métrica + variação + ícone)
- DataTable (sorting, filtros, paginação)
- TemperatureBadge (badge colorido)
- ScoreBar (barra visual 0-100)
- ChannelBadge (badge de canal)
- FunnelChart (Recharts)
- TimelineEvent (card de evento na journey)
- FilterBar (período, canal, temperatura)

## Páginas
- Dashboard (KPIs, gráficos, funil)
- Leads (tabela + journey individual com timeline)
- Campanhas (agrupamento UTM, first vs last touch)
- Conversões (funil visual, click IDs, status retorno)
