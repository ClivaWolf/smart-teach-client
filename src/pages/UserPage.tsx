'use client';
import {Button, Spin} from "antd";
import {useAuth} from "@/shared/contexts/AuthContext";
import {useRouter} from "next/navigation";
import {GetUserByLogin} from "@/features/User/GetUserByLogin";
import {useEffect, useState} from "react";
import {GetAboutUser} from "@/features/User/GetAboutUser";
import {UserType} from "@/shared/types/UserType";
import {LoginFormType} from "@/shared/types/AuthFormType";

export default function UserPage({params}: { params: { user_login: string } }) {
    const {user, logout} = useAuth();
    const router = useRouter();

    const [anotherUser, setAnotherUser] = useState<LoginFormType | null>(null);
    const [aboutUser, setAboutUser] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchUser = async (login: string) => {
        try {
            return await GetUserByLogin(login);
        } catch (error) {
            console.error('Failed to fetch user:', error);
            return null;
        }
    };

    const fetchAboutUser = async () => {
        try {
            return await GetAboutUser();
        } catch (error) {
            console.error('Failed to fetch user:', error);
            return null;
        }
    };

    useEffect(() => {
        if (params.user_login) {
            fetchUser(params.user_login).then((data) => {
                setLoading(false);
                setAnotherUser(data);
            });

            fetchAboutUser().then((data) => {
                setAboutUser(data ?);
            });
        }
    }, [params.user_login]);

    if (loading) {
        return <Spin tip="Загрузка..." size="large">
            <pre>            </pre>
        </Spin>;
    }

    if (!user) {
        return (
            <div>
                <h2>Вы не авторизованы</h2>
                <p>Пожалуйста, <a onClick={() => router.push('/login')}>войдите в систему</a>.</p>
            </div>
        );
    }

    if (user.login !== params.user_login) {
        return (
            <div>
                <h2>Страница пользователя {anotherUser}</h2>
            </div>
        );
    }

    const aboutUser = async () => {
        const aboutUser = await GetAboutUser();
    }

    return (
        <div>
            <h1>Добро пожаловать, {user.login}</h1>
            <p>Email: {user.email}</p>
            <p>Роли: {user.roles.map(role => role.description).join(', ')}</p>
            <Button onClick={logout}>Выйти</Button>
        </div>
    );
}
