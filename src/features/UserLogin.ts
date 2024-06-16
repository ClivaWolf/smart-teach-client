import {serverConfig} from "@/app/config";
import axios from "axios";


export const UserLogin = async (formData: any) => {
    try {
        const response = await axios.post(serverConfig.urlRemoteServer + '/auth/login', formData);
        if (response.status === 200) {
            return response.data.access_token;
        } else {
            return {error: response.data}
        }
    } catch (error: any) {
        // Обработка ошибок
        console.error('Ошибка при входе:', error.response.data);
        return {error: error.response.data};
    }
}