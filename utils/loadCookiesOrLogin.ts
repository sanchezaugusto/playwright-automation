import { loginAndSaveCookies } from "./loginAndSaveCookies";
import { Page , BrowserContext} from "@playwright/test";
import * as fs from 'fs';

export async function loadCookiesOrLogin(page: Page , context: BrowserContext) {
    const cookieFilePath = 'cookies.json';

    // Check if the cookies file exists
    if (fs.existsSync(cookieFilePath)) {
        const cookies = JSON.parse(fs.readFileSync(cookieFilePath, 'utf-8'));

        // Check if any cookie has expired
        const now = Math.floor(Date.now() / 1000); // Current time in seconds
        const sessionCookie = cookies.find((cookie: any) => cookie.name === 'session-username');

        if (sessionCookie && sessionCookie.expires > now) {
            console.log('Cookies are still valid.');
            await context.addCookies(cookies); // Load cookies into the browser context
            return;
        } else {
            console.log('Cookies have expired. Logging in again...');
        }
    } else {
        console.log('No cookies file found. Logging in...');
    }

    // If cookies are expired or missing, log in and save new cookies
    await loginAndSaveCookies(page, context);
}