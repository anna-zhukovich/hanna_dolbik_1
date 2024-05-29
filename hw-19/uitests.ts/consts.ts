import {WebDriver, By, until} from 'selenium-webdriver';
import driver from '../ driver';
export const mainPageUrl = 'https://www.onliner.by/';

export const buttons = {
    loginButtonOnMainPage: '.auth-bar__item.auth-bar__item--text',
    loginButtonOnLoginPage:
        "//button[contains(@class, 'auth-button') and contains(@class, 'auth-button_primary') and contains(@class, 'auth-button_middle') and contains(@class, 'auth-form__button') and contains(@class, 'auth-form__button_width_full')]",
    binButtonMainPage: '.auth-bar__item.auth-bar__item--cart',
    linktoCatalog:
        '//a[@href="https://catalog.onliner.by" and contains(text(), "каталог")]',
    buttonOnPopup: '.fc-button-label',
    kursUsdLink:
        '//span[contains(@class, "_u") and contains(@class, "js-currency-amount") and text()="$ 3,2050"]',
};

export const errorMessages = {
    errorMessageForEmptyLogIn:
        "//div[contains(@class, 'auth-form__description') and contains(text(), 'Укажите ник или e-mail')]",
    errorMessageForEmptyPassword:
        "//div[contains(@class, 'auth-form__description') and contains(text(), 'Укажите пароль')]",
};

export const texts = {
    textEmptyBin:
        "//div[contains(@class, 'cart-message__title_big') and contains(text(), 'Ваша корзина пуста')]",
    textCatalogOnPage: '.catalog-navigation__title',
};

export const popUpElements = {
    popUpDisplayed: '.fc-dialog.fc-choice-dialog',
};



export async function navigateToMainPage(driver: WebDriver) {
    await driver.manage().window().maximize();
    await driver.get(mainPageUrl);
}


export async function getTitle (driver: WebDriver) {
    const title = await driver.getTitle();
    return title;
}

export async function getCurrentUrl(driver: WebDriver)  {
    return await driver.getCurrentUrl();
}

export async function clickLoginButtonOnMainPage(driver: WebDriver) {
    const loginButtonOnMainPage = await driver.findElement(By.css(buttons.loginButtonOnMainPage));
    await loginButtonOnMainPage.click();
}

export async function getUnsuccessfulLoginErrors(driver: WebDriver): Promise<{ logInError: string, passwordError: string }> {

    const loginButtonOnLoginPage = await driver.findElement(By.xpath(buttons.loginButtonOnLoginPage));
    await loginButtonOnLoginPage.click();

    const errorMessageForEmptyLogIn = await driver.wait(until.elementLocated(By.xpath(errorMessages.errorMessageForEmptyLogIn)));
    const errorMessageTextForEmptyLogIn = await errorMessageForEmptyLogIn.getText();

    const errorMessageForEmptyPassword = await driver.findElement(By.xpath(errorMessages.errorMessageForEmptyPassword));
    const errorMessageTextForEmptyPassword = await errorMessageForEmptyPassword.getText();

    return {
        logInError: errorMessageTextForEmptyLogIn,
        passwordError: errorMessageTextForEmptyPassword
    };
}

export async function clickBinButton(driver: WebDriver) {
    const binButton = await driver.findElement(By.css(buttons.binButtonMainPage));
    await binButton.click();
}

export async function getEmptyBinText(driver: WebDriver): Promise<string> {
    await clickBinButton(driver);
    const textEmptyBin = await driver.findElement(By.xpath(texts.textEmptyBin));
    return await textEmptyBin.getText();
}

export async function getCatalogText(driver: WebDriver): Promise<string> {
    await clickBinButton(driver);
    const linktoCatalog = await driver.findElement(By.xpath(buttons.linktoCatalog));
    await linktoCatalog.click();
    const buttonOnPopup = await driver.findElement(By.css(buttons.buttonOnPopup));
    await buttonOnPopup.click();
    const textCatalogOnPage = await driver.findElement(By.css(texts.textCatalogOnPage));
    return await textCatalogOnPage.getText();
}

export async function clickKursUsdLink(driver: WebDriver) {
    const kursUsdLink = await driver.wait(until.elementLocated(By.xpath(buttons.kursUsdLink)), 10000);
    await kursUsdLink.click();
}

export async function isPopUpDisplayed(driver: WebDriver): Promise<boolean> {
    await clickKursUsdLink(driver); 
    const popUpDisplayed = await driver.wait(until.elementLocated(By.css(popUpElements.popUpDisplayed)), 20000);
    return popUpDisplayed.isDisplayed();
}