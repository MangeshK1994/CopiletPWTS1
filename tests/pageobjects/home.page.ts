import { Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly registerLink: Locator;
  readonly loginLink: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.registerLink = page.locator('a', { hasText: 'Register' });
    this.loginLink = page.locator('a', { hasText: 'Log in' });
    this.searchInput = page.locator('#small-searchterms');
    this.searchButton = page.locator('button[type="submit"]', { hasText: 'Search' });
    this.cartLink = page.locator('a', { hasText: 'Shopping cart' });
  }

  async goto() {
    await this.page.goto('/');
  }

  async navigateToRegister() {
    await this.registerLink.click();
  }

  async navigateToLogin() {
    await this.loginLink.click();
  }

  async navigateToCart() {
    await this.cartLink.click();
  }

  async search(term: string) {
    await this.searchInput.fill(term);
    await this.searchButton.click();
  }
}
