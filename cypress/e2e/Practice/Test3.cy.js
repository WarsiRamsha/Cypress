describe("My Third test suite", function () {
  it("My first test case in third test suite", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.wait(5000);
    //const logo = cy.get('.brand.greenLogo');
    //cy.log(logo.text())
    cy.get(".brand.greenLogo").then((logoName) => {
      cy.log(logoName.text());
    });
  });
});
describe("My fourth test suite", function () {
  it("My first test case in fourth suite", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(5000); //thread.sleep
    //goal is where cashew is present
    cy.get(".products").as("productLocation");
    cy.get("@productLocation")
      .find(".product")
      .each((e1, index, list) => {
        const vegText = e1.find("h4.product-name").text();
        if (vegText.includes("Cashews")) {
          e1.find("button").click();
          console.log("Cypress is async, so this will execute first");
        }
      });
  });
});
