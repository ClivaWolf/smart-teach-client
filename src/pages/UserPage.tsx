'use client';
import {Button, Spin} from "antd";
import {useAuth} from "@/shared/contexts/AuthContext";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {GetAboutUser} from "@/features/User/GetAboutUser";
import {AboutUserType} from "@/shared/types/UserType";
import {GetUserByLogin} from "@/features/User/GetUserByLogin";

export default function UserPage({params}: { params: { user_login: string } }) {
    const {user, token, logout} = useAuth();
    const router = useRouter();

    const [aboutUser, setAboutUser] = useState<AboutUserType | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchUser = async (login: string) => {
        try {
            return await GetUserByLogin(login);
        } catch (error) {
            console.error('Failed to fetch user:', error);
            return null;
        }
    };

    const fetchAboutUser = async (token: string) => {
        try {
            return await GetAboutUser(token);
        } catch (error) {
            console.error('Failed to fetch about user:', error);
            return null;
        }
    };

    useEffect(() => {
        const loadUserData = async () => {
            setLoading(true);
            if (token) {
                const userData = await fetchUser(params.user_login);
                if (userData && userData.login === user?.login) {
                    const aboutUserData = await fetchAboutUser(token);
                    setAboutUser(aboutUserData ?? null);
                }
            }
            setLoading(false);
        };

        loadUserData();
    }, [params.user_login, token, user]);

    if (loading) {
        return (
            <Spin tip="Загрузка..." size="large">
                <div style={{minHeight: '100px'}}></div>
            </Spin>
        );
    }

    if (!token) {
        return (
            <div>
                <h2>Вы не авторизованы</h2>
                <p>Пожалуйста, <a onClick={() => router.push('/login')}>войдите в систему</a>.</p>
            </div>
        );
    }

    // TODO: Пока не реализовано
    if (params.user_login !== user?.login) {
        return (
            <div>
                <h2>Страница пользователя {params.user_login}</h2>
            </div>
        );
    }

    return (
        <div>
            <h1>Добро пожаловать, {user.login}</h1>
            <p>Email: {user.email}</p>
            <p>Логин: {user.login}</p>
            <p>Роли: {user.role?.map((role) => role.value).join(', ')}</p>
            <p>Имя: {aboutUser?.name}</p>
            <p>Фамилия: {aboutUser?.surname}</p>
            <p>Отчество: {aboutUser?.patronymic}</p>
            <p>Город: {aboutUser?.city}</p>
            <p>Аватар: {aboutUser?.avatar}</p>
            <p>О себе: {aboutUser?.signature}</p>
            <Button onClick={logout}>Выйти</Button>
        </div>
    );
}
