# ITPM (IT3040) Assignment 1 – Singlish to Sinhala Automation Testing

**Student ID:** IT23288430

---

## Project Overview

This project automates functional and UI test scenarios for the SwiftTranslator (Singlish to Sinhala) web application using Playwright.

---

## Project Structure

```
IT23288430/
├─ singlish-playwright/
│  ├─ package.json
│  ├─ playwright.config.js
│  └─ tests/
│     ├─ IT23288430_negative_functional.spec.ts
│     ├─ IT23288430_negative_ui.spec.ts
│     ├─ IT23288430_positive_functional.spec.ts
│     └─ IT23288430_positive_ui.spec.ts
├─ IT23288430_GitHub_Link.txt
├─ IT23288430_TestCases.xlsx
├─ package-lock.json
├─ package.json
└─ README.md
```

## VS Code Run Instructions

1. Open the repository folder in VS Code.
2. Open a terminal and navigate to the test project:

   ```sh
   cd singlish-playwright
   ```
3. Ensure Node.js is installed:

   ```sh
   node -v
   npm -v
   ```

   If Node.js is not installed, download and install it from [https://nodejs.org/](https://nodejs.org/).
4. Install dependencies:

   ```sh
   npm install
   ```
5. Run all tests:

   ```sh
   npx playwright test
   ```
6. To view the HTML report after running tests:

   ```sh
   npx playwright show-report
   ```

---

## Tools & Technologies

- **Node.js** (v18+ recommended)
- **Playwright** (end-to-end testing framework)
- **TypeScript** (for test development)
- **JavaScript** (for scripting and tests)
- **XLSX** (Excel file generation for test documentation)
- **@types/node** (TypeScript type definitions for Node.js)
- **HTML Reporter** (Playwright built-in)
- **Modern browsers** (Chromium, via Playwright)

---

## Test Files

- [IT23288430_negative_functional.spec.ts](singlish-playwright/tests/IT23288430_negative_functional.spec.ts)
- [IT23288430_negative_ui.spec.ts](singlish-playwright/tests/IT23288430_negative_ui.spec.ts)
- [IT23288430_positive_functional.spec.ts](singlish-playwright/tests/IT23288430_positive_functional.spec.ts)
- [IT23288430_positive_ui.spec.ts](singlish-playwright/tests/IT23288430_positive_ui.spec.ts)

---

## Test Coverage

- **10 Negative functional test cases**
- **3 Positive UI-related test cases (real-time output)**
- **24 Positive functional test cases**
- **03 Negative UI-related test case (real-time output)**
