//its server side!!
import { GetServerSidePropsContext, NextPage } from "next";
import { checkAuth } from "@/features/Auth/checkAuth";
import * as Api from "@/api";
import { UserDto } from "@/api/dto/auth.dto";
import { Header } from "@/components/Header";

interface DashboardPageProps {
    userData: UserDto;
}

const DashboardPage: NextPage<DashboardPageProps> = ({ userData }) => {
    const logout = async () => {
        await Api.auth.logout();
        location.href = '/dirt-pages/auth';
    }

    return (
        <>
            <Header avatar={userData.aboutUser.avatar}></Header>
            <h1>Private</h1>
            {JSON.stringify(userData)}
            <button onClick={logout}>Logout</button>
        </>
    )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const authProps = await checkAuth(ctx);

    if ('redirect' in authProps) {
        return authProps;
    }

    // without id's and password
    let me = await Api.auth.getMe();
    me.id = '';
    me.password = '';
    me.aboutUser.id = '';
    me.roles.forEach(role => {
        role.id = '';
    });

    console.log(me);

    // Возвращаем данные через props
    return {
        props: { userData: me } // Объект props будет передан в компонент DashboardPage
    };
};

export default DashboardPage