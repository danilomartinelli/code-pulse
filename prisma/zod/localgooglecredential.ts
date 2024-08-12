import * as z from "zod";
import { CompleteUser, relatedUserSchema } from "./index";

export const localGoogleCredentialSchema = z.object({
  id: z.string(),
  accessToken: z.string(),
  folderId: z.string().nullish(),
  pageToken: z.string().nullish(),
  channelId: z.string(),
  subscribed: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.number().int(),
});

export interface CompleteLocalGoogleCredential
  extends z.infer<typeof localGoogleCredentialSchema> {
  user: CompleteUser;
}

/**
 * relatedLocalGoogleCredentialSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedLocalGoogleCredentialSchema: z.ZodSchema<CompleteLocalGoogleCredential> =
  z.lazy(() =>
    localGoogleCredentialSchema.extend({
      user: relatedUserSchema,
    }),
  );
