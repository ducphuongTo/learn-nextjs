import { NextResponse } from "next/server"
import { limiter } from "../config/limiter";

export async function GET(request: Request) {
    const remaining = await limiter.removeTokens(1)
    const origin = request.headers.get('origin')
    console.log('remain:', remaining)
    if (remaining < 1)
    {
        return new NextResponse(null, {
            status: 429,
            statusText: "too many requests",
            headers: {
                'Access-Control-Allow-Origin': '*' || origin,
                'Content-Type': 'text/plain'
            }
        })
    }
    const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
        headers: {
            'Content-Type': 'application/json',
        }
    })

    const data = await res.json();
    return NextResponse.json({ data })
}