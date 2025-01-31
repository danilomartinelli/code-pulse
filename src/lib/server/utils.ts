import { currentUser } from '@clerk/nextjs/server';
import { db } from '../database';
import { User } from '@prisma/client';
import { AuthenticationError } from './custom-errors';

async function findAndValidateUser(clerkUserId: string): Promise<User> {
  const user = await db.user.findUnique({
    where: { clerkId: clerkUserId },
  });

  // NOTE: This redirect should never occur in normal circumstances.
  // If we reach this point, it means the user is authenticated with Clerk
  // but doesn't have a corresponding entry in our database.
  // This could happen if:
  // 1. There was an error during user creation in our DB after Clerk authentication
  // 2. The DB entry was manually deleted
  // 3. There's a bug in our user creation process
  //
  // In a properly functioning system, this code should never be executed.
  // If it is, it indicates a critical error that needs immediate attention.
  if (!user) {
    throw new AuthenticationError('User not found in database');
  }

  return user;
}

export async function getAuthenticatedDbUser(): Promise<User> {
  const clerkUser = await currentUser();

  // The middleware ensures this route is only accessible to authenticated users.
  // Therefore, we can assume that authUser will always be available.
  // However, TypeScript may still consider authUser potentially null,
  // so we perform a null check to satisfy the type system.
  if (!clerkUser) {
    throw new AuthenticationError('User not authenticated');
  }

  return findAndValidateUser(clerkUser.id);
}

export async function getOptionalDbUser(): Promise<User | null> {
  const clerkUser = await currentUser();

  if (!clerkUser) {
    return null;
  }

  return findAndValidateUser(clerkUser.id);
}

export function getBaseUrl(): string {
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  if (process.env.NEXT_PUBLIC_URL) {
    const publicUrl = process.env.NEXT_PUBLIC_URL.trim();
    if (!publicUrl.startsWith('http')) {
      throw new Error('NEXT_PUBLIC_URL must start with "http" or "https".');
    }
    return publicUrl;
  }

  return 'http://localhost:3000';
}

export function getErrorMessage(e: unknown) {
  const errMsg = 'Error, please try again.';
  if (e instanceof Error) return e.message.length > 0 ? e.message : errMsg;
  if (e && typeof e === 'object' && 'error' in e) {
    const errAsStr = e.error as string;
    return errAsStr.length > 0 ? errAsStr : errMsg;
  }
  return errMsg;
}
