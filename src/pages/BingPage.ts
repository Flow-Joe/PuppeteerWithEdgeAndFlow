import IBingPage from '../interfaces/IBingPage';
import { ElementHandle } from 'puppeteer';

const bingSelectors = require('../selectors/bingSelectors.json');

export default class BingPage implements IBingPage {
    public page: any;
    protected bingSelectors: any;

    constructor(page) {
        this.page = page;
        this.bingSelectors = bingSelectors;
    }

    get getBingSearchButton(): Promise<ElementHandle> {
        return this.page.$(this.bingSelectors.bingSearchButton);
    }

    get getFirstResult(): Promise<ElementHandle> {
        return this.page.$(this.bingSelectors.firstResult);
    }

    public async enterSearchBarContent(value): Promise<void> {
        await this.page.type(this.bingSelectors.bingSearchBar, value);
    }

    public async clickBingSearchButton(): Promise<void> {
        await this.getBingSearchButton.then(e => e.click());
    }

    public async clickFirstResult(): Promise<void> {
        await this.getFirstResult.then(e => e.click());
    }

    public async waitForSearchBar(): Promise<void> {
        await this.page.waitForFunction(`document.querySelector("${this.bingSelectors.bingSearchBar}")`);
    }

    public async waitForSearchButton(): Promise<void> {
        await this.page.waitForFunction(`document.querySelector("${this.bingSelectors.bingSearchButton}")`);
    }

    public async waitForFirstResult(): Promise<void> {
        await this.page.waitForFunction(`document.querySelector("${this.bingSelectors.firstResult}")`);
    }
}
