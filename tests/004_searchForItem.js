module.exports = {
    tags: ['SearchForItem'],
        'Search for specific Pizza and add it to basket' : function (browser) {
            let foundPizza, pizzaInBasket;
            let mainMenu = browser.page.mainMenu();

            // the perform action is due to the async operation going on, the getText can't be verified unless I put it in a command cue

            mainMenu
            .navigate()
            .setCookie()
            .searchForItem('Mexican');
                        browser.getText('css selector', '#menu-search-result .nyp-product-decription .nyp-text-color-header', function(result) {
                             foundPizza = result.value;
                                console.log(foundPizza);
                 });
            mainMenu
            .addFoundItem();
                        browser.perform(function(browser, done){
                        browser.getText('css selector', '.nyp-product-header .nyp-sm-header', function (result) {
                            pizzaInBasket = result.value;
                                 browser.assert.equal(pizzaInBasket, foundPizza);
                                 console.log(pizzaInBasket, foundPizza);
                         done()

                });
            });


       browser.end();
    }

};
