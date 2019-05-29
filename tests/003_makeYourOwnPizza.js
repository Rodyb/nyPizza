module.exports = {
    tags: ['MakeYourOwnPizza'],
        'Verify multiple sizes of Pizza' : function (browser) {
            let mainMenu = browser.page.mainMenu();
            let arr = ['Shoarma', 'Hete Kip', 'Extra tomatensaus'];

            //Work in progress, not finished.

            mainMenu
            .navigate()
            .setCookie()
            .makeYourOwnPizza('Stel zelf je pizza samen')
            .addCrustSize('35cm NY style')
                .addToppingIngredient('Hete Kip');

             browser.expect.element('span.nyp-receipt-info.nyp-receipt-tooltip.pull-right').text.to.contain(arr);


        browser.end();
    }

};
