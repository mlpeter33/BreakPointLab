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

export const NavigateToRandomLink = async (page: Page, excludeExternal: boolean = true): Promise<void> => {
    const linksLocator = excludeExternal
      ? page.locator('role=link', { hasNotText: 'http' }) 
      : page.locator('role=link');
  
    const linksCount = await linksLocator.count();
    if (linksCount === 0) {
      throw new Error('No links found on the page.');
    }
  
    const randomLinkIndex = Math.floor(Math.random() * linksCount);
    await linksLocator.nth(randomLinkIndex).click();
  };

// Just call the function as NavigateToRandomLink(page) to navigate to a random link on the page.
// You can also pass an optional excludeExternal parameter to exclude external links from the search.
// Example: NavigateToRandomLink(page, false) to navigate to any link, including external ones.
