import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { testData } from '../utils/testData';

test.describe('Login functionality', () => {
  test('should login successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(testData.validUser.email, testData.validUser.password);

    await expect(loginPage.errorMessage).not.toBeVisible(); // Ensure error message is not visible
    await expect(page.locator('.app_logo')).toHaveText('Swag Labs');
  });

  test('should show error with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(testData.invalidUser.email, testData.invalidUser.password);

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
  });

    test('should show error with problemUser credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(testData.problemUser.email, testData.problemUser.password);

    const imgSrc = await page.getAttribute('[data-test="inventory-item-sauce-labs-backpack-img"]', 'src');

    // await expect(loginPage.errorMessage).toBeVisible();
    await expect(imgSrc).toBe('/static/media/sl-404.168b1cce.jpg');
  });



});
