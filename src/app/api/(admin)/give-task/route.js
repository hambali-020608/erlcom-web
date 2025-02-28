import prisma from "../../../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();
    const { user_id, assigments_id } = data;

    // Validasi input
    if (!Array.isArray(user_id) || !Array.isArray(assigments_id)) {
      return NextResponse.json(
        { message: "user_id dan assigments_id harus berupa array." },
        { status: 400 }
      );
    }
    if (user_id.length === 0 || assigments_id.length === 0) {
      return NextResponse.json(
        { message: "user_id dan assigments_id tidak boleh kosong." },
        { status: 400 }
      );
    }
    // Format data dengan kombinasi setiap user_id dan assigments_id
    const submissionsData = user_id.flatMap((userId) =>
      assigments_id.map((taskId) => ({
        user_id: userId,
        assignment_id: taskId
      }))
    );
    // Simpan data ke database
    const submissions = await prisma.submissions.createMany({
      data: submissionsData, // Menggunakan data yang sudah diformat
    });

    return NextResponse.json(
      { message: "Tugas berhasil diberikan!", data: submissionsData },
      { status: 201 }
    );
  } catch (error) {
    console.error("💥 ERROR:", error);
    return NextResponse.json(
      { error: error.message, stack: error.stack },
      { status: 500 }
    );
  }
}
