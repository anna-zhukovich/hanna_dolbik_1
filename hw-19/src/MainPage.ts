import { WebDriver, By, until } from 'selenium-webdriver';
import { BasePage } from './BasePage';

export class MainPage extends BasePage {
    protected binButtonMainPage: string =
        '.auth-bar__item.auth-bar__item--cart';
    private loginButtonOnMainPage: string =
        '.auth-bar__item.auth-bar__item--text';
    // private kursUsdLink: string = '.b-top-navigation-informers .js-currency-amount';
    private kursUsdLink: string =
        '//span[contains(@class, "_u") and contains(@class, "js-currency-amount") and text()="$ 3,1764"]';
    private static instance: MainPage;

    constructor(protected driver: WebDriver) {
        super(driver);
    }

    async clickLoginButtonOnMainPage(): Promise<void> {
        const loginButtonOnMainPage = await this.driver.findElement(
            By.css(this.loginButtonOnMainPage)
        );
        await loginButtonOnMainPage.click();
    }

    async clickKursUsdLink(): Promise<void> {
        const kursUsdLink = await this.driver.wait(
            until.elementLocated(By.xpath(this.kursUsdLink)),
            10000
        );
        await kursUsdLink.click();
    }
    async clickBinButton(): Promise<void> {
        const binButton = await this.findElement(
            By.css(this.binButtonMainPage)
        );
        await binButton.click();
    }

    static getInstance(driver: WebDriver): MainPage {
        if (!this.instance) {
            this.instance = new MainPage(driver);
        }
        return this.instance;
    }
}
