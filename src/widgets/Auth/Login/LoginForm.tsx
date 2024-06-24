import { LoginFormDto } from "@/api/dto/auth.dto";
import { Button, Form, Input, notification } from "antd";

import * as Api from "@/api"
import { setCookie } from "nookies";
import { useRouter } from "next/router";

function LoginForm() {
    const nav = useRouter()
    const onSubmit = async (values: LoginFormDto) => {
        try {
            const {access_token} = await Api.auth.login(values);
            
            setCookie(null, '_token', access_token, {
                path: '/',
            })

            notification.success({
                message: 'Успешно!',
                description: 'Переходим в ваш профиль',
                duration: 2
            })
            nav.push('/dashboard')
        } catch (e) {
            // console.warn('LoginForm error', e);

            notification.error({
                message: 'Что то пошло не так',
                description: 'Неверный логин или пароль',
                duration: 2
            })
        }
    }
    return (
        <>
            <Form
                name='auth'
                labelCol={{ span: 8 }}
                onFinish={onSubmit}>

                <Form.Item
                    name='login'
                    label='Логин'
                    rules={[{ required: true, message: 'введите свой логин или почту' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name='password'
                    label='Пароль'
                    rules={[{ required: true, message: 'введите свой пароль' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Войти
                    </Button>
                </Form.Item>

            </Form>
        </>
    );
}

export default LoginForm;