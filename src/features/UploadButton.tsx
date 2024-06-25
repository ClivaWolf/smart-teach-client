'use client';
import { Upload, UploadFile, notification } from "antd";

import * as Api from "@/api";
import { useState } from "react";

type IUploadButtonProps = {
    button: React.ReactNode,
    onSuccess?: (result: any) => void // коллбэк при успешной загрузке
}

export const UploadButton: React.FC<IUploadButtonProps> = ({ button, onSuccess }) => {
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    const onUploadSuccess = async (options: any) => {
        try {
            const result = await Api.users.uploadFile(options);
            // console.log(result);
            if (result &&  onSuccess) {
                onSuccess(result); // Вызываем onSuccess с результатом
                //теперь onSuccess возвращает не url, а  объект с данными
            }
            setFileList([]);
        } catch (err) {
            notification.error({
                message: "Ошибка!",
                description: "Не удалось загрузить файл",
                duration: 2,
            });
        }
    };

    return (
        <Upload
            customRequest={onUploadSuccess}
            fileList={fileList}
            onChange={({ fileList }) => setFileList(fileList)}
        >
            {button}
        </Upload>
    );
};
