import axios from "axios";
import {serverConfig} from "@/app/config";


export const UserRegistration = async (formData) => {
    try {
        // console.log(formData);
        const response = await axios.post(serverConfig.urlRemoteServer + '/auth/register', formData);
        console.log(response)
        if (response.status === 201) {
            // Предполагаем, что успешный ответ содержит токен
            console.log()
            return response.data.token;
        } else {
            throw new Error('Ошибка регистрации');
        }
    } catch (error) {
        // Обработка ошибок
        console.error('Ошибка при регистрации:', error);
        return {error: error.message};
    }
}