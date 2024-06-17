import React from 'react';
import {NotificationProvider} from '@/shared/contexts/NotificationContext';
import {AuthProvider} from '@/shared/contexts/AuthContext';
import {AntdRegistry} from "@ant-design/nextjs-registry";
import {ConfigProvider} from 'antd';


export const AppProvider: React.FC<{ children: React.ReactNode }> = ({children}) => (
    <ConfigProvider>
        <AntdRegistry>
            <NotificationProvider>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </NotificationProvider>
        </AntdRegistry>
    </ConfigProvider>
);
