import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord";

export const authOptions = {
    providers: [
        Discord({
            clientId: process.env.DISCORD_ID ?? "",
            clientSecret: process.env.DISCORD_SECRET ?? "",
            authorization: {params: {scope: 'identify'}},
        }, )
    ]
}

export const handler = NextAuth(authOptions);

export {handler as GET, handler as POST };