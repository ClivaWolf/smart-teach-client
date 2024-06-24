import axios from '@/core/axios'
import { UserDto } from "./dto/auth.dto"

export const getUsers = async (page: number, limit: number): Promise<UserDto[]> => {
    if (page < 1) page = 1
    if (limit < 1) limit = 1
    if (limit > 25) limit = 25
    return (await axios.get("/users"+`?page=${page}&limit=${limit}`)).data
}