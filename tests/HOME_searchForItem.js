module.exports = {
    tags: ['SearchForItem'],
        'Make your own pizza and verify every ingredient can be selected' : function (browser) {
            let mainMenu = browser.page.mainMenu();

            mainMenu
            .navigate()
            .makeYourOwnPizza('Stel zelf je pizza samen');



        browser.pause();
    }

};
