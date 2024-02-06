import { PrismaClient } from '@prisma';

const globalWithPrisma = global as typeof globalThis & {
  prisma: PrismaClient;
};

// eslint-disable-next-line import/no-mutable-exports
let prisma: PrismaClient;

if (process.env.NODE_ENV === `production`) {
  prisma = new PrismaClient();
} else {
  if (!globalWithPrisma.prisma) {
    globalWithPrisma.prisma = new PrismaClient();
  }
  prisma = globalWithPrisma.prisma;
}

export default prisma;
