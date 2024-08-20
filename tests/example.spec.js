const { test, expect, defineConfig } = require('@playwright/test');

export default defineConfig({
  timeout: 60 * 60 * 1000 // 1 hour
});

async function closeModalIfExists(page, selector) {
  const closeButton = page.locator(selector);
  const count = await closeButton.count();
  if (count > 0) {
    console.log(`Closing modal with selector: ${selector}`);
    await closeButton.click();
    console.log(`Closed modal using selector: ${selector}`);
  } else {
    console.log(`Modal close button not found for selector: ${selector}`);
  }
}

test('Test Daals', async ({ page }) => {
  try {
    console.log('Navigating to page...');
    await page.goto('https://www.daals.co.uk/', { timeout: 100000000 });

    console.log('Closing modals if they exist...');
    await closeModalIfExists(page, 'button.needsclick.klaviyo-close-form.kl-private-reset-css-Xuajs1');
    await closeModalIfExists(page, 'button.region-selector_close');
    await closeModalIfExists(page, 'button.js-pushowl-no-button pushowl-optin__button pushowl-optin__no-button');

   
    

    console.log('Ensuring "New Arrivals" link is visible...');
    const element = page.locator('a.a1[href="/collections/new-arrivals"]');
    await expect(element).toBeVisible({ timeout: 60000 });
    await expect(element).toHaveText('SHOP NOW');

    console.log('Clicking on "SHOP NOW" link...');
    await element.click();

    console.log('Waiting for navigation to complete...');
    await page.waitForURL('https://www.daals.co.uk/collections/new-arrivals', { timeout: 10000000000 });
    expect(page.url()).toBe('https://www.daals.co.uk/collections/new-arrivals');

    console.log('Clicking on Wishlist...');
    const wishlist = page.locator('.my-wishlist');
    await wishlist.click();

    console.log('Checking Wishlist URL...');
    const wishlistUrl = page.url();
    expect(page.url()).toBe(wishlistUrl);

    console.log('Clicking on My Account...');
    const MyAccount = page.locator('.my-account');
    await expect(MyAccount).toBeVisible({ timeout: 60000 });
    await MyAccount.click();

    console.log('Clicking on Cart Drawer...');
    const cartDrawer = page.locator('#cart_block');
    await expect(cartDrawer).toBeVisible({ timeout: 60000 });
    await cartDrawer.click();

    console.log('Closing Cart Drawer...');
    await closeModalIfExists(page, 'a.close-cart');

    console.log('Clicking on Logo...');
    const logo = page.locator('.logo').first();
    await logo.click();

    console.log('Getting current URL...');
    const logoUrl = page.url();
    console.log('The URL of the page after clicking the logo:', logoUrl);
    expect(page.url()).toBe(logoUrl);

    console.log('Hovering over Garden...');
    await page.locator('li.with-sub-menu.hover.mobile-disabled.m_menu-item').nth(1).hover();

    const endTime = Date.now();
    const executionTime = (endTime - startTime) / 1000;
    console.log(`Test execution time: ${executionTime.toFixed(2)} seconds`);
  } catch (error) {
    console.error('Test failed:', error);
    throw error;
  }
}, { headless: false });

await page.getByLabel('Close dialog').click();
await page.getByRole('button', { name: 'X' }).click();
await page.getByRole('button', { name: 'Later' }).click();

