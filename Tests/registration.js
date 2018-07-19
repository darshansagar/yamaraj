var businessFunctions = require('../Business Flow/businessFunctions.js');
var regData = require('../Test Data/registration-form-data.json');
browser.waitForAngularEnabled(false);
var regUrl = "https://test.wwstay.com/accounts/#/registration/user";

describe("Testing the registration page", function(){

    beforeAll(function(){
        businessFunctions.launchBrowser(regUrl);
        businessFunctions.acceptCookiesAlert();
    })

    it("Happy path - New Registration", function(){
        businessFunctions.launchBrowser(regUrl);
        businessFunctions.enterData_Registration(regData[0].positive);
        businessFunctions.clickBtn_Register();
    })

    it("Submit Negative Data", function() {
        businessFunctions.launchBrowser(regUrl);
        businessFunctions.enterData_Registration(regData[0].negative);
        businessFunctions.clickBtn_Register();
    })

    it("Validate Error Messages", function() {
        businessFunctions.launchBrowser(regUrl);
        businessFunctions.clickBtn_Register();
        businessFunctions.assertErrorMessages();
    })

    it("Verify URL - Twitter, Facebook, LinkedIn, Youtube", function() {
        businessFunctions.launchBrowser(regUrl);
        businessFunctions.navigateToSocialNetwork("twitter");
        businessFunctions.verifyUrl("twitter", browser.getCurrentUrl(), regData[1].verifyUrl);
        businessFunctions.launchBrowser(regUrl);
        businessFunctions.navigateToSocialNetwork("facebook");
        businessFunctions.verifyUrl("facebook", browser.getCurrentUrl(), regData[1].verifyUrl);
        businessFunctions.launchBrowser(regUrl);
        businessFunctions.navigateToSocialNetwork("linkedIn");
        businessFunctions.verifyUrl("linkedIn", browser.getCurrentUrl(), regData[1].verifyUrl);
        businessFunctions.launchBrowser(regUrl);
        businessFunctions.navigateToSocialNetwork("youtube");
        businessFunctions.verifyUrl("youtube", browser.getCurrentUrl(), regData[1].verifyUrl);
    })

})