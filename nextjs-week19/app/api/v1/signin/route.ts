import { NextRequest, NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";
import prisma from "../../../lib/db";

// const prismaClient = new PrismaClient();


export async function POST(req: NextRequest) {
    const body = await req.json();

    const user = await prisma.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    });
    console.log(user.id);

    return NextResponse.json({ message: "Signed up" });
}


export async function GET() {
    const user = await prisma.user.findFirst({});
    return NextResponse.json({ name: user?.username, email: user?.username })
}