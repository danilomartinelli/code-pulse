"use server";

import { updateUser } from "@/lib/api/users/mutations";
import {
  CompleteUser,
  updateUserParams,
  UpdateUserParams,
} from "@/lib/database/schemas/user";
import { revalidatePath } from "next/cache";
import { getErrorMessage } from "../utils";

export const updateUserAction = async (
  id: number,
  updateParams: UpdateUserParams,
): Promise<CompleteUser> => {
  try {
    const parsedUser = updateUserParams.parse(updateParams);

    const { user } = await updateUser(id, parsedUser);

    revalidatePath("/settings");

    return user;
  } catch (e) {
    throw new Error(getErrorMessage(e));
  }
};
