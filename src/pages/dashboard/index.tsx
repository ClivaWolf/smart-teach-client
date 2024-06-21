import { GetServerSidePropsContext, NextPage } from "next";
import { checkAuth } from "@/features/Auth/checkAuth";

const DashboardPage: NextPage = () => {
    return (
        <h1>Private</h1>
    )   
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const authProps = await checkAuth(ctx);

    if ('redirect' in authProps) {
        return authProps
    }

    return {
        props: {}
    }
    
}

export default DashboardPage