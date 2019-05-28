module.exports = {
    tags: ['MakeYourOwnPizza'],
        'Verify multiple sizes of Pizza' : function (browser) {
            let mainMenu = browser.page.mainMenu();
            let arr = ['Shoarma', 'Hete Kip', 'Extra tomatensaus'];

            mainMenu
            .navigate()
            .makeYourOwnPizza('Stel zelf je pizza samen')
            .addCrustSize('35cm NY style')
                .addTopping('Extra tomatensaus')
                .addToppingIngredient('Shoarma')
                .addToppingIngredient('Hete Kip')
                .addToppingIngredient('Jalapeño')
                .addCustomPizzaToBasket()


            browser.expect.element('span.nyp-receipt-info.nyp-receipt-tooltip.pull-right').text.to.contain(arr);



        browser.pause();
    }

};
