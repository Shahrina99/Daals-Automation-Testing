import { test, expect } from '@playwright/test';
let page;

test.beforeEach(async ({browser})=>{
  page = await browser.newPage();

  
await page.goto('https://www.hookandloop.com/', { waitUntil: 'load' });
console.log('Page loaded completely.');

});

test('DuraGrip', async () => {
  
  // Navigate to the collection page
  await page.locator("#ui-id-3").hover();
  
  await page.getByRole('menuitem', { name: ' DuraGrip® Brand' }).click();
  await page.waitForTimeout(2000);
});


test('Velcro', async () => {
  
  // Navigate to the collection page
  await page.locator("#ui-id-3").hover();
  
  await page.getByRole('menuitem', { name: ' VELCRO® Brand' }).click();
  await page.waitForTimeout(2000);
});

test('3M', async () => {
  
  // Navigate to the collection page
  await page.locator("#ui-id-3").hover();
  
  await page.getByRole('menuitem', { name: '3M™ Brand' }).click();
  await page.waitForTimeout(2000);
 });

test.afterEach(async ()=>{

    // Locate the <ol> element with class 'products list items product-items'
    const container = page.locator('ol.products.list.items.product-items');
  
    // Find all the product items inside the <ol> container
    const products = container.locator('li.item.product.product-item');
  
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


})