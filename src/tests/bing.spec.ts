import { expect } from 'chai';
import BingPage from '../pages/BingPage';
import MicrosoftFlowPage from '../pages/MicrosoftFlowPage';
import launchPuppeteer from '../utils/launchPuppeteer';

describe('When searching for Microsoft Flow, check the first non-promoted result is the official website', () => {

    let browser;
    let page;
    let bingPage;
    let microsoftFlowPage;

    before(async () => {
        browser = await launchPuppeteer();
        page = await browser.newPage();
        await page.setViewport({ width: 1280, height: 720 });
        await page.goto('https://www.bing.com');
        bingPage = new BingPage(page);
        microsoftFlowPage = new MicrosoftFlowPage(page);
    });

    after(async () => {
        await browser.close();
    });

    it('Enter "Microsoft Flow" into the Bing search bar ', async () => {
        await delay(5000);
        await bingPage.waitForSearchBar();
        await bingPage.enterSearchBarContent('Microsoft Flow');
        await page.screenshot(
            { path: 'Search_Bar_Text_Entered.png' });
    }).timeout(25000);

    it('Click Bing search button ', async () => {
        await delay(5000);
        await bingPage.waitForSearchButton();
        await bingPage.clickBingSearchButton();
        await page.screenshot(
            { path: 'Search_Button_Clicked.png' });
    }).timeout(25000);

    it('Click First Result ', async () => {
        await delay(5000);
        await bingPage.waitForFirstResult();
        await bingPage.clickFirstResult();
        await page.screenshot(
            { path: 'First_Result_Clicked.png' });
    }).timeout(25000);

    it('Verify Microsoft Flow website is loaded', async () => {
        await delay(5000);
        await microsoftFlowPage.waitForWorkLessDoMoreHeader();
    }).timeout(25000);
});

function delay(ms: number) {
    // This is to just slow the test for you to see it running.
    // This should not be used when developing for a live system, check out Implicit and Explicit waits
    return new Promise(resolve => setTimeout(resolve, ms));
}
