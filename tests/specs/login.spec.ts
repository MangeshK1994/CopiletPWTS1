import { expect, test } from '@playwright/test';
import { HomePage } from '../pageobjects/home.page';
import { LoginPage } from '../pageobjects/login.page';
import { env } from '../utils/env';

test.describe('Demo Web Shop login', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(env.baseURL);
  });

  test('should login with valid credentials', async ({ page }) => {
    test.skip(!env.username || !env.password, 'USERNAME and PASSWORD must be provided in .env');

    const homePage = new HomePage(page);
    await homePage.navigateToLogin();

    const loginPage = new LoginPage(page);
    await loginPage.login(env.username, env.password);

    await expect(loginPage.logoutLink).toBeVisible();
  });
});
