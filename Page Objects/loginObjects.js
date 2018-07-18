var SelectWrapper = require('protractor-core/select-wrapper.js');

var loginObjects = function() {

    this.dropdownLanguage = new SelectWrapper(by.xpath("//button[@class='btn lang-button dropdown-toggle']"));

    this.txtUserName = element(by.xpath("//input[@name='username']"));
    this.errUserName = element(by.xpath("//ng-message[text()='Username is required']"));
    this.txtPassword = element(by.xpath("//input[@name='password']"));
    this.errPassword = element(by.xpath("//ng-message[text()='Password is required']"));

    this.linkForgotPassword = element(by.xpath("//a[text()='Forgot Password?']"));

    this.btnSignIn = element(by.xpath("//button[text()='SIGN IN']"));

    this.linkSignUp = element(by.xpath("//a[text()='SIGN UP']"));

}

module.exports = new loginObjects();