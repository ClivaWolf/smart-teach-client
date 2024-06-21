'use client';

import React, {createContext, useContext} from "react";
import {notification} from "antd";


type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface NotificationContent {
    message: string;
    description: string;
    placement: "top" | "topLeft" | "topRight" | "bottom" | "bottomLeft" | "bottomRight" | undefined;
}

export interface NotificationContextProps {
    openNotificationWithIcon: (type: NotificationType, content: NotificationContent) => void;
}

export const NotificationContext = createContext<NotificationContextProps | null>(null);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [api, contextHolder] = notification.useNotification();

    const openNotificationWithIcon = (type: NotificationType, content: NotificationContent) => {
        api[type](content);
    };

    return (
        <NotificationContext.Provider value={{openNotificationWithIcon}}>
            {contextHolder}
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotification = () => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotification must be used within a NotificationProvider');
    }
    return context;
};
