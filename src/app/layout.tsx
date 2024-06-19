'use client';
import React from 'react';
import "@/app/styles/globals.css";

import {Layout} from 'antd';
import NavBar from "@/widgets/NavBar";

import styles from './layout.module.css'
import {AppProvider} from "@/app/providers/AppProvider";

const {Header, Content, Footer} = Layout;


export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="ru">
        <body>
        <AppProvider>
            <Layout className={styles.layout}>
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
        </AppProvider>
        </body>
        </html>
    );
}
