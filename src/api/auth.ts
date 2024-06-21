import axios from "axios";
import { LoginFormDto, LoginResponseDto, RegisterFormDto, RegisterResponseDto } from "./dto/auth.dto";
import axiosInstance from "@/shared/api/axiosInstance";

export const login = async (values: LoginFormDto): Promise<LoginResponseDto> => {
    return (await axiosInstance.post("/auth/login", values)).data;
}

export const register = async (values: RegisterFormDto): Promise<RegisterResponseDto> => {
    return (await axiosInstance.post("/auth/register", values)).data;
}
