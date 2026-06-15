import { test, expect } from '@playwright/test';
import { CheckboxPage } from '../pages/checkboxes';

test('checkbox page test', async ({ page }) => {
  const checkboxPage = new CheckboxPage(page);

  await checkboxPage.goto();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveURL(/checkboxes/);
});

test('checkbox click test', async ({ page }) => {

  const checkboxPage = new CheckboxPage(page);
  
  await checkboxPage.goto();

  // Click the checkbox one.
  await checkboxPage.clickCheckBoxOne();

  // Expects checkbox one to be cheked.
  await checkboxPage.expectCheckboxOneCheked();
});
