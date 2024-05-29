import { Builder, WebDriver, By, until, Key } from 'selenium-webdriver';
import driver from '../ driver';
import {
    buttons,
    mainPageUrl,
    errorMessages,
    texts,
    popUpElements,
    getTitle,
    navigateToMainPage,
    getCurrentUrl,
    getUnsuccessfulLoginErrors,
    clickBinButton,
    getEmptyBinText,
    getCatalogText,
    isPopUpDisplayed,
    clickLoginButtonOnMainPage,
    clickKursUsdLink
} from "./consts";
import { BasePage } from './BasePage'
import { MainPage } from './MainPage'
import { LogInPage } from './LogInPage'
import { CatalogPage } from './CatalogPage'
import { KursUsdPage } from './KursPage'
import { BinPage } from "./BinPage";
import PageFactory from './PageFactory';

const homePage = MainPage.getInstance(driver);
const homePageSecond = MainPage.getInstance(driver);
const binPage = PageFactory.getPage(driver, 'BinPage') as BinPage;
const loginPage = PageFactory.getPage(driver, 'LogInPage') as LogInPage;
const catalogPage = PageFactory.getPage(driver, 'CatalogPage') as CatalogPage;
const KursPage = PageFactory.getPage(driver, 'KursUsdPage') as KursUsdPage;

describe('Selenium UI Tests', function () {
    beforeEach(async () => {
        await navigateToMainPage(await driver);
    });

    // beforeEach(async () => {
    //     await driver.manage().window().maximize();
    //     await driver.get(mainPageUrl);
    // });

    test('5 - check opening pop-up after clicking on kursUsd on Main Page', async () =>  {
        const popUpDisplayed = await KursPage.isPopUpDisplayed();

        expect(popUpDisplayed).toBeTruthy();
    });

    test('1 - check opening main page and check title', async () => {
        // const title = await driver.getTitle();
        // expect(title).toEqual('Onlíner');
    
        // const mainUrl = await getCurrentUrl(driver); 
        // expect(mainUrl).toEqual(mainPageUrl);

        const title = await homePage.getTitle();
        expect(title).toEqual('Onlíner');
    
        const mainUrl = await homePage.getCurrentUrl();
        expect(mainUrl).toEqual(mainPageUrl);
    });

    test('2 - check unsuccessful log in', async () => {
        await homePage.clickLoginButtonOnMainPage();

        const errors = await loginPage.getUnsuccessfulLoginErrors();

        expect(errors.logInError).toBe('Укажите ник или e-mail');
        expect(errors.passwordError).toBe('Укажите пароль');
    });
    
    test('4 - check text catalog on page', async () => {
        const catalogText = await catalogPage.getCatalogText()

        expect(catalogText).toEqual('Каталог');
    });

    test('3 - check that bin is empty by default', async () => {
        const textBinEmpty = await binPage.getEmptyBinText();

        expect(textBinEmpty).toEqual('Ваша корзина пуста');
    });
});

// describe('Selenium UI Tests', function () {
//     let driver: WebDriver;

//     beforeAll(async () => {
//         driver = await new Builder().forBrowser('chrome').build();
//     });

//     const mainPageUrl = 'https://www.onliner.by/';

//     beforeEach(async () => {
//         await driver.manage().window().maximize();
//         await driver.get('https://www.onliner.by/');
//     });

//     test('1 - check opening main page and check title', async () => {
//         const title = await driver.getTitle();
//         expect(title).toEqual('Onlíner');
//         const mainUrl = await driver.getCurrentUrl();
//         expect(mainUrl).toEqual(mainPageUrl);
//     });

//     test('2 - check unsuccessful log in', async () => {
//         const loginButtonOnMainPage = await driver.findElement(
//             By.css('.auth-bar__item.auth-bar__item--text')
//         );
//         await loginButtonOnMainPage.click();
//         const loginButtonOnLoginPage = await driver.findElement(
//             By.xpath(
//                 "//button[contains(@class, 'auth-button') and contains(@class, 'auth-button_primary') and contains(@class, 'auth-button_middle') and contains(@class, 'auth-form__button') and contains(@class, 'auth-form__button_width_full')]"
//             )
//         );
//         await loginButtonOnLoginPage.click();

//         const errorMessageForEmptyLogIn = await driver.wait(
//             until.elementLocated(
//                 By.xpath(
//                     "//div[contains(@class, 'auth-form__description') and contains(text(), 'Укажите ник или e-mail')]"
//                 )
//             )
//         );
//         const errorMessageTextForEmptyLogIn =
//             await errorMessageForEmptyLogIn.getText();
//         const errorMessageForEmptyPassword = await driver.findElement(
//             By.xpath(
//                 "//div[contains(@class, 'auth-form__description') and contains(text(), 'Укажите пароль')]"
//             )
//         );
//         const errorMessageTextForEmptyPassword =
//             await errorMessageForEmptyPassword.getText();

//         expect(errorMessageTextForEmptyLogIn).toBe('Укажите ник или e-mail');
//         expect(errorMessageTextForEmptyPassword).toBe('Укажите пароль');
//     });

//     test('3 - check that bin is empty by default', async () => {
//         const binButton = await driver.findElement(
//             By.css('.auth-bar__item.auth-bar__item--cart')
//         );
//         await binButton.click();
//         const textEmptyBin = await driver.findElement(
//             By.xpath(
//                 "//div[contains(@class, 'cart-message__title_big') and contains(text(), 'Ваша корзина пуста')]"
//             )
//         );
//         const textBinEmpty = await textEmptyBin.getText();

//         expect(textBinEmpty).toEqual('Ваша корзина пуста');
//     });

//     test.only('4 - check text catalog on page', async () => {
//         const binButton = await driver.findElement(
//             By.css('.auth-bar__item.auth-bar__item--cart')
//         );
//         await binButton.click();
//         const linktoCatalog = await driver.findElement(
//             By.xpath(
//                 '//a[@href="https://catalog.onliner.by" and contains(text(), "каталог")]'
//             )
//         );
//         await linktoCatalog.click();
//         const buttonOnPopup = await driver.findElement(By.css('.fc-button-label'));
//         await buttonOnPopup.click();
//         const textCatalogOnPage = await driver.findElement(
//             By.css('.catalog-navigation__title')
//         );
//         const getTextOnPage = await textCatalogOnPage.getText();

//         expect(getTextOnPage).toEqual('Каталог');
//     });

//     test('5 - check opening pop-up on kursUrDPage', async () => {
//         const kursUsdLink = await driver.wait(
//             until.elementLocated(
//                 By.xpath(
//                     '//span[contains(@class, "_u") and contains(@class, "js-currency-amount") and text()="$ 3,2050"]'
//                 )
//             ),
//             10000
//         );
//         await kursUsdLink.click();
//         const popUpDisplayed = await driver.wait(
//             until.elementLocated(By.css('.fc-dialog.fc-choice-dialog')),
//             20000
//         );
//         expect(popUpDisplayed).toBeTruthy();
//     });
// });
