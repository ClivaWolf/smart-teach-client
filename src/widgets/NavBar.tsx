'use client'
import {Button, Layout, Menu, Space} from 'antd';
import LoginPopover from "@/widgets/Auth/Login/LoginPopover";
import {UserAddOutlined} from "@ant-design/icons";
import Link from "next/link";

const {Header} = Layout;


export default function NavBar() {
    return (
        <Header style={{display: 'flex', justifyContent: 'space-between'}}>
            <Link href={'/'}>
                <div className="logo" style={{fontSize: 24, fontWeight: 'bold', color: '#fff'}}>SmartTeach</div>
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