import { getUserById, getUsers } from "@/lib/api/users/queries";
import { updateUser } from "@/lib/api/users/mutations";
import { publicProcedure, router } from "@/lib/server/trpc";
import { userIdSchema, updateUserParams } from "@/lib/database/schemas/user";

export const usersRouter = router({
  getUsers: publicProcedure.query(async () => {
    return getUsers();
  }),
  getUserById: publicProcedure.input(userIdSchema).query(async ({ input }) => {
    return getUserById(input.id);
  }),
  updateUser: publicProcedure
    .input(updateUserParams)
    .mutation(async ({ input }) => {
      return updateUser(input.id, input);
    }),
});
