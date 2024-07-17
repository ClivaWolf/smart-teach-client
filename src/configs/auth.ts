import type { AuthOptions, User } from 'next-auth'
import GoggleProvider from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'
// import JWT

import * as Api from '@/api'

export const authConfig: AuthOptions = {
    providers: [
        // GoggleProvider({
        //   clientId: process.env.
        //   clientSecret: process.env.GOOGLE_SECRET!,
        // }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
            profile(profile) {
                // console.log(profile)
                return {
                    id: profile.id,
                    // sub: profile.sub,
                    name: profile.name || profile.login,
                    email: profile.email,
                    image: profile.avatar_url
                }
            }
        }),
        Credentials({
            credentials: {
                login: { label: 'login', type: 'login', required: true },
                password: { label: 'password', type: 'password', required: true },
            },
            async authorize(credentials) {
                if (!credentials?.login || !credentials.password) return null;

                const currentUser = await Api.users.login({ login: credentials.login, password: credentials.password })

                if (currentUser && currentUser.password === credentials.password) {
                    const { password, ...userWithoutPass } = currentUser;

                    return userWithoutPass as User;
                }

                return null
            }
        })
    ],
    // callbacks: {
    //     jwt: async ({ token, user, account, profile }) => {
    //         if (account?.provider === 'github') {
    //             token.id = profile?.sub
    //         }
    //     }
    // }
    //   pages: {
    //     signIn: '/signin'
    //   }
}