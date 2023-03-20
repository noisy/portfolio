/// <reference types='cypress' />

Cypress.config("viewportWidth", 990);

import "cypress-real-events";
import { checkIfElementIsEntirelyInViewport, goBackToHome } from "../utils";

describe("Top navigation in mobile view (below 992px width) test", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('.navbar a[href="/"]').as("home");
    cy.get('.navbar a[href="/projects"]').as("projects");
    cy.get('.navbar a[href="/talks"]').as("talks");
    cy.get('.navbar a[href="/blog"]').as("blog");
    cy.get('.navbar a[href="#hire-me"]').as("contact");
  });

  it("Should open and close top navigation with toggler icon on every page", () => {
    ["Home", "Projects", "Talks", "Blog", "Contact"].forEach((item) => {
      cy.get("#navigation").should("have.class", "collapse");
      cy.get(".navbar-toggler-icon").click();
      cy.get("#navigation").should("not.have.class", "collapse");
      cy.get(`@${item.toLowerCase()}`).click();
      cy.get("#navigation").should("have.class", "collapse");
    });
  });

  it("Should check if top navigation buttons have correct addresses", () => {
    cy.get(".navbar-toggler-icon").click();
    ["Home", "Projects", "Talks", "Blog", "Contact"].forEach((item) => {
      cy.get(`@${item.toLowerCase()}`).should("include.text", item);
    });
  });

  context("Navigation flow", () => {
    ["Projects", "Talks", "Blog"].forEach((page) => {
      it(`Should go to ${page} and back`, () => {
        cy.get(".navbar-toggler-icon").click();
        cy.get(`@${page.toLowerCase()}`).click();
        cy.location("pathname").should("eq", `/${page.toLowerCase()}`);
        cy.get("h2").invoke("text").should("include", page);
        goBackToHome();
      });
    });

    it.skip("Should scroll to Contact and back", () => {
      // expected 192 to be below 20
      cy.get(".navbar-toggler-icon").click();
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

  context(
    "Correct color for every clicked and hovered element in top navigation",
    () => {
      ["Projects", "Talks", "Blog", "Contact", "Home"].forEach((page) => {
        it(`Should check this on ${page} page`, () => {
          cy.get(".navbar-toggler-icon").click();
          ["home", "projects", "talks", "blog", "contact"].forEach((alias) => {
            cy.get(`@${alias}`).should(
              "have.css",
              "color",
              "rgba(255, 255, 255, 0.55)"
            );
          });
          ["home", "projects", "talks", "blog", "contact"].forEach((alias) => {
            cy.get(`@${alias}`)
              .realHover()
              .then(() => {
                cy.get(`@${page3}`).should(
                  "have.css",
                  "color",
                  "rgba(255, 255, 255, 0.75)"
                );
              });
          });
          cy.get(`@${page.toLowerCase()}`).click();
        });
      });
    }
  );
});
