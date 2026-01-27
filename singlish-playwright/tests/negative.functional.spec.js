import { test, expect } from "@playwright/test";

test("Neg_Fun_0001 – Joined words input", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const input = page.locator("textarea").first();
  const output = page.locator("textarea").nth(1);

  await input.fill("mamagehdarayanavaa");
  await expect(output).not.toBeEmpty();
});

test("Neg_Fun_0002 – Slang heavy input", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const input = page.locator("textarea").first();
  const output = page.locator("textarea").nth(1);

  await input.fill("ela machan supiri");
  await expect(output).not.toBeEmpty();
});
