import { LoginFormDto, LoginResponseDto, RegisterFormDto, RegisterResponseDto, UserDto } from "./dto/auth.dto";
import axios from '@/core/axios'
import { destroyCookie } from "nookies";

//TODO: Это твои АПИ
//каждая апи под свой скоуп задач, по хорошему это можно и в класс собрать
//но это не имеет особого смысла, ибо юзабилити остаётся такой же, зато статики писать не надо и сущности плодить

export const login = async (values: LoginFormDto): Promise<LoginResponseDto> => {
    return (await axios.post("/auth/login", values)).data;
}

export const register = async (values: RegisterFormDto): Promise<RegisterResponseDto> => {
    return (await axios.post("/auth/register", values)).data;
}

export const getMe = async (): Promise<UserDto> => {
    return (await axios.get("/users/me")).data
}

export const logout = async () => {
    destroyCookie(null, '_token', { path: '/' });
}