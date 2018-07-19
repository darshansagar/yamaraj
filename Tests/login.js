var businessFunctions = require('../Business Flow/businessFunctions.js');
var loginData = require('../Test Data/login-form-data.json');
browser.waitForAngularEnabled(false);
var loginUrl = "https://test.wwstay.com/accounts/#/login";

describe("Testing the Login functionalities", function() {

    xit("Happy Flow - Login", function() {
        businessFunctions.launchBrowser(loginUrl);
        businessFunctions.acceptCookiesAlert();
        businessFunctions.enterData_Login(loginData[0].positive);
        businessFunctions.clickBtn_SignIn();
    })

    xit("Negative validation - Submit negative data", function() {
        businessFunctions.launchBrowser(loginUrl);
        businessFunctions.acceptCookiesAlert();
        businessFunctions.enterData_Login(loginData[0].negative);
        businessFunctions.clickBtn_SignIn();
    })

    xit("Forgot Password", function() {
        businessFunctions.launchBrowser(loginUrl);
        businessFunctions.acceptCookiesAlert();
        businessFunctions.clickLink_ForgotPwd();
        businessFunctions.enterData_Email(loginData[0].positive);
        businessFunctions.clickBtn_Reset();
    })

    xit("Login from Forgot Password screen", function() {
        businessFunctions.launchBrowser(loginUrl);
        businessFunctions.acceptCookiesAlert();
        businessFunctions.clickLink_ForgotPwd();
        browser.sleep(2000)
        businessFunctions.clickLink_Login();
        browser.sleep(2000)
        businessFunctions.validateIfLoginScreenIsDisplayed();
    })

    xit("Navigate to Registration", function() {
        businessFunctions.launchBrowser(loginUrl);
        businessFunctions.acceptCookiesAlert();
        businessFunctions.clickLink_SignUp();
        businessFunctions.validateIfRegistrationPageIsDisplayed();
    })

    it("Change language", function() {
        businessFunctions.launchBrowser(loginUrl);
        businessFunctions.acceptCookiesAlert();
        businessFunctions.clickDropdown_SelectLanguage("Spanish");
        browser.sleep(3000)
        businessFunctions.validateLanguageChange("Spanish")
    })

})