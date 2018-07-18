var businessFunctions = require('../Business Flow/businessFunctions.js');
var regData = require('../Test Data/registration-form-data.json');
browser.waitForAngularEnabled(false);

describe("Testing the registration page", function(){

    beforeAll(function(){
        businessFunctions.launchBrowser(browser.baseUrl);
        businessFunctions.acceptCookiesAlert();
    })

    it("Happy path - New Registration", function(){
        businessFunctions.launchBrowser(browser.baseUrl);
        // businessFunctions.acceptCookiesAlert();
        businessFunctions.enterData_Registration(regData[0].positive);
        businessFunctions.clickButton_Register();
    })

    it("Submit Negative Data", function() {
        businessFunctions.launchBrowser(browser.baseUrl);
        // businessFunctions.acceptCookiesAlert();
        businessFunctions.enterData_Registration(regData[0].negative);
        businessFunctions.clickButton_Register();
    })

    it("Validate Error Messages", function() {
        businessFunctions.launchBrowser(browser.baseUrl);
        // businessFunctions.acceptCookiesAlert();
        businessFunctions.clickButton_Register();
        businessFunctions.assertErrorMessages();
    })

    it("Verify URL - Twitter", function() {
        businessFunctions.launchBrowser(browser.baseUrl);
        // businessFunctions.acceptCookiesAlert();
        businessFunctions.navigateToSocialNetwork("twitter");
        businessFunctions.verifyUrl("twitter", browser.getCurrentUrl(), regData[1].verifyUrl);
    })

    it("Verify URL - Facebook", function() {
        businessFunctions.launchBrowser(browser.baseUrl);
        // businessFunctions.acceptCookiesAlert();
        businessFunctions.navigateToSocialNetwork("facebook");
        businessFunctions.verifyUrl("facebook", browser.getCurrentUrl(), regData[1].verifyUrl);
    })

    it("Verify URL - LinkedIn", function() {
        businessFunctions.launchBrowser(browser.baseUrl);
        // businessFunctions.acceptCookiesAlert();
        businessFunctions.navigateToSocialNetwork("linkedIn");
        businessFunctions.verifyUrl("linkedIn", browser.getCurrentUrl(), regData[1].verifyUrl);
    })

    it("Verify URL - Youtube", function() {
        businessFunctions.launchBrowser(browser.baseUrl);
        // businessFunctions.acceptCookiesAlert();
        businessFunctions.navigateToSocialNetwork("youtube");
        businessFunctions.verifyUrl("youtube", browser.getCurrentUrl(), regData[1].verifyUrl);
    })

})