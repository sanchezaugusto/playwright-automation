import {Page, Locator} from '@playwright/test';
import {BASE_URL} from '../utils/config';

export class CheckoutTwoPage {
    readonly page: Page;
    readonly finishButton: Locator;
    readonly cancelButton: Locator;
    readonly cartItem: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.finishButton = page.locator('#finish');
        this.cancelButton = page.locator('#cancel');
        this.cartItem = page.locator(''); // Adjust the selector based on the actual cart item element
    }
    
    async goto() {
        await this.page.goto(BASE_URL + '/checkout-step-two.html');
    }
    
    async clickFinish() {
        await this.finishButton.click();
    }
    
    async clickCancel() {
        await this.cancelButton.click();
    }
}