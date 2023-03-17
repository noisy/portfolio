/// <reference types='cypress' />

import "cypress-real-events";
import { checkIfElementIsEntirelyInViewport } from "../utils";

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

    it("Should scroll to Contact and back", () => {
      cy.get("@contact").realClick();
      cy.url().should("include", "#hire-me");
      cy.get("#hire-me")
        .should("be.visible")
        .then(checkIfElementIsEntirelyInViewport);

      goBackToHome();

      cy.window().then((win) => {
        // we use 20, because after click and before scrolling site is scrolled a bit
        expect(win.scrollY).to.be.lessThan(20);
      });
    });
  });

  it("Should check the correct place for slider under every element in top navigation", () => {
    function checkSlideLinePosition($el) {
      const leftOffset = Math.round($el.position().left);
      cy.get("#slide-line").should("have.css", "left", `${leftOffset}px`);
    }

    ["projects", "talks", "blog", "home"].forEach((page) => {
      cy.get(`@${page}`).click().then(checkSlideLinePosition);
    });
  });

  it(
    "Should check the correct place for slider under HOVERING over element in top navigation"
  );
});
