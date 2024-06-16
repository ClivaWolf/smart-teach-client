import { Button, Checkbox, Form, Space } from 'antd';
import ForgotPasswordWidget from "@/widgets/Auth/ForgotPasswordWIdget";
import Link from "next/link";

export const LoginActions = () => (
    <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Запомнить меня</Checkbox>
        </Form.Item>

        <ForgotPasswordWidget />

        <Form.Item style={{ paddingBottom: 8 }}>
            <Space direction='horizontal' size='small'>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Войти
                </Button>
                <Link legacyBehavior={true} href={'/register'}>или зарегистрируйтесь!</Link>
            </Space>
        </Form.Item>
    </Form.Item>
);
