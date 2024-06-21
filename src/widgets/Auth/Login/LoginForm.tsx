import { LoginFormDto } from "@/api/dto/auth.dto";
import { Button, Form, Input, notification } from "antd";

import * as Api from "@/api"
import { setCookie } from "nookies";

function LoginForm() {
    const onSubmit = async (values: LoginFormDto) => {
        try {
            const {token} = await Api.auth.login(values);
            notification.success({
                message: 'Успешно!',
                description: 'Переходим в ваш профиль',
                duration: 2
            })

            setCookie(null, '_token', token, {
                path: '/',
            })
        } catch (e) {
            console.warn('LoginForm error', e);

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