import { WebDriver, By, until, Locator} from 'selenium-webdriver';


export class BasePage {
    protected binButtonMainPage: string = '.auth-bar__item.auth-bar__item--cart';

    constructor(protected driver: WebDriver) {}

    async getTitle(): Promise<string> {
        return await this.driver.getTitle();
    }

    async getCurrentUrl(): Promise<string> {
        return await this.driver.getCurrentUrl();
    }

    async clickBinButton(): Promise<void> {
        const binButton = await this.findElement(By.css(this.binButtonMainPage));
        await binButton.click();
    }

    async findElement(selector: Locator, timeout?: number) {
        if (timeout) {
            await this.driver.wait(until.elementLocated(selector), timeout);
            return await this.driver.wait(until.elementIsVisible(this.driver.findElement(selector)), timeout);
        }

        return await this.driver.findElement(selector);
    }
}