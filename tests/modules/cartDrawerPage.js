// pageInteractions/cartDrawerPage.js
const { expect } = require('@playwright/test');

async function clickCartDrawer(page) {
  console.log('Clicking on Cart Drawer...');
  const cartDrawer = page.locator('#cart_block');
  await expect(cartDrawer).toBeVisible({ timeout: 60000 });
  await cartDrawer.click();
}

async function closeCartDrawer(page) {
  console.log('Closing Cart Drawer...');
  await page.locator('a.close-cart').click();
}

module.exports = {
  clickCartDrawer,
  closeCartDrawer
};
