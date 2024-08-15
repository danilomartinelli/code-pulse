import { db } from '@/lib/database';
import { currentUser } from '@clerk/nextjs/server';

export async function createTRPCContext(opts: { headers: Headers }) {
  const clerkUser = await currentUser();
  const session = { user: clerkUser };

  return {
    db,
    session,
    ...opts,
  };
}

export type Context = Awaited<ReturnType<typeof createTRPCContext>>;
