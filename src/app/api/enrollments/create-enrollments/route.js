import prisma from "../../../../lib/prisma"
import { NextResponse } from "next/server";



export async function POST(req) {
const data = await req.json()
const addEnrollments = await prisma.enrollments.create({
    data : {
        user_id:data.user_id,
        course_id:data.course_id,
        
    }
})

if(!addEnrollments){
    return NextResponse.json({message:'enrollment not success'})
}

return NextResponse.json({message:'enrollmets success',status:200})
}
