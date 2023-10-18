const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('/#/login')
    console.log('worker: ' + process.env.TEST_WORKER_INDEX)
})

test('basic test', async ({ page }) => {
    await expect(page).toHaveTitle('Conduit')
    await page.fill('input[type = "email"]', 'fulanodetall@email.com')
    await page.press('input[type = "email"]', 'Tab')
    await page.type('input[type = "password"]', '123456')
    await page.click('form >> "Sign in"')
    const locator = page.locator('.navbar-brand');
    await expect(locator).toContainText('conduit', { timeout: 30000 });
})