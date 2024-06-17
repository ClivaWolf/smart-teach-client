import RegisterWidget from "@/widgets/Auth/Register/RegisterWidget";
import {Alert, Space} from "antd";
import {useEffect, useState} from "react";

export function RegisterPage() {

    const [errormessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (sessionStorage.getItem('register_error')) {
            const error = JSON.parse(sessionStorage.getItem('register_error')!);
            setErrorMessage(error.message);
            sessionStorage.removeItem('register_error');
        }
    }, []);

    return (
        <Space align='center'>
            {errormessage && <Alert message='Ошибка!' description={errormessage} type="error" showIcon/>}
            <RegisterWidget/>
        </Space>
    )
}
