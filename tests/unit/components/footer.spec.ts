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

    test('should display footer', async () => {
        await expect(inventoryPage.twitterIcon).toHaveAttribute('href','https://twitter.com/saucelabs');
    });
});