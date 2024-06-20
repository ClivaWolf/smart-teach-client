'use client';
import {Button} from "antd";
import {useAuth} from "@/shared/contexts/AuthContext";
import {useRouter} from "next/navigation";

export default function UserPage({params}: { params: { user_login: string } }) {
    const {user, logout} = useAuth();
    const router = useRouter();

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
                <h2>Доступ запрещен</h2>
            </div>
        );
    }

    return (
        <div>
            <h1>Добро пожаловать, {user.login}</h1>
            <p>Email: {user.email}</p>
            <p>Роли: {user.roles.map(role => role.description).join(', ')}</p>
            <Button onClick={logout}>Выйти</Button>
        </div>
    )
}