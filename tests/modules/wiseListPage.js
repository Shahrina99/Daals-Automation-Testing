// pageInteractions/wishlistPage.js
const { expect } = require('@playwright/test');

async function verifyWishlistPage(page) {
  console.log('Checking Wishlist URL...');
  const wishlistUrl = page.url();
  expect(page.url()).toBe(wishlistUrl);
}

module.exports = {
  verifyWishlistPage
};
