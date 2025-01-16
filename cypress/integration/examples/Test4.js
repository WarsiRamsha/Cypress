//cypress code
//spec file, test file both are same
describe("My test suite", function(){

    it('My first test case', function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.products').as("productLocation")
        cy.wait(5000)
        cy.get('.product')
      .contains('.product-name', 'Tomato - 1 Kg') 
      .parent()
      .find('.product-action button') 
      .click();
        cy.get(".cart-icon").click();
        cy.contains("PROCEED TO CHECKOUT").click();
        cy.contains("Place Order").click();
        cy.contains("Proceed").click(); //buttons are in invisible mode.

    
        })
    })