import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createEventListener<T extends Event>(
  handler: (event: T) => void,
): EventListener {
  return (event: Event) => handler(event as T);
}

export type ConnectionParams = {
  webhook_id: string;
  webhook_name: string;
  webhook_url: string;
  guild_id: string;
  guild_name: string;
  channel_id: string;
  access_token: string;
  workspace_name: string;
  workspace_icon: string;
  workspace_id: string;
  database_id: string;
  app_id: string;
  authed_user_id: string;
  authed_user_token: string;
  slack_access_token: string;
  bot_user_id: string;
  team_id: string;
  team_name: string;
};

const connectionParamsKeys = [
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

export function getConnectionParams(
  searchParams: URLSearchParams,
): ConnectionParams {
  const connectionParams: Partial<ConnectionParams> = {};

  connectionParamsKeys.forEach((key) => {
    connectionParams[key as keyof ConnectionParams] =
      searchParams.get(key) ?? "";
  });

  return connectionParams as ConnectionParams;
}
