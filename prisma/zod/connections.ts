import * as z from "zod";
import {
  CompleteDiscordWebhook,
  relatedDiscordWebhookSchema,
  CompleteNotion,
  relatedNotionSchema,
  CompleteUser,
  relatedUserSchema,
  CompleteSlack,
  relatedSlackSchema,
} from "./index";

export const connectionsSchema = z.object({
  id: z.string(),
  type: z.string(),
  discordWebhookId: z.string().nullish(),
  notionId: z.string().nullish(),
  userId: z.string().nullish(),
  slackId: z.string().nullish(),
});

export interface CompleteConnections extends z.infer<typeof connectionsSchema> {
  DiscordWebhook?: CompleteDiscordWebhook | null;
  Notion?: CompleteNotion | null;
  User?: CompleteUser | null;
  Slack?: CompleteSlack | null;
}

/**
 * relatedConnectionsSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedConnectionsSchema: z.ZodSchema<CompleteConnections> =
  z.lazy(() =>
    connectionsSchema.extend({
      DiscordWebhook: relatedDiscordWebhookSchema.nullish(),
      Notion: relatedNotionSchema.nullish(),
      User: relatedUserSchema.nullish(),
      Slack: relatedSlackSchema.nullish(),
    }),
  );
