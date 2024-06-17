import {Avatar, Button, Dropdown, MenuProps, Space, Typography} from "antd";
import {UserAddOutlined, UserOutlined} from "@ant-design/icons";
import {useAuth} from "@/shared/contexts/AuthContext";
import LoginPopover from "@/widgets/Auth/Login/LoginPopover";
import Link from "next/link";


export default function AvatarWidget() {

    const {Text} = Typography;
    const {user, logout} = useAuth();

    const items: MenuProps['items'] = [
        {
            label: 'Личный кабинет',
            key: '0',
        },
        {
            type: 'divider',
        },
        {
            label: <Button type='link' danger={true} onClick={logout}>Выход</Button>,
            key: '3',
        },
    ];

    if (user) {
        return (
            <Dropdown menu={{items}} trigger={['click']}>
                <Space>
                    <Text style={{color: '#fff'}}>{user.login}</Text>
                    <Avatar style={{backgroundColor: '#87d068'}} src={user.avatar ?? ''}
                            icon={user.avatar ? "" : <UserOutlined/>}/>
                </Space>
            </Dropdown>
        );
    } else {
        return (
            <Space>
                <LoginPopover/>
                <Link href={'/register'}>
                    <Button type='primary' icon={<UserAddOutlined/>}>Регистрация</Button>
                </Link>
            </Space>
        )
    }
}