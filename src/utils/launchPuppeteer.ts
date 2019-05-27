import * as puppeteer from 'puppeteer';

const puppeterOptions = {
    headless: false,
    executablePath: 'C:\\Users\\joe\\AppData\\Local\\Microsoft\\Edge SxS\\Application\\msedge.exe',
};

export default async () => {
    return await puppeteer.launch(puppeterOptions);
};
