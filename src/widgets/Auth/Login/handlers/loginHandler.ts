import {UserLogin} from "@/features/Auth/UserLogin";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

export const handleFinish = async (values: any, router: AppRouterInstance, updateUser: () => void, setErrorMessage: (message: string) => void) => {
    const response = await UserLogin(values);
    if (response.error) {
        setErrorMessage(response.error.message);
        router.replace(`/login?error=${response.error.error}`);
    } else {
        localStorage.setItem('token', response);
        updateUser();
        router.push('/user/' + values.login);
    }
};
