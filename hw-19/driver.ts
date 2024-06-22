import { Builder, WebDriver} from 'selenium-webdriver';

const driver: WebDriver = new Builder().forBrowser('chrome').build();

export default driver;
