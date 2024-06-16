'use client';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Button, Checkbox, Form, Input, Space} from 'antd';
import {UserLogin} from "@/features/UserLogin";
import {useRouter} from "next/navigation";
import ForgotPasswordWidget from "@/widgets/Auth/ForgotPasswordWIdget";
import Link from "next/link";


export default function LoginWidget() {

    const router = useRouter();

    const handleFinish = async (values: any) => {
        const response = await UserLogin(values);
        if (response.error) {
            router.push(`/login?error=${response.message}`);
        } else {
            localStorage.setItem('token', response.token);
            router.push('/user/' + values.login);
        }
    };

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{remember: true}}
            onFinish={handleFinish}
            style={{margin: 8, marginBottom: -16}}
        >
            <Form.Item
                name="login"
                rules={[{required: true, message: 'Пожалуйста, введите свою почту или логин!'}]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Эл. почта или логин"/>
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{required: true, message: 'Пожалуйста, введите свой пароль!'}]}
            >
                <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon"/>}
                    type="password"
                    placeholder="Пароль"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Запомнить меня</Checkbox>
                </Form.Item>

                <ForgotPasswordWidget/>
            </Form.Item>

            <Form.Item style={{paddingBottom: 8}}>
                <Space direction='horizontal' size='small'>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Войти
                    </Button>
                    <Link legacyBehavior={true} href={'/register'}>или зарегистрируйтесь!</Link>
                </Space>
            </Form.Item>
        </Form>
    )
}
