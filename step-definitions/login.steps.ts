import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import CreatePost from '../pages/CreatePost';

let loginPage: LoginPage;

Given('I open the login page for {string}', async function (env: string) {
    loginPage = new LoginPage(this.page);
    const url = this.parameters[`${env}Url`];
    console.log(`Ouverture de l'URL pour ${env}: ${url}`);  
    await loginPage.goto(url);
    //await loginPage.clickContinue();
});

When('I login with username {string} and password {string}', async function (username: string, password: string) {
    await loginPage.login(username, password);
});

Then('I should be redirected to the dashboard', async function () {
    const isDashboardVisible = await loginPage.isDashboardVisible();
    expect(isDashboardVisible).toBe(true); 
});

Then('I should see an error message', async function () {
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain("Please enter the correct"); 
});


