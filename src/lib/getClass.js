
import prisma from "./prisma"


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

