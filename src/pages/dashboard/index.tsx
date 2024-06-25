//its server side!!
import { GetServerSidePropsContext, NextPage } from "next";
import { checkAuth } from "@/features/Auth/checkAuth"
import * as Api from "@/api";
import { UserDto } from "@/api/dto/auth.dto";
import { Header } from "@/entities/Header";
import axios from "@/core/axios";
import { useRouter } from "next/router";
import { Avatar, Button, Space, notification } from "antd";
import AvatarUpload from "@/features/AvatarUpload";
import { UploadButton } from "@/features/UploadButton";
// import AvatarUploader from "@/features/AvatarUploader";
import { CloudUploadOutlined } from "@ant-design/icons";

interface DashboardPageProps {
    userData: UserDto;
}

const DashboardPage: NextPage<DashboardPageProps> = ({ userData }) => {
    const nav = useRouter()
    const logout = async () => {
        await Api.auth.logout();
        notification.success({
            message: 'Успешно!',
            description: 'Сессия завершена',
            duration: 2
        })
        nav.push('/auth')
    }

    const avatarPath = userData && userData.aboutUser ? axios.defaults.baseURL + '/uploads/' + userData.login + '/' + userData.aboutUser.avatar : '';

    return (
        <Space direction="vertical">
            <Header avatar={avatarPath}></Header>
            <h1>Private</h1>
            <h3>For testing:</h3>
            {JSON.stringify(userData)}

            {/* <AvatarUploader currentUrl={avatarPath}/> */}
            <UploadButton
                button={
                    <Button type="primary" icon={<CloudUploadOutlined />} size="large">
                        Загрузить файл
                    </Button>
                }
            />
            <AvatarUpload currentUrl={avatarPath} onUpload={() => nav.reload()} />
                {/* reload - это не хорошо */}
            <Button onClick={logout}>Logout</Button>
        </Space>
    )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const authProps = await checkAuth(ctx);

    if ('redirect' in authProps) {
        return authProps;
    }

    // without id's and password
    let me = await Api.auth.getMe();

    if (me) {
        me.id = '';
        me.password = '';

        if (me.aboutUser) {
            me.aboutUser.id = '';
        }

        if (Array.isArray(me.roles)) {
            me.roles.forEach(role => {
                role.id = '';
            });
        }
    }

    console.log(me);

    // Возвращаем данные через props
    return {
        props: { userData: me } // Объект props будет передан в компонент DashboardPage
    };
};

export default DashboardPage