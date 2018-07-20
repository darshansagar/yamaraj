var businessFunctions = require('../Business Flow/businessFunctions.js');
var loginData = require('../Test Data/login-form-data.json');
browser.waitForAngularEnabled(false);
var loginUrl = "https://test.wwstay.com/accounts/#/login";

describe("Testing the Login functionalities", function() {

    beforeAll(function() {
        businessFunctions.launchBrowser(loginUrl);
        businessFunctions.acceptCookiesAlert();        
    })

    it("TC001_Login Page_Happy Path", function() {
        businessFunctions.launchBrowser(loginUrl);
        businessFunctions.enterData_Login(loginData[0].positive);
        businessFunctions.clickBtn_SignIn();
    })

    it("TC002_Login Page_Submit Negative Data", function() {
        businessFunctions.launchBrowser(loginUrl);
        businessFunctions.enterData_Login(loginData[0].negative);
        businessFunctions.clickBtn_SignIn();
        businessFunctions.loginPage_validateErrorMessage();
    })

    it("TC003_Login Page_Reset Password", function() {
        businessFunctions.launchBrowser(loginUrl);
        businessFunctions.clickLink_ForgotPwd();
        businessFunctions.enterData_Email(loginData[0].positive);
        businessFunctions.clickBtn_Reset();
    })

    it("TC004_Login Screen_Navigate to Login from Forgot Password Screen", function() {
        businessFunctions.launchBrowser(loginUrl); 
        businessFunctions.clickLink_ForgotPwd();
        businessFunctions.clickLink_Login();
        businessFunctions.validateIfLoginScreenIsDisplayed();
    })

    it("TC005_Login Page_Navigate to Registration Page", function() {
        businessFunctions.launchBrowser(loginUrl);
        businessFunctions.clickLink_SignUp();
        businessFunctions.validateIfRegistrationPageIsDisplayed();
    })

    xit("TC006_Login Page_Change Language", function() {
        businessFunctions.launchBrowser(loginUrl); 
        businessFunctions.clickDropdown_SelectLanguage("Spanish");
        businessFunctions.validateLanguageChange("Spanish")
    })

})