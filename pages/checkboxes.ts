import type {Page, Locator} from '@playwright/test';

export class CheckboxPage {
    private readonly page: Page;
    private readonly checkboxOne: Locator;
    private readonly checkboxTwo: Locator;

    constructor (page: Page) {
        this.page = page;
        this.checkboxOne = page.getByRole('checkbox' ,{name: 'checkbox 1'});
        this.checkboxTwo = page.getByRole('checkbox' ,{name: 'checkbox 2'});
    }

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/checkboxes');
        console.log(this.page.url());
    }

    async clickCheckBoxOne() {
        await this.checkboxOne.click();
    }

    async clickCheckBoxTwo() {
        await this.checkboxTwo.click();
    }
}