import { AuthOptions } from "next-auth";
import Discord, { DiscordProfile } from "next-auth/providers/discord";
import { createUser } from "./data";

export const authOptions: AuthOptions = {
    providers: [
        Discord({
            clientId: process.env.DISCORD_ID ?? "",
            clientSecret: process.env.DISCORD_SECRET ?? "",
            authorization: {params: {scope: 'identify'}},
        }, )
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            let discProfile = profile as DiscordProfile;
            createUser(discProfile.id, discProfile.username, discProfile.global_name);
            return true;
        },
        async session({ session, token}) {
            if (session.user) {
                session.user.id = token.sub;
            }
            return session;
        },
        
    },
}