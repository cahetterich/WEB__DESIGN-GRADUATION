import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

// Garante que esta rota rode no runtime Node.js (Prisma não funciona no Edge)
export const runtime = "nodejs";

export async function GET() {
  const users = await prisma.user.findMany({
    select: { id: true, name: true, email: true, createdAt: true },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, password } = body ?? {};

    // Validação simples (pode evoluir para Zod depois)
    if (
      !name ||
      !email ||
      !password ||
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string"
    ) {
      return NextResponse.json(
        { error: "Dados inválidos. Envie name, email e password." },
        { status: 400 }
      );
    }

    // Hash da senha
    const hashed = await bcrypt.hash(password, 10);

    const created = await prisma.user.create({
      data: { name, email, password: hashed },
      select: { id: true, name: true, email: true, createdAt: true },
    });

    return NextResponse.json(created, { status: 201 });
  } catch (err: any) {
    // Trata email duplicado (violação de unique)
    if (err.code === "P2002") {
      return NextResponse.json(
        { error: "E-mail já cadastrado." },
        { status: 409 }
      );
    }
    console.error("POST /api/users error:", err);
    return NextResponse.json(
      { error: "Erro ao criar usuário." },
      { status: 500 }
    );
  }
}
