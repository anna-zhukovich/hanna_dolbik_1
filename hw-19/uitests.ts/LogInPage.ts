import { WebDriver, By, until} from 'selenium-webdriver';
import { BasePage } from './BasePage'


export class LogInPage extends BasePage {
    private loginButtonOnLoginPage: string = "//button[contains(@class, 'auth-button') and contains(@class, 'auth-button_primary') and contains(@class, 'auth-button_middle') and contains(@class, 'auth-form__button') and contains(@class, 'auth-form__button_width_full')]";
    private errorMessageForEmptyLogIn: string = "//div[contains(@class, 'auth-form__description') and contains(text(), 'Укажите ник или e-mail')]";
    private errorMessageForEmptyPassword: string = "//div[contains(@class, 'auth-form__description') and contains(text(), 'Укажите пароль')]";

    constructor(protected driver: WebDriver) {
        super(driver);
    }

    async getUnsuccessfulLoginErrors(): Promise<{ logInError: string, passwordError: string }> {
        const loginButtonOnLoginPage = await this.driver.findElement(By.xpath(this.loginButtonOnLoginPage));
        await loginButtonOnLoginPage.click();
    
        const errorMessageForEmptyLogIn = await this.driver.wait(until.elementLocated(By.xpath(this.errorMessageForEmptyLogIn)));
        const errorMessageTextForEmptyLogIn = await errorMessageForEmptyLogIn.getText();
    
        const errorMessageForEmptyPassword = await this.driver.findElement(By.xpath(this.errorMessageForEmptyPassword));
        const errorMessageTextForEmptyPassword = await errorMessageForEmptyPassword.getText();
    
        return {
            logInError: errorMessageTextForEmptyLogIn,
            passwordError: errorMessageTextForEmptyPassword
        };
    }
}