var loginData = require('../yamaraj/Test Data/login-form-data.json');

exports.config = {
    directConnect: false,
    // baseUrl: https://test.wwstay.com/accounts/#/login'',
    framework: 'jasmine',
    capabilities: {
      'browserName':'chrome'
    },
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['Tests/login.js'],

    framework: 'jasmine',

    allScriptsTimeout: 500000,

    jasmineNodeOpts: {
        defaultTimeoutInterval: 500000
    }
}