describe('Eight Test Suite: Automate UI elements', function () {
  it('To verify whether the user is able to click checkboxes', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    //section 7
    cy.get('input#checkBoxOption1').check();
    cy.get('input#checkBoxOption1').should('be.checked').and('have.value', 'option1'); //assertion
    cy.get('input#checkBoxOption1').uncheck().should('not.be.checked'); //uncheck and assert
    cy.get('input[type="checkbox"]').check(['option2', 'option3']); //check multiple options
  });
  it('To verify that user is ablèto select static dropdown', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('select').select('option3').should('have.value', 'option3').and("be.visible")
    //select option3 from dropdown
  })
  it("To verify that the value is selected via the dynamic dropdowbs", function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get("input[id='autocomplete']").type("Pa")
    cy.get("li[class='ui-menu-item']").each(($e1, index, list) => {
      if ( $e1.text() === 'Pakistan') {
        $e1.click();

       }
       cy.get("input[id='autocomplete']").should('have.value' , 'Pakistan').and('be.visible')
        
    })
    
  })
})