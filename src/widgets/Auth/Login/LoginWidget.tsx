import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Button, Checkbox, Form, Input, Space} from 'antd';


export default function LoginWidget() {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{remember: true}}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
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