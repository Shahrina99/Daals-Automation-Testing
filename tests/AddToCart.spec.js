import { test, expect } from '@playwright/test';

test('Test H&L', async ({ page }) => {
  
  // Navigate to the collection page
  await page.goto('https://www.hookandloop.com/brands/3M'); // Replace with your collection page URL

  // Locate the <ol> element with class 'products list items product-items'
  const container = page.locator('ol.products.list.items.product-items');
  
  // Find all the product items inside the <ol> container
  const products = container.locator('.product');

  // Get the count of all products inside the <ol> container
  const productCount = await products.count();
  console.log(`Total number of products: ${productCount}`);

  let visibleProductCount = 0;

  for (let i = 0; i < productCount; i++) {
    const productVisible = await products.nth(i).isVisible();
    
    // Check if the product is visible
    if (productVisible) {
      console.log(`Product ${i + 1} is visible.`);
      visibleProductCount++;
    } else {
      console.log(`Product ${i + 1} is NOT visible.`);
    }
  }

  console.log(`Total number of visible products: ${visibleProductCount}`);
});
