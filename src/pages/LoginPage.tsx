import {Alert, Space} from "antd";
import LoginWidget from "@/widgets/Auth/Login/LoginWidget";
import {useState} from "react";

export function LoginPage() {

    const [errormessage, setErrorMessage] = useState('');

    const handleError = (message: string) => {
        setErrorMessage(message);
    };

    return (
        <Space align='center' direction='vertical' size='large'>
            {errormessage && <Alert message='Ошибка!' description={errormessage} type="error" showIcon/>}
            <LoginWidget onError={handleError}/>
        </Space>
    )
}
