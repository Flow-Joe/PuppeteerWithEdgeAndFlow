import { ElementHandle } from 'puppeteer';

export default interface IBingPage {
    getBingSearchButton: Promise<ElementHandle>;
    getFirstResult: Promise<ElementHandle>;
    enterSearchBarContent(value): Promise<void>;
    clickBingSearchButton(): Promise<void>;
    clickBingSearchButton(): Promise<void>;
    clickFirstResult(): Promise<void>;
    waitForSearchBar(): Promise<void>;
    waitForSearchButton(): Promise<void>;
    waitForFirstResult(): Promise<void>;
}
