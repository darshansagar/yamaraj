var businessFunctions = require('../Business Flow/businessFunctions.js');
var regData = require('../Test Data/registration-form-data.json');
browser.waitForAngularEnabled(false);
var regUrl = "https://test.wwstay.com/accounts/#/registration/user";

describe("Testing the registration page", function(){

    beforeAll(function(){
        businessFunctions.launchBrowser(regUrl);
        businessFunctions.acceptCookiesAlert();
    })

    it("TC001_Registration Page_Happy Path", function(){
        businessFunctions.launchBrowser(regUrl);
        businessFunctions.enterData_Registration(regData[0].positive);
        businessFunctions.clickBtn_Register();
    })

    it("TC002_Registration Page_Submit Negative Data", function() {
        businessFunctions.launchBrowser(regUrl);
        businessFunctions.enterData_Registration(regData[0].negative);
        businessFunctions.clickBtn_Register();
    })

    it("TC003_Registration Page_Validate Error Messages", function() {
        businessFunctions.launchBrowser(regUrl);
        businessFunctions.clickBtn_Register();
        businessFunctions.assertErrorMessages();
    })

    it("TC004_Registration Page_Verify Social Network Hyperlinks", function() {
        businessFunctions.launchBrowser(regUrl);
        businessFunctions.navigateToSocialNetwork(regData[1].site.twitter);
        businessFunctions.verifyUrl(regData[1].site.twitter, browser.getCurrentUrl(), regData[1].verifyUrl);
        businessFunctions.launchBrowser(regUrl);
        businessFunctions.navigateToSocialNetwork(regData[1].site.facebook);
        businessFunctions.verifyUrl(regData[1].site.facebook, browser.getCurrentUrl(), regData[1].verifyUrl);
        businessFunctions.launchBrowser(regUrl);
        businessFunctions.navigateToSocialNetwork(regData[1].site.linkedIn);
        businessFunctions.verifyUrl(regData[1].site.linkedIn, browser.getCurrentUrl(), regData[1].verifyUrl);
        businessFunctions.launchBrowser(regUrl);
        businessFunctions.navigateToSocialNetwork(regData[1].site.youtube);
        businessFunctions.verifyUrl(regData[1].site.youtube, browser.getCurrentUrl(), regData[1].verifyUrl);
    })

})