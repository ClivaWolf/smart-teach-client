export interface LoginFormDto {
    login: string;
    password: string;
}

export interface LoginResponseDto {
    access_token: string;
}

export type RegisterFormDto = LoginFormDto & {
    email: string;
}

export type RegisterResponseDto = LoginResponseDto

export interface User {
    id: string;
    login: string;
    email: string;
    roles: string[];
    about: AboutUser;
}

export interface AboutUser {
    name: string;
    surname: string;
    patronymic: string;
    birthday: Date;
    city: string;
    avatar: string;
    emailVisible: visibility;
    signature: string;
}

enum visibility {
    everyone = 'everyone',
    teachers = 'teachers',
    hidden = 'hidden'
}