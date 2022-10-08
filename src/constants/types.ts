export interface User {
    id: string
    avatar: string
    username: string
    status: string
    email: string
    phone: string
    zipcode: string
}

export interface Post {
    userId: string
    id: string
    body: string
    image?: string
    user: User
}

export interface UserInfo {
    "id": string,
    "name": string,
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
