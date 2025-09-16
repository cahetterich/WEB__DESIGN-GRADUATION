// src/app/api/items/[id]/toggle/route.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PUT(
  _: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; // ✅ aguardando params
  const itemId = Number(id);

  if (Number.isNaN(itemId)) {
    return Response.json({ error: "ID inválido" }, { status: 400 });
  }

  try {
    const item = await prisma.item.findUnique({
      where: { id: itemId },
    });

    if (!item) {
      return Response.json({ error: "Item não encontrado" }, { status: 404 });
    }

    const updatedItem = await prisma.item.update({
      where: { id: itemId },
      data: { isActive: !item.isActive }, // inverte o status
    });

    return Response.json(updatedItem);
  } catch (error) {
    console.error("Erro ao atualizar status:", error);
    return Response.json({ error: "Erro no servidor" }, { status: 500 });
  }
}

