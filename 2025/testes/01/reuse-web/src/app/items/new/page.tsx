// src/app/items/new/page.tsx
'use client';
import { useState } from "react";

export default function NewItemPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // temporário: vamos fixar userId = 1
    const res = await fetch("/api/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, userId: 1 }),
    });

    if (res.ok) {
      alert("Item cadastrado!");
      setTitle("");
      setDescription("");
    } else {
      alert("Erro ao cadastrar item");
    }
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Cadastrar novo item</h1>
      <form onSubmit={handleSubmit} className="grid gap-4 max-w-md">
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="border rounded p-2"
        />
        <textarea
          placeholder="Descrição"
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="border rounded p-2"
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Salvar
        </button>
      </form>
    </div>
  );
}
