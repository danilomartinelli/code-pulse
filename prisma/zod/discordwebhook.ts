import * as z from 'zod';
import {
  CompleteUser,
  relatedUserSchema,
  CompleteConnections,
  relatedConnectionsSchema,
} from './index';

export const discordWebhookSchema = z.object({
  id: z.string(),
  webhookId: z.string(),
  url: z.string(),
  name: z.string(),
  guildName: z.string(),
  guildId: z.string(),
  channelId: z.string(),
  userId: z.string(),
});

export interface CompleteDiscordWebhook
  extends z.infer<typeof discordWebhookSchema> {
  user: CompleteUser;
  connections: CompleteConnections[];
}

/**
 * relatedDiscordWebhookSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedDiscordWebhookSchema: z.ZodSchema<CompleteDiscordWebhook> =
  z.lazy(() =>
    discordWebhookSchema.extend({
      user: relatedUserSchema,
      connections: relatedConnectionsSchema.array(),
    })
  );
