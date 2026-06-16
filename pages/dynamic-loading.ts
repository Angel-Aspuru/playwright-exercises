import type { Page, Locator } from "@playwright/test";
import { expect } from "@playwright/test";

export class DynamicLoadingPage {
    private readonly page: Page;
    private readonly startButton: Locator;
    private readonly targetElement: Locator;

    constructor(page: Page) {
        this.page = page;
        this.startButton = page.getByRole('button', { name: 'Start' });
        this.targetElement = page.locator('#finish');
    };

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

        await expect(this.page).toHaveURL(/dynamic_loading/);
    };

    async clickStartButton() {
        await this.startButton.click();
        await expect(this.targetElement).toHaveText('Hello World!');
    };

}