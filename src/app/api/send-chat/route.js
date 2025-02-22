import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();

  

    // Simpan data ke database
    const chats = await prisma.chats.create({
      data: {
        sender_id:data.sender_id,
        receiver_id:parseInt(data.receiver_id),
        message:data.message,
      },
    });

    // Mengembalikan respons sukses
    return NextResponse.json(
      { message: "Chat berhasil disimpan", chat: data },
      { status: 201 }
    );
  } catch (error) {
    console.error("💥 ERROR:", error); // Menampilkan error di console
    return NextResponse.json(
      { error: error.message, stack: error.stack },
      { status: 500 }
    );
  }
}
