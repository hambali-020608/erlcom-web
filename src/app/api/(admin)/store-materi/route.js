import prisma from "../../../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();
    // Simpan data ke database
    const Class= await prisma.assignments.create({
      data: {
        title:data.title,
        course_id:parseInt(data.courses),
        description:data.description,
      },
    });
    // Mengembalikan respons sukses
    return NextResponse.json(
      { message: "Materi berhasil disimpan",  data },
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
