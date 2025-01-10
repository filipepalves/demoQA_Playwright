import { test, expect } from '@playwright/test';

test('Login test', async ({page}) =>
{
await page.goto('https://demoqa.com/login');
await expect(page).toHaveTitle('DEMOQA');

})