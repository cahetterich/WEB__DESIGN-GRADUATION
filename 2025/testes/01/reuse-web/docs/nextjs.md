Desenvolvimento com Next.js — Telas e Objetivos

Resumo

- O Next.js organiza as páginas pela pasta `app/`. Cada subpasta com `page.tsx` vira uma rota no site.
- A navegação principal está na `Navbar`, visível nas páginas principais.

Telas desenvolvidas

Home (`/`)

- O que é: a página inicial do ReUse!, que apresenta a proposta do projeto.
- Objetivo: convidar o usuário a criar conta ou explorar itens.
- Elementos: título, texto de apresentação, botões “Criar conta” e “Explorar Produtos”, e uma ilustração.
- Arquivo: `01/reuse-web/src/app/page.tsx`
- Print sugerido: `docs/prints/home.png`

Login (`/login`)

- O que é: página para quem já tem cadastro acessar sua conta.
- Objetivo: autenticar com e‑mail e senha.
- Comportamento: se os dados estiverem incorretos, aparece mensagem de erro; se estiverem corretos, o login é confirmado e o usuário é direcionado para a área interna (ex.: Dashboard).
- Arquivo: `01/reuse-web/src/app/login/page.tsx`
- Usa a API: `POST /api/auth/login` (ver detalhes em `docs/prisma.md`).
- Print sugerido: `docs/prints/login.png`

Cadastro (`/register`)

- O que é: página para criar uma nova conta.
- Objetivo: registrar nome, e‑mail e senha do usuário.
- Comportamento: validação do formulário (senhas iguais) e garantia de e‑mail único. Em sucesso, o usuário é direcionado à área interna (ex.: Dashboard).
- Arquivo: `01/reuse-web/src/app/register/page.tsx`
- Usa a API: `POST /api/auth/register` (ver detalhes em `docs/prisma.md`).
- Print sugerido: `docs/prints/register.png`

Navbar (menu superior)

- O que é: barra de navegação presente nas páginas principais.
- Objetivo: facilitar o acesso rápido a Home, Login e Cadastro (podem existir outras entradas conforme o projeto evolui).
- Arquivo: `01/reuse-web/src/app/components/Navbar.tsx`
- Print sugerido: `docs/prints/navbar.png`

Notas técnicas (simples)

- Componentes com interatividade (formularios, botões e hooks do React) são marcados com `'use client'` no topo do arquivo.
- Os botões e links usam `next/link` para navegar entre páginas sem recarregar o site.
- Os estilos das páginas de Login e Cadastro usam CSS Modules (`.module.css`) para manter estilos isolados.

