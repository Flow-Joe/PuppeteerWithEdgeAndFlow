import { expect } from 'chai';
import BingPage from '../pages/BingPage';
import launchPuppeteer from '../utils/launchPuppeteer';

describe('Search Bing for Microsoft Flow and open the official website', () => {

    let browser;
    let page;
    let bingPage;

    before(async () => {
        browser = await launchPuppeteer();
        page = await browser.newPage();
        await page.goto('https://www.bing.com');
        bingPage = new BingPage(page);
    });

    after(async () => {
        await browser.close();
    });
});
