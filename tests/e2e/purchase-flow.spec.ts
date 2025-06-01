import {test, expect} from '@playwright/test';
import {LoginPage} from '../../pages/LoginPage';
import {InventoryPage} from '../../pages/InventoryPage';
import {CartPage} from '../../pages/CartPage';
import {CheckoutOnePage} from '../../pages/CheckoutOnePage';
import {CheckoutTwoPage} from '../../pages/CheckoutTwoPage';
import {CheckoutCompletePage} from '../../pages/CheckoutCompletePage';

test.describe('Purchase Flow', () => {
    test('should complete the purchase flow', async ({page}) => {

        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);
        const checkoutOnePage = new CheckoutOnePage(page);
        const checkoutTwoPage = new CheckoutTwoPage(page);
        const checkoutCompletePage = new CheckoutCompletePage(page);
        
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');

        await inventoryPage.goto();
        await inventoryPage.addProductToCart('#add-to-cart-sauce-labs-backpack');
        await inventoryPage.addProductToCart('#add-to-cart-sauce-labs-bolt-t-shirt');
        await inventoryPage.addProductToCart('#add-to-cart-sauce-labs-fleece-jacket');
        await inventoryPage.gotoCart();

        await cartPage.clickCheckout();

        await checkoutOnePage.fillCheckoutForm('John', 'Doe', '12345');
        await checkoutTwoPage.clickFinish();

        await expect(checkoutCompletePage.orderMessage).toHaveText('Thank you for your order!');

        await checkoutCompletePage.clickBackHome();
        await inventoryPage.logout();
    });
});