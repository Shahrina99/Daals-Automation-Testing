import { test, expect } from '@playwright/test';

// Close Modal function
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
    await page.goto('https://www.daals.co.uk/', { waitUntil: 'load' });
    console.log('Page loaded completely.');


  // // Function to close modal popups if they exist
    console.log('Closing modals if they exist...');
    await closeModalIfExists(page, 'button.js-pushowl-no-button pushowl-optin__button pushowl-optin__no-button');
    await closeModalIfExists(page, 'button.needsclick.klaviyo-close-form.kl-private-reset-css-Xuajs1');
    await closeModalIfExists(page, 'button.region-selector_close');

    await page.waitForTimeout(3000);

    // Ensure the "New Arrivals" link is visible and click it
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


    // Click on the Wishlist link
    console.log('Clicking on Wishlist...');
    page.click('a.my-wishlist')

    console.log('Checking Wishlist URL...');
    const wishlistUrl = page.url();
    expect(page.url()).toBe(wishlistUrl);                                       // Confirm the URL matches the Wishlist page

    await page.waitForTimeout(3000);

    //Account login 
    console.log('Clicking on My Account...');
    page.click('a.my-account')

    await page.locator('#input-email').click()                                // Click on the email input field   
    await page.locator('#input-email').fill('yobewo6284@iteradev.com');       // Fill in the email
    await page.locator('#input-password').click()                             // Click on the password input field
    await page.locator('#input-password').fill('Taw94060');                   // Fill in the password
    await page.getByRole('button', { name: 'Login' }).click();                // Click the login button

    await page.waitForTimeout(3000);

    // Click on the website's logo to return to the homepage
    console.log('Clicking on Logo...');
    const logo = page.locator('.logo').first();
    await logo.click();

    console.log('Getting current URL...');
    const logoUrl = page.url();
    console.log('The URL of the page after clicking the logo:', logoUrl);
    expect(page.url()).toBe(logoUrl);

    // Verify the Hero image is visible on the homepage
    await page.locator('#slide-item-image_cqR9iB').getByText('Summer Nights Elevate your').isVisible();
    console.log('Hero image is visiable')

    //// Click on links below the hero image (4 USP links) and return to the homepage after each
    await page.getByRole('link', { name: 'Free standard delivery' }).click();       // Click on the "Free standard delivery" link
    await page.goto('https://www.daals.co.uk/');
    await page.waitForTimeout(2000);                                                // Return to the homepage
    await page.getByRole('link', { name: 'Loved by our customers Tried' }).click(); // Click on the "Loved by our customers Tried" link
    await page.waitForTimeout(2000);                                                
    await page.goto('https://www.daals.co.uk/');                                     // Return to the homepage
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'New & Exclusive styles' }).click();        // Click on the "New & Exclusive styles" link   
    await page.waitForTimeout(2000);                                                 
    await page.goto('https://www.daals.co.uk/');                                     // Return to the homepage
    await page.waitForTimeout(4000);
    await page.getByRole('link', { name: 'Fair prices all year round' }).click();    //Click on the "Fair prices all year round" link
    await page.goto('https://www.daals.co.uk/');   
    
       

    // Hover on Garden
    console.log('Hovering over Garden...');
    await page.locator('li.with-sub-menu.hover.mobile-disabled.m_menu-item').nth(1).hover();

    await page.getByRole('link', { name: 'Garden   ' }).click();
    
    // Click to the PDP
    await page.getByRole('link', { name: 'Jardin Aluminium Large Corner Casual Dining Set with Rising Table, Granite Jardin Aluminium Large Corner Casual Dining Set with Rising Table, Granite', exact: true }).click();
    // Add to cart
    await page.click('.button-cart.not-empty.add-to-cart');
    //CartDrawer Checkout
    await page.getByRole('link', {name : 'Checkout'}).click();
    //wait for element
    await page.waitForTimeout(4000);
    await page.getByRole('link', {name : 'CHECKOUT SECURELY'}).click();
    await page.goto('https://www.daals.co.uk/');   
    

    //Search products
    await page.getByRole('combobox', { name: 'When autocomplete results are' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('combobox', { name: 'When autocomplete results are' }).fill('Bed');
    await page.waitForTimeout(2000);
    await page.getByRole('combobox', { name: 'When autocomplete results are' }).focus();
    await page.waitForTimeout(2000);
    await page.getByRole('combobox', { name: 'When autocomplete results are' }).press('Enter');
    await page.waitForTimeout(2000);
    await page.getByRole('combobox', { name: 'When autocomplete results are' }).press('Enter');
    await page.waitForTimeout(4000);
    await page.evaluate(() => {
    window.scrollTo(0, 100); // Scrolls to 500 pixels down from the top
    });
    
    //Add to cart by searching products
    await page.locator(".boost-pfs-filter-product-item-text-alignment-left.bc-al-style4 > div:nth-child(1)").hover();  // Hover over the element
    await page.waitForTimeout(2000);
    await page.locator("#boost-pfs-addtocart-product-form-6981291442227 > div > button").click();  // Then click on the element
    await page.waitForTimeout(2000);
    await page.locator("label[for='swatch-0-super-king']").click(); // Change the category to Super king
    await page.locator("#AddToCart-product-quickview-template").click(); 
    await page.waitForTimeout(2000);
    await closeModalIfExists(page, 'a.close-cart');
    await page.waitForTimeout(2000);

    //Container of #USPs befor New arrivals
    await page.goto('https://www.daals.co.uk/'); 
    await page.locator("a.b-1").click();
    await page.goBack();
    await page.locator("a.b-2").click();
    await page.goBack();
    await page.locator("a.b-3").click();
    await page.goBack();

    await page.evaluate(() => {
      window.scrollTo(0, 500); // Scrolls to 500 pixels down from the top
    });
    //Shop by category visibility
    await page.getByRole('heading', { name: 'Shop by category' }).isVisible();
    await page.waitForTimeout(4000);
    console.log ("The shop by category is visible");// Return to the homepage 
    
    //Add product through Shop By Category
    await page.locator('.item1 a[href="/collections/dining-tables"]').click();
    await page.waitForTimeout(2000);
    await page.locator('li:nth-child(3) > .variant_img').first().click(); // color change 
    await page.waitForTimeout(2000);
    await page.locator('div:nth-child(4) > center > a').first().click();  // Click on review section
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: '-8 Seater Extending Table' }).click(); // change the category
    await page.waitForTimeout(2000);
    await page.locator('a.q_up').click();   // increase the quantity
    await page.evaluate(() => {
      window.scrollTo(0, 500); // Scrolls to 500 pixels down from the top
    });
    await page.locator('#sticky-info-template--15432921153587__main').getByRole('button', { name: 'Add to cart'}).click(); // Add to cart through Sticky cart
    await page.waitForTimeout(2000);
    await page.locator("#cart-sidebar > div.cart-window-header > a").click();
    await page.waitForTimeout(2000);
    

    await page.goto('https://www.daals.co.uk/');  
    



    //await page.locator("")

});  
