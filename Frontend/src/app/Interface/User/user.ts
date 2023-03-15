export interface RegisterUser {
    id?: string
    username: string;
    email: string
    password: string
    isAdmin?: boolean
    token?: string
}

export interface LoginUser {
    email: string
    password: string
    token?: string
    isAdmin?: boolean
}
