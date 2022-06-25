// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Baidu Test', () => {
  test('Search vite', async ({ page }) => {
    await page.goto('http://www.baidu.com')
    await page.fill('#kw', 'vite')
    await page.click('#su')
    const inputValue = await page.inputValue('#kw')
    expect(inputValue).toContain('vite')
  });
});
