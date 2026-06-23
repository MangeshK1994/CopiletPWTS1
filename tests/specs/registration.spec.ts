import { expect, test } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { HomePage } from '../pageobjects/home.page';
import { RegisterPage } from '../pageobjects/register.page';
import { env } from '../utils/env';

test.describe('Demo Web Shop registration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(env.baseURL);
  });

  test('should register a new user successfully', async ({ page }) => {
    const homePage = new HomePage(page);
    const registerPage = new RegisterPage(page);

    await homePage.navigateToRegister();

    const user = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email({ provider: 'example.com' }),
      password: 'P@ssword123!'
    };

    await registerPage.register(user);
    await expect(registerPage.resultMessage).toHaveText('Your registration completed');
  });
});
