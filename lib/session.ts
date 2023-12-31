import { getServerSession } from "next-auth/next";
import { NextAuthOptions, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import jsonWebToken from "jsonwebtoken";
import { JWT } from "next-auth/jwt";
import { SessionInterface, UserProfile } from "@/types/common.types";
import { createUser, getUser } from "./actions";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
    ],
    /* jwt: {
        encode: async ({ secret, token }) => {},
        decode: async ({ secret, token }) => {},
    }, */
    theme: {
        colorScheme: "light",
        logo: "/logo.svg",
    },
    callbacks: {
       async session({ session }) {
            const email = session?.user?.email as string
            try {
                const data = await getUser(email) as {user?: UserProfile}

                const newSession = {
                    ...session,
                    user: {
                        ...session.user,
                        ...data?.user
                    }
                }

                return newSession
            } catch (e) {
                console.log(e)
                return session
            }
        },
        async signIn({ user }: { user: AdapterUser | User }) {
            try {
                const userExist = await getUser(user.email as string) as {user?: UserProfile};
                if(!userExist.user) {
                   await createUser(user.name as string, user.email as string, user.image as string)
                }
                return true
            } catch (e: any) {
                console.log(e)
                return false
            }
        },
    },
};

export async function getCurrentUser() {
    const session = await getServerSession(authOptions) as SessionInterface

    return session
}
