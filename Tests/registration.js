var businessFunctions = require('../Business Flow/businessFunctions.js');
var regData = require('../Test Data/registration-form-data.json');

describe("Testing the registration page", function(){

    it("Happy path - Login", function(){

        businessFunctions.launchBrowser(browser.baseUrl);
        businessFunctions.acceptCookiesAlert();
        businessFunctions.enterData(regData[0].positive);

    })

})