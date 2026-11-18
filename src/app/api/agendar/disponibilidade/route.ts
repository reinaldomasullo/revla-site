import { NextResponse } from "next/server";
import { getDisponibilidade } from "@/lib/google-calendar";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const dias = await getDisponibilidade(10);
    return NextResponse.json({ ok: true, dias });
  } catch (err) {
    console.error("Erro ao buscar disponibilidade do agendador:", err);
    return NextResponse.json(
      { ok: false, error: "Não foi possível carregar os horários agora. Tente novamente em instantes." },
      { status: 500 },
    );
  }
}
