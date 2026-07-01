import {test, expect} from '@playwright/test';
import { FramePage } from '../pages/frames';

test('go to test page and verify main header is visibile', async ({page})=>{
    const framePage = new FramePage(page);

    await framePage.goto();
    await expect(page,'page should have "iframe" in its URL').toHaveURL(/iframe/);
    await expect(framePage.mainHeader, 'Header should have TinyMCE text').toBeVisible();
});

test('Close Alert', async ({page}) => {
    const framePage = new FramePage(page);

    await framePage.goto();
    await framePage.closeAlert();
    await expect(framePage.tinyMCEAlert, 'Alert should close after clicking the "x"').not.toBeVisible();
});

test('Filling txt area in IFrame', async ({page}) => {
    const framePage = new FramePage(page);
    await framePage.goto();
    await framePage.closeAlert();
    await framePage.fillIframe(`this is a test ${Date.now()}`)
});