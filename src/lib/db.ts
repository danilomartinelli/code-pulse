import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const prismaGlobal = global as unknown as {
  prisma: PrismaClient | undefined;
};

export const db = prismaGlobal.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") prismaGlobal.prisma = db;
