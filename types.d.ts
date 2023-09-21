type Posts = {
    "userId" : number,
    "id" : number,
    "title" : string,
    "body" : string
}

type User = {
    "id": 1,
        "name": number,
        "username": string,
        "email": string,
        "address": {
            "street": string,
            "suite": string,
            "city": string,
            "zipcode": string,
            "geo": {
                "lat": string,
                "lng": string
            }
        },
        "phone": string,
        "website": string,
        "company": {
            "name": string,
            "catchPhrase": string,
            "bs": string
        }
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

type SearchResult = {
    query?: {
        pages?: Result[],
    },
}

type BlogPost = {
    id: string,
    title: string,
    date: string
}