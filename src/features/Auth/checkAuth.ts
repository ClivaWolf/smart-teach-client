import { GetServerSidePropsContext } from "next";
import nookies from "nookies";
import axios from "@/core/axios";
import * as Api from "@/api";

// TODO: вот так выглядит фича в максимальной выжимке
//фича может быть и компонентом, типа компонент кнопки лайка/дизлайка

export const checkAuth = async (ctx: GetServerSidePropsContext) => {
    const { _token } = nookies.get(ctx);

    axios.defaults.headers.common.Authorization = `Bearer ${_token}`;

    try {
        await Api.auth.getMe();
        return {
            props: {}
        }
    } catch (e) {
        // console.warn('checkAuth error', e);
        return {
            redirect: {
                destination: 'auth',
                permanent: false
            }
        }
    }
}