import { Avatar, Layout } from "antd"

interface HeaderProps {
    avatar: string
}

export const Header: React.FC<HeaderProps> = ({avatar}) => {
    return (
        <Layout.Header>

        <Avatar
            src={avatar}
        />

        </Layout.Header>
    )
}

