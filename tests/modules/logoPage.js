// pageInteractions/logoPage.js
const { expect } = require('@playwright/test');

async function clickLogo(page) {
  console.log('Clicking on Logo...');
  const logo = page.locator('.logo').first();
  await logo.click();
}

async function hoverOverGarden(page) {
  console.log('Hovering over Garden...');
  await page.locator('li.with-sub-menu.hover.mobile-disabled.m_menu-item').nth(1).hover();
}

module.exports = {
  clickLogo,
  hoverOverGarden
};
