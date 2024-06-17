import {Alert, Space} from "antd";
import LoginWidget from "@/widgets/Auth/Login/LoginWidget";
import {useEffect, useState} from "react";

export function LoginPage() {

    const [errormessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (sessionStorage.getItem('login_error')) {
            const error = JSON.parse(sessionStorage.getItem('login_error')!);
            setErrorMessage(error.message);
            sessionStorage.removeItem('login_error');
        }
    }, []);

    return (
        <Space align='center' direction='vertical'>
            {errormessage && <Alert message='Ошибка!' description={errormessage} type="error" showIcon/>}
            <LoginWidget/>
        </Space>
    )
}
