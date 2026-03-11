# IJA — Briefing Estratégico

Formulário de briefing estratégico para o **Instituto João Alves (IJA)**, consultoria empresarial especializada em restaurantes e food service.

## Sobre

Formulário multi-step com 8 seções que captura informações estratégicas do cliente para planejamento de marketing. Inclui campos pré-preenchidos com dados já conhecidos, geração de PDF e salvamento no Supabase.

## Stack

- **React 18** + TypeScript
- **Vite** (build tool)
- **Tailwind CSS** (estilização)
- **Supabase** (banco de dados PostgreSQL)
- **jsPDF** + jspdf-autotable (geração de PDF)
- **Vercel** (deploy)

## Funcionalidades

- Formulário multi-step com 8 seções e navegação por pills
- Campos pré-preenchidos com dados já mapeados
- Barra de progresso global e por seção
- Validação de campos obrigatórios
- Geração e download de PDF com as respostas
- Envio para banco de dados Supabase
- Design dark theme com acentos laranja
- Responsivo (mobile-first)

## Desenvolvimento

```bash
pnpm install
pnpm dev
pnpm build
```

## Deploy (Vercel)

- **Build Command:** `pnpm build`
- **Output Directory:** `dist`
- **Framework:** Vite

O `vercel.json` já está configurado com rewrite para SPA.

## Estrutura

```
src/
  App.tsx                    # Componente principal (intro/form/success)
  lib/
    briefing-sections.ts     # Definição das 8 seções e perguntas
    generate-pdf.ts          # Geração do PDF com jsPDF
    supabase.ts              # Cliente Supabase
vercel.json                  # Configuração Vercel
```

## Seções do Briefing

1. Dados da Empresa
2. Método e Soluções (Tripé da Expansão)
3. Contexto e Números
4. Clientes e Perfil Ideal (ICP)
5. Marketing Atual
6. Objetivos e Metas
7. Cases e Prova Social
8. Comunicação e Estilo

---

**Instituto João Alves** — Consultoria Empresarial para Restaurantes e Food Service
