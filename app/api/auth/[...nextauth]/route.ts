import jwt from "jsonwebtoken";

import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import NextAuth from "next-auth/next";
import { login } from "@/lib/Login";

const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials: any, req): Promise<any> {
                const { email, password } = credentials as { email: string; password: string };
                try {
                  const user = await login(email, password);
                  const token = jwt.sign({ id: user.id, email: user.email }, process.env.NEXTAUTH_SECRET!, { expiresIn: '1h' });
                 
                  // return { ...user, token };
                  return user;
                } catch (error: any) {
                  console.error("Authorize error:", error);
                  throw new Error(error.message);
                }
              },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {

         async jwt({ token, user }) {
             if (user) {
                 token.id = user.id;
                 token.email = user.email;
                //  token.accessToken = user.token;
             }
             return token;
         },
         async session({ session, token, }) {
             if (token) {
                 session.user = {
                     id: token.id as string,
                     email: token.email as string,
                 };
             }
             return session;
         },
    },
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/signin',
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };