const { Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber');
const { openBrowser, goto, closeBrowser, write, press, screenshot } = require('taiko');


Before(async () => {
    console.log("Before");
    await openBrowser({ headless: false })
});

After(async () => {
    console.log("After");
    await closeBrowser();
});
