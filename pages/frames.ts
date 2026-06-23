import type { Page, Locator } from "@playwright/test";

export class FramePage {
    private readonly page: Page;
    readonly tinyMCEAlert: Locator;
    readonly pageIframe: Locator;

    constructor(page: Page) {
        this.page = page;
        this.tinyMCEAlert = page.getByRole('alert').getByRole('button');
        this.pageIframe = page.frameLocator('#mce_0_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.');
    };

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/iframe');
    };

    async closeAlert() {
        await this.tinyMCEAlert.click();
    };

    async fillIframe(inputText: string) {
        await this.pageIframe.fill(inputText);
    };
}