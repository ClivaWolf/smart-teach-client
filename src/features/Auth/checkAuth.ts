import { GetServerSidePropsContext } from "next";
import nookies from "nookies";
import axiosInstance from "@/shared/api/axiosInstance";
import * as Api from "@/api";

export const checkAuth = async (ctx: GetServerSidePropsContext) => {
    const { _token } = nookies.get(ctx);

    axiosInstance.defaults.headers.common.Authorization = `Bearer ${_token}`;

    try {
        await Api.auth.getMe();
        return {
            props: {}
        }
    } catch (e) {
        // console.warn('checkAuth error', e);
        return {
            redirect: {
                destination: 'dirt-pages/auth',
                permanent: false
            }
        }
    }
}