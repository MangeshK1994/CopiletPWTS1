import { expect, test } from '@playwright/test';
import { HomePage } from '../pageobjects/home.page';
import { SearchPage } from '../pageobjects/search.page';
import { env } from '../utils/env';

test.describe('Demo Web Shop search', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(env.baseURL);
  });

  test('should return results for a valid product search', async ({ page }) => {
    const homePage = new HomePage(page);
    const searchPage = new SearchPage(page);

    await homePage.search('computer');

    await expect(await searchPage.searchResults.count()).toBeGreaterThan(0);
    await expect(searchPage.searchResults.first()).toBeVisible();
  });
});
