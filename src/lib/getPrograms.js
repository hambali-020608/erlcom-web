
import prisma from "./prisma"

export async function getPrograms () {
    const programs = await prisma.courses.findMany()
    return programs
}
export async function getProgramsById (id) {
    const programs = await prisma.courses.findUnique({
        where: {
            id:id
        }
    })
    return programs
}

