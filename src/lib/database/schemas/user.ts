import { userSchema } from "@/zodAutoGenSchemas";
import { z } from "zod";
import { id, timestamps } from "../schema-utils";
import { getUsers } from "@/lib/api/users/queries";

// Schema for users - used to validate API requests
const baseSchema = userSchema.omit(timestamps);

export const insertUserSchema = baseSchema.omit(id);
export const insertUserParams = baseSchema
  .extend({
    // We can parse and coerce values here:
    // exampleDate: z.coerce.date(),
    // exampleBoolean: z.coerce.boolean(),
  })
  .omit(id);

export const updateUserSchema = baseSchema;
export const updateUserParams = updateUserSchema
  // id, clerkId and email are not allowed to be updated
  .omit({
    ...id,
    clerkId: true,
    email: true,
  })
  .extend({
    // We can parse and coerce values here:
    // exampleDate: z.coerce.date(),
    // exampleBoolean: z.coerce.boolean(),
  });
export const userIdSchema = baseSchema.pick(id);

// Types for users - used to type API request params and within Components
export type User = z.infer<typeof userSchema>;
export type NewUser = z.infer<typeof insertUserSchema>;
export type NewUserParams = z.infer<typeof insertUserParams>;
export type UpdateUserParams = z.infer<typeof updateUserParams>;
export type UserId = z.infer<typeof userIdSchema>["id"];

// this type infers the return from getUsers() - meaning it will include any joins
export type CompleteUser = Awaited<
  ReturnType<typeof getUsers>
>["users"][number];
