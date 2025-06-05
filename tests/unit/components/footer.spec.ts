import {test, expect} from '@playwright/test';
import {InventoryPage} from '../../../pages/InventoryPage';

test.describe('Footer', () => {
    let inventoryPage: InventoryPage;

    test.beforeEach(async ({ page }) => {
        footer = new Footer(page);
        await footer.goto();
    });

    test('should display footer', async () => {
        await expect(footer.footer).toBeVisible();
    });
});