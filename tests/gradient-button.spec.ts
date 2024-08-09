import { test, expect } from "@playwright/test";

test("GradientButton component", async ({ page }) => {
  // Navigate to the page containing the GradientButton
  await page.goto("/"); // Adjust this URL to match your app's structure

  // Wait for the button to be visible, with an increased timeout
  const button = page.getByTestId("gradient-button");
  await expect(button).toBeVisible({ timeout: 10000 });

  // Continue with your existing tests
  await expect(button).toHaveClass(/p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit/);
  await expect(button).toHaveClass(/border-t-2 rounded-full/);
});
