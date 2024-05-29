import { WebDriver, By, until} from 'selenium-webdriver';
import { BasePage } from './BasePage'

export class CatalogPage extends BasePage {
    private linktoCatalog: string = '//a[@href="https://catalog.onliner.by" and contains(text(), "каталог")]';
    private buttonOnPopup: string = '.fc-button-label';
    private textCatalogOnPage:  string = '.catalog-navigation__title'

    constructor(protected driver: WebDriver) {
        super(driver);
    }

    async getCatalogText(): Promise<string> {
        await this.clickBinButton()
        
        let linktoCatalog = await this.findElement(By.xpath(this.linktoCatalog), 10000);
        await linktoCatalog.click();
        const buttonOnPopup = await this.findElement(By.css(this.buttonOnPopup));
        await buttonOnPopup.click();
        const textCatalogOnPage = await this.findElement(By.css(this.textCatalogOnPage));
        return await textCatalogOnPage.getText();
    }
};