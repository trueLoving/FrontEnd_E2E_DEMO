import { Selector } from 'testcafe';

fixture`Baidu`
  .page`https://www.baidu.com/`;

test('Search vite', async t => {

  await t.typeText('#kw', 'vite') // #kw要输出的输入框元素，vite 则是要输入的值

  await t.click('#su') // #su是指搜索按钮

  await t.expect(Selector('#kw').value).contains('vite') // 判断输入框的值是否存在 “vite” 字符串

});
