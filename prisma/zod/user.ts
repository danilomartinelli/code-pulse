import * as z from "zod";
import {
  CompleteLocalGoogleCredential,
  relatedLocalGoogleCredentialSchema,
  CompleteDiscordWebhook,
  relatedDiscordWebhookSchema,
  CompleteNotion,
  relatedNotionSchema,
  CompleteSlack,
  relatedSlackSchema,
  CompleteConnections,
  relatedConnectionsSchema,
  CompleteWorkflows,
  relatedWorkflowsSchema,
} from "./index";

export const userSchema = z.object({
  id: z.number().int(),
  clerkId: z.string(),
  name: z.string().nullish(),
  email: z.string(),
  profileImage: z.string().nullish(),
  tier: z.string().nullish(),
  credits: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  localGoogleId: z.string().nullish(),
  googleResourceId: z.string().nullish(),
});

export interface CompleteUser extends z.infer<typeof userSchema> {
  LocalGoogleCredential?: CompleteLocalGoogleCredential | null;
  DiscordWebhook: CompleteDiscordWebhook[];
  Notion: CompleteNotion[];
  Slack: CompleteSlack[];
  connections: CompleteConnections[];
  workflows: CompleteWorkflows[];
}

/**
 * relatedUserSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedUserSchema: z.ZodSchema<CompleteUser> = z.lazy(() =>
  userSchema.extend({
    LocalGoogleCredential: relatedLocalGoogleCredentialSchema.nullish(),
    DiscordWebhook: relatedDiscordWebhookSchema.array(),
    Notion: relatedNotionSchema.array(),
    Slack: relatedSlackSchema.array(),
    connections: relatedConnectionsSchema.array(),
    workflows: relatedWorkflowsSchema.array(),
  }),
);
