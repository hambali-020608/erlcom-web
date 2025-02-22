import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import AuthUser from "../../../../../lib/authUser";

const prisma = new PrismaClient();

export async function GET(req) {
  try {
    // ✅ Ambil user yang sedang login
    const user = await AuthUser(); 
    if (!user || !user.id) {
      return NextResponse.json({ error: "User tidak ditemukan" }, { status: 401 });
    }

    // ✅ Ambil `sender_id` dari URL query parameter
    const { searchParams } = new URL(req.url);
    const sender_id = parseInt(searchParams.get("sender_id"), 10);
    if (!sender_id) {
      return NextResponse.json({ error: "Sender ID tidak valid" }, { status: 400 });
    }

    // ✅ Ambil semua chat antara user yang login dan sender
    const chatHistory = await prisma.chats.findMany({
      where: {
        OR: [
          { sender_id: user.id, receiver_id: sender_id }, // User mengirim pesan ke sender
          { sender_id: sender_id, receiver_id: user.id }, // Sender mengirim pesan ke user
        ],
      },
      include: {
        users_chats_sender_idTousers: true, // Ambil nama pengirim
        users_chats_receiver_idTousers:true // Ambil nama penerima
      },
      orderBy: { created_at: "asc" }, // Urutkan berdasarkan waktu
    });

    return NextResponse.json({ chatHistory });
  } catch (error) {
    console.error("💥 ERROR:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
