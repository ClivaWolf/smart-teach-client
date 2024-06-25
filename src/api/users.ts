import axios from '@/core/axios'
import { UserDto } from "./dto/auth.dto"

export const getUsers = async (page: number, limit: number): Promise<UserDto[]> => {
    if (page < 1) page = 1
    if (limit < 1) limit = 1
    if (limit > 25) limit = 25
    return (await axios.get("/users" + `?page=${page}&limit=${limit}`)).data
}

export const uploadFile = async (options: any) => {
    const { onSuccess, onError, file, onProgress } = options;

    const formData = new FormData();
    formData.append("file", file);

    const config = {
        headers: { "Content-Type": "multipart/form-data" },
        onProgress: (event: ProgressEvent) => {
            onProgress({ percent: (event.loaded / event.total) * 100 });
        },
    };

    try {
        const { data } = await axios.post("files", formData, config);

        onSuccess();

        return data;
    } catch (err) {
        onError({ err });
    }
};

export const setAvatar = async (filename: string) => {
    return (await axios.patch("users/update-profile", { avatar: filename }))
}