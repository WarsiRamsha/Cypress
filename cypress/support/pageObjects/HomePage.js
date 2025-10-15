class HomePage {
  elements = {
    signInButton: () => cy.get(':nth-child(2) > .MuiButtonBase-root', { timeout: 5000 })
  };

  clickSignIn() {
    this.elements.signInButton().click();
  }
}

export default HomePage;
