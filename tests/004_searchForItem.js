module.exports = {
    tags: ['SearchForItem'],
        'Make your own pizza and verify every ingredient can be selected' : function (browser) {
            let mainMenu = browser.page.mainMenu();

            mainMenu
            .navigate()
            .searchForItem('Mexican');
                        browser.getText('css selector', '#menu-search-result .nyp-product-decription .nyp-text-color-header', function(result) {
                             let foundPizza = result.value;
                                console.log(foundPizza);
            mainMenu
            .addFoundItem();
                        browser.getText('css selector', '.nyp-product-header .nyp-sm-header', function (result) {
                             let pizzaInBasket = result.value;
                             browser.assert.equal(pizzaInBasket, foundPizza);
                                console.log(pizzaInBasket, foundPizza);
            });
        });

            browser.end();
    }

};
