import { test, expect } from "@playwright/test";

test.describe("Navbar tests", () => {
  test.use({ viewport: { width: 1280, height: 720 } });

  test("Navbar component", async ({ page }) => {
    // Navigate to the home page
    await page.goto("/");

    // Wait for the navigation element to load and be visible
    await page.waitForSelector('nav[role="navigation"]');

    // Select the Navbar by its navigation role
    const navbar = page.getByRole("navigation");

    // Verify that the Navbar is visible
    await expect(navbar).toBeVisible();

    // Check for the presence of important navigation elements
    await expect(page.getByRole("link", { name: /products/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /pricing/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /clients/i })).toBeVisible();
  });
});
