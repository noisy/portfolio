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
    ["Home", "Projects", "Talks", "Blog", "Contact"].forEach((item) => {
      cy.get(`@${item.toLowerCase()}`).should("include.text", item);
    });
  });

  describe("navigation flow", () => {
    function goBackToHome() {
      return cy.go("back").location("pathname").should("eq", "/");
    }

    ["Projects", "Talks", "Blog"].forEach((page) => {
      it(`Should go to ${page} and back`, () => {
        cy.get(`@${page.toLowerCase()}`).click();
        cy.location("pathname").should("eq", `/${page.toLowerCase()}`);
        cy.get("h2").invoke("text").should("include", page);
        goBackToHome();
      });
    });

    it("Should go to contact and back", () => {
      cy.get("@contact").click();
      cy.url().should("include", "#hire-me");
      goBackToHome();
      // todo: check if we are scrolled back to top
    });
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
