'use client';
import { Form } from 'antd';
import {useRouter} from "next/navigation";
import { handleFinish } from './handlers/loginHandler';
import { LoginFields } from './components/LoginFields';
import { LoginActions } from './components/LoginActions';
import {useAuth} from "@/shared/contexts/AuthContext";


interface LoginWidgetProps {
    onError: (message: string) => void;
}

export default function LoginWidget({onError}: LoginWidgetProps) {
    const router = useRouter();
    const {updateUser} = useAuth();

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={(values) => handleFinish(values, router, updateUser, onError)}
            style={{ margin: 8, marginBottom: -16 }}
        >
            <LoginFields />
            <LoginActions />
        </Form>
    );
}
