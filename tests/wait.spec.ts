import {test, expect }from "@playwright/test";
import type { Page } from "@playwright/test";
import { AdvanceWiatPage } from "../pages/advance-waits";
import { waitForDebugger } from "node:inspector";

test.describe.configure({mode: 'serial'});

let page: Page;

test.beforeAll(async ({browser}) => {
    page = await browser.newPage();
});

test.afterAll( async() => {
    await page.close();
});

test('runs first going to the page into page', async ({page})=> {
    const waitPage = new AdvanceWiatPage(page);

    await waitPage.goto();
    await expect(waitPage.galleryButton).toBeVisible();
})

test('runs second after first test', async ({page}) => {
    const waitPage = new AdvanceWiatPage(page);

    await waitPage.clickButton('Gallery');
})