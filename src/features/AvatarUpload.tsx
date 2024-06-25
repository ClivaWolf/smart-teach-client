'use client'
import { Avatar, Button, Flex, message, Upload } from 'antd';
import { useEffect } from 'react';
import { useState } from 'react';
import * as Api from '@/api';
import { UploadButton } from './UploadButton';
import axios from '@/core/axios';
import { UploadOutlined } from '@ant-design/icons';

interface IAvatarUploadProps {
    currentUrl?: string
    onUpload?: (url: string) => void
}

const AvatarUpload = ({ currentUrl, onUpload }: IAvatarUploadProps) => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>(currentUrl || '');

    const handleImageUrl = (result: any) => {
        // console.log(url);
        Api.users.setAvatar(result.filename);
        setImageUrl(axios.defaults.baseURL + '/' + result.path);
        onUpload && onUpload(axios.defaults.baseURL + '/' + result.path);
        // console.log(axios.defaults.baseURL + result.path)
        setLoading(false);
    };

    return (
        <>
            <Avatar src={imageUrl} />
            <UploadButton
                button={
                    <Button loading={loading} onClick={() => setLoading(true)} type="dashed">
                        <UploadOutlined />
                    </Button>
                }
                onSuccess={(result) => handleImageUrl(result)}
            />
        </>
    );
};



export default AvatarUpload;