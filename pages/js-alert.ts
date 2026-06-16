import type { Page, Locator } from "@playwright/test";
import { expect } from "@playwright/test";

export class JsAlertPage {
    private readonly page: Page;
    private readonly alertButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.alertButton = page.getByRole('button', { name: 'Click for JS Alert' });

    }

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/javascript_alerts');
        await expect(this.page).toHaveURL(/javascript_alerts/);
    }

    async clickAlertButton() {
        // tie the dialog handling into the test flow using Promise.all
        // waitForEvent('dialog') is awaited
        // Playwright waits until:
        // dialog appears
        // handler finishes
        // screenshot completes before test ends
        await Promise.all([
            //to only have it listen once and not active forever, it can be before the click since this wait until the alert 
            this.page.waitForEvent('dialog').then(async dialog => {
                expect(dialog.message()).toBe('I am a JS Alert');
                await dialog.accept();
            }),
            this.alertButton.click()
        ]);
    }
}