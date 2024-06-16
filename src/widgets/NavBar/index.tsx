'use client'
import {Button, Layout, Menu, Space} from 'antd';
import LoginPopover from "@/widgets/Auth/Login/LoginPopover";
import {UserAddOutlined} from "@ant-design/icons";
import Link from "next/link";

import styles from './navBar.module.css'

const {Header} = Layout;


export default function NavBar() {
    return (
        <Header className={styles.header}>
            <Link href={'/'}>
                <div className={styles.logo} >SmartTeach</div>
            </Link>
            <Space>
                <LoginPopover/>
                <Link href={'/register'}>
                    <Button type='primary' icon={<UserAddOutlined/>}>Регистрация</Button>
                </Link>
            </Space>
        </Header>
    )
}