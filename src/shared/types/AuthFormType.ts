export type LoginFormType = {
    login: string;
    password: string;
    remember: boolean;
}

export type RegisterFormType = LoginFormType & {
    email: string;
}