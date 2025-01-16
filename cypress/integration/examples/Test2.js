//cypress code
//spec file, test file both are same
describe("My first test suite", function(){

    it('My first test case' , function() {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.wait(5000)
        cy.get('.product').should('have.length', 31);

    
    })
    })