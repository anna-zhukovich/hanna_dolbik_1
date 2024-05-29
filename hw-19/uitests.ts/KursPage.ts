import { WebDriver, By, until } from 'selenium-webdriver';
import { BasePage } from './BasePage';

export class KursUsdPage extends BasePage {
    private popUpDisplayed: string = '.fc-dialog.fc-choice-dialog';
    private kursUsdLink: string = '.b-top-navigation-informers .js-currency-amount';

    constructor(protected driver: WebDriver) {
        super(driver);
    }

    async clickKursUsdLink() {
        const kursUsdLink = await this.findElement(
            By.css(
                this.kursUsdLink
            ),
            20000
        );
        await kursUsdLink.click();
    }

    async isPopUpDisplayed(): Promise<boolean> {
        await this.clickKursUsdLink();
        
        const popUpDisplayed = await this.findElement(By.css(this.popUpDisplayed), 20000);
        return !!popUpDisplayed;
    }
}