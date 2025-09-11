// src/app/login/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./login.module.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || "Erro ao realizar login.");
      } else {
        setMessage(data.message); // "Login realizado com sucesso!"
        // Futuro → redirecionar para dashboard
      }
    } catch (error) {
      setMessage("Erro no servidor. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Entrar</h1>
        <p className={styles.subtitle}>
          Bem-vindo de volta à ReUse! Faça login para continuar.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Email */}
          <div className={styles.inputGroup}>
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              placeholder="seuemail@exemplo.com"
              aria-label="E-mail"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Senha */}
          <div className={styles.inputGroup}>
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              aria-label="Senha"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Botão */}
          <button type="submit" className={styles.primaryBtn} disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>

        {/* Mensagem de feedback */}
        {message && <p className={styles.message}>{message}</p>}

        <p className={styles.registerText}>
          Ainda não tem conta?{" "}
          <Link href="/register" className={styles.link}>
            Criar conta
          </Link>
        </p>
      </div>
    </div>
  );
}
