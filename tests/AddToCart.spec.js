import { test, expect } from '@playwright/test';

//Close Modal function
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
  
    console.log('Navigating to page...');
    await page.goto('https://www.daals.co.uk/');

    console.log('Closing modals if they exist...');
    await closeModalIfExists(page, 'button.needsclick.klaviyo-close-form.kl-private-reset-css-Xuajs1');
    await closeModalIfExists(page, 'button.region-selector_close');
    await closeModalIfExists(page, 'button.js-pushowl-no-button pushowl-optin__button pushowl-optin__no-button');

  // Hover on Garden
  console.log('Hovering over Garden...');
  await page.locator('li.with-sub-menu.hover.mobile-disabled.m_menu-item').nth(1).hover();

  await page.getByRole('link', {name: 'Garden   '}).click();
  
  // Click to the PDP
  await page.getByRole('link', { name: 'Jardin Aluminium Large Corner Casual Dining Set with Rising Table, Granite Jardin Aluminium Large Corner Casual Dining Set with Rising Table, Granite', exact: true }).click();
  // Add to cart
  await page.click('.button-cart.not-empty.add-to-cart');
  //CartDrawer Checkout
  await page.getByRole('link', {name : 'Checkout'}).click();
  //wait for element
  await page.waitForTimeout(4000);
  await page.getByRole('link', {name : 'CHECKOUT SECURELY'}).click();

});  
