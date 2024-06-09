import BasePage from "./page.js";

export class MainPage extends BasePage {

    async waitForBinButton() {
        await $('.auth-bar__item--cart').waitForDisplayed(); 
    }

    async getBinButtton() {
        return $('.auth-bar__item--cart');
    }

    async getFacebookButton() {
        return await $('.auth-bar__item.auth-bar__item--fb');
    }

    async getVKButtton(){
        return await $('.auth-bar__item.auth-bar__item--vk-alter');
    }

    async getGoogleButtton(){
        return await $('.auth-bar__item.auth-bar__item--gg');
    }
}

// export default new MainPage();