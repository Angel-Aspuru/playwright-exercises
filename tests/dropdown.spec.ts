import { test, expect } from '@playwright/test';
import { DropdownPage } from '../pages/dropdown';

test('dropdown test page', async ({ page }) => {
    const dropdownPage = new DropdownPage(page);

    await dropdownPage.goto();

    await expect(page).toHaveURL(/dropdown/);
});

test('select option 1 or 2 test', async ({ page }) => {
    const dropdownPage = new DropdownPage(page);

    await dropdownPage.goto();

    await dropdownPage.selectOption(1);
});