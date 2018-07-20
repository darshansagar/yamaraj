var SelectWrapper = require('protractor-core/select-wrapper.js');

var loginObjects = function() {

    this.dropdownLanguage = new SelectWrapper(by.xpath("//button[@class='btn lang-button dropdown-toggle']/following-sibling::ul[@class='dropdown-menu']"));

    this.txtUserName = element(by.xpath("//input[@name='username']"));
    this.errUserName = element(by.xpath("//ng-message[text()='Username is required']"));
    this.txtPassword = element(by.xpath("//input[@name='password']"));
    this.errPassword = element(by.xpath("//ng-message[text()='Password is required']"));

    this.linkForgotPassword = element(by.xpath("//a[text()='Forgot Password?']"));
    this.errIncorrectCredentials = element(by.xpath("//div[text()='Username or password is not valid']"));

    this.btnSignIn = element(by.xpath("//button[text()='SIGN IN']"));

    this.linkSignUp = element(by.xpath("//a[text()='SIGN UP']"));

    this.txtEmail = element(by.xpath("//input[@name='email']"));
    this.linkLogin = element(by.xpath("//a/b[text()='Login']"));
    this.btnReset = element(by.xpath("//button[text()='RESET']"));

}

module.exports = new loginObjects();