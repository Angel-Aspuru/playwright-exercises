import type { Page, Locator } from "@playwright/test";
import { expect } from "@playwright/test";

export class NoSuchElementPage{
    private readonly page: Page;
    private readonly invisibleElement: Locator;

    constructor (page:Page) {
        this.page = page;
        this.invisibleElement = page.getByRole('button', {name: 'Delete'});
    }

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
    
        
        await expect(this.page).toHaveURL(/add_remove_elemets/);
    }

    async elementVisible() {
        await expect(this.invisibleElement).toBeVisible();
    }
}