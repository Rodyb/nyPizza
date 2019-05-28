module.exports = {
    tags: ['selectPizzaSize'],
        'Verify multiple sizes of Pizza' : function (browser) {
            let mainMenu = browser.page.mainMenu();

            mainMenu
            .navigate()
            .selectPizzaSize('35cm NY style');



        browser.pause();
    }

};
