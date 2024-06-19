import {Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {CheckField} from "@/features/Auth/CheckField";

export const RegisterFields = () => (
    <>
        <Form.Item
            name="login"
            label='Логин'
            tooltip="По этому логину потом можно будет входить в систему"
            hasFeedback
            validateDebounce={400}
            validateFirst
            rules={[
                {required: true, message: 'Пожалуйста, введите свой логин!'},
                {
                    validator: async (_: any, value: string) => {
                        if (value && !await CheckField('login', value)) {
                            return Promise.reject(new Error('Пользователь с таким логином уже существует!'));
                        }
                    }
                }
            ]}
        >
            <Input prefix={<UserOutlined className="site-form-item-icon"/>}/>
        </Form.Item>

        <Form.Item
            name="email"
            label='Эл. почта'
            hasFeedback
            validateDebounce={400}
            validateFirst
            rules={[
                {required: true, type: 'email', message: 'Некорректный формат электронной почты!'},
                {
                    validator: async (_: any, value: string) => {
                        if (value && !await CheckField('email', value)) {
                            return Promise.reject(new Error('Пользователь с такой почтой уже существует!'));
                        }
                    }
                }
            ]}
        >
            <Input prefix={<UserOutlined className="site-form-item-icon"/>}/>
        </Form.Item>

        <Form.Item
            name="password"
            label="Пароль"
            rules={[{required: true, message: 'Пожалуйста, введите свой пароль!'}]}
        >
            <Input.Password
                prefix={<LockOutlined className="site-form-item-icon"/>}
                type="password"
            />
        </Form.Item>

        <Form.Item
            name="confirm"
            label='Подтвердите пароль'
            dependencies={['password']}
            hasFeedback
            rules={[
                {
                    required: true,
                    message: 'Пожалуйста, подтвердите свой пароль!',
                },
                ({getFieldValue}) => ({
                    validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject(new Error('Пароли не совпадают!'));
                    },
                }),
            ]}
        >
            <Input.Password
                prefix={<LockOutlined className="site-form-item-icon"/>}
                type="password"
            />
        </Form.Item>
    </>
)