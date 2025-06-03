import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { testData } from '../../utils/testData';
import { loginAndSaveCookies } from '../../utils/loginAndSaveCookies';
import * as fs from 'fs';

test.describe('Login and Save Cookies', () => {

    test('should login and save cookies', async ({ page, context }) => {
        // const loginPage = new LoginPage(page);

        // await loginPage.goto();
        // await loginPage.login(testData.validUser.email, testData.validUser.password);
        // await page.waitForLoadState('networkidle');

        // const cookies = await context.cookies();
        // fs.writeFileSync('cookies.json', JSON.stringify(cookies, null, 2));

        const cookies = await loginAndSaveCookies( page , context);
        console.log('Cookies were saved to cookies.json');

        const sessionCookie = cookies.find(cookie => cookie.name === 'session-username');
        expect(sessionCookie).toBeDefined();
        expect(sessionCookie?.value).toBe('standard_user');
        expect(sessionCookie?.domain).toBe('www.saucedemo.com');
    });

    test('should login with saved cookies', async ({ page, context }) => {
        const inventoryPage = new InventoryPage(page);
        const cookies = JSON.parse(fs.readFileSync('cookies.json', 'utf-8'));

        await context.addCookies(cookies);
        await inventoryPage.goto();

        const sessionCookie = cookies.find(cookie => cookie.name === 'session-username');
        expect(sessionCookie).toBeDefined();
        expect(sessionCookie?.value).toBe('standard_user');
    });
});