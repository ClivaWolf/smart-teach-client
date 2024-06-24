import axiosInstance from "@/shared/api/axiosInstance";
import {FormType} from "@/shared/types/UserType";


export const GetUserByLogin = async (login: FormType['login']): Promise<FormType | undefined> => {
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