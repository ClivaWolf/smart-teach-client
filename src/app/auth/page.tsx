'use client'

import { loginController } from '@/app/lib/actions'
import { Button, Form, Input } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import InputPassword from 'antd/es/input/Password'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useFormState, useFormStatus } from 'react-dom'

export default function Page() {
    const nav = useRouter()
    const [form] = Form.useForm();

    const [errorMessage, setErrorMessage] = useState('');


    const onFinish = async (values: { login: string; password: string }) => {
        const formData = new FormData();
        formData.append('login', values.login);
        formData.append('password', values.password);

        await loginController(errorMessage, formData)//эта строка на кой-то чёрт выводит ошибку 500 в консоль, хотя ошибки вроде обработаны
            .then(() => {
                setErrorMessage('');
                // form.resetFields();
                // nav.push('/dashboard');
            }).catch((error) => {
                if (error.message) {
                    setErrorMessage(error.message);
                }
            });

    };

    return (
        <Form onFinish={onFinish} form={form} initialValues={{ login: '', password: '' }}>
            <FormItem
                name="login"
                label="Login"
                rules={[{ required: true }]}
            ><Input />
            </FormItem>
            <FormItem
                name="password"
                label="Password"
                rules={[{ required: true }]}
            ><InputPassword />
            </FormItem>
            <div>{errorMessage !== '' && <p style={{ color: 'red' }}>{errorMessage}</p>}</div>
            <LoginButton />
        </Form>
    )
}

function LoginButton() {
    const { pending } = useFormStatus()

    const handleClick = (event: { preventDefault: () => void }) => {
        if (pending) {
            event.preventDefault()
        }
    }

    return (
        <Button loading={pending} htmlType="submit" onClick={handleClick}>
            Login
        </Button>
    )
}