var regObj = require('../Page Objects/registrationObjects.js');
var loginObj = require('../Page Objects/loginObjects.js');

var businessFunctions = function() {

    this.launchBrowser = function(url){
        browser.get(url);
        browser.manage().window().maximize();
        browser.sleep(3000);        
    }

    this.acceptCookiesAlert = function() {
        regObj.txtCookiesInfo.isDisplayed().then(function(){
            regObj.btnAcceptCookies.isDisplayed().then(function(){
                regObj.btnAcceptCookies.click();
            })
        })
    }

    this.enterData_Login = function(formData){
        loginObj.txtUserName.clear();
        loginObj.txtUserName.sendKeys(formData.userName);
        loginObj.txtPassword.clear();
        loginObj.txtPassword.sendKeys(formData.password);
    }

    this.clickBtn_SignIn = function(formData){
        loginObj.btnSignIn.click();
    }

    this.enterData_Registration = function(formData){
        regObj.txtFirstName.clear();
        regObj.txtFirstName.sendKeys(formData.firstName);
        regObj.txtLastName.clear();
        regObj.txtLastName.sendKeys(formData.lastName);
        regObj.dropdownGender.selectByValue(formData.gender);
        regObj.txtClientID.clear();
        regObj.txtClientID.sendKeys(formData.clientId);
        regObj.txtPhone.clear();
        regObj.txtPhone.sendKeys(formData.phone);
        regObj.txtEmail.clear();
        regObj.txtEmail.sendKeys(formData.email);
    }

    this.clickButton_Register = function() {
        regObj.btnRegister.click();
    }

    this.navigateToSocialNetwork = function(network) {
        switch(network){
            case "twitter": regObj.hyperlinkTwitter.click();
                            break;
            case "facebook": regObj.hyperlinkFacebook.click();
                            break;
            case "linkedIn": regObj.hyperlinkLinkedIn.click();
                            break;
            case "youtube": regObj.hyperlinkYoutube.click();
                            break;
        }
    }

    this.assertErrorMessages = function(){
        expect(regObj.errFirstName.isDisplayed()).toBeTrue;
        expect(regObj.errLastName.isDisplayed()).toBeTrue;
        expect(regObj.errGender.isDisplayed()).toBeTrue;
        expect(regObj.errClientIDNull.isDisplayed()).toBeTrue;
        expect(regObj.errPhone.isDisplayed()).toBeTrue;
        expect(regObj.errEmail.isDisplayed()).toBeTrue;
    }

    this.verifyUrl = function(site, currentUrl, urlData) {
        switch(site){
            case "twitter": expect(currentUrl).toContain(urlData.twitter);
                            break;
            case "facebook": expect(currentUrl).toContain(urlData.facebook);
                            break;
            case "linkedIn": expect(currentUrl).toContain(urlData.linkedIn);
                            break;
            case "youtube": expect(currentUrl).toContain(urlData.youtube);
                            break;
        }
        
    }

}

module.exports = new businessFunctions();