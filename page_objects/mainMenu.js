const utils = require('./utils');
const constants = require('./constants');

module.exports = {
    url: function () {
        return this.api.launchUrl;
    },
    elements: {
    },
    commands: [utils.logWrapper({
        selectMenuItem: function(item) {
          this.waitForElementVisible(`[title="${item}"]`, constants.timeout.medium)
              .click(`[title="${item}"]`)
              .api.assert.urlEquals(`https://www.newyorkpizza.nl/bestellen/${item}`);

            return this;
        },
        selectPizza: function() {
          this.waitForElementVisible('[data-product-id="293"] [value="Bestellen"]', constants.timeout.medium)
              .click('[data-product-id="293"] [value="Bestellen"]')
              .api.assert.urlEquals('https://www.newyorkpizza.nl/bestellen/pizza');

            return this;

        },
        assertMenuButtons: function(browser, fields) {
            browser.waitForElementVisible('#main-content', constants.timeout.medium)
            for(let field of fields){
                browser.assert.elementPresent(`[title="${field}"]`)
            }

            return this;
        },
        selectAnyPizza: function(pizzaType, size){
            if(pizzaType === 'Margerita'){
                this.waitForElementVisible('[data-product-id="84"] [value="Bestellen"]', constants.timeout.medium);
                this.api.execute(function() {
                    document.querySelector('[data-product-id="84"] [value="Bestellen"]').click()
                });

            }
            if(pizzaType === 'Double Pepperoni'){
                this.waitForElementVisible('[data-product-id="85"] [value="Bestellen"]', constants.timeout.medium);
                this.api.execute(function() {
                    document.querySelector('[data-product-id="85"] [value="Bestellen"]').click()
                });

            }
            if(pizzaType === 'Margerita'){
                this.waitForElementVisible('[data-product-id="94"] [value="Bestellen"]', constants.timeout.medium)
                    .click('[data-product-id="94"] [value="Bestellen"]');
                return this.api.page.paymentModule()
            }
            return this;

        },
        selectPizzaSize: function(size){
            this.waitForElementVisible('[data-product-id="293"] .nyp-product-option-value', constants.timeout.medium)
                .click('.nyp-close-cookie')
                .click('[data-product-id="293"] .nyp-product-option-value');
            this.waitForElementVisible(`[data-product-id="293"] .nyp-product-option-dropdown .nyp-pizza-type-selector-items [data-name="${size}"]`)
                .click(`[data-product-id="293"] .nyp-product-option-dropdown .nyp-pizza-type-selector-items [data-name="${size}"]`);

            return this
        },



    })]
};
