import {UserLogin} from "@/features/Auth/UserLogin";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {LoginFormType} from "@/shared/types/AuthFormType";

export const handleFinish = async (values: LoginFormType, router: AppRouterInstance, updateUser: () => void,
                                   setErrorMessage: (message: string) => void) => {
    const response = await UserLogin(values);
    if (response.error) {
        setErrorMessage(response.error.message);
        sessionStorage.setItem('login_error', JSON.stringify(response.error));
        router.replace(`/login?error=${response.error.error}`);
    } else {
        if (values.remember)
            localStorage.setItem('token', response);
        updateUser();
        router.push('/user/' + values.login);
    }
};
