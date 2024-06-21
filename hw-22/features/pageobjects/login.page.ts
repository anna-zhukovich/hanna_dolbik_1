import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
export class LoginPage extends Page {
    /**
     * define selectors using getter methods
     * 
     */
    async  getEnterTextOnLoginPage() {
        return $('.auth-form__title_condensed-default');
    }

  
    async getlogInButtonFb() {
        return $('.auth-form__button_fb');
    }

    async getlogInButtonVk() {
        return $('.auth-form__button_vk');
    }
    
    async getlogInButtonGoogle() {
        return $('.auth-form__button_gg');
    }



    public get logInButton () {
        return $('.auth-bar__item--text');
    }

    public get inputUsername () {
        return $('input[placeholder="Ник или e-mail"]');
    }

    public get inputPassword () {
        return $('input[placeholder="Пароль');
    }

    public get btnSubmit () {
        return $('.auth-form__button_width_full');
    }

    public get  errorMessageFailedLogin () {
        return $('.auth-form__description_extended-other');
    }

    public get message () {
        return $('span=Давайте проверим, вы робот или нет');
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public async open () {
        const openResult = await  super.open('/');
        await this.logInButton.click();

        return openResult;
    }
}

// export default new LoginPage();
