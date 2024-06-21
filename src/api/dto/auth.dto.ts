export interface LoginFormDto {
    login: string;
    password: string;
}

export interface LoginResponseDto {
    token: string;
}

export type RegisterFormDto = LoginFormDto & {
    email: string;
}

export type RegisterResponseDto = LoginResponseDto