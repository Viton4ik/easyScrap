// install puppeteer lib
const puppeteer = require('puppeteer');

url = "https://www.reddit.com/r/interestingasfuck/"

// launch puppeteer in a background mode {headless: true}
let scrape = async () => {
    const browser = await puppeteer.launch({headless: true});
    // open a new page
    const page = await browser.newPage();
    // go to the site
    await page.goto(url);
    // web-scraping: find topic name and url
    const result = await page.evaluate(() => {
        let topicName = document.querySelectorAll("h1")[0].innerText;
        let url = document.getElementsByClassName('_2yYPPW47QxD4lFQTKpfpLQ')[0].baseURI;
        return {
            topicName,
            url
        }
    });
    // close the browser
    browser.close();
    return result;
};
// get result in console
scrape().then((value) => {
    console.log(value); 
});
