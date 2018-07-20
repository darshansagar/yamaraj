

exports.config = {
    // directConnect: true,
    // baseUrl: https://test.wwstay.com/accounts/#/login'',
    framework: 'jasmine',
    seleniumArgs: ['-Dwebdriver.ie.driver=C:/Users/user/AppData/Roaming/npm/node_modules/protractor/node_modules/webdriver-manager/selenium/IEDriverServer3.13.0.exe'],
    // multiCapabilities: [
    //     {'browserName': 'chrome'},
    //     {'browserName': 'internet explorer'}
    // ],

    // maxSessions: 1,

    capabilities: {
      browserName:'internet explorer',
      version: '11'
    },
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['Tests/login.js'],

    framework: 'jasmine',

    allScriptsTimeout: 500000,

    jasmineNodeOpts: {
        defaultTimeoutInterval: 500000
    }
}