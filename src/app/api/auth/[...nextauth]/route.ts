import { AuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

import prisma from '@/lib/prisma';
import { signJwtAccessToken } from '@/helper/jwt';

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
        if (!credentials) throw new Error(`Authorization Failed`);

        const { email, password } = credentials;

        const user = await prisma.admin.findUnique({
          where: { email },
        });

        if (!user) throw new Error(`This user does not exist.`);

        const { password: hashedPassword, ...rest } = user;
        const result = await bcrypt.compare(password, hashedPassword);

        if (!result) throw new Error(`Password mismatch.`);

        const accessToken = signJwtAccessToken(rest);

        return { ...rest, accessToken };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      const admin = await prisma.admin.findUnique({
        where: { email: session.user?.email as string },
        select: {
          email: true,
          name: true,
        },
      });

      if (admin)
        session.user = { ...admin, accessToken: token.accessToken as string };

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
