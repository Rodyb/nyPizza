module.exports = {
    tags: ['addPizzaToBasket'],
    'Verify it\'s possible to add Pizza to basket and verify all mandatory fields are present' : function (browser) {
        let mainMenu = browser.page.mainMenu();
        let validateMenuButtons = ['Pizza', 'Sandwiches', 'Hamburger', 'Salads', 'Pasta', 'Desserts', 'Dranken'];
        let validateMandatoryFieldsCheckOut = ['Firstname', 'Lastname', 'Phonenumber', 'HouseNumber', 'ZipCode', 'Street'];

        mainMenu
            .navigate()
            .assertMenuButtons(browser, validateMenuButtons)
            .selectMenuItem('Pizza')
            .selectAnyPizza('Double Pepperoni')
            .selectAnyPizza('Margerita')
            .payOrder()
                .verifyCorrectItemsAreInBasket(browser)
                .setFirstName('Rody')
                .setLastName('Bothe')
                .setPhoneNumber('0639578863')
                .setZipcode('2266ED')
                .setHouseNumber('249')
                .verifyStreetName()
                .assertCheckOutButtons(browser, validateMandatoryFieldsCheckOut);




        browser.pause();
    }

};
