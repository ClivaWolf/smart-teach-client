import {Button, Checkbox, Form, Space} from 'antd';
import ForgotPasswordWidget from "@/widgets/Auth/ForgotPasswordWIdget";
import Link from "next/link";

export const LoginActions = () => (
    <>
        <Form.Item name="remember" valuePropName="checked">
            <Space>
                <Checkbox>Запомнить меня</Checkbox>
                <ForgotPasswordWidget/>
            </Space>
        </Form.Item>

        <Form.Item style={{paddingBottom: 8}}>
            <Space direction='horizontal' size='small'>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Войти
                </Button>
                <Link legacyBehavior={true} href={'/register'}>или зарегистрируйтесь!</Link>
            </Space>
        </Form.Item>
    </>
);
