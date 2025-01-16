//cypress code
//spec file, test file both are same
describe("My first test suite", function(){

it('My first test case' , function() {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('ca')
    cy.wait(5000) //thread.sleep
    //goal is where cashew is present
    cy.get('.products').find('.product').each((e1, index, list) => {
        const vegText = e1.find("h4.product-name").text()
        if (vegText.includes("Cashews")) {
           
            e1.find('button').click();

        }
            
    })
})
})