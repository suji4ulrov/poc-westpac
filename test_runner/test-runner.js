const createTestCafe = require('testcafe');
let testcafe         = null;

createTestCafe('localhost', 1337)
    .then(tc => {
        testcafe     = tc;
        const runner = testcafe.createRunner();

        return runner
            .src(['../tests/validate_information_icon.spec.js'])
            .browsers(['chrome'])
            .run({
                selectorTimeout: 8000,
                assertionTimeout: 6000,
                speed:1
            });
    })
    .then(failedCount => {
        console.log('Tests failed: ' + failedCount);
        testcafe.close();
    });