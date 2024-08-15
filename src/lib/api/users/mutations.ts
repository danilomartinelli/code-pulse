import { db } from '@/lib/database';
import {
  UserId,
  UpdateUserParams,
  updateUserSchema,
  userIdSchema,
} from '@/lib/database/schemas/user';
import { handleTRPCError } from '../api-utils';
import { DEFAULT_UNEXPECTED_ERROR_MESSAGE } from '@/lib/misc/constants';

export const updateUser = async (id: UserId, user: UpdateUserParams) => {
  const { id: userId } = userIdSchema.parse({ id });
  const parsedUser = updateUserSchema.parse(user);

  try {
    const c = await db.user.update({
      where: { id: userId },
      data: parsedUser,
    });
    return { user: c };
  } catch (err) {
    handleTRPCError(err, {
      code: 'BAD_REQUEST',
      defaultMessage: DEFAULT_UNEXPECTED_ERROR_MESSAGE,
    });
  }
};
