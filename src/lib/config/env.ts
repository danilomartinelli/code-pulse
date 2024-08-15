import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

const pathSchema = z.string().refine((value) => value.startsWith('/'), {
  message: 'Must be a valid path starting with "/"',
});

export const env = createEnv({
  server: {
    CLERK_SECRET_KEY: z
      .string()
      .min(32, 'CLERK_SECRET_KEY must be at least 32 characters long.'),
    DATABASE_URL: z.string().url('DATABASE_URL must be a valid URL.'),
    DIRECT_URL: z.string().url('DIRECT_URL must be a valid URL.'),
    NODE_ENV: z.enum(['development', 'test', 'production'], {
      errorMap: () => ({
        message:
          'NODE_ENV must be either "development", "test", or "production".',
      }),
    }),
  },
  client: {
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: pathSchema,
    NEXT_PUBLIC_CLERK_SIGN_UP_URL: pathSchema,
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: pathSchema,
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: pathSchema,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z
      .string()
      .min(1, 'NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY cannot be empty.'),
    NEXT_PUBLIC_URL: z.string().url('NEXT_PUBLIC_URL must be a valid URL.'),
    NEXT_PUBLIC_DOMAIN: z
      .string()
      .min(1, 'NEXT_PUBLIC_DOMAIN cannot be empty.'),
    NEXT_PUBLIC_SCHEME: z.enum(['http://', 'https://'], {
      errorMap: () => ({
        message: 'NEXT_PUBLIC_SCHEME must be either "http://" or "https://".',
      }),
    }),
    NEXT_PUBLIC_UPLOAD_CARE_PUBLIC_KEY: z
      .string()
      .min(1, 'NEXT_PUBLIC_UPLOAD_CARE_PUBLIC_KEY cannot be empty.'),
    NEXT_PUBLIC_DISCORD_REDIRECT: z
      .string()
      .url('NEXT_PUBLIC_DISCORD_REDIRECT must be a valid URL.'),
    NEXT_PUBLIC_NOTION_AUTH_URL: z
      .string()
      .url('NEXT_PUBLIC_NOTION_AUTH_URL must be a valid URL.'),
    NEXT_PUBLIC_SLACK_REDIRECT: z
      .string()
      .url('NEXT_PUBLIC_SLACK_REDIRECT must be a valid URL.'),
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
