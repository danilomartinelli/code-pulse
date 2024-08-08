import { test, expect } from "@playwright/test";

test("GradientButton component", async ({ page }) => {
  await page.goto("/");

  const button = page.getByTestId("gradient-button");

  await expect(button).toBeVisible();

  await expect(button).toHaveClass(/p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit/);
  await expect(button).toHaveClass(/border-t-2 rounded-full/);
  await expect(button).toHaveClass(/bg-\[#1F1F1F\]/);

  await button.hover();
  await expect(button).toHaveClass(/hover:bg-white/);

  await expect(button).toHaveClass(/transition-all/);
  await expect(button).toHaveClass(/flex items-center justify-center gap-4/);
});
