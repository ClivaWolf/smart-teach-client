import {Avatar, Button, Dropdown, MenuProps, Space, Typography} from "antd";
import {UserAddOutlined, UserOutlined} from "@ant-design/icons";
// import {useAuth} from "@/shared/contexts/AuthContext";
// import LoginPopover from "@/widgets/Auth/Login/LoginPopover";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


export default async function AvatarWidget() {

    const session = await getServerSession(authOptions)

    const user = session?.user

    const {Text} = Typography;

    const blyad = () =>{
        alert("нужно чистить куки")
    }

    const items: MenuProps['items'] = [
        {
            label: <Link href={'/user/' + user?.login ?? ''}><Button type='link'>Профиль</Button></Link>,
            key: '0',
        },
        {
            label: <Link href={'/user/' + user?.login ?? '/settings'}><Button type='link'>Настройки</Button></Link>,
            key: '1',
        },
        {
            type: 'divider',
        },
        {
            label: <Button type='link' danger={true} onClick={blyad}>Выход</Button>,
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
                {/* <LoginPopover/> */}
                <Link href={'/register'}>
                    <Button type='primary' icon={<UserAddOutlined/>}>Регистрация</Button>
                </Link>
            </Space>
        )
    }
}