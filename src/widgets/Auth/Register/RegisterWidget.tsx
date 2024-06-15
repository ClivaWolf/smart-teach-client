import {Form, Input, Button, Col, Row, Checkbox} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {UserRegistration} from "@/features/UserRegistration";

export default function RegisterWidget() {

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

    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 10,
            },
            sm: {
                span: 24,
                offset: 10,
            },
        },
    };

    return (
        <Form
            {...formItemLayout}
            name="normal_register"
            className="register-form"
            onFinish={(values) => UserRegistration(values)}
            initialValues={{remember: true}}
            style={{maxWidth: 800}}
            scrollToFirstError
        >
            <Form.Item
                name="login"
                label='Логин'
                tooltip="По этому логину потом можно будет входить в систему"
                rules={[{required: true, message: 'Пожалуйста, введите свой логин!'}]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon"/>}/>
            </Form.Item>

            <Form.Item
                name="email"
                label='Эл. почта'
                rules={[{required: true, message: 'Пожалуйста, введите свой почту или логин!'}]}
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

            <Form.Item label="Captcha" extra="Мы должны убедиться, что вы человек.">
                <Row gutter={8}>
                    <Col span={12}>
                        <Form.Item
                            name="captcha"
                            noStyle
                            rules={[{required: true, message: 'Пожалуйста, введите полученную капчу!'}]}
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Button>Получить капчу</Button>
                    </Col>
                </Row>
            </Form.Item>

            <Form.Item
                {...tailFormItemLayout}
                name="agreement"
                valuePropName="checked"
                rules={[
                    {
                        validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject(new Error('Вы должны принять соглашение')),
                    },
                ]}
            >
                <Checkbox>
                    Я прочитал <a href="">соглашение</a>
                </Checkbox>
            </Form.Item>

            <Form.Item
                {...tailFormItemLayout}
            >
                <Button type="primary" htmlType="submit" className="register-form-button">
                    Зарегистрироваться
                </Button>
            </Form.Item>
        </Form>
    )
};