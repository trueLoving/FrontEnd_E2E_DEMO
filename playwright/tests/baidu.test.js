// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Baidu Test', () => {
  test('Search vite', async ({ page }) => {
    await page.goto('http://www.baidu.com') // 页面跳转到百度页面
    await page.fill('#kw', 'vite') // 查询 id 为 kw 的input框并输入字符串 'vite'
    await page.click('#su') // 点击 id 为 su的按钮 
    const inputValue = await page.inputValue('#kw') // 获取 id 为 kw 的 input.value
    expect(inputValue).toContain('vite') // 断言比较
  });
});
