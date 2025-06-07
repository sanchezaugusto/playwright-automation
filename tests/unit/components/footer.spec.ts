import {test, expect} from '@playwright/test';
import {InventoryPage} from '../../../pages/InventoryPage';
import {loadCookiesOrLogin} from '../../../utils/loadCookiesOrLogin';

test.describe('Footer', () => {
    let inventoryPage: InventoryPage;

    test.beforeEach(async ({ page, context }) => {
        await loadCookiesOrLogin(page , context);
        inventoryPage = new InventoryPage(page);
        await inventoryPage.goto();
    });

    test('should display twitter link', async () => {
        await expect(inventoryPage.twitterIcon).toHaveAttribute('href','https://twitter.com/saucelabs');
    });

    test('should display facebook link', async () => {
        await expect(inventoryPage.facebookIcon).toHaveAttribute('href','https://www.facebook.com/saucelabs');
    })

    test('should display linkedin link', async () => {
        await expect(inventoryPage.linkedinIcon).toHaveAttribute('href','https://www.linkedin.com/company/sauce-labs/');
    })
});