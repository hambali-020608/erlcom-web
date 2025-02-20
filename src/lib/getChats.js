
import prisma from "./prisma"

export async function getMateri () {
    const programs = await prisma.courses.findMany()
    return programs
}
export async function getChatByUser () {
    const user1 = 1; // ID Pengirim
    const user2 = 2; // ID Penerima
    
    const chatHistory = await prisma.chats.findMany({
      where: {
        OR: [
          { sender_id: user1, receiver_id: user2 },
          { sender_id: user2, receiver_id: user1 }
        ]
      },
      include: {
        sender: { select: { name: true } },
        receiver: { select: { name: true } }
      },
      orderBy: { created_at: 'asc' }
    });

return chatHistory
    
}

