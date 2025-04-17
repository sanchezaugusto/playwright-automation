import {Page, Locator} from '@playwright/test';
import {BASE_URL} from '../utils/config';

export class InventoryPage {
  readonly page: Page;
  readonly addToCartButton: Locator;
  readonly cartIcon: Locator;
  readonly inventoryItem: Locator;
  readonly checkoutButton: Locator;
  readonly dropdown: Locator;
  readonly dropdownOptionAZ: Locator;
  readonly dropdownOptionZA: Locator;
  readonly dropdownOptionLoHi: Locator;
  readonly dropdownOptionHiLo: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
    this.cartIcon = page.locator('#shopping_cart_container');
    this.inventoryItem = page.locator('.inventory_item');
    this.checkoutButton = page.locator('#checkout');
    this.dropdown = page.locator('.product_sort_container');
    this.dropdownOptionAZ = page.locator('.product_sort_container option[value="az"]');
    this.dropdownOptionZA = page.locator('.product_sort_container option[value="za"]');
    this.dropdownOptionLoHi = page.locator('.product_sort_container option[value="lohi"]');
    this.dropdownOptionHiLo = page.locator('.product_sort_container option[value="hilo"]');
  }

  async goto() {
    await this.page.goto(BASE_URL + '/inventory.html');
  }

  async addToCart() {
      await this.addToCartButton.click();
  }

  async orderByAZ() {
    await this.dropdown.selectOption('az');
}

async orderByZA() {
    await this.dropdown.selectOption('za');
}

async orderByLoHi() {
    await this.dropdown.selectOption('lohi');
}

async orderByHiLo() {
    await this.dropdown.selectOption('hilo');
}


}