import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord";

const authOptions = {
    providers: [
        Discord({
            clientId: process.env.DISCORD_ID ?? "",
            clientSecret: process.env.DISCORD_SECRET ?? "",
            authorization: {params: {scope: 'identify'}},
        }, )
    ]
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST };