const { setWorldConstructor } = require("@cucumber/cucumber");
const { openBrowser, goto, write, click, closeBrowser } = require('taiko');

class CustomWorld {
  constructor() {
    this.variable = 0;
  }

  setTo(number) {
    this.variable = number;
  }

  incrementBy(number) {
    this.variable += number;
  }
}

setWorldConstructor(CustomWorld);