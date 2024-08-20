// pageInteractions/newArrivalsPage.js
const { expect } = require('@playwright/test');

async function verifyNewArrivalsPage(page) {
  console.log('Waiting for navigation to complete...');
  await page.waitForURL('https://www.daals.co.uk/collections/new-arrivals', { timeout: 60000 });
  expect(page.url()).toBe('https://www.daals.co.uk/collections/new-arrivals');
}

async function clickWishlist(page) {
  console.log('Clicking on Wishlist...');
  const wishlist = page.locator('.my-wishlist');
  await wishlist.click();
}

module.exports = {
  verifyNewArrivalsPage,
  clickWishlist
};
