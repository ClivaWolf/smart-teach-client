import axiosInstance from "@/shared/api/axiosInstance";
import {LoginFormType} from "@/shared/types/AuthFormType";


export const GetUserByLogin = async (login: LoginFormType['login']): Promise<LoginFormType | undefined> => {
    try {
        const response = await axiosInstance.get('/users/login/' + login);
        if (response.status === 200) {
            console.log(response.data)
            return response.data;
        } else {
            console.log("error");
        }
    } catch (error: any) {
        console.error('Ошибка при получении данных о user:', error.response.data);
    }
}