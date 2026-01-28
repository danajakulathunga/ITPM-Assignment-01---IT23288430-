import { test, expect } from "@playwright/test";

test("Neg_Fun_0001 – Joined words input (Short, Joined vs segmented fail)", async ({
  page,
}) => {
  await page.goto("https://www.swifttranslator.com/");
  const input = page.locator("textarea").first();
  const output = page.locator("textarea").nth(1);
  await input.fill("mamagedaraynawa");
  await page.waitForTimeout(1000);
  const actual = await output.textContent();
  expect(actual).not.toContainText("මම ගෙදර යනවා"); // Fails full transliteration
});

test("Neg_Fun_0002 – Slang heavy input (Medium, Heavy slang fail)", async ({
  page,
}) => {
  await page.goto("https://www.swifttranslator.com/");
  const input = page.locator("textarea").first();
  const output = page.locator("textarea").nth(1);
  await input.fill("ela ooka machan wtf lol");
  await page.waitForTimeout(1000);
  const actual = await output.textContent();
  expect(actual).not.toContainText("එලා ඕකා මචන්"); // Partial/wrong slang handling
});

test("Neg_Fun_0003 – Empty input (Short, Error handling fail)", async ({
  page,
}) => {
  await page.goto("https://www.swifttranslator.com/");
  const input = page.locator("textarea").first();
  const output = page.locator("textarea").nth(1);
  await input.fill("");
  await page.waitForTimeout(1000);
  const actual = await output.textContent();
  expect(actual).toBe(""); // No output, but expected empty - wait, for neg: assume no crash but no trans
});

test("Neg_Fun_0004 – Extreme no spaces (Medium, Joined variation fail)", async ({
  page,
}) => {
  await page.goto("https://www.swifttranslator.com/");
  const input = page.locator("textarea").first();
  const output = page.locator("textarea").nth(1);
  await input.fill("oyakohomadasupiri");
  await page.waitForTimeout(1000);
  const actual = await output.textContent();
  expect(actual).not.toContainText("ඔයා කොහොමද සුපිරි"); // Garbled
});

test("Neg_Fun_0005 – Over-repetition (Medium, Repeated emphasis fail)", async ({
  page,
}) => {
  await page.goto("https://www.swifttranslator.com/");
  const input = page.locator("textarea").first();
  const output = page.locator("textarea").nth(1);
  await input.fill("hari hari hari hari hari");
  await page.waitForTimeout(1000);
  const actual = await output.textContent();
  expect(actual).not.toContainText("හරි හරි හරි හරි හරි"); // Breaks after few
});

test("Neg_Fun_0006 – Invalid characters (Short, Robustness fail)", async ({
  page,
}) => {
  await page.goto("https://www.swifttranslator.com/");
  const input = page.locator("textarea").first();
  const output = page.locator("textarea").nth(1);
  await input.fill("mama @#$% yanawa");
  await page.waitForTimeout(1000);
  const actual = await output.textContent();
  expect(actual).not.toContainText("මම යනවා"); // Symbols break
});

test("Neg_Fun_0007 – All caps input (Medium, Informal fail)", async ({
  page,
}) => {
  await page.goto("https://www.swifttranslator.com/");
  const input = page.locator("textarea").first();
  const output = page.locator("textarea").nth(1);
  await input.fill("MAMA GEDARA YANAWA");
  await page.waitForTimeout(1000);
  const actual = await output.textContent();
  expect(actual).not.toContainText("මම ගෙදර යනවා"); // No handling for caps
});

test("Neg_Fun_0008 – Wrong mixed transliteration (Medium, Mixed fail)", async ({
  page,
}) => {
  await page.goto("https://www.swifttranslator.com/");
  const input = page.locator("textarea").first();
  const output = page.locator("textarea").nth(1);
  await input.fill("school ekata mama go karanna.");
  await page.waitForTimeout(1000);
  const actual = await output.textContent();
  expect(actual).not.toContainText("school එකට මම go කරන්න."); // Translates "go" wrong
});

test("Neg_Fun_0009 – Long with typos (Long, Length robustness fail)", async ({
  page,
}) => {
  await page.goto("https://www.swifttranslator.com/");
  const input = page.locator("textarea").first();
  const output = page.locator("textarea").nth(1);
  const longTypos =
    "mama gedar yanaw oya enaw nam api barai hari karunakara enna suba. oya kohomada mama suba kaema kanna. ".repeat(
      8,
    ) + "typooo"; // ~320 chars + error
  await input.fill(longTypos);
  await page.waitForTimeout(1000);
  const actual = await output.textContent();
  expect(actual).not.toContainText("මම ගෙදර යනවා"); // Cuts off or garbles end
});

test("Neg_Fun_0010 – Numbers only (Short, Numeric fail)", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const input = page.locator("textarea").first();
  const output = page.locator("textarea").nth(1);
  await input.fill("12345 67.89");
  await page.waitForTimeout(1000);
  const actual = await output.textContent();
  expect(actual).toBe("12345 67.89"); // No trans, but for neg: assume unchanged but expect some error - adjust if needed
});
