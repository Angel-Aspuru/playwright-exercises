import type { Page, Locator, FrameLocator } from "@playwright/test";


export class IFramesPage {
    private readonly page: Page;
    readonly mainHeader: Locator;
    readonly playwrightFrame: FrameLocator;
    readonly frameSearchButton: Locator;
    readonly searchInputArea: Locator;

    constructor(page: Page) {
        this.page = page;
        this.mainHeader = page.getByRole('heading', { level: 1, name: 'Iframes' });
        this.playwrightFrame = page.frameLocator('#iframe-1');
        this.frameSearchButton = this.playwrightFrame.getByRole('button', { name: 'Search' });
        this.searchInputArea = this.playwrightFrame.locator('#docsearch-input');
    }

    async goto() {
        await this.page.goto('https://practice-automation.com/iframes/');
    }

    async clickSearchButton() {
        await this.frameSearchButton.click();
        await this.searchInputArea.waitFor({state: 'visible'});
    }

    async searchFor(doc: string) {
        await this.searchInputArea.fill(doc);
    }
}