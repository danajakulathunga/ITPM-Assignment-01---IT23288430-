import { test, expect } from "@playwright/test";

test("Pos_Fun_0001 – Simple daily sentence", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const input = page.locator("textarea").first();
  const output = page.locator("textarea").nth(1);

  await input.fill("mama gedhara yanavaa");
  await expect(output).toContainText("මම");
});

test("Pos_Fun_0002 – Greeting question", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const input = page.locator("textarea").first();
  const output = page.locator("textarea").nth(1);

  await input.fill("oyaata kohomadha?");
  await expect(output).toContainText("ඔයාට");
});
