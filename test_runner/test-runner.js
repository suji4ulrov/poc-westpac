const createTestCafe = require('testcafe');
let testcafe = null;

//Host and port number for test runner
createTestCafe('localhost', 1337)
    .then(tc => {
        testcafe     = tc;
        const runner = testcafe.createRunner();
        return runner
            .src(['../tests/validate_retirement_calculator.spec.js'])
            //Browser(s) to execute tests
            .browsers(['chrome'])
            .run({
                selectorTimeout: 8000,
                assertionTimeout: 8000,
                speed:1
            });
    })
    //failed tests information log
    .then(failedCount => {
        console.log('Tests failed: ' + failedCount);
        testcafe.close();
    });