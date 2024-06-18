'use client';
import { Avatar, AvatarProps, Card, Divider, Space } from "antd";
import styles from './usercard.module.css'

function UserCardMini({ username, avatar, email }: { username: string, avatar: AvatarProps, email: string }) {
    return (
        <Card className={styles.userCard}>
            <Space direction="horizontal" size="small">
            <Avatar {...avatar} size={64} />
                <Divider type="horizontal" />
                <Space direction="vertical" size="small">
                    <span className={styles.userName}>{username}</span>
                    <span>{email}</span>
                    <span>Заходил вчера</span>
                </Space>
            </Space>
        </Card>
    );
}

export default UserCardMini;