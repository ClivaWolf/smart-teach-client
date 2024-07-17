import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth/jwt" {
    interface JWT {
        user: {
            id: number;
            email: string;
            name: string;
        };

        backendTokens: {
            accessToken: string;
            refreshToken: string;
            expiresIn: number;
        };
    }
}

declare module "next-auth" {
    interface Session {
        user: {
            id: number;
            email: string;
            name: string;
        };

        backendTokens: {
            accessToken: string;
            refreshToken: string;
            expiresIn: number;
        };
    }
}


async function refreshToken(token: JWT): Promise<JWT> {
    const res = await fetch("http://26.200.223.0:4444/auth/refresh", {
        method: "POST",
        headers: {
            authorization: `Bearer ${token.backendTokens.refreshToken}`,
        },
    });
    console.log("refreshed");

    const user = await res.json();
    return user;
}

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                login: {
                    label: "Login",
                    type: "login",
                    placeholder: "Don",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                if (!credentials?.login || !credentials?.password) return null;
                const { login, password } = credentials;
                const res = await fetch("http://26.200.223.0:4444/auth/login", {
                    method: "POST",
                    body: JSON.stringify({
                        login,
                        password,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                console.log(JSON.stringify({ login, password }));
                if (res.status == 401) {
                    console.log(res.statusText);

                    return null;
                }
                const user = await res.json();
                return user;
            },
        }),
    ],

    callbacks: {
        async jwt({ token, user }) {
            if (user) return { ...token, ...user };

            if (new Date().getTime() < token.backendTokens.expiresIn)
                return token;

            return await refreshToken(token);
        },

        async session({ token, session }) {
            session.user = token.user;
            session.backendTokens = token.backendTokens;

            return session;
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };