"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function UserForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const password = String(formData.get("password") || "");

    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data?.error || "Erro ao cadastrar.");
      } else {
        (e.target as HTMLFormElement).reset();
        router.refresh(); // recarrega a lista do server component
      }
    } catch (err) {
      setError("Falha na rede.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label className="mb-1 block text-sm font-medium">Nome</label>
        <input
          name="name"
          type="text"
          required
          className="w-full rounded-lg border px-3 py-2 outline-none focus:ring"
          placeholder="Ex.: Ana Souza"
        />
      </div>

      <div className="sm:col-span-1">
        <label className="mb-1 block text-sm font-medium">E-mail</label>
        <input
          name="email"
          type="email"
          required
          className="w-full rounded-lg border px-3 py-2 outline-none focus:ring"
          placeholder="ana@email.com"
        />
      </div>

      <div className="sm:col-span-2">
        <label className="mb-1 block text-sm font-medium">Senha</label>
        <input
          name="password"
          type="password"
          minLength={6}
          required
          className="w-full rounded-lg border px-3 py-2 outline-none focus:ring"
          placeholder="mín. 6 caracteres"
        />
      </div>

      {error && (
        <p className="sm:col-span-2 text-sm text-red-600">{error}</p>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700 disabled:opacity-50"
        >
          {submitting ? "Cadastrando..." : "Cadastrar"}
        </button>
      </div>
    </form>
  );
}
