import { Header } from "@/entities/Header";
import LoginForm from "@/widgets/Auth/Login/LoginForm";
import RegisterForm from "@/widgets/Auth/Register/RegisterForm";
import { Layout, Tabs } from "antd";

//TODO: Страница авторизации, подход переключалки мне нравится, но выглядит тухленько, попробуй развить идею

function AuthPage() {
    return (
        <>
            <Header />
            <Layout style={{minHeight:'100vh'}}>
                <Tabs items={[
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

                ]}></Tabs>
            </Layout>
        </>
    );
}

export default AuthPage;