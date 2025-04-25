import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { testData } from '../utils/testData';
import * as fs from 'fs';

test.describe('Login and Save Cookies', () => {
    test('should login and save cookies', async ({ page, context }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login(testData.validUser.email, testData.validUser.password);

        await page.waitForLoadState('networkidle');

        const cookies = await context.cookies();

        fs.writeFileSync('cookies.json', JSON.stringify(cookies, null, 2));

        console.log('Cookies guardadas en cookies.json');
    });
});