import { Page } from '@playwright/test';

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