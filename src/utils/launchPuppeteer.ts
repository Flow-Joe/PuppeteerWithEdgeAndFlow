import * as puppeteer from 'puppeteer';

const puppeterOptions = {
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge Dev\\Application\\msedge.exe',
};

export default async () => {
    return await puppeteer.launch(puppeterOptions);
};
