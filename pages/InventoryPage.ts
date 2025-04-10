import {Page, Locator} from '@playwright/test';
import {BASE_URL} from '../utils/config';

export class InventoryPage {
  readonly page: Page;
  readonly addToCartButton: Locator;
  readonly cartIcon: Locator;
  readonly inventoryItem: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
    this.cartIcon = page.locator('#shopping_cart_container');
    this.inventoryItem = page.locator('.inventory_item');
    this.checkoutButton = page.locator('#checkout');
  }

  async goto() {
    await this.page.goto(BASE_URL + '/inventory.html');
  }

    async addToCart() {
        await this.addToCartButton.click();
    }
}