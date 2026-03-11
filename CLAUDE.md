# Projeto IJA — Instituto João Alves

## O que é
Projeto de growth marketing para o Instituto João Alves (IJA), consultoria empresarial especializada em restaurantes e food service. Fundador: João Pedro Alves, Cabo Frio/RJ.

## Estrutura do repositório

```
├── docs/                          # Documentação estratégica completa
│   ├── CONTEXTO-IJA.md            # Quem é a IJA, história, método
│   ├── METODO-TRIPE-EXPANSAO.md   # Metodologia proprietária (3 pilares)
│   ├── SOLUCOES-IJA.md            # 4 soluções detalhadas
│   ├── ESTRATEGIA-GROWTH.md       # Estratégia de growth em 6 fases
│   ├── PROCESSOS-COMERCIAIS.md    # Processo comercial ponta a ponta
│   └── RESUMO-ESTRATEGIA-IJA.md   # Resumo executivo dos entregáveis
├── ija-briefing-form-repo/        # App React do formulário de briefing
│   ├── src/App.tsx                # Componente principal (intro/form/success)
│   ├── src/lib/briefing-sections.ts  # 8 seções, 43 perguntas
│   └── src/lib/supabase.ts       # Integração com Supabase
├── .claude/skills/                # Skills do Claude Code
│   └── ija-growth-marketing/      # Contexto automático para marketing IJA
└── vercel.json                    # Deploy config (build do subfolder)
```

## Stack técnica
- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS
- **Backend:** Supabase (tabela `ija_client_briefings`)
- **Deploy:** Vercel (ija-blue.vercel.app)
- **Build:** `npm install --legacy-peer-deps` + `npm run build` dentro de `ija-briefing-form-repo/`

## Convenções
- Linguagem do projeto: Português (BR)
- Commits em português ou inglês, com prefixo semântico (feat, fix, remove, etc.)
- Não commitar `.env`, `node_modules/`, `dist/`, `.DS_Store`
