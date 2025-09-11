// src/app/api/items/route.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET → listar todos os itens
export async function GET() {
  const items = await prisma.item.findMany({
    include: { user: { select: { name: true } } }, // mostra só o nome do dono
  });
  return Response.json(items);
}

// POST → criar novo item
export async function POST(req: Request) {
  const data = await req.json();
  const { title, description, userId } = data;

  if (!title || !description || !userId) {
    return Response.json({ error: "Campos obrigatórios faltando" }, { status: 400 });
  }

  const newItem = await prisma.item.create({
    data: { title, description, userId },
  });

  return Response.json(newItem);
}
