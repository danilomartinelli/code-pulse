import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    CLERK_SECRET_KEY: z.string().min(1),
    DATABASE_URL: z.string().min(1),
    DIRECT_URL: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: z.string().min(1),
    NEXT_PUBLIC_CLERK_SIGN_UP_URL: z.string().min(1),
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: z.string().min(1),
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: z.string().min(1),
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
    NEXT_PUBLIC_URL: z.string().url(),
    NEXT_PUBLIC_DOMAIN: z.string().min(1),
    NEXT_PUBLIC_SCHEME: z.string().min(1),
    NEXT_PUBLIC_UPLOAD_CARE_PUBLIC_KEY: z.string().min(1),
    NEXT_PUBLIC_DISCORD_REDIRECT: z.string().url(),
    NEXT_PUBLIC_NOTION_AUTH_URL: z.string().url(),
    NEXT_PUBLIC_SLACK_REDIRECT: z.string().url(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
    NEXT_PUBLIC_CLERK_SIGN_UP_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL,
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL:
      process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL,
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL:
      process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
    NEXT_PUBLIC_DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
    NEXT_PUBLIC_SCHEME: process.env.NEXT_PUBLIC_SCHEME,
    NEXT_PUBLIC_UPLOAD_CARE_PUBLIC_KEY:
      process.env.NEXT_PUBLIC_UPLOAD_CARE_PUBLIC_KEY,
    NEXT_PUBLIC_DISCORD_REDIRECT: process.env.NEXT_PUBLIC_DISCORD_REDIRECT,
    NEXT_PUBLIC_NOTION_AUTH_URL: process.env.NEXT_PUBLIC_NOTION_AUTH_URL,
    NEXT_PUBLIC_SLACK_REDIRECT: process.env.NEXT_PUBLIC_SLACK_REDIRECT,
  },
});
