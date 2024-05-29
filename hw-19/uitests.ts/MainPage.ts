import { WebDriver, By, until} from 'selenium-webdriver';
import { BasePage } from './BasePage'


export class MainPage extends BasePage {
    private loginButtonOnMainPage: string = '.auth-bar__item.auth-bar__item--text';
    private kursUsdLink: string = '//span[contains(@class, "_u") and contains(@class, "js-currency-amount") and text()="$ 3,2050"]'
    private static instance: MainPage;

    constructor(protected driver: WebDriver) {
        super(driver);
    }

    async clickLoginButtonOnMainPage(): Promise<void> {
        const loginButtonOnMainPage = await this.driver.findElement(By.css(this.loginButtonOnMainPage));
        await loginButtonOnMainPage.click();
    }

    async clickKursUsdLink(): Promise<void> {
        const kursUsdLink = await this.driver.wait(until.elementLocated(By.xpath(this.kursUsdLink)), 10000);
        await kursUsdLink.click();
    }

    static getInstance(driver: WebDriver): MainPage{
        if (!this.instance) {
            this.instance = new MainPage(driver);
        }
        return this.instance;
    }
}