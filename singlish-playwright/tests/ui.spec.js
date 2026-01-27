import { test, expect } from "@playwright/test";

test("Pos_UI_0001 – Real-time Sinhala output update", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const input = page.locator("textarea").first();
  const output = page.locator("textarea").nth(1);

  await input.type("mama");
  await expect(output).toContainText("ම");
});
