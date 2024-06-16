'use client';
import React from 'react';
import {AntdRegistry} from '@ant-design/nextjs-registry';
import {Inter} from "next/font/google";
import "./globals.css";

import {Breadcrumb, Layout, Menu, theme} from 'antd';
import NavBar from "@/widgets/NavBar";

import styles from './layout.module.css'

const {Header, Content, Footer} = Layout;

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
        <body>
        <AntdRegistry>
            <Layout>
                <NavBar/>
                <Content className={styles.layoutContent}>
                    {children}
                </Content>
            </Layout>
        </AntdRegistry>
        </body>
        </html>
    );
}
