const utils = require('./utils');
const constants = require('./constants');
const assert = require('assert');
module.exports = {
    url: function () {
        return this.api.launchUrl;
    },
    elements: {
    },
    commands: [utils.logWrapper({


    })]
};
