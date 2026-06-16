import { test } from '@playwright/test';
import { JsAlertPage } from '../pages/js-alert';

test('alert test page', async ({ page }) => {
    const alertPage = new JsAlertPage(page);

    await alertPage.goto();

});

test('testing js alert on page', async ({ page }) => {
    const alertPage = new JsAlertPage(page);

    await alertPage.goto();

    await alertPage.clickAlertButton();
})