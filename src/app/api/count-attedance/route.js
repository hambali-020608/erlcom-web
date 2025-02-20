'use server'
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";  
import { cookies } from "next/headers";

const JWT_SECRET = 'erlcom';
const prisma = new PrismaClient();

export async function GET() {
  try {
    // ✅ Ambil token dari cookies
    const cookieStore = cookies();
    const token = cookieStore.get('token')?.value;
    if (!token) return NextResponse.json({ error: "Token tidak ada" }, { status: 401 });

    // ✅ Decode token untuk mendapatkan user ID
    const user = jwt.verify(token, JWT_SECRET);
    if (!user?.id) return NextResponse.json({ error: "User tidak ditemukan" }, { status: 401 });

    // ✅ Hitung jumlah absen siswa ini
    const jumlahAbsen = await prisma.attendance.count({
      where: { student_id: user.id }
    });

    return NextResponse.json({ jumlahAbsen });
  } catch (error) {
    console.error("💥 ERROR:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
