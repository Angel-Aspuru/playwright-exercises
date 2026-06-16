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
        await this.dropdown.selectOption((optionNumber).toString());
        //checks the value attribute.
        await expect(this.dropdown).toHaveValue(optionNumber.toString())
        // need to add path for screenshots
        // await this.page.screenshot({path: 'screenshots/dropdown.png'});
        //changed the playwrite config to only on failures so the line above is not needed anymore
    }
}