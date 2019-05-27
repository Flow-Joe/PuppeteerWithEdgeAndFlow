import IBingPage from '../interfaces/IBingPage';
import { ElementHandle } from 'puppeteer';

const bingSelectors = require('../selectors/bingSelectors.json');

export default class BindPage implements IBingPage {
    public page: any;
    protected bingSelectors: any;

    constructor(page) {
        this.page = page;
        this.bingSelectors = bingSelectors;
    }
}
