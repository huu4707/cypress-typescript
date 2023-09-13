describe("Example of using before and beforeEach", () => {
  // before(() => {
  // // Code to run once before all the test cases
  //   cy.visit("https://example.cypress.io");
  // });

  // it("Test Case 1", () => {
  //   expect(true).to.equal(true);
  // });

  // it("Test Case 2", () => {
  //   expect(true).to.equal(true);
  // });

  beforeEach(() => {
    // Code to run before each test case
    cy.visit("https://example.cypress.io");
  });

  it("Test Case 1", () => {
    expect(true).to.equal(true);
  });

  it("Test Case 2", () => {
    expect(true).to.equal(true);
  });
});
