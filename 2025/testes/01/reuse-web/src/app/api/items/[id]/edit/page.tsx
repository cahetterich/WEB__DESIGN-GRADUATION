// src/app/items/[id]/edit/page.tsx
"use client";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function EditItemPage({ params }: { params: { id: string } }) {
  const item = await prisma.item.findUnique({
    where: { id: Number(params.id) },
  });

  if (!item) {
    return <p>Item não encontrado</p>;
  }

  async function updateItem(formData: FormData) {
    "use server";

    const title = formData.get("title")?.toString() || "";
    const description = formData.get("description")?.toString() || "";

    await prisma.item.update({
      where: { id: Number(params.id) },
      data: { title, description },
    });

    // 🚀 redireciona de volta para a listagem
    redirect("/items");
  }

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h1>Editar Item</h1>
      <form action={updateItem} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <input
          name="title"
          defaultValue={item.title}
          placeholder="Título"
          style={{ padding: "8px", border: "1px solid #ccc", borderRadius: "6px" }}
        />
        <textarea
          name="description"
          defaultValue={item.description}
          placeholder="Descrição"
          style={{ padding: "8px", border: "1px solid #ccc", borderRadius: "6px" }}
        />
        <button
          type="submit"
          style={{
            padding: "8px 12px",
            backgroundColor: "#5F9070",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Salvar Alterações
        </button>
      </form>
    </div>
  );
}

