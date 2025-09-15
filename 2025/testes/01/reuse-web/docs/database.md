Banco de Dados — Tabelas e Objetivos

Visão geral

- Banco: PostgreSQL (Neon).
- Definição das tabelas: `01/reuse-web/prisma/schema.prisma`.
- Migrações (histórico de mudanças): `01/reuse-web/prisma/migrations/`.

Tabelas atuais

User (usuário)

- Objetivo: armazenar as contas dos usuários do ReUse!.
- Campos principais:
  - `id` (número, auto‑incremento): identificador único.
  - `name` (texto): nome completo.
  - `email` (texto, único): usado para login; não pode se repetir.
  - `password` (texto): senha criptografada (hash), nunca em texto puro.
  - Relações: um usuário pode ter vários itens (`items`).

Item (objeto)

- Objetivo: representar um item anunciado pelo usuário (para doar, trocar ou vender).
- Campos principais:
  - `id` (número, auto‑incremento): identificador único do item.
  - `title` (texto): título do item.
  - `description` (texto): descrição do item.
  - `createdAt` (data/hora): quando o item foi criado (preenchido automaticamente).
  - `userId` (número): referência ao dono do item.
  - Relações: pertence a um `User` (`user`).

Relação entre tabelas

- Um `User` possui muitos `Item` (1:N).
- Cada `Item` pertence a um `User` (via `userId`).

Como isso é usado nas telas

- Cadastro: cria um registro em `User` com nome, e‑mail e senha (hash).
- Login: valida `User` existente pelo e‑mail e confere a senha (hash).
- Futuro (itens): listagem e criação de `Item` ligados ao usuário logado.

