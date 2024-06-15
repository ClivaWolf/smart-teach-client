'use client';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Button, Checkbox, Form, Input, Space} from 'antd';
import {UserLogin} from "@/features/UserLogin";
import {useRouter} from "next/navigation";


export default function LoginWidget() {

    const router = useRouter();

    const handleFinish = async (values) => {
        const response = await UserLogin(values);
        if (response.error) {
            console.log(response.error)
        } else {
            console.log(response);
            localStorage.setItem('token', response.token);
            await router.push('/user/' + values.login);
        }
    };

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{remember: true}}
            onFinish={handleFinish}
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

                <a className="login-form-forgot" href="">
                    Забыли пароль?
                </a>
            </Form.Item>

            <Form.Item>
                <Space direction='horizontal' size='small'>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Войти
                    </Button>
                    <a href="">или зарегистрируйтесь!</a>
                </Space>
            </Form.Item>
        </Form>
    )
}
