import { Locator, Page } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly addToCartButton: Locator;
  readonly productTitle: Locator;
  readonly successNotification: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productTitle = page.locator('h1');
    this.addToCartButton = page.locator('button', { hasText: 'Add to cart' });
    this.successNotification = page.locator('.bar-notification.success');
  }

  async addToCart() {
    await this.addToCartButton.click();
  }
}
