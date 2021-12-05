const { openBrowser, goto, $, into, write, click, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto("https://the-internet.herokuapp.com/login");
        await write("tester", into($('#password')));
        await click($('#login > button'));
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
