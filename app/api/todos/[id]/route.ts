import { NextResponse } from "next/server";

const DATA_SOURCE_URL = 'https://jsonplaceholder.typicode.com/todos'

export async function GET(request: Request) {
    const id = request.url.slice(request.url.lastIndexOf('/') + 1)

    const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const toDos: Todo = await res.json()
    if(!toDos.id) return NextResponse.json({"message": "Id not found"})

    return NextResponse.json({ toDos })
}