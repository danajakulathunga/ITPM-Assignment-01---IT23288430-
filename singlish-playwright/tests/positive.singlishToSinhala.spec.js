import { test, expect } from "@playwright/test";

test("Pos_Fun_0001 – Simple daily sentence (Short, Simple structure)", async ({
  page,
}) => {
  await page.goto("https://www.swifttranslator.com/");
  const input = page.locator("textarea").first();
  const output = page.locator("textarea").nth(1);
  await input.fill("mama gedara yanawa.");
  await page.waitForTimeout(1000);
  const actual = await output.textContent();
  expect(actual).toContainText("මම ගෙදර යනවා.");
});

test("Pos_Fun_0002 – Greeting question (Short, Interrogative, Greeting)", async ({
  page,
}) => {
  await page.goto("https://www.swifttranslator.com/");
  const input = page.locator("textarea").first();
  const output = page.locator("textarea").nth(1);
  await input.fill("oya kohomada?");
  await page.waitForTimeout(1000);
  const actual = await output.textContent();
  expect(actual).toContainText("ඔයා කොහොමද?");
});

test("Pos_Fun_0003 – Command imperative (Short, Imperative)", async ({
  page,
}) => {
  await page.goto("https://www.swifttranslator.com/");
  const input = page.locator("textarea").first();
  const output = page.locator("textarea").nth(1);
  await input.fill("enna!");
  await page.waitForTimeout(1000);
  const actual = await output.textContent();
  expect(actual).toContainText("එන්න!");
});

test("Pos_Fun_0004 – Negative sentence (Medium, Negative form)", async ({
  page,
}) => {
  await page.goto("https://www.swifttranslator.com/");
  const input = page.locator("textarea").first();
  const output = page.locator("textarea").nth(1);
  await input.fill("mama ehema karanne nae.");
  await page.waitForTimeout(1000);
  const actual = await output.textContent();
  expect(actual).toContainText("මම ඒහෙම කරන්නේ නැහැ.");
});

test("Pos_Fun_0005 – Compound sentence (Medium, Compound structure, Request)", async ({
  page,
}) => {
  await page.goto("https://www.swifttranslator.com/");
  const input = page.locator("textarea").first();
  const output = page.locator("textarea").nth(1);
  await input.fill("mama gedara yanawa, api barai oya enawa.");
  await page.waitForTimeout(1000);
  const actual = await output.textContent();
  expect(actual).toContainText("මම ගෙදර යනවා, අපි බැරි ඔයා එනවා.");
});

test("Pos_Fun_0006 – Complex sentence (Medium, Complex structure)", async ({
  page,
}) => {
  await page.goto("https://www.swifttranslator.com/");
  const input = page.locator("textarea").first();
  const output = page.locator("textarea").nth(1);
  await input.fill("oya enawa nam mama yanawa.");
  await page.waitForTimeout(1000);
  const actual = await output.textContent();
  expect(actual).toContainText("ඔයා එනවා නම් මම යනවා.");
});

test("Pos_Fun_0007 – Polite request (Short, Polite phrasing)", async ({
  page,
}) => {
  await page.goto("https://www.swifttranslator.com/");
  const input = page.locator("textarea").first();
  const output = page.locator("textarea").nth(1);
  await input.fill("karunakara enna.");
  await page.waitForTimeout(1000);
  const actual = await output.textContent();
  expect(actual).toContainText("කරුණාකර එන්න.");
});

test("Pos_Fun_0008 – Informal response (Short, Informal phrasing, Response)", async ({
  page,
}) => {
  await page.goto("https://www.swifttranslator.com/");
  const input = page.locator("textarea").first();
  const output = page.locator("textarea").nth(1);
  await input.fill("hari da.");
  await page.waitForTimeout(1000);
  const actual = await output.textContent();
  expect(actual).toContainText("හරි ද.");
});

test("Pos_Fun_0009 – Day-to-day expression (Short, Daily usage)", async ({
  page,
}) => {
  await page.goto("https://www.swifttranslator.com/");
  const input = page.locator("textarea").first();
  const output = page.locator("textarea").nth(1);
  await input.fill("suba dawasak!");
  await page.waitForTimeout(1000);
  const actual = await output.textContent();
  expect(actual).toContainText("සුබ දවසක්!");
});

test("Pos_Fun_0010 – Multi-word collocation (Medium, Word combinations)", async ({
  page,
}) => {
  await page.goto("https://www.swifttranslator.com/");
  const input = page.locator("textarea").first();
  const output = page.locator("textarea").nth(1);
  await input.fill("kaema kanna puluwan da?");
  await page.waitForTimeout(1000);
  const actual = await output.textContent();
  expect(actual).toContainText("කෑම කන්න පුළුවන් ද?");
});

test("Pos_Fun_0011 – Repeated emphasis (Short, Repeated words)", async ({
  page,
}) => {
  await page.goto("https://www.swifttranslator.com/");
  const input = page.locator("textarea").first();
  const output = page.locator("textarea").nth(1);
  await input.fill("hari hari enna.");
  await page.waitForTimeout(1000);
  const actual = await output.textContent();
  expect(actual).toContainText("හරි හරි එන්න.");
});

test("Pos_Fun_0012 – Past tense (Medium, Tense variation past)", async ({
  page,
}) => {
  await page.goto("https://www.swifttranslator.com/");
  const input = page.locator("textarea").first();
  const output = page.locator("textarea").nth(1);
  await input.fill("mama gedara giya.");
  await page.waitForTimeout(1000);
  const actual = await output.textContent();
  expect(actual).toContainText("මම ගෙදර ගියා.");
});

