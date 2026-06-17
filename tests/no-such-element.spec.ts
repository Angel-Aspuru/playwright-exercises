import { test } from '@playwright/test';
import { NoSuchElementPage } from '../pages/no-such-element';

test('add-remove-element page test', async ({page}) => {
    const addRemoveElementPage = new NoSuchElementPage(page);

    await addRemoveElementPage.goto();
});

test('locator is wrong', async ({page}) => {
    const addRemoveElementPage = new NoSuchElementPage(page);

    addRemoveElementPage.goto();

    addRemoveElementPage.elementVisible();
})