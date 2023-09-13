describe("Example of using before and beforeEach", () => {
  // afterEach(() => {
  //   // runs after each test in the block
  //   expect(true).to.equal(true);
  // });

  after(() => {
    // runs once after all tests in the block
    expect(true).to.equal(true);
  });

  it("Test Case 1", () => {
    cy.visit("https://example.cypress.io");
  });

  it("Test Case 2", () => {
    cy.visit("https://example.cypress.io");
  });
});
