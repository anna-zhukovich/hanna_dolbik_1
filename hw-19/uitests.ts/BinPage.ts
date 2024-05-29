import { WebDriver, By, until} from 'selenium-webdriver';
import { BasePage } from './BasePage'

export class BinPage extends BasePage {
    private textEmptyBin: string = ".cart-message__title_big";

    constructor(protected driver: WebDriver) {
        super(driver);
    }

    async getEmptyBinText(): Promise<string> {
        await this.clickBinButton();

        const selector = By.css(this.textEmptyBin);
        await this.driver.wait(until.elementLocated(selector), 10000);
        const textEmptyBin =  await this.driver.findElement(selector);

        return await textEmptyBin.getText();
    }
};