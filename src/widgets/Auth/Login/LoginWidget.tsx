'use client';
import {Form} from 'antd';
import {useRouter} from "next/navigation";
import {handleFinish} from './handlers/loginHandler';
import {LoginFields} from './components/LoginFields';
import {LoginActions} from './components/LoginActions';
import {useAuth} from "@/shared/contexts/AuthContext";
import {useError} from "@/shared/contexts/ErrorContext";
import {useState} from "react";


export default function LoginWidget() {
    const router = useRouter();
    const {updateUser} = useAuth();
    const {setErrorMessage} = useError();

    const form = Form.useForm()[0];
    const [loadings, setLoadings] = useState<boolean[]>([]);

    return (
        <Form
            form={form}
            name="normal_login"
            className="login-form"
            initialValues={{remember: true}}
            onFinish={(values) => {
                handleFinish(values, router, updateUser, setErrorMessage)
                    .then(() => setLoadings((prevLoadings) => {
                        const newLoadings = [...prevLoadings];
                        newLoadings[0] = false;
                        return newLoadings;
                    }))
                ;
            }}
            style={{margin: 8, marginBottom: -16}}
        >
            <LoginFields/>
            <LoginActions loadings={loadings} setLoadings={setLoadings} form={form}/>
        </Form>
    );
}
