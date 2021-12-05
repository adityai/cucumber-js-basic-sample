const { Given, When, Then } = require('@cucumber/cucumber');
const { openBrowser, goto, closeBrowser, write, press, screenshot, into, $, click, title } = require('taiko');

/*
Create and export a module with class "BasePage". This class contains a function.
This class behaves as a Parent class, which contains the common functionalities, that can be inherited by child classes.
This module can be imported and called from the child classes.
*/
module.exports = class BasePage {
    //TODO: Figure out why this isn't returning a text value
    get titleText() {
        var returnValue;
        title().then((value => {
            returnValue = value;
        }));
        return returnValue;
    }


}

Given(/^the user is on (\w+) page$/, async (page) => {
    await goto("https://the-internet.herokuapp.com/" + page);
});


