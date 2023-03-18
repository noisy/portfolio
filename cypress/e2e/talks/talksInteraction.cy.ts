/// <reference types='cypress' />

import { assertFiltersWorksCorrectly, assertVisabilityOfItems } from "./utils";

describe("Talks page correct content", () => {
  beforeEach(() => {
    cy.visit("/talks");
    cy.get(".section").contains("Git workflow").as("git-pl");
    cy.get(".section")
      .contains(
        "Steem i Steemit - zdecentralizowane social media na blockchain"
      )
      .as("steem-pl");
    cy.get(".section")
      .contains("How to use and store your Bitcoins in a secure way")
      .as("bitcoins-en");
    cy.get(".section")
      .contains("Blockchain - czym jest i jak działa")
      .as("blockchain2-pl");
    cy.get(".section")
      .contains("Blockchain - how it works")
      .as("blockchain1-pl");
    cy.get(".section").contains("Lightning Network").as("lightning-en");
    cy.get(".section")
      .contains("Docker - Easy Containerization")
      .as("docker-pl");
  });

  it('should be only "All" filter marked as selected after page being loaded', () => {
    cy.get('#talk-filters > [data-filter="*"]').should("have.class", "active");
    cy.get('#talk-filters > [data-filter="git"]').should(
      "not.have.class",
      "active"
    );
    cy.get('#talk-filters > [data-filter="docker"]').should(
      "not.have.class",
      "active"
    );
    cy.get('#talk-filters > [data-filter="blockchain"]').should(
      "not.have.class",
      "active"
    );

    cy.get('#language-filters > [data-filter="*"]').should(
      "have.class",
      "active"
    );
    cy.get('#language-filters > [data-filter="english"]').should(
      "not.have.class",
      "active"
    );
    cy.get('#language-filters > [data-filter="polish"]').should(
      "not.have.class",
      "active"
    );
  });

  it("Should display all talks by without clicking any filters", () => {
    assertVisabilityOfItems(
      [
        "bitcoins-en",
        "blockchain1-pl",
        "blockchain2-pl",
        "docker-pl",
        "git-pl",
        "lightning-en",
        "steem-pl",
      ],
      []
    );
  });

  context(
    "Testing visability of items against combinations of Talk filters and Language Filter",
    () => {
      context(
        "Testing visability of items in 'All' category against combinations of language Filter",
        () => {
          beforeEach(() => {
            assertFiltersWorksCorrectly("#talk-filters", "*", [
              "git",
              "docker",
              "blockchain",
            ]);
          });

          it("Should display proper items in 'All' category and 'All' language filter", () => {
            assertFiltersWorksCorrectly("#language-filters", "*", [
              "english",
              "polish",
            ]);
            assertVisabilityOfItems(
              [
                "bitcoins-en",
                "blockchain1-pl",
                "blockchain2-pl",
                "docker-pl",
                "git-pl",
                "lightning-en",
                "steem-pl",
              ],
              []
            );
          });

          it("Should display proper items in 'All' category and 'English' language filter", () => {
            assertFiltersWorksCorrectly("#language-filters", "english", [
              "*",
              "polish",
            ]);
            assertVisabilityOfItems(
              ["bitcoins-en", "lightning-en"],
              [
                "blockchain1-pl",
                "blockchain2-pl",
                "docker-pl",
                "git-pl",
                "steem-pl",
              ]
            );
          });

          it("Should display proper items in 'All' category and 'Polish' language filter", () => {
            assertFiltersWorksCorrectly("#language-filters", "polish", [
              "*",
              "english",
            ]);
            assertVisabilityOfItems(
              [
                "blockchain1-pl",
                "blockchain2-pl",
                "docker-pl",
                "git-pl",
                "steem-pl",
              ],
              ["bitcoins-en", "lightning-en"]
            );
          });
        }
      );

      context(
        "Testing visability of items in 'Git' category against combinations of language Filter",
        () => {
          beforeEach(() => {
            assertFiltersWorksCorrectly("#talk-filters", "git", [
              "*",
              "docker",
              "blockchain",
            ]);
          });

          it("Should display proper items in 'Git' category and 'All' language filter", () => {
            assertFiltersWorksCorrectly("#language-filters", "*", [
              "english",
              "polish",
            ]);
            assertVisabilityOfItems(
              ["git-pl"],
              [
                "bitcoins-en",
                "blockchain1-pl",
                "blockchain2-pl",
                "docker-pl",
                "lightning-en",
                "steem-pl",
              ]
            );
          });

          it("Should display proper items in 'Git' category and 'English' language filter", () => {
            assertFiltersWorksCorrectly("#language-filters", "english", [
              "*",
              "polish",
            ]);
            assertVisabilityOfItems(
              [],
              [
                "bitcoins-en",
                "blockchain1-pl",
                "blockchain2-pl",
                "docker-pl",
                "git-pl",
                "lightning-en",
                "steem-pl",
              ]
            );
          });

          it("Should display proper items in 'Git' category and 'Polish' language filter", () => {
            assertFiltersWorksCorrectly("#language-filters", "polish", [
              "*",
              "english",
            ]);
            assertVisabilityOfItems(
              ["git-pl"],
              [
                "bitcoins-en",
                "blockchain1-pl",
                "blockchain2-pl",
                "docker-pl",
                "lightning-en",
                "steem-pl",
              ]
            );
          });
        }
      );

      context(
        "Testing visability of items in 'Docker' category against combinations of language Filter",
        () => {
          beforeEach(() => {
            assertFiltersWorksCorrectly("#talk-filters", "docker", [
              "*",
              "git",
              "blockchain",
            ]);
          });

          it("Should display proper items in 'Docker' category and 'All' language filter", () => {
            assertFiltersWorksCorrectly("#language-filters", "*", [
              "english",
              "polish",
            ]);
            assertVisabilityOfItems(
              ["docker-pl"],
              [
                "bitcoins-en",
                "blockchain1-pl",
                "blockchain2-pl",
                "git-pl",
                "lightning-en",
                "steem-pl",
              ]
            );
          });

          it("Should display proper items in 'Docker' category and 'English' language filter", () => {
            assertFiltersWorksCorrectly("#language-filters", "english", [
              "*",
              "polish",
            ]);
            assertVisabilityOfItems(
              [],
              [
                "bitcoins-en",
                "blockchain1-pl",
                "blockchain2-pl",
                "docker-pl",
                "git-pl",
                "lightning-en",
                "steem-pl",
              ]
            );
          });

          it("Should display proper items in 'Docker' category and 'Polish' language filter", () => {
            assertFiltersWorksCorrectly("#language-filters", "polish", [
              "*",
              "english",
            ]);
            assertVisabilityOfItems(
              ["docker-pl"],
              [
                "bitcoins-en",
                "blockchain1-pl",
                "blockchain2-pl",
                "git-pl",
                "lightning-en",
                "steem-pl",
              ]
            );
          });
        }
      );

      context(
        "Testing visability of items in 'Blockchain' category against combinations of language Filter",
        () => {
          beforeEach(() => {
            assertFiltersWorksCorrectly("#talk-filters", "blockchain", [
              "*",
              "docker",
              "git",
            ]);
          });

          it("Should display proper items in 'Blockchain' category and 'All' language filter", () => {
            assertFiltersWorksCorrectly("#language-filters", "*", [
              "english",
              "polish",
            ]);
            assertVisabilityOfItems(
              [
                "bitcoins-en",
                "blockchain1-pl",
                "blockchain2-pl",
                "lightning-en",
                "steem-pl",
              ],
              ["docker-pl", "git-pl"]
            );
          });

          it("Should display proper items in 'Blockchain' category and 'English' language filter", () => {
            assertFiltersWorksCorrectly("#language-filters", "english", [
              "*",
              "polish",
            ]);
            assertVisabilityOfItems(
              ["bitcoins-en", "lightning-en"],
              [
                "blockchain1-pl",
                "blockchain2-pl",
                "docker-pl",
                "git-pl",
                "steem-pl",
              ]
            );
          });

          it("Should display proper items in 'Blockchain' category and 'Polish' language filter", () => {
            assertFiltersWorksCorrectly("#language-filters", "polish", [
              "*",
              "english",
            ]);
            assertVisabilityOfItems(
              ["blockchain1-pl", "blockchain2-pl", "steem-pl"],
              ["bitcoins-en", "docker-pl", "git-pl", "lightning-en"]
            );
          });
        }
      );
    }
  );
});
