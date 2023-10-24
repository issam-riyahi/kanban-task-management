import type { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

console.log(process.env.DB_HOST)

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId : process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
};
