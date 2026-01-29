# Student ID: IT23288430

# ITPM (IT3040) Assignment 1 – Singlish to Sinhala Automation Testing

## Project Overview

This project automates functional and UI test scenarios for the SwiftTranslator
(Singlish to Sinhala) web application using Playwright.

## Project Structure

```
IT23288430/
├─ README.md
├─ singlish-playwright/
│  ├─ package.json
│  ├─ playwright.config.js
│  └─ tests/
│     ├─ IT23288430_negative_functional.spec.ts
│     ├─ IT23288430_negative_ui.spec.ts
|     ├─ IT23288430_positive_functional.spec.ts
│     └─ IT23288430_positive_ui.spec.ts
```

## Tools & Technologies

- Node.js (v18+ recommended)
- Playwright
- JavaScript

## VS Code Run Instructions

1. Open the repository folder in VS Code.
2. Open a terminal and change directory:
   - `cd singlish-playwright`
3. Install dependencies:
   - `npm install`
4. Run all tests:
   - `npx playwright test`

## Test Files

- [singlish-playwright/tests/positive.singlishToSinhala.spec.js](singlish-playwright/tests/positive.singlishToSinhala.spec.js)
- [singlish-playwright/tests/negative.singlishToSinhala.spec.js](singlish-playwright/tests/negative.singlishToSinhala.spec.js)
- [singlish-playwright/tests/ui.spec.js](singlish-playwright/tests/ui.spec.js)

## Test Coverage

- 24 Positive functional test cases
- 10 Negative functional test cases
- 1 UI-related test case (real-time output)
