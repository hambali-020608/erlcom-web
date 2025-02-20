import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import {getChatByUser} from '../../../lib/getChats'
import AuthUser from "../../../lib/authUser";
const prisma = new PrismaClient();

export async function GET() {
  
  try {
 
    const user = await AuthUser() // fetch user nya
    const chatHistory = await prisma.chats.findMany({
      where: {
         receiver_id: user.id
      },
      include:{
        users_chats_sender_idTousers:true
      }
      // include: {
      //   sender: { select: { name: true } },
      //   receiver: { select: { name: true } }
      // },
    //   orderBy: { created_at: 'asc' }
    }); 


    
 return  NextResponse.json({chatHistory})
  } catch (error) {
    console.error("💥 ERROR:", error); // Menampilkan error di console
    return NextResponse.json({ error: error.message, stack: error.stack }, { status: 500 }); // Tampilkan error lebih jelas
  }
}
