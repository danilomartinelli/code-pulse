import * as z from 'zod';
import {
  CompleteUser,
  relatedUserSchema,
  CompleteConnections,
  relatedConnectionsSchema,
} from './index';

export const notionSchema = z.object({
  id: z.string(),
  accessToken: z.string(),
  workspaceId: z.string(),
  databaseId: z.string(),
  workspaceName: z.string(),
  workspaceIcon: z.string(),
  userId: z.string(),
});

export interface CompleteNotion extends z.infer<typeof notionSchema> {
  User: CompleteUser;
  connections: CompleteConnections[];
}

/**
 * relatedNotionSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedNotionSchema: z.ZodSchema<CompleteNotion> = z.lazy(() =>
  notionSchema.extend({
    User: relatedUserSchema,
    connections: relatedConnectionsSchema.array(),
  })
);
