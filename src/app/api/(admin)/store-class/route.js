import prisma from "../../../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();
    // Simpan data ke database
    const Class= await prisma.courses.create({
      data: {
        title:data.title,
        price:parseInt(data.price),
        description:data.description,
        image:data.image,
      },
    });

    // Mengembalikan respons sukses
    return NextResponse.json(
      { message: "Class berhasil disimpan",  data },
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
