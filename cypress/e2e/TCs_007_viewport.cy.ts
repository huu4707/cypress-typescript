describe("Example of using viewport", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/commands/viewport");
    cy.wait(200);
    cy.get(".navbar-inverse .navbar-toggle").as("elHamburgerMenu");
  });

  it("hamburger menu exists when viewport is 320x480", () => {
    cy.viewport(320, 480);
    cy.get("@elHamburgerMenu").should("not.have.css", "display", "none");
  });

  it("hamburger menu not exist when viewport is 1200x800", () => {
    cy.viewport(1200, 800);
    cy.get("@elHamburgerMenu").should("have.css", "display", "none");
  });

  it("hamburger menu does not exist on macbook-15 devices", () => {
    cy.viewport("macbook-15");
    cy.get("@elHamburgerMenu").should("have.css", "display", "none");
  });

  it("hamburger menu exists on iphone-6+ devices", () => {
    cy.viewport("iphone-6+");
    cy.get("@elHamburgerMenu").should("not.have.css", "display", "none");
  });
});
