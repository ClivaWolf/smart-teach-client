import * as Api from "@/api";

export const checkFieldHandler = async (field: string, value: string): Promise<boolean> => {
    return await Api.auth.isFieldAlreadyExist(field, value)
}