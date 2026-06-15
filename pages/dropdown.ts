import type { Page, Locator } from "@playwright/test";
import { expect } from "@playwright/test";

export class DropdownPage {
    private readonly page: Page;
    readonly dropdown: Locator;

    constructor (page: Page){
        this.page = page;
        this.dropdown = page.locator('#dropdown');
    }

    async goto(){
        await this.page.goto('https://the-internet.herokuapp.com/dropdown');
    }

    async selectOption(optionNumber: number) {
        await this.dropdown.selectOption((optionNumber-1).toString());
        await expect(this.dropdown).toHaveValue(`Option ${optionNumber}`)
    }
}