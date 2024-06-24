import { Avatar, Layout } from "antd"

interface HeaderProps {
    avatar?: string
}
//TODO: переделать
//хеадер сейчас энтити, по хорошему - должен быть виджетом, состоящим из энтитей
// лого, навигация аватарка/компонент авторизации

export const Header: React.FC<HeaderProps> = ({avatar}) => {
    return (
        <Layout.Header>

        {avatar&&<Avatar
            src={avatar}
        />}
        {!avatar&&<p>not found</p>}
        

        </Layout.Header>
    )
}

