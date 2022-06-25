describe('Baidu Test', function () {
  const searchInput = element('#kw'); // 创建id为kw的元素，用于后面查询元素
  const searchButton = element('#su');// 创建id为su的元素，用于后面查询元素
  it('search vite', async function () {
    await browser
      .navigateTo('https://www.baidu.com') // 页面跳转到百度页面
      .sendKeys(searchInput, 'vite') // 搜索框输入 vite
      .click(searchButton); // 点击搜索按钮
    await expect(searchInput).value.toContain('vite'); // 判断输入框的内容包含vite字符串
  });
});
