import { Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly email: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly logoutLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.email = page.locator('#Email');
    this.password = page.locator('#Password');
    this.loginButton = page.locator('button', { hasText: 'Log in' });
    this.logoutLink = page.locator('a', { hasText: 'Log out' });
  }

  async login(email: string, password: string) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.loginButton.click();
  }
}
