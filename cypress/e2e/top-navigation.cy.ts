/// <reference types='cypress' />

describe("Top navigation test", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('.navbar a[href="/"]').as("home");
    cy.get('.navbar a[href="/projects"]').as("projects");
    cy.get('.navbar a[href="/talks"]').as("talks");
    cy.get('.navbar a[href="/blog"]').as("blog");
    cy.get('.navbar a[href="#hire-me"]').as("contact");
  });

  it("Should check if top navigation buttons have correct addresses", () => {
    cy.get("@home").should('have.text', 'Home')
    cy.get("@projects")
      .invoke("text")
      .then((text1) => {
        cy.get(".navbar")
          .contains("Projects")
          .invoke("text")
          .then((text2) => {
            expect(text1).to.equal(text2);
          });
      });
    cy.get("@talks")
      .invoke("text")
      .then((text1) => {
        cy.get(".navbar")
          .contains("Talks")
          .invoke("text")
          .then((text2) => {
            expect(text1).to.equal(text2);
          });
      });
    cy.get("@blog")
      .invoke("text")
      .then((text1) => {
        cy.get(".navbar")
          .contains("Blog")
          .invoke("text")
          .then((text2) => {
            expect(text1).to.equal(text2);
          });
      });
    cy.get("@contact")
      .invoke("text")
      .then((text1) => {
        cy.get(".navbar")
          .contains("Contact")
          .invoke("text")
          .then((text2) => {
            expect(text1).to.equal(text2);
          });
      });
  });

  it("Should mimic real user interactions with top navigation", () => {
    function goBackToHome() {
      return cy.go("back").location("pathname").should("eq", "/");
    }
    cy.get("@projects").click();
    cy.location("pathname").should("eq", "/projects");
    cy.get("h2").invoke("text").should("eq", "Projects");
    goBackToHome();
    cy.get("@talks").click();
    cy.location("pathname").should("eq", "/talks");
    cy.get("h2").invoke("text").should("eq", "Talks");
    goBackToHome();
    cy.get("@blog").click();
    cy.location("pathname").should("eq", "/blog");
    cy.get("h2").invoke("text").should("include", "Blog");
    goBackToHome();
    cy.get("@contact").click();
    cy.url().should("include", "#hire-me");
    goBackToHome();
  });

  it("Should check the correct place for slider under every element in top navigation", () => {
    function checkSlideLinePosition($el) {
      const leftOffset = Math.round($el.position().left);
      cy.get("#slide-line").should("have.css", "left", `${leftOffset}px`);
    }

    cy.get("@projects").click().then(checkSlideLinePosition);
    cy.get("@talks").click().then(checkSlideLinePosition);
    cy.get("@blog").click().then(checkSlideLinePosition);
    cy.get("@home").click().then(checkSlideLinePosition);
  });

  it(
    "Should check the correct place for slider under HOVERING over element in top navigation"
  );
});
