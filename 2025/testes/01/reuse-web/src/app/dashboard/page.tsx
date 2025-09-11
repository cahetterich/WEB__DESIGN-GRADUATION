// src/app/dashboard/page.tsx
"use client";

import Link from "next/link";
import styles from "./dashboard.module.css";

export default function DashboardPage() {
  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <h2 className={styles.logo}>ReUse!</h2>
        <nav className={styles.nav}>
          <Link href="/dashboard" className={styles.navLink}>
            📊 Visão Geral
          </Link>
          <Link href="/items" className={styles.navLink}>
            📦 Meus Itens
          </Link>
          <Link href="/profile" className={styles.navLink}>
            👤 Perfil
          </Link>
          <Link href="/settings" className={styles.navLink}>
            ⚙️ Configurações
          </Link>
        </nav>
      </aside>

      {/* Conteúdo principal */}
      <main className={styles.main}>
        <header className={styles.header}>
          <h1>Bem-vindo de volta, Usuário!</h1>
          <button className={styles.logoutBtn}>Sair</button>
        </header>

        {/* Cards de resumo */}
        <section className={styles.cards}>
          <div className={styles.card}>
            <h3>Itens cadastrados</h3>
            <p className={styles.cardNumber}>12</p>
          </div>
          <div className={styles.card}>
            <h3>Trocas realizadas</h3>
            <p className={styles.cardNumber}>5</p>
          </div>
          <div className={styles.card}>
            <h3>Mensagens</h3>
            <p className={styles.cardNumber}>3</p>
          </div>
        </section>

        {/* Seção de listagem */}
        <section className={styles.list}>
          <h2>Últimos Itens</h2>
          <ul>
            <li className={styles.listItem}>📱 Celular usado — disponível</li>
            <li className={styles.listItem}>📚 Livros de programação — disponível</li>
            <li className={styles.listItem}>👕 Camiseta esportiva — trocado</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
