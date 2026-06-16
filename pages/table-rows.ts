import type { Page, Locator } from "@playwright/test";
import { expect } from "@playwright/test";

export class TablePage {
    private readonly page: Page;
    private readonly lastNameCells: Locator;

    constructor(page: Page) {
        this.page = page;
        this.lastNameCells = page.locator('.last-name');
    }

    async goto() {
        await this.page.goto('https://practice.expandtesting.com/tables');

        await expect(this.page).toHaveURL(/tables/);
    };

    async validateNumberOfRows(expectedRows: number) {

        await expect(this.lastNameCells).toHaveCount(expectedRows);
    }
}