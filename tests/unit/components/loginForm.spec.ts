import {test,expect} from '@playwright/test';
import {LoginPage} from '../../../pages/LoginPage';
import {testData} from '../../../utils/testData';

test.describe('Login Form', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });


    test('should display login form', async ({ page }) => {
        await expect(loginPage.emailInput).toBeVisible();
        await expect(loginPage.passwordInput).toBeVisible();
        await expect(loginPage.submitButton).toBeVisible();
    });

    test('should login successfully', async ({ page }) => {
        await loginPage.login(testData.validUser.email, testData.validUser.password);
        await expect(page.locator('text=Products')).toBeVisible();
    });

    test('should display error message for invalid credentials', async ({ page }) => {
        await loginPage.login(testData.invalidUser.email, testData.invalidUser.password);
        await expect(page.locator('text=Epic sadface: Username and password do not match any user in this service')).toBeVisible();
    });
});