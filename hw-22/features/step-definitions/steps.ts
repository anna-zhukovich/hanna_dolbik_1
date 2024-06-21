import { Given, When, Then, Before, After } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import { LoginPage } from '../pageobjects/login.page.js';
import { MainPage } from '../pageobjects/main-page.js';
import SecurePage from '../pageobjects/secure.page.js';
import PageFactory from '../pageobjects/page-factory.js';


let loginPage;
let mainPage;

Before(async () => {
    loginPage = PageFactory.getPage('login') as LoginPage;
    mainPage = PageFactory.getPage('main') as MainPage;
})


Given(/^I am on the (\w+) page$/, async (pagename) => {
   const page = PageFactory.getPage(pagename);
   if (page !== undefined) {
    await page.open();
   }
});


When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await  loginPage.login(username, password);
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(loginPage.message).toBeDisplayed();
});

// main features
Then(/^I should see a social buttons on the main page$/, async () => {
    await expect(mainPage.getFacebookButton()).toExist();
    // await expect(MainPage.getVKButtton).toExist();
    await expect(mainPage.getGoogleButtton()).toBeDisplayed();
});

Then(/^I should see a bin button on the main page$/, async () => {
    await mainPage.waitForBinButton();
    await expect(mainPage.getBinButtton()).toBeDisplayed();
});


Then(/^I should see a social log in buttons on the log in page$/, async () => {
    await expect(loginPage.getlogInButtonFb()).toBeDisplayed();
    await expect(loginPage.getlogInButtonVk()).toBeDisplayed();
    await expect(loginPage.getlogInButtonGoogle()).toBeDisplayed();
});

Then(/^I should see a Enter text on the log in page$/, async () => {
    await expect(loginPage.getEnterTextOnLoginPage()).toBeDisplayed();
});