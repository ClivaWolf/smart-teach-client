'use client'
import HomePage from "@/pages/HomePage";
import UserCard from "../components/userCards/UserCard";
import UserCardMini from "../components/userCards/UserCardMini";
import UsersList from "@/widgets/dirtComponents/userList/UserList";
import { Space, Typography } from "antd";

export default function Home() {

    const getRandomAvatar = () => {
        const links = [
            "https://robohash.org/5WZ.png?set=set1",
            // "https://robohash.org/6WZ.png?set=set1",
            "https://robohash.org/DG8.png?set=set1",
            "https://robohash.org/0SR.png?set=set1",
            "https://robohash.org/KLO.png?set=set1"
        ]

        return links[Math.round(Math.random() * (links.length - 1))]
    }
    return <>
        <Space direction="vertical" size="large">
            <HomePage />
            <Typography.Title level={3}>Грязные компоненты:</Typography.Title>
            <Typography.Text>Почистить и использовать в будущем:</Typography.Text>

            <Typography.Text>Выровнять по центру аватаркуи и надписи под ней</Typography.Text>
            <Space>
                <UserCard
                    username={"UserName" + Math.round(Math.random() * 1000)}
                    email={"email" + Math.round(Math.random() * 1000) + "@email.com"}
                    avatar={{ size: 64, src: getRandomAvatar() }}
                />
                <UserCard
                    username={"UserName" + Math.round(Math.random() * 1000)}
                    email={"email" + Math.round(Math.random() * 1000) + "@email.com"}
                    avatar={{ size: 64, src: getRandomAvatar() }}
                />
                <UserCard
                    username={"UserName" + Math.round(Math.random() * 1000)}
                    email={"email" + Math.round(Math.random() * 1000) + "@email.com"}
                    avatar={{ size: 64, src: getRandomAvatar() }}
                />
            </Space>
            <Space>
                <UserCardMini
                    username={"UserName" + Math.round(Math.random() * 1000)}
                    email={"email" + Math.round(Math.random() * 1000) + "@email.com"}
                    avatar={{ size: 64, src: getRandomAvatar() }}
                />
                <UserCardMini
                    username={"UserName" + Math.round(Math.random() * 1000)}
                    email={"email" + Math.round(Math.random() * 1000) + "@email.com"}
                    avatar={{ size: 64, src: getRandomAvatar() }}
                />
                <UserCardMini
                    username={"UserName" + Math.round(Math.random() * 1000)}
                    email={"email" + Math.round(Math.random() * 1000) + "@email.com"}
                    avatar={{ size: 64, src: getRandomAvatar() }}
                /> 
            </Space>
            <UsersList />
        </Space>
    </>
}