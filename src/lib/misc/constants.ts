export const connectionParamsKeys = [
  "webhook_id",
  "webhook_name",
  "webhook_url",
  "guild_id",
  "guild_name",
  "channel_id",
  "access_token",
  "workspace_name",
  "workspace_icon",
  "workspace_id",
  "database_id",
  "app_id",
  "authed_user_id",
  "authed_user_token",
  "slack_access_token",
  "bot_user_id",
  "team_id",
  "team_name",
];

export type ConnectionType =
  | "discordNode"
  | "googleNode"
  | "notionNode"
  | "slackNode";

export type Connection = {
  title: string;
  description: string;
  image: string;
  type: ConnectionType;
  accessTokenKey?: string;
  alwaysTrue?: boolean;
  slackSpecial?: boolean;
};

export const CONNECTIONS: Connection[] = [
  {
    title: "Google Drive",
    description: "Connect your google drive to listen to folder changes",
    image: "/googleDrive.png",
    type: "googleNode",
    alwaysTrue: true,
  },
  {
    title: "Discord",
    description: "Connect your discord to send notification and messages",
    image: "/discord.png",
    type: "discordNode",
    accessTokenKey: "webhookURL",
  },
  {
    title: "Notion",
    description: "Create entries in your notion dashboard and automate tasks.",
    image: "/notion.png",
    type: "notionNode",
    accessTokenKey: "accessToken",
  },
  {
    title: "Slack",
    description:
      "Use slack to send notifications to team members through your own custom bot.",
    image: "/slack.png",
    type: "slackNode",
    accessTokenKey: "slackAccessToken",
    slackSpecial: true,
  },
];

export const DEFAULT_UNEXPECTED_ERROR_MESSAGE =
  "An unexpected error occurred, please try again later.";
