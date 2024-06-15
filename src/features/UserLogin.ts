import {serverConfig} from "@/app/config";
import axios from "axios";


export const UserLogin = async (formData) => {
    try {
        const response = await axios.post(serverConfig.urlRemoteServer + '/auth/login', formData);
        if (response.status === 200) {
            console.log(response);
            return response.data.access_token;
        } else {
            throw new Error('Ошибка входа');
        }
    } catch (error) {
        // Обработка ошибок
        console.error('Ошибка при входе:', error);
        return {error: error.message};
    }
}