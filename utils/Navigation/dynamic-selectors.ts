import { Page } from '@playwright/test';

//Select a random option from a dropdown list
export const DynamicDdlSelect = async (page: Page): Promise<void> => {
    const options = await page.getByRole('listbox').locator('role=option').allTextContents()
    if (options.length === 0) {
      throw new Error('No options found in the dropdown');
    }
    const randomIndex = Math.floor(Math.random() * options.length);
    const randomOption = options[randomIndex];
    await page.getByRole('option', { name: randomOption }).click(); 
  };

//Select a random option from a table list
export const DynamicRowSelect = async (page: Page): Promise<void> => {
    const rowsLocator = page.locator('role=row');
    const [rowsCount, randomRowIndex] = await Promise.all([
      rowsLocator.count(),
      Promise.resolve(Math.floor(Math.random() * await rowsLocator.count())),
    ]);
    if (rowsCount === 0) {
      throw new Error('No rows found in the table');
    }
    await rowsLocator.nth(randomRowIndex).getByRole('link').click();
}
