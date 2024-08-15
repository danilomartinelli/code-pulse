import * as z from 'zod';
import {
  CompleteUser,
  relatedUserSchema,
  CompleteConnections,
  relatedConnectionsSchema,
} from './index';

export const slackSchema = z.object({
  id: z.string(),
  appId: z.string(),
  authedUserId: z.string(),
  authedUserToken: z.string(),
  slackAccessToken: z.string(),
  botUserId: z.string(),
  teamId: z.string(),
  teamName: z.string(),
  userId: z.string(),
});

export interface CompleteSlack extends z.infer<typeof slackSchema> {
  User: CompleteUser;
  connections: CompleteConnections[];
}

/**
 * relatedSlackSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedSlackSchema: z.ZodSchema<CompleteSlack> = z.lazy(() =>
  slackSchema.extend({
    User: relatedUserSchema,
    connections: relatedConnectionsSchema.array(),
  })
);
