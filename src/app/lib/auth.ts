import { AuthOptions } from "next-auth";
import Discord from "next-auth/providers/discord";
import { createUser } from "./data";
import Google from "next-auth/providers/google";

export const authOptions: AuthOptions = {
    providers: [
        Google({
            clientId: process.env.GOOGLE_ID ?? "",
            clientSecret: process.env.GOOGLE_SECRET ?? "",
            checks: ['none'],
        }),
        Discord({
            clientId: process.env.DISCORD_ID ?? "",
            clientSecret: process.env.DISCORD_SECRET ?? "",
            authorization: { params: { scope: 'identify' } },
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            createUser(user.id, user.name ?? "");
            return true;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.sub;
            }
            return session;
        },

    },
}