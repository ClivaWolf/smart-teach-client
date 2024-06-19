import axiosInstance from "@/shared/api/axiosInstance";


export const UserLogin = async (formData: any) => {
    try {
        const response = await axiosInstance.post('/auth/login', formData);
        if (response.status === 200) {
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