test("Pos_Fun_0013 – Present tense (Medium, Tense variation present)", async ({
  page,
}) => {
  await page.goto("https://www.swifttranslator.com/");
  const input = page.locator("textarea").first();
  const output = page.locator("textarea").nth(1);
  await input.fill("mama kannewa kaema.");
  await page.waitForTimeout(1000);
  const actual = await output.textContent();
  expect(actual).toContainText("මම කන්නේවා කෑම.");
});

test("Pos_Fun_0014 – Future tense (Medium, Tense variation future)", async ({
  page,
}) => {
  await page.goto("https://www.swifttranslator.com/");
  const input = page.locator("textarea").first();
  const output = page.locator("textarea").nth(1);
  await input.fill("mama kalin kaema kanne.");
  await page.waitForTimeout(1000);
  const actual = await output.textContent();
  expect(actual).toContainText("මම කලින් කෑම කන්නේ.");
});

test("Pos_Fun_0015 – Negation pattern (Short, Negation)", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const input = page.locator("textarea").first();
  const output = page.locator("textarea").nth(1);
  await input.fill("na enna.");
  await page.waitForTimeout(1000);
  const actual = await output.textContent();
  expect(actual).toContainText("නැ එන්න.");
});

test("Pos_Fun_0016 – Plural usage (Medium, Plural pronouns)", async ({
  page,
}) => {
  await page.goto("https://www.swifttranslator.com/");
  const input = page.locator("textarea").first();
  const output = page.locator("textarea").nth(1);
  await input.fill("api sabbei yanawa.");
  await page.waitForTimeout(1000);
  const actual = await output.textContent();
  expect(actual).toContainText("අපි සබ්බෙයි යනවා.");
});

test("Pos_Fun_0017 – Singular pronoun (Short, Singular)", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const input = page.locator("textarea").first();
  const output = page.locator("textarea").nth(1);
  await input.fill("mama yanna one.");
  await page.waitForTimeout(1000);
  const actual = await output.textContent();
  expect(actual).toContainText("මම යන්න ඕනේ.");
});

test("Pos_Fun_0018 – Polite request degree (Medium, Request politeness)", async ({
  page,
}) => {
  await page.goto("https://www.swifttranslator.com/");
  const input = page.locator("textarea").first();
  const output = page.locator("textarea").nth(1);
  await input.fill("karunakarala sahayogaya karanna.");
  await page.waitForTimeout(1000);
  const actual = await output.textContent();
  expect(actual).toContainText("කරුණාකරලා සහායෝගය කරන්න.");
});

test("Pos_Fun_0019 – Long input paragraph (Long, Input length long, Multiple categories)", async ({
  page,
}) => {
  await page.goto("https://www.swifttranslator.com/");
  const input = page.locator("textarea").first();
  const output = page.locator("textarea").nth(1);
  const longText =
    "mama gedara yanawa oya enawa nam. api barai hari. karunakara enna suba dawasak. oya kohomada mama suba. kaema kanna puluwan da na enna. hari hari. mama giya kalin kanne. api sabbei yamu. mama yanna one na. karunakarala sahayogaya. ".repeat(
      10,
    ); // ~350 chars
  await input.fill(longText);
  await page.waitForTimeout(1000);
  const actual = await output.textContent();
  expect(actual).toContainText("මම ගෙදර යනවා ඔයා එනවා නම්.");
});

test("Pos_Fun_0020 – Mixed English brands/places (Medium, Mixed language)", async ({
  page,
}) => {
  await page.goto("https://www.swifttranslator.com/");
  const input = page.locator("textarea").first();
  const output = page.locator("textarea").nth(1);
  await input.fill("mama Colombo Zoom meeting ekakata yanawa.");
  await page.waitForTimeout(1000);
  const actual = await output.textContent();
  expect(actual).toContainText("මම Colombo Zoom meeting එකට යනවා.");
});

test("Pos_Fun_0021 – Punctuation and numbers (Medium, Punctuation/numeric)", async ({
  page,
}) => {
  await page.goto("https://www.swifttranslator.com/");
  const input = page.locator("textarea").first();
  const output = page.locator("textarea").nth(1);
  await input.fill("Rs. 5000 at 7.30 AM on 2024-01-28!");
  await page.waitForTimeout(1000);
  const actual = await output.textContent();
  expect(actual).toContainText("ආර්.එස්. 5000 වෙලාව 7.30 AM 2024-01-28!");
});

test("Pos_Fun_0022 – Multiple spaces and line breaks (Medium, Formatting)", async ({
  page,
}) => {
  await page.goto("https://www.swifttranslator.com/");
  const input = page.locator("textarea").first();
  const output = page.locator("textarea").nth(1);
  await input.fill("mama   gedara \n yanawa. \n\n hari!");
  await page.waitForTimeout(1000);
  const actual = await output.textContent();
  expect(actual).toContainText("මම ගෙදර යනවා. හරි!");
});

test("Pos_Fun_0023 – Slang colloquial (Short, Informal slang)", async ({
  page,
}) => {
  await page.goto("https://www.swifttranslator.com/");
  const input = page.locator("textarea").first();
  const output = page.locator("textarea").nth(1);
  await input.fill("supiri machan!");
  await page.waitForTimeout(1000);
  const actual = await output.textContent();
  expect(actual).toContainText("සුපිරි මචන්!");
});

test("Pos_Fun_0024 – Abbreviations embedded (Medium, English abbr)", async ({
  page,
}) => {
  await page.goto("https://www.swifttranslator.com/");
  const input = page.locator("textarea").first();
  const output = page.locator("textarea").nth(1);
  await input.fill("mama ID ekak SMS eken OTP ekak labaganna.");
  await page.waitForTimeout(1000);
  const actual = await output.textContent();
  expect(actual).toContainText("මම ID එකක් SMS එකෙන් OTP එකක් ලැබගන්න.");
});
