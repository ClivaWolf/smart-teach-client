import axiosInstance from "@/shared/api/axiosInstance";
import {AboutUserType} from "@/shared/types/UserType";

export const GetAboutUser = async (token: string): Promise<AboutUserType | undefined> => {
    if (token) {
        try {
            const response = await axiosInstance.get('/users/profile', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error('Failed to fetch about user', error);
        }
    }
    return undefined;
}
