import LoginPage from '../support/pageObjects/LoginPage';
import HomePage from '../support/pageObjects/HomePage';

Cypress.Commands.add('loginViaUI', (email, password) => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();

  loginPage.visit();
  homePage.clickSignIn();
  loginPage.login(email, password);
  loginPage.clickLogin();

  cy.contains('h6', 'Projects', { timeout: 10000 }).should('be.visible');
});