import { router } from "@/lib/server/trpc";
import { usersRouter } from "./users";

export const appRouter = router({
  customers: usersRouter,
});

export type AppRouter = typeof appRouter;
