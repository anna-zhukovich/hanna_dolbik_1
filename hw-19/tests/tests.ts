import { Builder, WebDriver, By, until, Key } from 'selenium-webdriver';
import driver from '../driver';
import { BasePage } from '../src/BasePage';
import { MainPage } from '../src/MainPage'
import { LogInPage } from '../src/LogInPage'
import { CatalogPage } from '../src/CatalogPage'
import { KursUsdPage } from '../src/KursPage'
import { BinPage } from "../src/BinPage";
import PageFactory from '../src/PageFactory';

const homePage = MainPage.getInstance(driver);
const homePageSecond = MainPage.getInstance(driver);
const binPage = PageFactory.getPage(driver, 'BinPage') as BinPage;
const loginPage = PageFactory.getPage(driver, 'LogInPage') as LogInPage;
const catalogPage = PageFactory.getPage(driver, 'CatalogPage') as CatalogPage;
const KursPage = PageFactory.getPage(driver, 'KursUsdPage') as KursUsdPage;

describe('Selenium UI Tests', function () {
    beforeEach(async () => {
        await BasePage.navigateToMainPage(driver);
    });

    test('1 - check opening pop-up after clicking on kursUsd on Main Page', async () =>  {
        await homePage.clickKursUsdLink();
        const popUpDisplayed = await KursPage.isPopUpDisplayed();
        expect(popUpDisplayed).toBeTruthy();
    });

    test.only('2 - check opening main page and check title', async () => {
        const title = await homePage.getTitle();
        expect(title).toEqual('Onlíner');
    
        const mainUrl = await homePage.getCurrentUrl();
        expect(mainUrl).toEqual(homePage.mainPageUrl);
    });

    test('3 - check unsuccessful log in', async () => {
        await homePage.clickLoginButtonOnMainPage();
        const errors = await loginPage.getUnsuccessfulLoginErrors();

        expect(errors.logInError).toBe('Укажите ник или e-mail');
        expect(errors.passwordError).toBe('Укажите пароль');
    });
    
    test('4 - check text catalog on page', async () => {
        const catalogText = await catalogPage.getCatalogText()

        expect(catalogText).toEqual('Каталог');
    });

    test('5 - check that bin is empty by default', async () => {
        const textBinEmpty = await binPage.getEmptyBinText();

        expect(textBinEmpty).toEqual('Ваша корзина пуста');
    });
});



