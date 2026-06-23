import { Locator, Page } from '@playwright/test';

export class SearchPage {
  readonly page: Page;
  readonly searchResults: Locator;
  readonly firstResultLink: Locator;
  readonly noResultsMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchResults = page.locator('.product-item');
    this.firstResultLink = page.locator('.product-item .product-title a').first();
    this.noResultsMessage = page.locator('.no-result');
  }

  async getResultCount() {
    return await this.searchResults.count();
  }

  async hasResults() {
    return (await this.getResultCount()) > 0;
  }

  async openFirstResult() {
    await this.firstResultLink.click();
  }
}
