import axiosInstance from "@/shared/api/axiosInstance";
import {useAuth} from "@/shared/contexts/AuthContext";
import {AboutUserType} from "@/shared/types/UserType";

export const GetAboutUser = async (): Promise<AboutUserType | undefined> => {
    const {token} = useAuth();
    if (token) {
        try {
            const response = await axiosInstance.get('/users/profile', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            console.error('Failed to fetch user', error);
        }
    }
}