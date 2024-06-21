import { Page } from 'playwright';

export class BasePage {
   
    constructor(protected page: Page) {}

    async getTitle(): Promise<string> {
        return await this.page.title();
    }

    async getCurrentUrl(): Promise<string> {
        return await this.page.url();
    }
}