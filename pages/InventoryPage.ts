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
  readonly burgerButton: Locator;
  readonly logoutButton: Locator;
  readonly addtoCartProduct1: Locator;
  readonly addtoCartProduct2: Locator;
  readonly addtoCartProduct3: Locator;
  readonly twitterIcon: Locator;
  readonly facebookIcon: Locator;
  readonly linkedinIcon: Locator;

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
    this.burgerButton = page.locator('#react-burger-menu-btn');
    this.logoutButton = page.locator('#logout_sidebar_link');
    this.addtoCartProduct1 = page.locator('#add-to-cart-sauce-labs-bolt-t-shirt');
    this.addtoCartProduct2 = page.locator('#add-to-cart-sauce-labs-fleece-jacket');
    this.addtoCartProduct3 = page.locator('#add-to-cart-sauce-labs-onesie');
    this.twitterIcon = page.locator('.social_twitter a');
    this.facebookIcon = page.locator('.social_facebook a');
    this.linkedinIcon = page.locator('.social_linkedin a');
  }

  async goto() {
    await this.page.goto(BASE_URL + '/inventory.html');
  }

  async addProductToCart(addToCartProductButton: string) {
    //addToCartProductButton is the "Add to Cart" id for a specific product
    await this.page.locator(addToCartProductButton).click();
  }

  async addToCart() {
      await this.addToCartButton.click();
  }

  async gotoCart() {
    await this.cartIcon.click();
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

async logout() {
    await this.burgerButton.click();
    await this.logoutButton.click();
}
}