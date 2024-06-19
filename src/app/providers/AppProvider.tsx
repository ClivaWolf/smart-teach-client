import React from 'react';
import {NotificationProvider} from '@/shared/contexts/NotificationContext';
import {AuthProvider} from '@/shared/contexts/AuthContext';
import {AntdRegistry} from "@ant-design/nextjs-registry";
import {ConfigProvider} from 'antd';
import {ErrorProvider} from "@/shared/contexts/ErrorContext";


export const AppProvider: React.FC<{ children: React.ReactNode }> = ({children}) => (
    <ConfigProvider>
        <AntdRegistry>
            <NotificationProvider>
                <ErrorProvider>
                    <AuthProvider>
                        {children}
                    </AuthProvider>
                </ErrorProvider>
            </NotificationProvider>
        </AntdRegistry>
    </ConfigProvider>
);
