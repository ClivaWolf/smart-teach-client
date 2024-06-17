'use client';
import React from 'react';
import {AntdRegistry} from '@ant-design/nextjs-registry';
import "./globals.css";

import {ConfigProvider, Layout} from 'antd';
import NavBar from "@/widgets/NavBar";

import styles from './layout.module.css'
import {NotificationProvider} from "@/features/NotificationContext";

const {Header, Content, Footer} = Layout;


export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="ru">
        <body>
        <ConfigProvider>
            <NotificationProvider>
                <AntdRegistry>
                    <Layout>
                        <Header>
                            <NavBar/>
                        </Header>
                        <Content className={styles.layoutContent}>
                            {children}
                        </Content>
                        <Footer className={styles.layoutFooter}>
                            © 2024 SmartTeach
                        </Footer>
                    </Layout>
                </AntdRegistry>
            </NotificationProvider>
        </ConfigProvider>
        </body>
        </html>
    );
}
