import IMicrosoftFlowPage from '../interfaces/IMicrosoftFlowPage';

const microsoftFlowSelectors = require('../selectors/microsoftFlowSelectors.json');

export default class MicrosoftFlowPage implements IMicrosoftFlowPage {
    public page: any;
    protected microsoftFlowSelectors: any;

    constructor(page) {
        this.page = page;
        this.microsoftFlowSelectors = microsoftFlowSelectors;
    }

    public async waitForWorkLessDoMoreHeader(): Promise<void> {
        await this.page.waitForFunction(`document.querySelector("${this.microsoftFlowSelectors.workLessDoMoreHeader}")`);
    }
}
