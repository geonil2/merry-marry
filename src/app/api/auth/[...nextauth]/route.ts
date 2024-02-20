import { AuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

import prisma from '@/lib/prisma';

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: `Credentials`,
      credentials: {
        email: {
          label: `Email`,
          type: `text`,
          placeholder: `이메일을 입력해주세요.`,
        },
        password: {
          label: `Password`,
          type: `password`,
          placeholder: `비밀번호를 입력해주세요.`,
        },
      },
      async authorize(credentials, req) {
        console.log(credentials, `credentials`);
        if (!credentials) throw new Error(`Authorization Failed`);

        const { email, password } = credentials;

        const user = await prisma.admin.findUnique({
          where: { email },
        });
        if (!user) throw new Error(`This user does not exist.`);

        const result = await bcrypt.compare(password, user.password);
        if (!result) throw new Error(`Password mismatch.`);

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      return token;
    },
    async session({ session }) {
      const admin = await prisma.admin.findUnique({
        where: { email: session.user?.email as string },
        select: {
          email: true,
          name: true,
        },
      });

      if (admin) session.user = admin;

      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: `admin`,
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
