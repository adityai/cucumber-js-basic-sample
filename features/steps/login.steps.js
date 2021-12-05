const { Given, When, Then } = require('@cucumber/cucumber');
const { openBrowser, goto, closeBrowser, write, press, screenshot, into, $, click, title } = require('taiko');
const assert = require('assert').strict;

// const LoginPage = require('../pages/login.page');
// const SecurePage = require('../pages/secure.page');

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
  // expect(SecurePage.secureAreaElement).toExist();
  // expect(SecurePage.secureAreaElement).toHaveTextContaining('Secure Area');
  // expect(SecurePage.messageElement).toExist();
  // expect(SecurePage.messageElement).toHaveTextContaining(successMessage);
});

Then('the user must remain on login page displaying a message {string}', async (errorMessage) => {
  // expect(LoginPage.loginPageElement).toExist();
  // expect(LoginPage.loginPageElement).toHaveTextContaining('Login Page');
  // expect(LoginPage.messageElement).toExist();
  // expect(LoginPage.messageElement).toHaveTextContaining(errorMessage);
});
