import { UserLogin } from "@/features/UserLogin";

export const handleFinish = async (values: any, router: any) => {
    const response = await UserLogin(values);
    if (response.error) {
        sessionStorage.setItem('login_error', JSON.stringify(response.error));
        router.push(`/login?error=${response.error.statusCode}`);
    } else {
        localStorage.setItem('token', response.token);
        router.push('/user/' + values.login);
    }
};
