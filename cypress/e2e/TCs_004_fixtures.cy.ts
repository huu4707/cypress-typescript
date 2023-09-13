describe("Example of using fixtures", () => {
  it("Login success", () => {
    cy.fixture("frisoLogin.json").then(({ username, password, login_page }) => {
      cy.visit(login_page);
      cy.get('input[name="username"]').type(username);
      cy.get('input[name="password"]').type(password);
      cy.get(".login-form-button").click();
      cy.url().should("include", "/home");
    });
  });
});
