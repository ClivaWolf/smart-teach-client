'use server'
import { LoginFormDto } from "./dto/auth.dto";
import FetchClient from "./fetchClient";



export const login = async (values: LoginFormDto) => {
    return await FetchClient.post<{ access_token: string }>('/auth/login', values);
}

