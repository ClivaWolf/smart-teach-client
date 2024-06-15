'use client';
import React from 'react';
import {AntdRegistry} from '@ant-design/nextjs-registry';
import {Inter} from "next/font/google";
import "./globals.css";

import {Breadcrumb, Layout, Menu, theme} from 'antd';
import NavBar from "@/widgets/NavBar";

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
                <Content style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 64}}>
                    {children}
                </Content>
            </Layout>
        </AntdRegistry>
        </body>
        </html>
    );
}
