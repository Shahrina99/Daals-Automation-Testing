const { defineConfig } = require('@playwright/test');

export default defineConfig({
    timeout: 600 * 600 * 1000, // 1 hour,
    use: {
        headless: false, // Run tests in headless mode
        viewport: { width: 1280, height: 720 },
        // Other browser options
      },
});

