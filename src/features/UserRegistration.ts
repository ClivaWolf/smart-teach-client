import axios from "axios";
import {serverConfig} from "@/app/config";


export const UserRegistration = async (formData: any) => {
    try {
        const response = await axios.post(serverConfig.urlRemoteServer + '/auth/register', formData);
        if (response.status === 201) {
            // Предполагаем, что успешный ответ содержит токен
            return response.data.access_token;
        } else {
            throw new Error('Ошибка регистрации');
        }
    } catch (error: any) {
        // Обработка ошибок
        console.error('Ошибка при регистрации:', error);
        return {error: error.message};
    }
}