import { BasePage } from './BasePage';
import { Page, Locator } from 'playwright';

export class MainPage extends BasePage {
    private LogInButton: string = '.nav__link-text:text("Войти")';
    private SubmitAdButton: string = '.button--block.button--small';
    private LogoImage: string = '.header__logo-wrap';

    constructor(page: Page) {
        super(page);  
    }
  
    async isButtonLogInVisible(): Promise<boolean> {
        const buttonLocator = this.page.locator(this.LogInButton);
        return await buttonLocator.isVisible(); 
    }

    async isButtonSubmitAdVisible(): Promise<boolean> {
        const buttonLocator = this.page.locator(this.LogInButton);
        return await buttonLocator.isVisible(); 
    }

    async isLogoLink(): Promise<boolean> {
        const logoElement = await this.page.locator(this.LogoImage).first();
        const isALinkWithHref = await logoElement.evaluate((element: HTMLElement) => element.tagName.toLowerCase() === 'a' && element.hasAttribute('href'));
        return isALinkWithHref;
    }

}