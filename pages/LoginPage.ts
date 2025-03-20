import { Page } from 'playwright';

class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    elements = {
        usernameInput: () => this.page.locator('input[name="username"]'),
        passwordInput: () => this.page.locator('input[name="password"]'),
        submitButton: () => this.page.locator('input[type="submit"]'),
        continueButton: () => this.page.locator('span:text("Continue")'),
        errorMessage: () => this.page.locator('.errornote'),
        dashboardTitle: () => this.page.locator('#site-name'),
    };

    async goto(url: string) {
        await this.page.goto(`${url}`);
    }

    async fillUsername(username: string){
        await this.elements.usernameInput().fill(username);
    }
    async fillPassword(password: string){
        await this.elements.passwordInput().fill(password);
    }
    async clickSubmit() {
        await this.elements.submitButton().click();
    }

    async login(username: string, password: string) {
        await this.elements.usernameInput().fill(username);
        await this.elements.passwordInput().fill(password);
        await this.elements.submitButton().click();
    }

    async isDashboardVisible(): Promise<boolean> {
        return await this.elements.dashboardTitle().isVisible();
    }

    async getErrorMessage(): Promise<string | null> {
        return await this.elements.errorMessage().textContent();
    }

    async clickContinue() {
        await this.elements.continueButton().click();
    }
}

export default LoginPage;
