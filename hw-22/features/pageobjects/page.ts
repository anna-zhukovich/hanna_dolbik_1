export default class BasePage {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open (path: string = '') {
        return browser.url(`http://onliner.by${path}`)
    }

    public getTitle () {
        return browser.getTitle()
    }
}
