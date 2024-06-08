import { test, expect, BrowserContext, Page } from '@playwright/test';
import { BasePage } from '../src/BasePage'; 
import { MainPage } from '../src/MainPage';
import { VinPage } from '../src/VinPage';
import PageFactory from '../src/PageFactory';


let context: BrowserContext;
let page: Page;

test.describe('Playwright UI Tests', () => {
    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        await page.goto('https://av.by/', { timeout: 30000 });
    });

    test('1 - check page title', async () => {
        
        const mainPage = PageFactory.getPage('main', page);
        const title = await mainPage.getTitle();
        expect(title).toBe('av.by — купить, продать авто в Беларуси. Автомобили с пробегом и новые.'); 
    });

    test('2 - check if LogIn button is visible on MainPage', async () => {
        const mainPage = PageFactory.getPage('main', page) as MainPage;
        const isButtonVisible = await mainPage.isButtonLogInVisible();
        expect(isButtonVisible).toBe(true);
    });

    test('3 - check if SubmitAd button is visible on MainPage', async () => {
        const mainPage = PageFactory.getPage('main', page) as MainPage;
        const isButtonVisible = await mainPage.isButtonSubmitAdVisible();
        expect(isButtonVisible).toBe(true);
    });

    test('4 - check if logo is link', async () => {
        const mainPage = PageFactory.getPage('main', page) as MainPage;
        const isLogotLink = await mainPage.isLogoLink();
        expect(isLogotLink).toBe(false);
    });

    test('5 - URL and Title Check', async () => {
        const vinPage = PageFactory.getPage('vin', page) as VinPage;
        await vinPage.navigateToVinPage();
        const currentUrl = await vinPage.getCurrentUrl();
        expect(currentUrl).toBe('https://av.by/vin');
    });

    test('6 - сheck Error Message for empty VIN Field', async () => {
        const vinPage = PageFactory.getPage('vin', page) as VinPage;
        const isErrorVisible = await vinPage.clickButtonAndCheckErrorMessage();
        expect(isErrorVisible).toBe("VIN-номер состоит из 17 символов");
    });

});