import bcrypt  from 'bcryptjs';
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// create user
export async function POST(request:Request) {
    try {
        const {name, email, password} = await request.json();
        
        if (!name || !email || !password) {
            return new NextResponse('All fields are required', { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = await prisma.user.create({
            data:
                {
                    name,
                    email,
                    password:hashedPassword
                }
        });

        return NextResponse.json({ user: newUser }, { status: 201 });
    } catch (error:any) {
        console.error('Error creating message:', error);
        return NextResponse.json({ message: 'Message not created: ' + error.message }, { status: 500 });
    }
}