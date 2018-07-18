var SelectWrapper = require('protractor-core/select-wrapper.js');

var regObj = function(){

    this.txtFirstName = element(by.xpath("//input[@name='firstName']"));
    this.errFirstName = element(by.xpath("//ng-message[text()='first name is required']"));
    this.txtLastName = element(by.xpath("//input[@name='lastName']"));
    this.errLastName = element(by.xpath("//ng-message[text()='last name is required']"));
    this.dropdownGender = new SelectWrapper(by.xpath("//select[@name='gender']"));
    this.errGender = element(by.xpath("//ng-message[text()='gender is required']"));
    this.txtClientID = element(by.xpath("//input[@name='client']"));
    this.errClientIDNull = element(by.xpath("//ng-message[text()='Client ID is required']"));
    this.errClientIDInvalid - element(by.xpath("//ng-message[text()='Client ID should be 10 characters']"))
    this.txtPhone = element(by.xpath("//input[@name='phone']"));
    this.errPhone = element(by.xpath("//ng-message[text()='phone number is required']"));
    this.txtEmail = element(by.xpath("//input[@name='workEmail']"));
    this.errEmail = element(by.xpath("//ng-message[text()='Work Email ID is required']"));

    this.dropdownLanguage = new SelectWrapper(by.xpath("//button[@class='btn lang-button dropdown-toggle']"));

    this.linkLogin = element(by.xpath("//a/b[text()='Login']"));

    this.btnRegister = element(by.xpath("//button[text()='REGISTER']"));

    this.txtCookiesInfo = element(by.xpath("//div[text()=' wwstay.com uses cookies to ensure we give you the best experience on our website. ']"));
    this.btnAcceptCookies = element(by.xpath("//div[text()='AGREE']"));

    this.hyperlinkTwitter = element(by.xpath("//img[@alt='twitter']"));
    this.hyperlinkFacebook = element(by.xpath("//img[@alt='facebook']"));
    this.hyperlinkLinkedIn = element(by.xpath("//img[@alt='linkedin']"));
    this.hyperlinkYoutube = element(by.xpath("//img[@alt='youtube']"));

    this.errServerError = element(by.xpath("//div[text()='Unable to create user. Please try after some time.']"));

}

module.exports = new regObj();