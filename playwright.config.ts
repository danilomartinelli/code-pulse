import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    headless: true,
    baseURL: "http://localhost:3000",
    trace: process.env.CI ? "off" : "retain-on-first-failure",
    screenshot: process.env.CI ? "off" : "only-on-failure",
    video: process.env.CI ? "off" : "on",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    command: "bun run dev",
    port: 3000,
    reuseExistingServer: !process.env.CI,
    env: {
      NODE_ENV: "test",
    },
  },
});
