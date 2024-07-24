import { WebDriver, By, until, Locator } from 'selenium-webdriver';
import { mainPageUrl } from '../consts';

export class BasePage {
    public mainPageUrl = 'https://www.onliner.by/';

    constructor(protected driver: WebDriver) {}

    async getTitle(): Promise<string> {
        return await this.driver.getTitle();
    }

    async getCurrentUrl(): Promise<string> {
        return await this.driver.getCurrentUrl();
    }

    async findElement(selector: Locator, timeout?: number | undefined) {
        await this.driver.wait(
            until.elementIsVisible(this.driver.findElement(selector)),
            timeout
        );
        return await this.driver.findElement(selector);
    }

    static async navigateToMainPage(driver: WebDriver) {
        await driver.manage().window().maximize();
        await driver.get(mainPageUrl);
    }
}
