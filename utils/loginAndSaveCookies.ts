import { BrowserContext, Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { testData } from "../utils/testData";
import * as fs from 'fs';

export async function loginAndSaveCookies( page: Page ,context: BrowserContext) {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(testData.validUser.email, testData.validUser.password);
    await page.waitForLoadState('networkidle');
    const cookies = await context.cookies();
    fs.writeFileSync('cookies.json', JSON.stringify(cookies, null, 2));

    return cookies;
}