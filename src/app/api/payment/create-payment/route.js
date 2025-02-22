import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { data } from "motion/react-client";

const prisma = new PrismaClient();

function randomString(length) {
  return Math.random().toString(36).substring(2, 2 + length);
}



export async function POST(req) {
  try {
    const data = await req.json();

    // Simpan data pembayaran ke database
    const payment = await prisma.payments.create({
      data: {
        user_id: data.user_id,
        course_id:data.course_id,
        transaction_id:randomString(10),
        payment_method:data.payment_method,
        amount:data.amount,
        payment_status: "success", // Simulasikan pembayaran sukses
      },
    });

    return NextResponse.json({ success: true, payment});
  } catch (error) {
    console.error("Payment error:", error);
    return NextResponse.json({ success: false, message: "Gagal memproses pembayaran" }, { status: 500 });
  }
}
