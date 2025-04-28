import {test,expect} from '@playwright/test';

test.describe('Login Form', () => {
    test('should display login form', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await expect(page.locator('input[name="user-name"]')).toBeVisible();
        await expect(page.locator('input[name="password"]')).toBeVisible();
        await expect(page.locator('input[name="login-button"]')).toBeVisible();
    });

    test('should login successfully', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.locator('input[name="user-name"]').fill('standard_user');
        await page.locator('input[name="password"]').fill('secret_sauce');
        await page.locator('input[name="login-button"]').click();
        await expect(page.locator('text=Products')).toBeVisible();
    });

    test('should display error message for invalid credentials', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.locator('input[name="user-name"]').fill('invalid_user');
        await page.locator('input[name="password"]').fill('invalid_password');
        await page.locator('input[name="login-button"]').click();
        await expect(page.locator('text=Epic sadface: Username and password do not match any user in this service')).toBeVisible();
    });
});