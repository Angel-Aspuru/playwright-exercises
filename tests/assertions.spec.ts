import test from "@playwright/test";
import { LoginPageAssertions } from "../pages/assertions-page";

test('Validating Url', async ({ page }) => {
    const loginPage = new LoginPageAssertions(page);

    await loginPage.goto();
});

test('Validating Title', async ({ page }) => {
    const loginPage = new LoginPageAssertions(page);
    
    await loginPage.goto();
    await loginPage.checkPageTitle();
});

test('Validate attribute name is un username field', async ({ page }) => {
    const loginPage = new LoginPageAssertions(page);
    
    await loginPage.goto();
    await loginPage.validateAttribute();
});

test('Validate text in login button', async ({page}) => {
    const loginPage = new LoginPageAssertions(page);
    
    await loginPage.goto();
    await loginPage.validateLoginButtonText();
})