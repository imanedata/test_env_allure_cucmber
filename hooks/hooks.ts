import { Before, After } from '@cucumber/cucumber';
import { runInTestRunScope } from '@cucumber/cucumber/lib/runtime/scope';
import { chromium, Browser, Page } from 'playwright';

let browser: Browser;
let page: Page;

Before(async function () {
  browser = await chromium.launch({ headless: true});
  page = await browser.newPage();

  await page.context().tracing.start({
    screenshots: true,
    snapshots: true,
  });

  this.browser = browser;
  this.page = page;
});

After(async function (scenario) {
  if (scenario.result?.status === 'FAILED') {
    await page.context().tracing.stop({ path: `traces/trace-${scenario.pickle.name}.zip` });
  } else {
    await page.context().tracing.stop();
  }
  await browser.close();
});