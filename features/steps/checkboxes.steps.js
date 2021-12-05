const { Given, When, Then } = require('@cucumber/cucumber');
const { openBrowser, goto, closeBrowser, write, press, screenshot, into, $, click, title, text, checkBox } = require('taiko');
const assert = require('assert').strict;

When(/^The user clicks on (\w+) (\d+)$/, async (element_name_prefix, element_name_numeric_suffix) => {
  checkBox(element_name_prefix + " " + element_name_numeric_suffix).check();
});

Then(/^The user must see a (\w+) (\d+) is checked$/, async (element_name_prefix, element_name_numeric_suffix) => {
  checkBox(element_name_prefix + " " + element_name_numeric_suffix).isChecked();
});

