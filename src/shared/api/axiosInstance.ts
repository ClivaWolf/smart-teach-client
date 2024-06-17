import axios from 'axios';
import {serverConfig} from '@/shared/config/config';


const axiosInstance = axios.create({
    baseURL: serverConfig.urlRemoteServer,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
