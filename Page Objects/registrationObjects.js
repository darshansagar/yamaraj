var SelectWrapper = require('protractor-core/select-wrapper.js');

var regObj = function(){

    this.txtFirstName = element(by.xpath("//input[@name='firstName']"));
    this.txtLastName = element(by.xpath("//input[@name='lastName']"));
    this.dropdownGender = new SelectWrapper(by.xpath("//select[@name='gender']"));
    this.txtClientID = element(by.xpath("//input[@name='client']"));
    this.txtPhone = element(by.xpath("//input[@name='phone']"));
    this.txtEmail = element(by.xpath("//input[@name='workEmail']"));

    this.linkLogin = element(by.xpath("//a/b[text()='Login']"));

    this.btnRegister = element(by.xpath("//button[text()='REGISTER']"));

    this.txtCookiesInfo = element(by.xpath("//div[text()=' wwstay.com uses cookies to ensure we give you the best experience on our website. ']"));
    this.btnAcceptCookies = element(by.xpath("//div[text()='AGREE']"));

}

module.exports = new regObj();