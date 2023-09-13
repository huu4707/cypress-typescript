describe("Test environment Variables", () => {
  it("TCS env prod", () => {
    switch (Cypress.env("mode")) {
      case "prod":
        expect("https://api.example.com").to.have.string(Cypress.env("api"));
        break;
      case "staging":
        expect("https://api.stagig.example.com").to.have.string(
          Cypress.env("api")
        );
        break;
      default:
        expect("https://api.dev.example.com").to.have.string(
          Cypress.env("api")
        );
        break;
    }
  });
});
