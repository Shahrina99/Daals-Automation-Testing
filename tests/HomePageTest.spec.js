const { test, expect } = require('@playwright/test');
const { Console } = require('console');

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

test('Home Page', async ({ page }) => {

  console.log('Navigating to page...');
  await page.goto('https://www.daals.co.uk/', { waitUntil: 'load' });
  console.log('Page loaded completely.');

  await page.waitForTimeout(4000);

  console.log('Closing modals if they exist...');
  
  await closeModalIfExists(page, 'button.needsclick.klaviyo-close-form.kl-private-reset-css-Xuajs1');
  await closeModalIfExists(page, 'button.region-selector_close');
  await closeModalIfExists(page, 'button.js-pushowl-no-button pushowl-optin__button pushowl-optin__no-button');
  await page.getByRole('button', { name: 'Later' }).click();


  

  // await page.locator("#boost-pfs-search-box-2").fill('Bed');
  // await page.locator("#boost-pfs-search-box-2").press('Enter');



  // Step 1: Click to open the dropdown menu for selecting a country
  // await page.locator('div:nth-child(4) > .country-wraper > .country-title').first().click();
  // await page.waitForTimeout(2000);
  // console.log('Successful dropdown');

  // // Step 2: Select the "US" option from the dropdown
  // await page.getByText('US', { exact: true }).nth(1).click();
  // await page.waitForTimeout(4000);
  // console.log('Successful US');

  // // Step 3: Close any modal that appears after selecting "US"
  // await closeModalIfExists(page, 'button.region-selector_close');
  // await page.waitForTimeout(4000);

  // // Step 4: Open the dropdown menu again to select the "UK" option
  // await page.locator('div:nth-child(4) > .country-wraper > .country-title').first().click();
  // await page.waitForTimeout(2000);
  // console.log('Successful dropdown for UK');

  // //Step 5: Select the "UK" option from the dropdown
  // await page.getByText('UK', { exact: true }).nth(1).click();
  // await page.waitForTimeout(4000);
  // console.log('Successful UK');


  // await page.getByPlaceholder('E-Mail').click();
  // await page.getByPlaceholder('E-Mail').fill('yobewo6284@iteradev.com');
  // await page.getByPlaceholder('Password').click();
  // await page.getByPlaceholder('Password').fill('Taw94060');
  // await page.getByRole('button', { name: 'Login' }).click();

  // await page.evaluate(() => {
  //   window.scrollTo(0, 500); // Scrolls to 500 pixels down from the top
  // });
  // await page.getByRole('heading', { name: 'Shop by category' }).isVisible();
  // await page.waitForTimeout(4000);
  // console.log ("The shop by category is visible");
  
  // await page.locator('#inner-custom').nth(1).click();
  // await page.waitForTimeout(3000);
  // await page.goto('https://www.daals.co.uk/'); 
  
  // await page.locator('#inner-custom').nth(2).click();
  // await page.waitForTimeout(2000);

  
    

  // await page.locator('#inner-custom').nth(1).click();

  // //Search
  // test('test', async ({ page }) => {
  //   await page.goto('https://www.daals.co.uk/');
  //   await page.getByLabel('Close dialog').click();
  //   await page.getByRole('button', { name: 'X' }).click();
    // await page.getByRole('combobox', { name: 'When autocomplete results are' }).fill('Bed');
    // await page.goto('https://www.daals.co.uk/search?q=Bed&type=product');

    /*Search product and Add to cart*/

    // await page.getByRole('combobox', { name: 'When autocomplete results are' }).click();
    // await page.waitForTimeout(2000);
    // await page.getByRole('combobox', { name: 'When autocomplete results are' }).fill('Bed');
    // await page.waitForTimeout(2000);
    // await page.getByRole('combobox', { name: 'When autocomplete results are' }).focus();
    // await page.waitForTimeout(2000);
    // await page.getByRole('combobox', { name: 'When autocomplete results are' }).press('Enter');
    // await page.waitForTimeout(2000);
    // await page.getByRole('combobox', { name: 'When autocomplete results are' }).press('Enter');
    // await page.waitForTimeout(4000);
    // await page.evaluate(() => {
    //   window.scrollTo(0, 200); // Scrolls to 500 pixels down from the top
    //   });


    // await page.goto('https://www.daals.co.uk/search?q=Bed&type=product');
    // await page.locator(".boost-pfs-filter-product-item-text-alignment-left.bc-al-style4 > div:nth-child(1)").hover();  // Hover over the element
    // await page.waitForTimeout(2000);
    // await page.locator("#boost-pfs-addtocart-product-form-6981291442227 > div > button").click();  // Then click on the element
    // await page.waitForTimeout(2000);
    // await page.locator("label[for='swatch-0-super-king']").click();
    // await page.locator("#AddToCart-product-quickview-template").click();
    // await page.waitForTimeout(2000);
    // await closeModalIfExists(page, 'a.close-cart');
    // await page.waitForTimeout(2000);

    // // Container of #USPs befor New arrivals
    //await page.goto('https://www.daals.co.uk/'); 
    // await page.locator("a.b-1").click();
    // await page.goBack();
    // await page.locator("a.b-2").click();
    // await page.goBack();
    // await page.locator("a.b-3").click();
    // await page.goBack();

    await page.locator('.item1 a[href="/collections/dining-tables"]').click();
    await page.waitForTimeout(2000);
    await page.locator('li:nth-child(3) > .variant_img').first().click();
    await page.waitForTimeout(2000);
    await page.locator('div:nth-child(4) > center > a').first().click();
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: '-8 Seater Extending Table' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: '' }).click();
    await page.locator('a.q_up').click();
    await page.evaluate(() => {
      window.scrollTo(0, 500); // Scrolls to 500 pixels down from the top
    });
    await page.locator('#sticky-info-template--15432921153587__main').getByRole('button', { name: 'Add to cart'}).click();
    await page.waitForTimeout(2000);
    await page.locator("#cart-sidebar > div.cart-window-header > a").click();
    await page.waitForTimeout(2000);




  



    // test('test', async ({ page }) => {
    //   await page.goto('https://www.daals.co.uk/collections/dining-tables');
    //   await page.getByLabel('Close dialog').click();
    //   await page.getByRole('button', { name: 'X' }).click();
    //   await page.getByRole('button', { name: 'Later' }).click();
    //   await page.locator('li:nth-child(3) > .variant_img').first().click();
    //   await page.locator('div:nth-child(4) > center > a').first().click();
    //   await page.getByRole('link', { name: '-8 Seater Extending Table' }).click();
    //   await page.locator('html').click();
    //   await page.getByRole('link', { name: '' }).click();
    //   await page.getByRole('link', { name: '' }).click();
    //   await page.getByRole('link', { name: '' }).click();
    // });










    //await page.getByRole('combobox', { name: 'When autocomplete results are' }).click();
    //await page.waitForTimeout(2000);
    // await page.getByRole('link', { name: 'Ophelia Ecru Boucle Dining' }).click();
    // await page.waitForTimeout(2000);
  
  //   await page.getByRole('combobox', { name: 'When autocomplete results are' }).click();
  //   await page.getByRole('combobox', { name: 'When autocomplete results are' }).fill('');
  //   await page.getByRole('combobox', { name: 'When autocomplete results are' }).click();
  //   await page.getByRole('link', { name: 'Ophelia Ecru Boucle Dining' }).click();
  // });
  





 }) 
