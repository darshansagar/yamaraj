

exports.config = {
    directConnect: false,
    // baseUrl: https://test.wwstay.com/accounts/#/login'',
    framework: 'jasmine',
    seleniumArgs: ['-Dwebdriver.ie.driver=node_modules/protractor/node_modules/webdriver-manager/selenium/IEDriverServer3.13.0.exe'],
    // multiCapabilities: [
    //     {'browserName': 'chrome'},
    //     {'browserName': 'internet explorer'}
    // ],

    // maxSessions: 1,

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