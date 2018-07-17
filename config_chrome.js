exports.config = {
    directConnect: false,
    baseUrl: 'https://test.wwstay.com/accounts/#/registration/user',
    framework: 'jasmine',
    capabilities: {
      'browserName':'chrome'
    },
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['Tests/registration.js'],

    framework: 'jasmine',

    allScriptsTimeout: 500000,

    jasmineNodeOpts: {
        defaultTimeoutInterval: 500000
    }
}