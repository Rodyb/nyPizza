const chromedriver = require('chromedriver');

module.exports = {
    before: function (cb) {
        chromedriver.start();

        cb();
    },
    after: function (cb) {
        chromedriver.stop();

        cb();
    },
    waitForConditionTimeout: 10000,

};
