// pageInteractions/homePage.js
const { expect } = require('@playwright/test');
const { closeModalIfExists } = require('../utils/modalUtils');


async function navigateToHomePage(page) {
  console.log('Navigating to page...');
  await page.goto('https://www.daals.co.uk/', { timeout: 60000});
  
  // Alternatively, wait for a specific element or state
  await page.waitForSelector('.header', { timeout: 60000 });
  console.log('Header element found, navigation successful!');
}



async function closeModals(page) {
  console.log('Closing modals if they exist...');
  await closeModalIfExists(page, 'button.needsclick.klaviyo-close-form.kl-private-reset-css-Xuajs1');
  await closeModalIfExists(page, 'button.region-selector_close');
  await closeModalIfExists(page, 'button.js-pushowl-no-button pushowl-optin__button pushowl-optin__no-button');
}

async function getLogoUrl(page) {
  console.log('Getting current URL...');
  return page.url();
}

async function clickShopNowLink(page) {
  console.log('Ensuring "New Arrivals" link is visible...');
  const element = page.locator('a.a1[href="/collections/new-arrivals"]');
  await expect(element).toBeVisible({ timeout: 60000 });
  await expect(element).toHaveText('SHOP NOW');
  console.log('Clicking on "SHOP NOW" link...');
  await element.click();
}

module.exports = {
  navigateToHomePage,
  closeModals,
  getLogoUrl,
  clickShopNowLink
};
