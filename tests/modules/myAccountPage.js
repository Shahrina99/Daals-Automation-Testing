// pageInteractions/myAccountPage.js
const { expect } = require('@playwright/test');

async function clickMyAccount(page) {
  console.log('Clicking on My Account...');
  const MyAccount = page.locator('.my-account');
  await expect(MyAccount).toBeVisible({ timeout: 60000 });
  await MyAccount.click();
}

module.exports = {
  clickMyAccount
};
