import { test, expect } from "@playwright/test";

test("Navbar component", async ({ page }) => {
  // Navigate to the home page
  await page.goto("/");

  // Check if the Navbar is present
  const navbar = page.getByRole("navigation");
  await expect(navbar).toBeVisible();

  // Check for the presence of important navigation elements
  // Assuming your Navbar has these common elements. Adjust as needed.
  await expect(page.getByRole("link", { name: /products/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /pricing/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /clients/i })).toBeVisible();
});
