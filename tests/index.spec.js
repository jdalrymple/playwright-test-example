import path from 'path';
import { expect, test as it } from '@playwright/test';

const { describe } = it;

const moduleFile = path.resolve(__dirname,"..","src", 'index_browser.js');

console.log(moduleFile)

describe('Example', () => {
  it('should test', async ({ page }) => {

    await page.addScriptTag({
      path: moduleFile,
      type: "module"
    })

    const result = await page.evaluate(
      () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return randomFn2()
      },
      [],
    );

   console.log(result)
  });
});
