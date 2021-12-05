const { Given, When, Then } = require('@cucumber/cucumber');
const { openBrowser, goto, closeBrowser, write, press, screenshot, into, $, click, title, text } = require('taiko');
const assert = require('assert').strict;

const LoginPage = require('../pages/login.page');
const SecurePage = require('../pages/secure.page');

Given('the user is on login page', async () => {
  title().then(value => {
    assert.equal(value, "The Internet");
  });
});

When('the user enters username as {string} and password as {string}', async (username, password) => {
  console.log('the user enters username as ' + username + ":" + password);
  await write(username, into($('#username')));
  await write(password, into($('#password')));
});

When('clicks on login button', async () => {
  await click($('#login > button'));
});

Then('the user must navigate to secure area page displaying a message {string}', async (successMessage) => {
  SecurePage.secureAreaElement.exists();
  SecurePage.secureAreaElement.text().then(value => {
    assert.equal(value, successMessage);
  });
});

Then('the user must remain on login page displaying a message {string}', async (errorMessage) => {
  LoginPage.loginPageElement.exists();
  LoginPage.loginPageElement.text().then(value => {
    assert.equal(value, errorMessage);
  });
});
