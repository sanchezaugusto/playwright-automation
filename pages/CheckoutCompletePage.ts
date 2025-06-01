import {Page, Locator} from '@playwright/test';
import {BASE_URL} from '../utils/config';

export class CheckoutCompletePage {
  readonly page: Page;
  readonly backHomeButton: Locator;
  readonly orderMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.backHomeButton = page.locator('#back-to-products');
    this.orderMessage = page.locator('.complete-header'); // Adjust the selector based on the actual order confirmation message element
  }

  async goto() {
    await this.page.goto(BASE_URL + '/checkout-complete.html');
  }

  async clickBackHome() {
    await this.backHomeButton.click();
  }

  async getOrderMessage() {
    return await this.orderMessage.textContent();
  }
}