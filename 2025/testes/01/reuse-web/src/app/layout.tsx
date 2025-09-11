// src/app/layout.tsx
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "ReUse! - Web",
  description: "Plataforma ReUse! – repensar, reaproveitar, reconectar",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {/* Navbar */}
        <header style={{ background: "white", borderBottom: "1px solid #ddd" }}>
          <nav className="container" style={{ display: "flex", justifyContent: "space-between", padding: "16px 0" }}>
            <h1 style={{ color: "var(--reuse-dark)" }}>ReUse!</h1>
            <div style={{ display: "flex", gap: "16px" }}>
              <Link href="/">Início</Link>
              <Link href="/items">Itens</Link>
              <Link href="/login">Login</Link>
              <Link href="/register">Cadastrar</Link>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer style={{ marginTop: "40px", padding: "20px", textAlign: "center", background: "white", borderTop: "1px solid #ddd" }}>
          <p>© {new Date().getFullYear()} ReUse! – Plataforma de Troca Sustentável</p>
        </footer>
      </body>
    </html>
  );
}
