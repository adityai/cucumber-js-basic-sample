const { Before, After } = require('@cucumber/cucumber');

Before({ tags: "@UI" }, function () {
    console.log("Before");
});

After({ tags: "@UI" }, function () {
    console.log("After");
});