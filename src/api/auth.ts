import axios from "axios";
import { LoginFormDto, LoginResponseDto, RegisterFormDto, RegisterResponseDto, User } from "./dto/auth.dto";
import axiosInstance from "@/shared/api/axiosInstance";
import { destroyCookie } from "nookies";

export const login = async (values: LoginFormDto): Promise<LoginResponseDto> => {
    return (await axiosInstance.post("/auth/login", values)).data;
}

export const register = async (values: RegisterFormDto): Promise<RegisterResponseDto> => {
    return (await axiosInstance.post("/auth/register", values)).data;
}

export const getMe = async (): Promise<User> => {
    return (await axiosInstance.get("/users/me")).data
}

export const logout = async () => {
    destroyCookie(null, '_token', { path: '/' });
}