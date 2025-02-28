
import prisma from "./prisma"

export async function getAllClass() {

    const Class = await prisma.courses.findMany({
       
        include:{
            _count: {
                select: { enrollments: true } // Menghitung jumlah enrollments
            }
        }
    })
    return Class
    
}
export async function getClassByUser (user_id) {
    const user = await prisma.users.findUnique({
        where: {
            id:user_id
        },
        include:{
            enrollments:{
                include:{courses:true}
            }
        }
    })
    return user
}

