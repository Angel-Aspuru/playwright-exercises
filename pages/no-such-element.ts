import type { Page, Locator } from "@playwright/test";
import { expect } from "@playwright/test";

export class NoSuchElementPage{
    private readonly page: Page;
    private readonly invisibleElement: Locator;

    constructor (page:Page) {
        this.page = page;
        this.invisibleElement = page.getByRole('button', {name: 'Delete'});
    }
}