# Demo Web Shop Playwright Test Framework

## Overview

This repository contains a Playwright end-to-end test automation framework for [Demo Web Shop](https://demowebshop.tricentis.com/).

## Tech Stack

- Playwright Test Runner
- TypeScript
- Page Object Model (POM)
- Faker for test data generation
- `.env` environment configuration
- HTML reporting
- Screenshots and videos on failure
- Parallel execution
- GitHub Actions CI-ready

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Install Playwright browsers:
   ```bash
   npx playwright install --with-deps
   ```

3. Update `.env` if you want to provide login credentials:
   ```bash
   USERNAME=your@example.com
   PASSWORD=yourPassword
   ```

## Run tests

- Local test run:
  ```bash
  npm test
  ```

- Run headed:
  ```bash
  npm run test:headed
  ```

- Open HTML report after a run:
  ```bash
  npm run test:report
  ```

## CI/CD

The GitHub Actions workflow is configured in `.github/workflows/playwright-ci.yml`.

## Test structure

- `tests/pageobjects` - Page object classes
- `tests/specs` - Playwright test files
- `tests/utils` - Helpers and environment loader

## Environment

Rename `.env.example` to `.env` and update the values for your environment and credentials.

## Browser support

The framework runs on Chromium, Firefox, and WebKit using Playwright test projects.
