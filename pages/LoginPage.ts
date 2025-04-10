import { Page, Locator } from '@playwright/test';
import { BASE_URL } from '../utils/config'

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.submitButton = page.locator('#login-button');
    this.errorMessage = page.locator('[data-test="error"]'); // Adjust the selector based on the actual error message element
  }

  async goto() {
    await this.page.goto(BASE_URL);
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }
}
