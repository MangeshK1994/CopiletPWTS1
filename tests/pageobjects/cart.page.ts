import { Locator, Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartItems: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItems = page.locator('.cart-item-row');
    this.checkoutButton = page.locator('button', { hasText: 'Checkout' });
  }

  async itemCount() {
    return await this.cartItems.count();
  }
}
