import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req, { params }) {
  const { id } = params;

  try {
    const program = await prisma.courses.findUnique({
      where: { id: parseInt(id) },
    });

    if (!program) {
      return NextResponse.json({ error: "Kursus tidak ditemukan!" }, { status: 404 });
    }

    return NextResponse.json(program);
  } catch (error) {
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 });
  }
}
