'use client';
import React from "react";
import {Form} from "antd";
import {RegisterFields} from "@/widgets/Auth/Register/components/RegisterFields";
import {RegisterActions} from "@/widgets/Auth/Register/components/RegisterActions";
import {handleFinish} from "@/widgets/Auth/Register/handlers/registerHandler";
import {useRouter} from "next/navigation";
import {useNotification} from "@/features/NotificationContext";


export default function RegisterWidget() {
    const router = useRouter();
    const {openNotificationWithIcon} = useNotification();

    const formItemLayout = {
        labelCol: {
            xs: {span: 24},
            sm: {span: 10},
        },
        wrapperCol: {
            xs: {span: 24},
            sm: {span: 16},
        },
    };

    return (
        <>
            <Form
                {...formItemLayout}
                name="normal_register"
                className="register-form"
                onFinish={(values) => handleFinish(values, router, openNotificationWithIcon)}
                initialValues={{remember: true}}
                style={{maxWidth: 800}}
                scrollToFirstError
            >
                <RegisterFields/>
                <RegisterActions/>
            </Form>
        </>
    );
}
