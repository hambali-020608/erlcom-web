
import prisma from "./prisma"

export async function getMateri () {
    const programs = await prisma.courses.findMany()
    return programs
}
export async function getMateriByUser (user_id) {
    const user = await prisma.users.findUnique({
        where: {
            id:user_id
        },
        include:{
            submissions:{
                include:{assignments:true}
            }
        }
    })
    return user
}

