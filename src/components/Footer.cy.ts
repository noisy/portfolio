/// <reference types="cypress" />

import Footer from "./Footer.vue";

describe("<Footer />", () => {
  it("renders", () => {
    cy.viewport(1200, 400);
    cy.mount(Footer);
    cy.contains("Interested in hiring me for your project?");

    cy.get("a").as("emailLink");

    cy.get("@emailLink")
      .invoke("text")
      .should("eq", "hello@krzysztofszumny.com");

    cy.get("@emailLink")
      .should("have.attr", "href")
      .and("include", "mailto:reksio@reksio.com");
  });
});
