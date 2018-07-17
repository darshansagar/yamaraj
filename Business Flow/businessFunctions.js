var regObj = require('../Page Objects/registrationObjects.js');

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

    this.enterData = function(formData){
        regObj.txtFirstName.sendKeys(formData.firstName);
        regObj.txtLastName.sendKeys(formData.lastName);
        regObj.dropdownGender.selectByValue(formData.gender);
        regObj.txtClientID.sendKeys(formData.clientId);
        regObj.txtPhone.sendKeys(formData.phone);
        regObj.txtEmail.sendKeys(formData.email);
    }

}

module.exports = new businessFunctions();