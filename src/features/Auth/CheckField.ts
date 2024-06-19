import axiosInstance from "@/shared/api/axiosInstance";


export const CheckField = async (fieldName: 'login' | 'email', fieldValue: string): Promise<boolean> => {
    try {
        const response = await axiosInstance.get(`/users/check-field?field=${fieldName}&value=${fieldValue}`);
        console.log("Код ответа:", response.status);
        return response.status === 200;
    } catch (error: any) {
        console.error('Ошибка при проверке поля:', error.response.data.statusCode);
        return false;
    }
}