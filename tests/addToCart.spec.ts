import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {InventoryPage} from '../pages/InventoryPage';
import {testData} from '../utils/testData';

test.describe('Add to cart functionality', () => {
    test('should add item to cart successfully', async ({page}) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        await loginPage.goto();
        await loginPage.login(testData.validUser.email, testData.validUser.password);

        await inventoryPage.goto();
        await inventoryPage.addToCart();

        // Verify that the item is added to the cart
        await expect(inventoryPage.cartIcon).toBeVisible();
        await expect(inventoryPage.cartIcon).toHaveText('1');
    });
});