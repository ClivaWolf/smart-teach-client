'use client';
import { Form } from 'antd';
import {useRouter} from "next/navigation";
import { handleFinish } from './handlers/loginHandler';
import { LoginFields } from './components/LoginFields';
import { LoginActions } from './components/LoginActions';
import {useAuth} from "@/shared/contexts/AuthContext";
import {useError} from "@/shared/contexts/ErrorContext";


export default function LoginWidget() {
    const router = useRouter();
    const {updateUser} = useAuth();
    const {setErrorMessage} = useError();

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={(values) => handleFinish(values, router, updateUser, setErrorMessage)}
            style={{ margin: 8, marginBottom: -16 }}
        >
            <LoginFields />
            <LoginActions />
        </Form>
    );
}
