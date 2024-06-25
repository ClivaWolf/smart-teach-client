//its server side!!
import { GetServerSidePropsContext, NextPage } from "next";
import { checkAuth } from "@/features/Auth/checkAuth"
import * as Api from "@/api";
import { UserDto } from "@/api/dto/auth.dto";
import { Header } from "@/entities/Header";
import axios from "@/core/axios";
import { useRouter } from "next/router";
import { Avatar, Button, Collapse, Descriptions, List, Space, notification } from "antd";
import AvatarUpload from "@/features/AvatarUpload";
import { UploadButton } from "@/features/UploadButton";
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
        <><Header avatar={avatarPath}></Header><Space direction="vertical">
            <h1>Private</h1>
            <h3>For testing:</h3>

            {/* Отображение данных пользователя с использованием Collapse */}
            <Collapse>
                <Collapse.Panel header="User Data" key="1">
                    <Descriptions title="" bordered column={1}>
                        {Object.entries(userData).map(([key, value]) => (
                            <Descriptions.Item label={key} key={key}>
                                {typeof value === 'object' ? JSON.stringify(value) : value}
                            </Descriptions.Item>
                        ))}
                    </Descriptions>
                </Collapse.Panel>
            </Collapse>

            {/* кнопка загрузки фалйа на сервак */}
            <UploadButton
                button={<Button type="primary" icon={<CloudUploadOutlined />} size="large">
                    Загрузить файл
                </Button>} />
            {/* аватарка с возможность загрузки */}
            <AvatarUpload currentUrl={avatarPath} onUpload={() => nav.reload()} />
            {/* reload - это не хорошо */}
            <Button onClick={logout}>Logout</Button>
            <FilesList userFiles={userData.files} /> 
            {/* ^^ Not Work */}
        </Space></>
    )
}

const FilesList = ({ userFiles }: { userFiles: any[] }) => {
    return (
      <List
        grid={{ gutter: 16, column: 4 }}
        itemLayout="horizontal"
        dataSource={userFiles}
        renderItem={file => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={file.image} />}
              title={<a href="#">{file.id}</a>}
              description={file.description}
            />
          </List.Item>
        )}
      />
    );
  };

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

        if (Array.isArray(me.files)) {
            me.files.forEach(file => {
                file.id = '';
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