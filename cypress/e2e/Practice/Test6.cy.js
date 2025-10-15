describe("Seventh Test suite july 8th 2025", function ()
{ 
    it("To verify user is able to send values", function () {
        cy.visit("https://rahulshettyacademy.com")
cy.get('.nav-outer > .main-menu > .navbar-collapse > .navigation > :nth-child(7) > a').click()
        //cy.contains('a', 'Practice Page').should('exist').clic.k()
        cy.get('#name').type("Ramsha Warsi")
        cy.get("input[type='email']").type("ramsha.warssi@gmail.com")
        cy.get("#form-submit").click()
        


        
    })
    
})