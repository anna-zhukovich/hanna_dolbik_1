import { WebDriver} from "selenium-webdriver";
import { BasePage } from './BasePage'
import { MainPage } from './MainPage'
import { LogInPage } from './LogInPage'
import { CatalogPage } from './CatalogPage'
import { KursUsdPage } from './KursPage'
import { BinPage } from "./BinPage";


export default class PageFactory {
    static getPage(driver: WebDriver, pageName: string) {
        switch (pageName) {
            case "MainPage": 
                return new MainPage(driver);
            case "LogInPage": 
                return new LogInPage(driver);
            case "BinPage": 
                return new BinPage(driver);
            case "CatalogPage": 
                return new CatalogPage(driver);
            case "KursUsdPage": 
                return new KursUsdPage(driver);
            default:
                return new BasePage(driver);
        }
    }
}
