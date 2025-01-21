import { Page } from '@playwright/test';

export const ClickRandomButton = async (page: Page, containerSelector: string = ''): Promise<void> => { 

    const buttonsLocator = containerSelector
    ? page.locator(`${containerSelector} >> role=button`)
    : page.locator('role=button');

  const buttonsCount = await buttonsLocator.count();
  if (buttonsCount === 0) {
    throw new Error('No buttons found to click.');
  }

  const randomButtonIndex = Math.floor(Math.random() * buttonsCount);
  await buttonsLocator.nth(randomButtonIndex).click();
};

// Just call the function as ClickRandomButton(page) to click a random button on the page. 
// Also, you can pass an optional containerSelector parameter to narrow down the search for buttons.
// Example: ClickRandomButton(page, '#modal') to click a random button inside a modal.