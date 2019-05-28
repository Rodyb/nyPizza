exports.command = function (element, callback, pauseTime = 1000) {
    var amountOfTries = 0;
    var cb = function (response) {

        if(amountOfTries > 5) {
            throw "failed bla";
        }

        amountOfTries+=1;

        if(response.status === 0) {
            this
                .waitForElementVisible(element, 5000);
            callback && callback();
        } else {
            this
                .pause(pauseTime)
                //.waitForElementNotVisible('[role="status"] .loader', 5000)
                .click(element, cb);
        }
    };

    this.click(element, cb);
    return this;
};

