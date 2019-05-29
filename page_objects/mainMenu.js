const utils = require('./utils');
const constants = require('./constants');
let top = '';
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
              //.api.assert.urlEquals(`https://www.newyorkpizza.nl/bestellen/${item}`);

            return this;
        },
        selectPizza: function() {
          this.waitForElementVisible('[data-product-id="293"] [value="Bestellen"]', constants.timeout.medium)
              .click('[data-product-id="293"] [value="Bestellen"]')
              .api.assert.urlEquals('https://www.newyorkpizza.nl/bestellen/pizza');

            return this;

        },
        assertMenuButtons: function(browser, fields) {
            browser.waitForElementVisible('#main-content', constants.timeout.medium);
            for(let field of fields){
                browser.assert.elementPresent(`[title="${field}"]`)
            }

            return this;
        },
        selectAnyPizza: function(pizzaType){
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
            if(pizzaType === 'Meatlovers'){
                this.waitForElementVisible('[data-product-id="202"] [value="Bestellen"]', constants.timeout.medium)
                    .click('[data-product-id="202"] [value="Bestellen"]');
                return this.api.page.paymentModule()
            }
            else if(pizzaType === 'Bianca') {
                this.waitForElementVisible('[data-product-id="293"] [value="Bestellen"]')
                    .click('[data-product-id="293"] [value="Bestellen"]');
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
        setCookie: function(){
            this.click('.nyp-close-cookie');

            return this;
        },
        makeYourOwnPizza: function(make) {
            this.api.useXpath();
            this.waitForElementVisible(`//*[contains(text(),"${make}")]`, constants.timeout.medium)
                .click(`//*[contains(text(),"${make}")]`);
            this.api.useCss();

            return this;

        },
        addCrustSize: function(crust) {
            this.waitForElementPresent('.modal-content.nyp-dt-zs-modal-content', constants.timeout.medium);
            this.api.useXpath();
                this.click(`//*[@id="CustomPizza"]/div/div//*[contains(text(),"${crust}")]`);

            return this;
        },
        addTopping: function(topping) {
            this.api.useCss();
            this.waitForElementPresent('.modal-content.nyp-dt-zs-modal-content', constants.timeout.medium);
            this.api.executeAsync(function() {
                let sel = document.querySelector(`//*[@id="CustomPizza"]/div/div//*[contains(text(),"${topping}")]`);
                    if(sel){
                       sel.click()
                }
            });

            return this;
        },
        addToppingIngredient: function(topping) {
            this.api.useCss();
            this.waitForElementPresent('.modal-content.nyp-dt-zs-modal-content', constants.timeout.medium);
                this.api.useXpath();
                this.click(`//*[@id="CustomPizza"]/div/div//*[contains(text(),"${topping}")]`);

            return this;

        },
        addCustomPizzaToBasket: function() {
            this.waitForElementVisible('.add-custompizza-product-button', constants.timeout.medium)
                .click('.add-custompizza-product-button');

            return this;
        },
        searchForItem: function(value) {
            this.waitForElementVisible('[name="SearchMenu"]', constants.timeout.medium )
                .setValue('[name="SearchMenu"]', value)
                .waitForElementVisible('#menu-search-result .nyp-product-decription .nyp-text-color-header', constants.timeout.medium);

            return this;
        },
        addFoundItem: function() {
            this.waitForElementVisible('.add-search-product-button', constants.timeout.medium)
                .click('.add-search-product-button')
                .waitForElementPresent('.nyp-receipt-remove', constants.timeout.medium);
            return this;

        },
    })]
};
