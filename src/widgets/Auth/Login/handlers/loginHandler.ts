import {UserLogin} from "@/features/Auth/UserLogin";

export const handleFinish = async (values: any, router: any, updateUser: () => void, onError: (message: string) => void) => {
    const response = await UserLogin(values);
    if (response.error) {
        onError(response.error.message);
        router.push(`/login`);
    } else {
        localStorage.setItem('token', response);
        updateUser();
        router.push('/user/' + values.login);
    }
};
