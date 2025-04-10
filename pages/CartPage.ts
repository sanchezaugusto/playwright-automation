import {Page, Locator} from '@playwright/test';
import {BASE_URL} from '../utils/config';

export class CartPage {
  readonly page: Page;
  readonly checkoutButton: Locator;
  readonly continueShoppingButton: Locator;
  readonly removeItemButton: Locator;
  readonly cartItem: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutButton = page.locator('#checkout');
    this.continueShoppingButton = page.locator('#continue-shopping');
    this.removeItemButton = page.locator('#remove-sauce-labs-backpack');
    this.cartItem = page.locator('');
  }

  async goto() {
    await this.page.goto(BASE_URL + '/cart.html');
  }

  async clickCheckout() {
    await this.checkoutButton.click();
  }
}