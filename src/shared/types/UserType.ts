export interface RoleType {
    id: string;
    value: string;
    description: string;
}

export interface UserType {
    id: string;
    login: string;
    email: string;
    roles: RoleType[];
}

export interface AboutUserType {
    name: string;
    surname: string;
    patronymic: string;
    city: string;
    avatar: string;
    email: string;
    signature: string;
}
