const utils = require('./utils');
const constants = require('./constants');

module.exports = {
    url: function () {
        return this.api.launchUrl;
    },
    elements: {
    },
    commands: [utils.logWrapper({
        setFirstName: function(firstName) {
            this.waitForElementVisible('#CustomerData_Firstname', constants.timeout.medium)
                .setValue('#CustomerData_Firstname', firstName);

            return this;

        },
        setLastName: function(lastName) {
            this.waitForElementVisible('#CustomerData_Lastname', constants.timeout.medium)
                .setValue('#CustomerData_Lastname', lastName);

            return this;

        },
        setPhoneNumber: function(phoneNumber) {
            this.waitForElementVisible('#CustomerData_Phonenumber', constants.timeout.medium)
                .setValue('#CustomerData_Phonenumber', phoneNumber);

            return this;

        },
        setZipcode: function(zipCode) {
            this.waitForElementVisible('#CustomerData_ZipCode', constants.timeout.medium)
                .setValue('#CustomerData_ZipCode', zipCode);

            return this;

        },
        setHouseNumber: function(houseNumber) {
            this.waitForElementVisible('#CustomerData_StreetNumber', constants.timeout.medium)
                .setValue('#CustomerData_StreetNumber', houseNumber);

            return this;
        },
        verifyStreetName: function() {
            this.click('#CustomerData_Street');

            return this;
        },
        payOrder: function(){
            this.waitForElementVisible('[title="Afrekenen"]', constants.timeout.medium)
                .click('[title="Afrekenen"]');

            return this;
        },
        verifyCorrectItemsAreInBasket: function(browser) {
            this.waitForElementVisible('.nyp-product', constants.timeout.medium);
                browser.expect.element('#receipt-items-wrapper').text.to.contain('Double Pepperoni');
                browser.expect.element('#receipt-items-wrapper').text.to.contain('Margherita');
                    console.log('Correct Items in Basket');

            return this;
        },
        assertCheckOutButtons: function(browser, fields) {
            browser.waitForElementVisible(`#CustomerData_StreetNumber`, constants.timeout.medium)
            for(let field of fields){
                browser.assert.elementPresent(`#CustomerData_${field}`)
            }

            return this;
        },

    })]
};
