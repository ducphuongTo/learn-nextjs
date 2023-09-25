type Posts = {
    "userId" : number,
    "id" : number,
    "title" : string,
    "body" : string
}


type Result = {
    pageid: string,
    title: string,
    extract: string,
    thumbnail?: {
        source: string,
        width: number,
        height: number,
    }
}

type BlogPost = {
    id: string,
    title: string,
    date: string
}

type Todo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}