import { RegisterFormDto } from "@/api/dto/auth.dto";
import { Button, Form, Input, notification } from "antd";

import * as Api from "@/api"
import { setCookie } from "nookies";
import { checkFieldHandler } from "@/features/Auth/checkField";
import { UserOutlined } from "@ant-design/icons";
import { debounce } from "lodash";

function RegisterForm() {
    const onSubmit = async (values: RegisterFormDto) => {
        try {
            const { access_token } = await Api.auth.register(values);
            notification.success({
                message: 'Успешно!',
                description: 'Переходим в ваш профиль',
                duration: 2
            })

            setCookie(null, '_token', access_token, {
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
    // const debouncedCheck = debounce(async (field, value) => {
    //     const result = await checkFieldHandler(field, value);
    //     console.log(result)
    //     return result;
    // }, 500);
    // NOT WORKING
    return (
        <>
            <Form
                name='register'
                labelCol={{ span: 8 }}
                onFinish={onSubmit}>

                <Form.Item
                    name="login"
                    label="Логин"
                    rules={[
                        { required: true, message: 'Придумайте логин' },
                        {
                            validator: async (_, value) => {
                                if (value) {
                                    const exists = await checkFieldHandler('login', value);
                                    if (exists) {
                                        return Promise.reject(new Error('Пользователь с таким логином уже существует'));
                                    }
                                }
                                return Promise.resolve();
                            },
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined />} />
                </Form.Item>

                <Form.Item
                    name='email'
                    label='Почта'
                    rules={[{ required: true, message: 'укажите свою почту' },
                            {
                                validator: async (_, value) => {
                                    if (value) {
                                        const exists = await checkFieldHandler('email', value);
                                        if (exists) {
                                            return Promise.reject(new Error('Пользователь с такой почтой уже существует'));
                                        }
                                    }
                                    return Promise.resolve();
                                },
                            }
                    ]}
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