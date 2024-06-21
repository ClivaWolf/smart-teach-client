import { RegisterFormDto } from "@/api/dto/auth.dto";
import { Button, Form, Input, notification } from "antd";

import * as Api from "@/api"
import { setCookie } from "nookies";

function RegisterForm() {
    const onSubmit = async (values: RegisterFormDto) => {
        try {
            const {token} = await Api.auth.register(values);
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
                description: 'Ошибка при регистрации',
                duration: 2
            })
        }
    }
    return (
        <>
            <Form
                name='register'
                labelCol={{ span: 8 }}
                onFinish={onSubmit}>

                <Form.Item
                    name='login'
                    label='Логин'
                    rules={[{ required: true, message: 'введите свой логин' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name='email'
                    label='Почта'
                    rules={[{ required: true, message: 'введите свою почту' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name='password'
                    label='Пароль'
                    rules={[{ required: true, message: 'введите пароль' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name='repeatPassword'
                    label='Повторите пароль'
                    rules={[{ required: true, message: 'повторите пароль' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Зарегистрироваться
                    </Button>
                </Form.Item>

            </Form>
        </>
    );
}

export default RegisterForm;