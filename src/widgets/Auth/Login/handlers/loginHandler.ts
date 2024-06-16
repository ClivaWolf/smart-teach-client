import { UserLogin } from "@/features/UserLogin";

export const handleFinish = async (values: any, router: any) => {
    const response = await UserLogin(values);
    if (response.error) {
        router.push(`/login?error=${response.message}`);
    } else {
        localStorage.setItem('token', response.token);
        router.push('/user/' + values.login);
    }
};
