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
        await expect(this.page).toHaveURL(/javascripts_alerts/);
    }

    async clickAlertButton() {
        this.alertButton.click();

        this.page.on('dialog', async dialog => {
            console.log(dialog.message);
            await dialog.accept();
            this.page.screenshot()
        })
    }

}