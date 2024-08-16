import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    headless: true,
    baseURL: 'http://localhost:3000',
    trace: process.env.CI ? 'off' : 'retain-on-first-failure',
    screenshot: process.env.CI ? 'off' : 'only-on-failure',
    video: process.env.CI ? 'off' : 'on',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    // The --turbo flag is necessary to prevent intermittent hydration errors on the first render.
    // This approach is based on a solution found in the discussion at https://stackoverflow.com/a/78599258
    // It helps ensure that the application undergoes the hydration phase properly, addressing an issue found in Next.js 14.
    // The use of turbopack is a temporary solution to this problem.
    // It's not used in development because the Console Ninja plugin for VS Code doesn't work with turbopack.
    command: 'bun run dev -- --turbo',
    port: 3000,
    reuseExistingServer: !process.env.CI,
    env: {
      NODE_ENV: 'test',
    },
  },
});
