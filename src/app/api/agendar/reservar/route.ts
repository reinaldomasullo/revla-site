import { NextResponse } from "next/server";
import { criarReserva, type ReservaInput } from "@/lib/google-calendar";

const INTERESSES: ReservaInput["interesse"][] = [
  "consorcio",
  "seguro",
  "plano-de-saude",
];

const CONSORCIO_TIPOS: NonNullable<ReservaInput["consorcioTipo"]>[] = [
  "imovel",
  "veiculos",
  "servicos",
  "investimentos",
];

export async function POST(request: Request) {
  let body: Partial<ReservaInput>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Requisição inválida." },
      { status: 400 },
    );
  }

  const { nome, whatsapp, interesse, consorcioTipo, seguroDetalhe, data, horario } = body;

  if (!nome || nome.trim().length < 2) {
    return NextResponse.json(
      { ok: false, error: "Informe seu nome." },
      { status: 400 },
    );
  }
  if (!whatsapp || whatsapp.replace(/\D/g, "").length < 10) {
    return NextResponse.json(
      { ok: false, error: "Informe um WhatsApp válido." },
      { status: 400 },
    );
  }
  if (!interesse || !INTERESSES.includes(interesse)) {
    return NextResponse.json(
      { ok: false, error: "Selecione um interesse." },
      { status: 400 },
    );
  }
  if (
    interesse === "consorcio" &&
    (!consorcioTipo ||
      !CONSORCIO_TIPOS.includes(
        consorcioTipo as NonNullable<ReservaInput["consorcioTipo"]>,
      ))
  ) {
    return NextResponse.json(
      { ok: false, error: "Selecione o tipo de consórcio." },
      { status: 400 },
    );
  }
  if (interesse === "seguro" && (!seguroDetalhe || !seguroDetalhe.trim())) {
    return NextResponse.json(
      { ok: false, error: "Informe qual tipo de seguro você quer." },
      { status: 400 },
    );
  }
  if (!data || !/^\d{4}-\d{2}-\d{2}$/.test(data)) {
    return NextResponse.json(
      { ok: false, error: "Data inválida." },
      { status: 400 },
    );
  }
  if (!horario || !/^\d{2}:00$/.test(horario)) {
    return NextResponse.json(
      { ok: false, error: "Horário inválido." },
      { status: 400 },
    );
  }

  try {
    const resultado = await criarReserva({
      nome: nome.trim(),
      whatsapp: whatsapp.trim(),
      interesse,
      consorcioTipo:
        interesse === "consorcio"
          ? (consorcioTipo as ReservaInput["consorcioTipo"])
          : undefined,
      seguroDetalhe:
        interesse === "seguro" ? seguroDetalhe!.trim() : undefined,
      data,
      horario,
    });
    if (!resultado.ok) {
      return NextResponse.json(resultado, { status: 409 });
    }
    return NextResponse.json(resultado);
  } catch (err) {
    console.error("Erro ao criar reserva no agendador:", err);
    return NextResponse.json(
      { ok: false, error: "Não foi possível agendar agora. Tente novamente em instantes." },
      { status: 500 },
    );
  }
}
