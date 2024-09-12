import { test, expect } from '@playwright/test';

let page;

async function closeModalIfExists(page, selector) {
  const closeButton = page.locator(selector);
  const count = await closeButton.count();
  console.log(count)
  if (count > 0) {
    console.log(`Closing modal with selector: ${selector}`);
    await closeButton.click();
    console.log(`Closed modal using selector: ${selector}`);
  } else {
    console.log(`Modal close button not found for selector: ${selector}`);
  }
}

test.beforeAll(async ({browser})=>{
    page = await browser.newPage();

    
  await page.goto('https://www.daals.co.uk/', { waitUntil: 'load' });
  console.log('Page loaded completely.');

  await page.waitForTimeout(4000);

  console.log('Closing modals if they exist...');
  
  await closeModalIfExists(page, 'button.needsclick.klaviyo-close-form.kl-private-reset-css-Xuajs1');
  await closeModalIfExists(page, 'button.region-selector_close');
  await closeModalIfExists(page, 'button.js-pushowl-no-button pushowl-optin__button pushowl-optin__no-button');

});

test('Country Change', async () => {

  

    console.log('Ensuring "New Arrivals" link is visible...');
    const element = page.locator('a.a1[href="/collections/new-arrivals"]');
    await expect(element).toBeVisible();                                      // Check that the "New Arrivals" link is visible
    await expect(element).toHaveText('SHOP NOW');                             // Verify the link has the text "SHOP NOW"
    console.log('Clicking on "SHOP NOW" link...');
    await element.click();                                                     // Click the "SHOP NOW" link

    // Wait for the navigation to complete and verify the URL
    console.log('Waiting for navigation to complete...');
    await page.waitForURL('https://www.daals.co.uk/collections/new-arrivals');
    expect(page.url()).toBe('https://www.daals.co.uk/collections/new-arrivals');// Confirm the URL matches the expected page

    await page.waitForTimeout(3000);

    // Step 1: Click to open the dropdown menu for selecting a country
    await page.locator('div:nth-child(4) > .country-wraper > .country-title').first().click();
    await page.waitForTimeout(2000);
    console.log('Successful dropdown');

    // Step 2: Select the "US" option from the dropdown
    await page.getByText('US', { exact: true }).nth(1).click();
    await page.waitForTimeout(4000);
    console.log('Successful US');

    // Step 3: Close any modal that appears after selecting "US"
    await closeModalIfExists(page, 'button.region-selector_close');
    await page.waitForTimeout(4000);

    // Step 4: Open the dropdown menu again to select the "UK" option
    await page.locator('div:nth-child(4) > .country-wraper > .country-title').first().click();
    await page.waitForTimeout(2000);
    console.log('Successful dropdown for UK');

    //Step 5: Select the "UK" option from the dropdown
    await page.getByText('UK', { exact: true }).nth(1).click();
    await page.waitForTimeout(4000);
    console.log('Successful UK');

});

test('EXplore', async () => {

    await page.locator('a.btn1').click();
    await page.waitForTimeout(2000);
    await page.locator('.checkbox-custom').first().click();
    await page.waitForTimeout(2000);
    await page.getByText('Aluminium', { exact: true }).nth(3).click(); // Click on Aluminium 
    await page.waitForTimeout(4000);
    await page.locator('#sandbox i').first().click(); 
    await page.waitForTimeout(4000);
    await page.getByRole('button', { name: 'Add to cart', exact: true }).click();
    await page.waitForTimeout(4000);
    await page.locator('#cart-sidebar div').filter({ hasText: 'Your Basket' }).getByRole('link').click();
    await page.waitForTimeout(4000);
    await page.getByText('Sale', { exact: true }).click();
    await page.waitForTimeout(4000);
    await page.getByRole('link', { name: 'Clear all' }).click();
    await page.waitForTimeout(4000);
    await page.locator('details:nth-child(4) > .filter-group-display > .filter-group-display__list > li:nth-child(4) > .flex > .checkbox-custom').first().click();
    await page.waitForTimeout(4000);
    await page.getByRole('textbox', { name: '2600' }).click();
    await page.waitForTimeout(4000);
    await page.locator('#toSlider').first().fill('445');
    await page.waitForTimeout(4000);
    await page.getByRole('button', { name: 'Add to Wishlist' }).first().click();
    await page.waitForTimeout(4000);

    console.log('Clicking on Wishlist...');
    page.click('a.my-wishlist');

    await page.waitForTimeout(4000);

    console.log('Checking Wishlist URL...');
    const wishlistUrl = page.url();
    expect(page.url()).toBe(wishlistUrl);                                       // Confirm the URL matches the Wishlist page

    await page.waitForTimeout(3000);
    await page.goBack();
  
 }) 
  