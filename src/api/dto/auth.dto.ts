//TODO: Это твои верные дто
//Они помогут тебе при написании кода - их нужно время от времени синхронизировать с серверными дто,
//могут различаться реализации, но не логика

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

export interface UserDto {
    id: string;
    login: string;
    email: string;
    password: string;
    roles: RoleDto[];
    aboutUser: AboutUserDto;
}

export interface AboutUserDto {
    id: string;
    name: string;
    surname: string;
    patronymic: string;
    birthday: Date;
    city: string;
    avatar: string;
    emailVisible: visibility;
    signature: string;
}

export interface RoleDto{
    id: string;
    value: string;
    description: string;
}

enum visibility {
    everyone = 'everyone',
    teachers = 'teachers',
    hidden = 'hidden'
}