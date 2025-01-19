import prisma from "../../../lib/prisma"
import { NextResponse } from "next/server";



export async function POST(req) {
const data = await req.json()
const addUser = await prisma.Users.create({
    data : {
        name:data.name,
        email:data.email,
        password:data.password
    }
})

if(!addUser){
    return NextResponse.json({message:'sign up not success'})
}

return NextResponse.json({message:'sign up success',status:200})
}
