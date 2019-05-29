To run the tests

Install the correct packages
1. Make sure nodejs is on your system
2. Clone the repository 
3. Install NPM in that folder repo on your local machine

Run the tests
4. Open Powershell or Command Prompt and type: 
- NPM test to run all the test

To run seperate tests
- npm -- --tag addPizzaToBasket 
- npm -- --tag selectPizzaSize
- npm -- --tag searchForItem
- npm -- --tag makeYourOwnPizza

-------------------------------------------------
Scenarios examples, detailed for addPizzaToBasket  
Should be retraceable to JIRA Behave PRO testsuite, to track automation with BDD and create visibility with Gherkin. 
 
001. Add two products to the basket
Given I am on the mainPage of the application
When I want to add a product to the basket
Then There should be a button under the product 
And it should be clickable 
And the selected product should be added to the basket 

002. Finalise Payment for products
Given I have added two products to the basket
And the "Afrekenen" button has been selected
When I want to finalise the product payment 
Then There should be <input> fields on the payment screen
And these <input> fields need to be filled in before we move to concluding
And should be without any errors 
<input> Firstname | Lastname | Zipcode | Street |  Phonenumber | Housenumber

003. Validate error handeling on payment screen 
Given I am on the payment screen 
When One of the <input> fields has not been filled or has an error
Then the system should inform the user in the UI
And the payment should not be able to be concluded 
<input> Firstname | Lastname | Zipcode | Street |  Phonenumber | Housenumber


