import RegisterWidget from "@/widgets/Auth/Register/RegisterWidget";
import {Alert, Space} from "antd";
import {useEffect} from "react";
import {useError} from "@/shared/contexts/ErrorContext";

export function RegisterPage() {

    const {errorMessage, setErrorMessage, clearErrorMessage} = useError();

    useEffect(() => {
        if (sessionStorage.getItem('register_error')) {
            const error = JSON.parse(sessionStorage.getItem('register_error')!);
            setErrorMessage(error.message);
            sessionStorage.removeItem('register_error');
        }
        return () => clearErrorMessage();
    }, [setErrorMessage, clearErrorMessage]);

    return (
        <Space align='center' direction='vertical' size='large'>
            {errorMessage && <Alert message='Ошибка!' description={errorMessage} type="error" showIcon/>}
            <RegisterWidget/>
        </Space>
    )
}
