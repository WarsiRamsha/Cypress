describe("My test suite for UI elements", function () {

    it('To verify whether the checkbox is selected', function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("input#checkBoxOption1").check().should("be.checked")
            .and("have.attr", "name", "checkBoxOption1");
        cy.get("input#checkBoxOption1").uncheck().should("not.be.checked")
        cy.get("input[type='checkbox']").check();
        cy.get("input[type='checkbox']").uncheck();
        cy.get("input[type='checkbox']").check(["option2"]);
    })
    it('To verify whether the value from dropdown is selected', function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("select").select('option2').should("have.value", "option2")
    })
    it("To verify that text is sent to Dynamic Dropdowns", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get(".inputs.ui-autocomplete-input").type("Pak");
        cy.get(".ui-menu-item div").each((a1, index, list) => {
            if (a1.text() === "Pakistan") {
                a1.click();
            }
    
            cy.get(".inputs.ui-autocomplete-input").should("have.value", "Pakistan")
        })
    })
        it("To verify that text thr visibility and invisibility of elements", function () {
            cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
            cy.get("#displayed-text").should("be.visible")
            cy.get("#hide-textbox").click();
            cy.get("#displayed-text").should("not.be.visible")
    })
})