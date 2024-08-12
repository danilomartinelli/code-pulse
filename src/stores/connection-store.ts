import { createStore } from "zustand/vanilla";

export type DiscordNode = {
  webhookURL: string;
  content: string;
  webhookName: string;
  guildName: string;
};

export type NotionNode = {
  accessToken: string;
  databaseId: string;
  workspaceName: string;
  content: string;
};

export type SlackNode = {
  appId: string;
  authedUserId: string;
  authedUserToken: string;
  slackAccessToken: string;
  botUserId: string;
  teamId: string;
  teamName: string;
  content: string;
};

export type GoogleNode = {
  accessToken: string;
  refreshToken: string;
  content: string;
};

export type WorkflowTemplate = {
  discord?: string;
  notion?: string;
  slack?: string;
};

export type ConnectionState = {
  discordNode: DiscordNode;
  googleNode: GoogleNode;
  notionNode: NotionNode;
  slackNode: SlackNode;
  workflowTemplate: WorkflowTemplate;
  isLoading: boolean;
};

export type ConnectionActions = {
  setDiscordNode: (node: DiscordNode) => void;
  setGoogleNode: (node: GoogleNode) => void;
  setNotionNode: (node: NotionNode) => void;
  setSlackNode: (node: SlackNode) => void;
  setWorkFlowTemplate: (template: WorkflowTemplate) => void;
  setIsLoading: (loading: boolean) => void;
};

export type ConnectionStore = ConnectionState & ConnectionActions;

export const defaultInitState: ConnectionState = {
  discordNode: {
    webhookURL: "",
    content: "",
    webhookName: "",
    guildName: "",
  },
  googleNode: {
    accessToken: "",
    refreshToken: "",
    content: "",
  },
  notionNode: {
    accessToken: "",
    databaseId: "",
    workspaceName: "",
    content: "",
  },
  slackNode: {
    appId: "",
    authedUserId: "",
    authedUserToken: "",
    slackAccessToken: "",
    botUserId: "",
    teamId: "",
    teamName: "",
    content: "",
  },
  workflowTemplate: {
    discord: "",
    notion: "",
    slack: "",
  },
  isLoading: false,
};

export const createConnectionStore = (
  initState: ConnectionState = defaultInitState,
) => {
  return createStore<ConnectionStore>()((set) => ({
    ...initState,
    setDiscordNode: (discordNode) => set({ discordNode }),
    setGoogleNode: (googleNode) => set({ googleNode }),
    setNotionNode: (notionNode) => set({ notionNode }),
    setSlackNode: (slackNode) => set({ slackNode }),
    setWorkFlowTemplate: (workflowTemplate) => set({ workflowTemplate }),
    setIsLoading: (isLoading) => set({ isLoading }),
  }));
};
