import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function randomString(length) {
  return Math.random().toString(36).substring(2, 2 + length);
}



export async function POST(req) {
  try {
    const { user_id, course_id, payment_method, amount } = await req.json();

    // Simpan data pembayaran ke database
    const payment = await prisma.payments.create({
      data: {
        user_id,
        course_id,
        transaction_id:randomString(10),
        payment_method,
        amount,
        status: "success", // Simulasikan pembayaran sukses
      },
    });

    return NextResponse.json({ success: true, payment });
  } catch (error) {
    console.error("Payment error:", error);
    return NextResponse.json({ success: false, message: "Gagal memproses pembayaran" }, { status: 500 });
  }
}
