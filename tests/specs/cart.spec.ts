import { expect, test } from '@playwright/test';
import { HomePage } from '../pageobjects/home.page';
import { ProductPage } from '../pageobjects/product.page';
import { SearchPage } from '../pageobjects/search.page';
import { CartPage } from '../pageobjects/cart.page';
import { env } from '../utils/env';

test.describe('Demo Web Shop cart flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(env.baseURL);
  });

  test('should search for a product and add the first result to cart', async ({ page }) => {
    const homePage = new HomePage(page);
    const searchPage = new SearchPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    await homePage.search('computer');
    await expect(await searchPage.searchResults.count()).toBeGreaterThan(0);
    await searchPage.openFirstResult();

    await expect(productPage.productTitle).toBeVisible();
    await productPage.addToCart();
    await expect(productPage.successNotification).toBeVisible();

    await homePage.navigateToCart();
    await expect(await cartPage.cartItems.count()).toBeGreaterThan(0);
  });
});
