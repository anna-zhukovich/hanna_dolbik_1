import { WebDriver, By, until } from 'selenium-webdriver';
import { BasePage } from './BasePage';
import { MainPage } from './MainPage';

export class KursUsdPage extends BasePage {
    private popUpDisplayed: string = '.fc-dialog.fc-choice-dialog';

    constructor(protected driver: WebDriver) {
        super(driver);
    }

    async isPopUpDisplayed(): Promise<boolean> {
        const popUpDisplayed = await this.findElement(
            By.css(this.popUpDisplayed),
            20000
        );
        return !!popUpDisplayed;
    }
}
