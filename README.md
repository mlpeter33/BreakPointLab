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
│   ├── navigation.ts        # Navigation helpers
│   ├── api-utils.ts         # API interaction utilities
│   └── custom-assertions.ts # Assertions with higher complexity
|
├── playwright.config.ts     # Playwright configuration file
├── package.json             # Project dependencies and scripts
├── README.md                # This file
└── .gitignore               # Ignored files
```
