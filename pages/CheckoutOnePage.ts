import {Page, Locator} from '@playwright/test';
import {BASE_URL} from '../utils/config';

export class CheckoutOnePage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly zipCodeInput: Locator;
  readonly continueButton: Locator;
  readonly cancelButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.locator('#first-name');
    this.lastNameInput = page.locator('#last-name');
    this.zipCodeInput = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');
    this.cancelButton = page.locator('#cancel');
  }
  
    async goto() {
        await this.page.goto(BASE_URL + '/checkout-step-one.html');
    }

    async fillCheckoutForm(firstName: string, lastName: string, zipCode: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.zipCodeInput.fill(zipCode);
    }

    async clickContinue() {
        await this.continueButton.click();
    }

    async clickCancel() {
        await this.cancelButton.click();
    }

}
