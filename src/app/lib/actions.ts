'use server'

import * as Api from '@/api'
import { LoginFormDto } from '@/api/dto/auth.dto'
import { cookies } from 'next/headers'
import { Session, getServerSession } from 'next-auth'
import { authConfig } from '@/configs/auth'

export async function loginController(_currentState: unknown, formData: FormData) {
    const values = { login: formData.get('login'), password: formData.get('password') } as LoginFormDto
    const res = await Api.users.login(values)//дёргаем апи
    // console.log(process.env)
    if (res.access_token) {
        cookies().set('_token', res.access_token, { path: '/' })
        return res
    }
    else {
        throw { message: res.message }
    }
}


export async function logInfoBySessionController(session:Session){
    'use server'
    const sessionServer = await getServerSession(authConfig)
    // console.log(session)
    console.log(sessionServer)
}