import { test, expect } from '@playwright/test';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, URL } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const MOCK_HOST = 'http://localhost';

test('run wpt test', async ({ page }) => {
  await page.route(`${MOCK_HOST}/**`, async route => {
    const pathname = new URL(route.request().url()).pathname.substring(1);
    await route.fulfill({ path: resolve(__dirname, '..', pathname) });
  });

  await page.goto(`${MOCK_HOST}/test/index.html`);

  const { tests, status } = await page.evaluate(async () => await testComplete);

  expect(tests).toBeDefined();
  expect(tests.length).toBeGreaterThan(0);

  test.info().annotations.push(
    { type: 'numTests', description: tests.length },
    { type: 'numPass', description: tests.filter(test => test.status == 0).length },
    { type: 'numFail', description: tests.filter(test => test.status == 1).length },
    { type: 'numTimeout', description: tests.filter(test => test.status == 2).length },
    { type: 'nomNotRun', description: tests.filter(test => test.status == 3).length },
  );

  for (const test of tests) {
    expect.soft(test.name).toBeDefined();
    expect.soft(test.status, test.name).toBe(0);
  }
});
