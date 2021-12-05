const { Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber');
const { openBrowser, goto, closeBrowser, write, press, screenshot } = require('taiko');

Before(async (url_path) => {
    console.log("Before");
    // await openBrowser({ headless: false })
    await openBrowser();
});

After(async () => {
    console.log("After");
    await closeBrowser();
});
