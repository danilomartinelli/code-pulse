import { getUserById, getUsers } from "@/lib/api/users/queries";
import { updateUser } from "@/lib/api/users/mutations";
import { publicProcedure, router } from "@/lib/server/trpc";
import { userIdSchema, updateUserParams } from "@/lib/database/schemas/user";
import { z } from "zod";

const updateUserInput = z.tuple([userIdSchema, updateUserParams]);

export const usersRouter = router({
  getUsers: publicProcedure.query(async () => {
    return getUsers();
  }),
  getUserById: publicProcedure.input(userIdSchema).query(async ({ input }) => {
    return getUserById(input.id);
  }),
  updateUser: publicProcedure
    .input(updateUserInput)
    .mutation(async ({ input }) => {
      const [{ id: userId }, update] = input;
      return updateUser(userId, update);
    }),
});
