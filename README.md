# BreakPointLab

Comprehensive end-to-end and exploratory testing framework for modern web applications, built with Playwright and TypeScript.

## Features

-   🚀 End-to-End Testing: Automated workflows for user interactions.
-   🔐 Negative/Brute Force Testing: Simulate edge cases and malicious user behavior.
-   🔧 Reusable Utilities: Shared helpers for common tasks (e.g., authentication, navigation).
-   📊 Reports: Detailed HTML reports with screenshots and trace files.
-   🌐 Cross-Browser Testing: Runs tests on Chromium, WebKit, and Firefox.

## Repository Structure

```
BreakPointLab/
│
├── tests/                   # Test scripts categorized into folders
│   ├── e2e/                 # End-to-end workflow tests
│   ├── negative/            # Edge case and brute-force testing
│   └── regression/          # Regression suite for existing features
│
├── utils/                   # Helper functions and common utilities
│   ├── helpers.ts           # General utilities
│   ├── Navigation/          # Navigation helpers
│   ├── API/                 # API interaction utilities
│   ├── Custom/              # Custom assertions with higher complexity
│   ├── Hacking/             # Edge case and brute-force testing utilities
│   └── Generators/          # Test case generation tools
│
├── playwright.config.ts     # Playwright configuration file
├── package.json             # Project dependencies and scripts
├── README.md                # This file
└── .gitignore               # Ignored files
```

## Getting Started

### 1. Clone the Repository
```shell
git clone https://github.com/mlpeter33/BreakPointLab.git
cd BreakPointLab
```

### 2. Install Dependencies
```shell
npm install
```

### 3. Configure Environment Variables

Create a .env file for storing sensitive data like API keys or base URLs. Example:
```
BASE_URL=https://example.com
AUTH_TOKEN=your-api-token
```

### 4. Run Tests

-   All Tests:
```shell
npx playwright test 
```

-   Specific folder:
```shell
npx playwright test tests/your-folder/
```

-   Specific test file:
Note: If the file is located in tests/ writing the name of the file is enough, if it is in a different folder then type the path.
```shell
npx playwright test your-test-name 
```

-   With browser UI:
```shell
npx playwright test your-test-name --header
```

### 5. Generate Reports
Reports are automatically generated in the playwright-report/ folder. Open the report:
```shell
npx playwright show-report
```

## Writing Tests

Create tests under the tests/ folder. Here's an example of a login test:
```typescript
import { test, expect } from '@playwright/test';
// Import the test and expect functions from Playwright's test module.

test('User can log in successfully', async ({ page }) => {
  // Define a test case with a description and an asynchronous test function.
  // The "page" object represents a browser tab or page.

  await page.goto(process.env.BASE_URL);  
  // Navigate to the base URL, preferably set in the environment variables

  await page.fill('#username', 'test_user'); 
  // Find the input field with the selector '#username' and fill it with 'test_user'.

  await page.fill('#password', 'secure_password');
  // Find the input field with the selector '#password' and fill it with 'secure_password

  await page.click('button[type="submit"]');
  // Find the submit button using its selector and simulate a click action.

  await expect(page).toHaveURL(/dashboard/);
  // Assert that the page URL matches the expected pattern, indicating successful login.
});
```

## Contributing

-   Fork the repository.
-   Create a feature branch.
-   Submit a pull request.

## Acknowledgments

Thanks to the Playwright team for creating such a powerful testing framework.

## Roadmap
