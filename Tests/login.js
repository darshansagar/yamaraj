var businessFunctions = require('../Business Flow/businessFunctions.js');
var loginData = require('../Test Data/login-form-data.json');
browser.waitForAngularEnabled(false);

describe("Testing the Login functionalities", function() {

    it("Happy Flow - Login", function() {
        businessFunctions.launchBrowser(browser.baseUrl);
        businessFunctions.enterData_Login(loginData);
        businessFunctions.clickBtn_SignIn();
    })

})