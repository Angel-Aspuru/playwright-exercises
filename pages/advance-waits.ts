import type { Page, Locator } from "@playwright/test";

export class AdvanceWiatPage {
    private readonly page: Page;
    readonly galleryButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.galleryButton = page.getByRole('button', { name: 'Gallery' });
    };

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/disappearing_elements');
    }

    //retrying until the function passed timesout or returns a truthy value, it will retry every 200 miliseconds, it need a function to be passed as parameter which will be the code to 
    async waitFor<T>(fn: () => Promise<T | null>, { timeout = 10_000, interval = 200 } = {}): Promise<T> {
        const deadline = Date.now() + timeout;
        while (Date.now() < deadline) {
            const v = await fn();
            if (v) return v;
            await new Promise(r => setTimeout(r, interval));
        }
        throw new Error('waitFor timed out');

    }

    async clickButton(name: 'Home' | 'About' | 'Contact Us' | 'Portfolio' | 'Gallery' = 'Home') {
            const button = this.page.getByRole('button', {name})
            await button.click();
    }

    
}