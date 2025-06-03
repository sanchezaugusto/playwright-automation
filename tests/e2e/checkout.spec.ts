import {test, expect} from '@playwright/test';
import {LoginPage} from '../../pages/LoginPage';
import {InventoryPage} from '../../pages/InventoryPage';
import {CartPage} from '../../pages/CartPage';
import {CheckoutOnePage} from '../../pages/CheckoutOnePage';
import {CheckoutTwoPage} from '../../pages/CheckoutTwoPage';
import {CheckoutCompletePage} from '../../pages/CheckoutCompletePage';
import {testData} from '../../utils/testData';

test.describe('Checkout Process', () => {
    test('should complete the checkout process successfully', async ({page}) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);
        const checkoutOnePage = new CheckoutOnePage(page);
        const checkoutTwoPage = new CheckoutTwoPage(page);
        const checkoutCompletePage = new CheckoutCompletePage(page);

        // Step 1: Login
        await loginPage.goto();
        await loginPage.login(testData.validUser.email, testData.validUser.password);

        // Step 2: Add item to cart
        //await inventoryPage.goto();
        await inventoryPage.addToCart();

        // Step 3: Go to cart and proceed to checkout
        await inventoryPage.cartIcon.click();
        await cartPage.clickCheckout();

        // Step 4: Fill out checkout information
        await checkoutOnePage.fillCheckoutForm(testData.checkoutInfo.firstName, testData.checkoutInfo.lastName, testData.checkoutInfo.postalCode);

        // Step 5: Finish the checkout process
        await checkoutTwoPage.clickFinish();

        // Step 6: Verify the completion message
        //await expect(checkoutCompletePage.pageTitle).toHaveText('CHECKOUT: COMPLETE!');
        await expect(checkoutCompletePage.backHomeButton).toBeVisible();
    });
});
