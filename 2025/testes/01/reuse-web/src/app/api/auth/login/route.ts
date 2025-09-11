// src/app/api/auth/login/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Preencha todos os campos." }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json({ error: "Usuário não encontrado." }, { status: 401 });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return NextResponse.json({ error: "Senha incorreta." }, { status: 401 });
    }

    // Por enquanto, só retorna mensagem (futuramente JWT/session)
    return NextResponse.json({
      message: "Login realizado com sucesso!",
      user: { id: user.id, name: user.name, email: user.email }
    });
  } catch (error) {
    return NextResponse.json({ error: "Erro no servidor." }, { status: 500 });
  }
}
