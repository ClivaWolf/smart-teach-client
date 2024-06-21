import LoginForm from "@/widgets/Auth/Login/LoginForm";
import RegisterForm from "@/widgets/Auth/Register/RegisterForm";
import { Tabs } from "antd";

function AuthPage() {

    return (
        <Tabs
            items={[
                {
                    label: 'Вход',
                    key: '1',
                    children: <LoginForm />
                },
                {
                    label: 'Регистрация',
                    key: '2',
                    children: <RegisterForm />
                },

            ]}
        />
    )
}

export default AuthPage;