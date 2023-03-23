export interface RegisterUser {
    username:string
    email:string
    password:string
}

export interface Message {
    message:string
}

export interface LoginUser {
    email: string
    password: string
}

export interface LoginSuccess {
    message: string
    token: string
    username: string
}

