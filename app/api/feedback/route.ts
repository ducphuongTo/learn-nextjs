import { NextResponse } from "next/server";

type FeedBack = {
    name?: string,
    email?: string,
    message?: string
}

export async function POST(request: Request) {
    const data: FeedBack = await request.json()

    const { name, email, message} = data

    return NextResponse.json({ name, email, message })
}