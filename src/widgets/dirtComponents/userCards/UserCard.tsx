'use client';
import { Avatar, AvatarProps, Card, Divider, Space } from "antd";
import styles from './usercard.module.css'

function UserCard({ username, avatar, email }: { username: string, avatar: AvatarProps, email: string }) {

    return (
        <Card className={styles.userCard}>
            <Space direction="vertical" size="small">
                <Avatar {...avatar} size={96} />
                //
                <span className={styles.userName}>{username}</span>
                <span>{email}</span>
                <span>Заходил вчера</span>
                <Divider type="horizontal" />
                <Space direction="horizontal">
                    <Space direction="vertical" size="small">
                        <span>Посты</span>
                        <span>1234</span>
                    </Space>
                    <Divider type="vertical" style={{ margin: 0 }} />
                    <Space direction="vertical" size="small">
                        <span>Подписчики</span>
                        <span>123</span>
                    </Space>
                    <Divider type="vertical" style={{ margin: 0 }} />
                    <Space direction="vertical" size="small">
                        <span>Репутация</span>
                        <span>1234</span>
                    </Space>
                </Space>
            </Space>
        </Card>
    );
}

export default UserCard;