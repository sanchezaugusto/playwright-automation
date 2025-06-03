import { test, expect } from '@playwright/test';
import { InventoryPage } from '../../../pages/InventoryPage';
import { loadCookiesOrLogin } from '../../../utils/loadCookiesOrLogin';

test.describe('Inventory Filters', () => {
  let inventoryPage: InventoryPage;

  test.beforeEach(async ({ page, context }) => {

    await loadCookiesOrLogin(page , context);

    inventoryPage = new InventoryPage(page);
    await inventoryPage.goto();
  });

  test('should sort items by A to Z', async () => {
    await inventoryPage.orderByAZ();
    const itemNames = await inventoryPage.page.locator('.inventory_item_name').allTextContents();
    const sortedNames = [...itemNames].sort();
    expect(itemNames).toEqual(sortedNames);
  });

  test('should sort items by Z to A', async () => {
    await inventoryPage.orderByZA();
    const itemNames = await inventoryPage.page.locator('.inventory_item_name').allTextContents();
    const sortedNames = [...itemNames].sort().reverse();
    expect(itemNames).toEqual(sortedNames);
  });

  test('should sort items by Low to High price', async () => {
    await inventoryPage.orderByLoHi();
    const itemPrices = await inventoryPage.page.locator('.inventory_item_price').allTextContents();
    const numericPrices = itemPrices.map(price => parseFloat(price.replace('$', '')));
    const sortedPrices = [...numericPrices].sort((a, b) => a - b);
    expect(numericPrices).toEqual(sortedPrices);
  });

  test('should sort items by High to Low price', async () => {
    await inventoryPage.orderByHiLo();
    const itemPrices = await inventoryPage.page.locator('.inventory_item_price').allTextContents();
    const numericPrices = itemPrices.map(price => parseFloat(price.replace('$', '')));
    const sortedPrices = [...numericPrices].sort((a, b) => b - a);
    expect(numericPrices).toEqual(sortedPrices);
  });
});