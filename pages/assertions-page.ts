// title, URL, an element's text, an attribute.
import type { Page, Locator } from "@playwright/test";
import { expect } from "@playwright/test";

export class LoginPage {
    private readonly page: Page;
    private readonly pageHeader: Locator;
    private readonly usernameBox: Locator;
    private readonly loginButton: Locator;


    constructor (page: Page) {
        this.page = page;
        this.pageHeader = page.locator('.login_logo');
        this.usernameBox = page.getByPlaceholder('Username');

        this.loginButton = page.getByRole('button', {name: 'Login'});
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
        await expect(this.page).toHaveURL(/saucedemo.com/);
        await expect(this.pageHeader).toBeVisible();
    }

    async checkPageTitle() {
        await expect(this.page).toHaveTitle('Swag Labs');
    }

    async validateLoginButtonText() {
        await expect(this.loginButton).toHaveText('Login');
    }

    async validateAttribute() {
        await expect(this.usernameBox).toHaveAttribute('name','user-name');
    }
}