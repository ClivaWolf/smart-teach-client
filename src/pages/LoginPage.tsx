import {Alert, Space} from "antd";
import LoginWidget from "@/widgets/Auth/Login/LoginWidget";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {useError} from "@/shared/contexts/ErrorContext";

export function LoginPage() {

    const {errorMessage, setErrorMessage, clearErrorMessage} = useError();

    useEffect(() => {
        if (sessionStorage.getItem('login_error')) {
            const error = JSON.parse(sessionStorage.getItem('login_error')!);
            setErrorMessage(error.message);
            sessionStorage.removeItem('login_error');
        }
        return () => clearErrorMessage();
    }, [setErrorMessage, clearErrorMessage]);

    return (
        <Space align='center' direction='vertical' size='large'>
            {errorMessage && <Alert message='Ошибка!' description={errorMessage} type="error" showIcon/>}
            <LoginWidget/>
        </Space>
    )
}
