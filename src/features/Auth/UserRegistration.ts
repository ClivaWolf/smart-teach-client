import axiosInstance from "@/shared/api/axiosInstance";


export const UserRegistration = async (formData: any) => {
    try {
        const response = await axiosInstance.post('/auth/register', formData);
        if (response.status === 201) {
            localStorage.setItem('token', response.data.access_token);
            return response.data.access_token;
        } else {
            return {error: response.data};
        }
    } catch (error: any) {
        console.error('Ошибка при регистрации:', error);
        return {error: error.response.data};
    }
}