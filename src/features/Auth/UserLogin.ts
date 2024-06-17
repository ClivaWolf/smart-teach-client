import {serverConfig} from "@/shared/config/config";
import axios from "axios";


export const UserLogin = async (formData: any) => {
    try {
        const response = await axios.post(serverConfig.urlRemoteServer + '/auth/login', formData);
        if (response.status === 200) {
            console.log("response", response.data);
            localStorage.setItem('token', response.data.access_token);
            return response.data.access_token;
        } else {
            return {error: response.data}
        }
    } catch (error: any) {
        console.error('Ошибка при входе:', error.response.data);
        return {error: error.response.data};
    }
}