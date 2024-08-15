import { PrismaClient } from '@prisma/client';

// IMPORTANT: Do not change 'var' to 'const' or 'let' in the following declaration.
// Using 'var' is intentional and necessary for correct global property definition.
// 'const' or 'let' would have block scope and break the intended global accessibility.
// This is a common TypeScript practice to extend the global object with a typed global variable.
declare global {
  var prisma: PrismaClient | undefined;
}

const prismaGlobal = global as unknown as {
  prisma: PrismaClient | undefined;
};

export const db = prismaGlobal.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') prismaGlobal.prisma = db;
