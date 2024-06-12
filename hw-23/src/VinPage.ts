import { BasePage } from './BasePage';
import { Page } from 'playwright';

export class VinPage extends BasePage {
    private basePageUrl: string = 'https://av.by/'; 
    private checkingVinButton: string = 'a.nav__link[href="/vin"]';
    private checkVinButton: string ='//span[@class="button__text" and contains(text(), "Проверить VIN")]';
    private errorMessageEmptyVinField: string = '.error-message';
    private static readonly EXPECTED_ERROR_MESSAGE = 'VIN-номер состоит из 17 символов';
    private vinInputField: string = '.form-control--error'; 
    private errorMessageWrongVin: string = '.error-message';


    

    constructor(page: Page) {
        super(page);  
    }

    async navigateToVinPage() {
        const vinPageUrl = this.basePageUrl + 'vin'; 
        await this.page.goto(vinPageUrl);
    }

    async getTitle(): Promise<string> {
        return await this.page.title();
    }

    async clickButtonAndCheckErrorMessage(): Promise<string> {
        await this.page.click(this.checkingVinButton, { timeout: 5000 });
        await this.page.getByRole('button', { name: 'Проверить VIN' }).nth(0).click();
    
        const errorMessageElement = await this.page.waitForSelector(this.errorMessageEmptyVinField);
        const actualText = await errorMessageElement.innerText();
        return actualText;
    }

    



 }
    
