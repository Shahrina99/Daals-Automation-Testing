// import { clickCartDrawer, closeCartDrawer } from './pages/cartDrawerPage';
// import { clickShopNowLink, closeModals, getLogoUrl, navigateToHomePage } from './pages/homePage';
// import { clickLogo, hoverOverGarden } from './pages/logoPage';
// import { clickMyAccount } from './pages/myAccountPage';
// import { clickWishlist } from './pages/newArrivalPage';
// import { verifyNewArrivalsPage } from './pages/newArrivalPage';
// import { verifyWishlistPage } from './pages/wiseListPage';

// const { test, expect, defineConfig, chromium } = require('@playwright/test');

// export default defineConfig({
//     timeout: 60 * 60 * 1000 // 1 hour
// });

// test('Test Daals', async ({ page }) => {
//     const startTime = Date.now(); // Capture start time

//     try {
//         await navigateToHomePage(page);
//         await closeModals(page);

//         const logoUrl = await getLogoUrl(page);
//         console.log('The URL of the page after clicking the logo:', logoUrl);
//         expect(page.url()).toBe(logoUrl);

//         await clickShopNowLink(page);
//         await verifyNewArrivalsPage(page);
//         await clickWishlist(page);
//         await verifyWishlistPage(page);

//         await clickMyAccount(page);
//         await clickCartDrawer(page);
//         await closeCartDrawer(page);

//         await clickLogo(page);
//         await hoverOverGarden(page);

//         const endTime = Date.now(); // Capture end time
//         const executionTime = (endTime - startTime) / 1000; // Calculate execution time in seconds
//         console.log(`Test execution time: ${executionTime.toFixed(2)} seconds`);
//     } catch (error) {
//         console.error('Test failed:', error);
//         throw error;
//     }
// }, { headless: false });
