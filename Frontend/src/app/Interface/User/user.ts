export interface RegisterUser {
    id?: string
    username: string;
    email: string
    password: string
    role?: string
    token?: string
}

export interface LoginUser {
    email: string
    password: string
    token?: string
}
