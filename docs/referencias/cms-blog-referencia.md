# Referência: CMS + Blog Client-Side

> Modelo de referência para estrutura de CMS e blog. Adaptado para o IJA com Supabase no lugar de localStorage.

---

## Origem
Modelo client-side (HTML/CSS/JS puro + localStorage) usado em projetos anteriores. Para o IJA, a estrutura de rotas e UX do CMS foi mantida, mas a camada de dados foi substituída por Supabase (PostgreSQL + Auth + Storage).

## O que foi aproveitado

| Elemento | Original | Adaptação IJA |
|---|---|---|
| Rotas `/acesso`, `/blog`, `/blog/[slug]` | ✅ Mantido | Mesmo padrão |
| CMS com sidebar (Dashboard, Artigos, Novo, Usuários) | ✅ Mantido | Mesmo layout |
| Editor rich text (toolbar: bold, italic, H2/H3, listas, links, imagens) | ✅ Mantido | Tiptap em vez de contenteditable |
| Upload de imagem cover (drag & drop + file input) | ✅ Mantido | Supabase Storage em vez de base64 |
| Slug automático do título | ✅ Mantido | Mesma lógica |
| Preview antes de publicar | ✅ Mantido | — |
| Filtro por status (published/draft) | ✅ Mantido | + filtro por categoria |
| Roles: admin e editor | ✅ Mantido | Supabase Auth + RLS |
| Vercel rewrite `/blog/:slug` → leitor | ✅ Conceito | Next.js dynamic routes (nativo) |

## O que foi substituído

| Original | Motivo da troca | IJA |
|---|---|---|
| localStorage | Dados por browser, sem SEO, limite 5MB | Supabase (PostgreSQL) |
| SHA-256 + sessionStorage | Inseguro, sem recuperação de senha | Supabase Auth |
| Base64 para imagens | Estoura localStorage, lento | Supabase Storage |
| HTML/CSS/JS puro | Sem SSR = sem SEO = sem Google News | Next.js (App Router) |
| JSON no browser | Sem colaboração multi-usuário | PostgreSQL com RLS |

## Modelo de Dados Original (referência)

```javascript
// Chave: "cms_data"
{
  users: [{
    id: "usr_xxx",
    name: "Admin",
    email: "admin@email.com",
    password: "sha256_hash",
    role: "admin" // "admin" ou "editor"
  }],
  articles: [{
    id: "art_xxx",
    title: "Título",
    slug: "titulo-do-artigo",
    content: "<p>HTML...</p>",
    category: "estrategia",
    author: "Nome",
    readTime: "5 min",
    imageData: "data:image/...",
    status: "published", // "published" ou "draft"
    createdAt: "2026-01-01T..."
  }],
  leadMagnets: [{
    id: "lm_xxx",
    title: "Material",
    description: "Descrição",
    cta: "Baixar",
    url: "https://...",
    image: "data:image/..."
  }]
}
```

> Este modelo foi mapeado para 4 tabelas no Supabase: `blog_posts`, `blog_authors`, `blog_lead_magnets`, `cms_users`. Ver detalhes em `docs/ARQUITETURA-SITE.md`, seção 5.5.
