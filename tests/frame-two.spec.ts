import {test, expect} from '@playwright/test';
import { IFramesPage } from '../pages/frame-two';

test('got to iframe page and verify main header is visible', async ({page}) => {
    const framePage = new IFramesPage(page);

    await framePage.goto();
    await expect(page, 'Url should contain "iframes"').toHaveURL(/\/iframes\/?$/);
    await expect(framePage.mainHeader, 'Main header should be visible').toBeVisible();
    await expect(framePage.mainHeader, 'Main header should be "Iframes" ').toHaveText('Iframes');
});

test('search for a doc in an Iframe', async ({page}) => {
    const framePage = new IFramesPage(page);

    await framePage.goto();
    await expect(framePage.frameSearchButton).toBeVisible();
    await framePage.clickSearchButton();
    await framePage.searchFor('Iframe');

})