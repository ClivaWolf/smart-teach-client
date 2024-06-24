import axiosInstance from "@/shared/api/axiosInstance"
import { UserDto } from "./dto/auth.dto"

export const getUsers = async (page: number, limit: number): Promise<UserDto[]> => {
    if (page < 1) page = 1
    if (limit < 1) limit = 1
    if (limit > 25) limit = 25
    return (await axiosInstance.get("/users"+`?page=${page}&limit=${limit}`)).data
}

// export const getAvatar = async (avatar: string, login: string): Promise<string> => {
//     return (await axiosInstance.get('upload/'+ login+'/' + avatar)).data
// }