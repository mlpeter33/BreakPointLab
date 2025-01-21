import { Page } from '@playwright/test';
 
export const DynamicSelect = async (page: Page): Promise<void> => {

  const options = await page.getByRole('listbox').locator('role=option').allTextContents()
  if (options.length === 0) {
    throw new Error('No options found in the dropdown');
  }

  const randomIndex = Math.floor(Math.random() * options.length);
  const randomOption = options[randomIndex];

  await page.getByRole('option', { name: randomOption }).click(); 

};