import { LoginPage } from './login.page.js'
import { MainPage } from './main-page.js'

export default class PageFactory {
    static getPage(pageName: string) {
        switch (pageName) {
            case "main": 
                return new MainPage();
            case "login": 
                return new LoginPage();
        }

    }
}