import {UserRegistration} from "@/features/UserRegistration";
import {NotificationContextProps} from "@/features/NotificationContext";


export const handleFinish = async (values: any, router: any, openNotificationWithIcon: NotificationContextProps['openNotificationWithIcon']) => {
    const response = await UserRegistration(values);
    if (response.error) {
        sessionStorage.setItem('register_error', JSON.stringify(response.error));
        router.push(`/register?error=${response.error.statusCode}`);
    } else {
        localStorage.setItem('token', response.token);
        openNotificationWithIcon('success', {
            message: 'Регистрация прошла успешно!',
            description: 'Теперь вы можете войти',
            placement: 'bottomRight'
        });
        router.push('/user/' + values.login);
    }
};

