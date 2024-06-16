'use client';
import { Form } from 'antd';
import {useRouter} from "next/navigation";
import { handleFinish } from './handlers/loginHandler';
import { LoginFields } from './components/LoginFields';
import { LoginActions } from './components/LoginActions';

export default function LoginWidget() {
    const router = useRouter();

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={(values) => handleFinish(values, router)}
            style={{ margin: 8, marginBottom: -16 }}
        >
            <LoginFields />
            <LoginActions />
        </Form>
    );
}
