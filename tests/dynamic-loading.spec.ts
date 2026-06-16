import {test} from '@playwright/test';
import { DynamicLoadingPage } from '../pages/dynamic-loading';

test('dynamic page loading test', async ({page}) => {
    
    const dynamicLoadingPage = new DynamicLoadingPage(page);

    await dynamicLoadingPage.goto();
})

test('loading page test', async ({page}) => {
    const dynamicLoadingPage = new DynamicLoadingPage(page);

    await dynamicLoadingPage.goto();

    await dynamicLoadingPage.clickStartButton();
})