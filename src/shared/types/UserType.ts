export type RoleType = {
    id: string;
    value: string;
    description: string;
}

export type UserType = {
    login: string;
    email: string;
    role: RoleType[];
}

export type FormType = UserType & {
    password: string;
    remember: boolean;
}

export type AboutUserType = {
    name: string;
    surname: string;
    patronymic?: string;
    birthDate?: string;
    gender?: string;
    city?: string;
    avatar?: string;
    emailVisible: boolean;
    signature?: string;
}
