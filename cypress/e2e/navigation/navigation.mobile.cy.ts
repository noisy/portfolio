/// <reference types='cypress' />

import "cypress-real-events";
import { checkIfElementIsEntirelyInViewport, goBackToHome } from "../../utils";
import { bootstrapBreakpoints } from "../../utils/constants";

Cypress.config("viewportWidth", bootstrapBreakpoints.lg - 1);

describe(`Top navigation in mobile view (below ${bootstrapBreakpoints.lg}px width) test`, () => {
  let aliases: string[];

  beforeEach(() => {
    cy.visit("/");
    cy.get('.navbar a[href="/"]').as("home");
    cy.get('.navbar a[href="/projects"]').as("projects");
    cy.get('.navbar a[href="/talks"]').as("talks");
    cy.get('.navbar a[href="/blog"]').as("blog");
    cy.get('.navbar a[href="#hire-me"]').as("contact");
    aliases = ["@home", "@projects", "@talks", "@blog", "@contact"];
  });

  it("Should open and close top navigation with toggler icon on every page", () => {
    aliases.forEach((alias) => {
      cy.get("#navigation").should("have.class", "collapse");
      cy.get(".navbar-toggler-icon").click();
      cy.get("#navigation").should("not.have.class", "collapse");
      cy.get(alias).click();
      cy.get("#navigation").should("have.class", "collapse");
    });
  });

  it("Should check if top navigation buttons have correct addresses", () => {
    cy.get(".navbar-toggler-icon").click();
    [
      { name: "Home", link: "/" },
      { name: "Projects", link: "/projects" },
      { name: "Talks", link: "/talks" },
      { name: "Blog", link: "/blog" },
      { name: "Contact", link: "#hire-me" },
    ].forEach(({ name, link }) => {
      cy.get(`.navbar a:contains('${name}')`).should("have.attr", "href", link);
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
      // TODO: fix the problem "expected 192 to be below 20"
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

  it("Should have correct color for every clicked and hovered element in top navigation", () => {
    cy.get(".navbar-toggler-icon").click();
    aliases.forEach((alias) => {
      cy.get(alias).should("have.css", "color", "rgba(255, 255, 255, 0.55)");
    });
    aliases.forEach((alias) => {
      cy.get(alias)
        .realHover()
        .then(() => {
          cy.get(alias).should(
            "have.css",
            "color",
            "rgba(255, 255, 255, 0.75)"
          );
        });
    });
  });
});
