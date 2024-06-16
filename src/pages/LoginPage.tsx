import {Alert, Space} from "antd";
import LoginWidget from "@/widgets/Auth/Login/LoginWidget";
import {useEffect, useState} from "react";

export function LoginPage() {

    const [error, setError] = useState('');

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const errorParam = urlParams.get('error');
        if (errorParam) {
            setError(errorParam);
        }
    }, []);

    return (
        <Space align='center' direction='vertical'>
            {error && <Alert message='Ошибка!' description={error} type="error" showIcon/>}
            <LoginWidget/>
        </Space>
    )
}
