// src/app/dashboard/page.tsx
"use client";

import { FaMobileAlt, FaBook, FaTshirt } from "react-icons/fa";
import styles from "./dashboard.module.css";

export default function DashboardPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Bem-vindo de volta, Usuário!</h1>       
      </header>

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

      <section className={styles.list}>
        <h2>Últimos Itens</h2>
        <ul>
          <li className={styles.listItem}>
            <FaMobileAlt size={16} color="#5F9070" /> Celular usado — disponível
          </li>
          <li className={styles.listItem}>
            <FaBook size={16} color="#5F9070" /> Livros de programação — disponível
          </li>
          <li className={styles.listItem}>
            <FaTshirt size={16} color="#5F9070" /> Camiseta esportiva — trocado
          </li>
        </ul>
      </section>
    
    </div>
  );
}

