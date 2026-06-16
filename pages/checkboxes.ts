import type {Page, Locator} from '@playwright/test';
import { expect } from '@playwright/test';

export class CheckboxPage {
    private readonly page: Page;
    readonly checkboxOne: Locator;
    readonly checkboxTwo: Locator;

    constructor (page: Page) {
        this.page = page;
        this.checkboxOne = page.getByRole('checkbox').nth(0);
        this.checkboxTwo = page.getByRole('checkbox').nth(1);
    }

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/checkboxes');
        console.log(this.page.url());
    }

    async clickCheckBoxOne() {
        await this.checkboxOne.check();
    }

    async expectCheckboxOneCheked() {
        await expect(this.checkboxOne).toBeChecked();
    }

    async clickCheckBoxTwo() {
        await this.checkboxTwo.check();
    }
}