import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    
//Navigate to App
  await page.goto('https://todomvc.com/examples/react/dist/');
//Adding first item
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('Learn Playwright');
  await page.getByTestId('text-input').press('Enter');
//Adding Second item
  await page.getByTestId('text-input').fill('Learn API testing');
  await page.getByTestId('text-input').press('Enter');
//Adding third item
  await page.getByTestId('text-input').fill('Learn New Skills');
  await page.getByTestId('text-input').press('Enter');
//Mark Done
  await page.getByRole('listitem').filter({ hasText: 'Learn API testing' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('listitem').filter({ hasText: 'Learn Playwright' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('button', { name: '×' }).click();
});