module.exports = {
    tags: ['selectPizzaSize'],
        'Verify multiple sizes of Pizza' : function (browser) {
            let mainMenu = browser.page.mainMenu();

            //it's possible to change the pizza size to any size you like

            mainMenu
            .navigate()
            .selectPizzaSize('35cm NY style')
            .selectAnyPizza('Bianca');

        browser.expect.element('[data-product-id="293"]').text.to.contain('35cm NY style');

        browser.end();
    }

};
