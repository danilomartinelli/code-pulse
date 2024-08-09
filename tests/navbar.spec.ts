import { test, expect } from "@playwright/test";

test("Navbar component", async ({ page }) => {
  // Navigate to the home page
  await page.goto("/");

  // Check if the Navbar is present
  const navbar = page.getByRole("navigation");
  await expect(navbar).toBeVisible();

  // Check for the presence of important navigation elements
  // Assuming your Navbar has these common elements. Adjust as needed.
  await expect(page.getByRole("link", { name: /home/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /about/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /contact/i })).toBeVisible();

  // Test navigation functionality (example)
  await page.getByRole("link", { name: /about/i }).click();
  await expect(page).toHaveURL(/.*about/);

  // Test responsive behavior (if applicable)
  // This checks if a menu button appears on smaller screens
  await page.setViewportSize({ width: 640, height: 480 });
  const menuButton = page.getByRole("button", { name: /menu/i });
  await expect(menuButton).toBeVisible();
});
