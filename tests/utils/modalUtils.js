// utils/modalUtils.js
const { expect } = require('@playwright/test');

// Function to close modal if it exists
async function closeModalIfExists(page, selector) {
  const closeButton = page.locator(selector);
  const count = await closeButton.count();
  if (count > 0) {
    console.log(`Closing modal with selector: ${selector}`);
    await closeButton.click({ timeout: 60000 });
    console.log(`Closed modal using selector: ${selector}`);
  } else {
    console.log(`Modal close button not found for selector: ${selector}`);
  }
}

module.exports = { closeModalIfExists };
