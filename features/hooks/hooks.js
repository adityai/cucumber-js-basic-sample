const { Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber');
const { openBrowser, goto, closeBrowser, write, press, screenshot } = require('taiko');

Before(async () => {
    console.log("Before");
    // await openBrowser({ headless: false })
    await openBrowser();
    await goto("https://the-internet.herokuapp.com/login");
});

After(async () => {
    console.log("After");
    await closeBrowser();
});
