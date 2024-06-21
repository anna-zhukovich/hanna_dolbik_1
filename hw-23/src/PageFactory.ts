import { BasePage } from './BasePage';
import { MainPage } from './MainPage';
import { VinPage } from './VinPage';
import { Page } from 'playwright';

export default class PageFactory {
    static getPage(pageName: string, page: Page): BasePage {
        switch (pageName) {
            case "main": 
                return new MainPage(page);
            case "vin": 
                return new VinPage(page);
            default:
                throw new Error(`Page with name "${pageName}" does not exist.`);
        }
    }
}

