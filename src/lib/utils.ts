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

export function getConnectionParams(
  searchParams: URLSearchParams,
): ConnectionParams {
  return {
    webhook_id: searchParams.get("webhook_id") ?? "",
    webhook_name: searchParams.get("webhook_name") ?? "",
    webhook_url: searchParams.get("webhook_url") ?? "",
    guild_id: searchParams.get("guild_id") ?? "",
    guild_name: searchParams.get("guild_name") ?? "",
    channel_id: searchParams.get("channel_id") ?? "",
    access_token: searchParams.get("access_token") ?? "",
    workspace_name: searchParams.get("workspace_name") ?? "",
    workspace_icon: searchParams.get("workspace_icon") ?? "",
    workspace_id: searchParams.get("workspace_id") ?? "",
    database_id: searchParams.get("database_id") ?? "",
    app_id: searchParams.get("app_id") ?? "",
    authed_user_id: searchParams.get("authed_user_id") ?? "",
    authed_user_token: searchParams.get("authed_user_token") ?? "",
    slack_access_token: searchParams.get("slack_access_token") ?? "",
    bot_user_id: searchParams.get("bot_user_id") ?? "",
    team_id: searchParams.get("team_id") ?? "",
    team_name: searchParams.get("team_name") ?? "",
  };
}
