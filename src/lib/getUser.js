import prisma from "./prisma";

export async function getAllUsers() {
    const users = await prisma.enrollments.findMany({
        select: {
            users: true, // Pilih relasi users
            courses:true
        },
    });
    return users;
}
