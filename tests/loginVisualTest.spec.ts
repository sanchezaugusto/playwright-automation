import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';

test.describe('Login Visual Test', () => {
    test('should match snapshot', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        
        expect( await loginPage.page.screenshot()).toMatchSnapshot('login-page.png');
    });
});