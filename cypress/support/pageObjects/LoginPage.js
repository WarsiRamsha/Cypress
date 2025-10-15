class LoginPage {
  elements = {
    emailInput: () => cy.get('input[name="email"]', { timeout: 10000 }),
    passwordInput: () => cy.get('input[type="password"]', { timeout: 10000 }),
    loginButton: () => cy.get('button[type="submit"]', { timeout: 10000 })
  };

  visit() {
    cy.visit(
      'https://stag-publistic-app-gwhmcqcwceg0aye8.germanywestcentral-01.azurewebsites.net',
      {
        timeout: 180000, // 3 minutes
        failOnStatusCode: false
      }
    );
  }

  enterEmail(email) {
    this.elements.emailInput().clear().type(email);
  }

  enterPassword(password) {
    this.elements.passwordInput().clear().type(password);
  }

  clickLogin() {
    this.elements.loginButton().click();
  }

  login(email, password) {
    this.enterEmail(email);
    this.enterPassword(password);
  }
}

export default LoginPage;
