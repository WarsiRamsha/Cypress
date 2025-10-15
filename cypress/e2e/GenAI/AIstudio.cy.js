describe('Gen AI', function () {
  it('Gen AI', function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://rahulshettyacademy.com/client');
    cy.get('#userEmail').clear('ramsha.warsi@gmail.com');
    cy.get('#userEmail').type('ramsha.warsi@gmail.com');
    cy.get('#userPassword').click();
    cy.get('#userPassword').clear('A');
    cy.get('#userPassword').type('Allahisthebest!1');
    cy.get('#login').click();
    cy.get(':nth-child(1) > .card > .card-body > .w-10').click();
    cy.get(':nth-child(2) > .card > .card-body > .w-10').should('be.visible');
    cy.get(':nth-child(2) > .card > .card-body > .w-10').should('be.enabled');
    cy.get(':nth-child(2) > .card > .card-body > .w-10').should('be.visible');
    cy.get(':nth-child(3) > .card > .card-body > .w-10 > .fa').click();
    cy.get(':nth-child(4) > .btn').click();
    cy.get('.heading > .btn').should('be.visible');
    cy.get('.heading > .btn').should('be.enabled');
    cy.get(':nth-child(1) > .items > .infoWrap > :nth-child(1) > .itemImg').click();
    /* ==== End Cypress Studio ==== */
  });
});
