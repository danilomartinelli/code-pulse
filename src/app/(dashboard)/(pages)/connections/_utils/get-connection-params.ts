import { connectionParamsKeys } from '@/lib/misc/constants';

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
  searchParams: URLSearchParams
): ConnectionParams {
  const connectionParams: Partial<ConnectionParams> = {};

  connectionParamsKeys.forEach((key) => {
    connectionParams[key as keyof ConnectionParams] =
      searchParams.get(key) ?? '';
  });

  return connectionParams as ConnectionParams;
}
