describe("Example of using screenshot", () => {
  it("Screenshot", () => {
    cy.visit("https://example.cypress.io");
    cy.screenshot('test-case-1');
  });
});