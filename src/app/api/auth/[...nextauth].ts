import NextAuth from 'next-auth';
import bcrypt from 'bcrypt';

import prisma from '@/lib/prisma';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
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
          id: true,
          name: true,
        },
      });

      if (admin) session.user = admin;

      return session;
    },
  },
  secret: process.env.SECRET,
});
