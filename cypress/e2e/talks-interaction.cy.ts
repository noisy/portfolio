/// <reference types='cypress' />

describe("Talks page correct content", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(".navbar").contains("Talks").click();
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
    cy.get('[data-filter="git"]').should("not.have.class", "active");
    cy.get('[data-filter="docker"]').should("not.have.class", "active");
    cy.get('[data-filter="blockchain"]').should("not.have.class", "active");
    cy.get('#language-filters > [data-filter="*"]').should(
      "have.class",
      "active"
    );
    cy.get('[data-filter="english"]').should("not.have.class", "active");
    cy.get('[data-filter="polish"]').should("not.have.class", "active");
  });

  it("should display all filters", () => {
    cy.get("@git-pl").should("be.visible");
    cy.get("@steem-pl").should("be.visible");
    cy.get("@bitcoins-en").should("be.visible");
    cy.get("@blockchain2-pl").should("be.visible");
    cy.get("@blockchain1-pl").should("be.visible");
    cy.get("@lightning-en").should("be.visible");
    cy.get("@docker-pl").should("be.visible");
  });

  it("Should mimic real user interactions with talks buttons and show all talks in each category", () => {
    cy.get('[data-filter="git"]').click();
    cy.get('#talk-filters > [data-filter="*"]').should(
      "not.have.class",
      "active"
    );
    cy.get('[data-filter="git"]').should("have.class", "active");
    cy.get('[data-filter="docker"]').should("not.have.class", "active");
    cy.get('[data-filter="blockchain"]').should("not.have.class", "active");
    cy.get('#language-filters > [data-filter="*"]').should(
      "have.class",
      "active"
    );
    cy.get("@steem-pl").should("not.be.visible");
    cy.get("@bitcoins-en").should("not.be.visible");
    cy.get("@blockchain2-pl").should("not.be.visible");
    cy.get("@blockchain1-pl").should("not.be.visible");
    cy.get("@lightning-en").should("not.be.visible");
    cy.get("@docker-pl").should("not.be.visible");

    cy.get('[data-filter="docker"]').click();
    cy.get('#talk-filters > [data-filter="*"]').should(
      "not.have.class",
      "active"
    );
    cy.get('[data-filter="git"]').should("not.have.class", "active");
    cy.get('[data-filter="docker"]').should("have.class", "active");
    cy.get('[data-filter="blockchain"]').should("not.have.class", "active");
    cy.get('#language-filters > [data-filter="*"]').should(
      "have.class",
      "active"
    );
    cy.get("@git-pl").should("not.be.visible");
    cy.get("@steem-pl").should("not.be.visible");
    cy.get("@bitcoins-en").should("not.be.visible");
    cy.get("@blockchain2-pl").should("not.be.visible");
    cy.get("@blockchain1-pl").should("not.be.visible");
    cy.get("@lightning-en").should("not.be.visible");
    cy.get("@docker-pl").should("be.visible");

    cy.get('[data-filter="blockchain"]').click();
    cy.get('#talk-filters > [data-filter="*"]').should(
      "not.have.class",
      "active"
    );
    cy.get('[data-filter="git"]').should("not.have.class", "active");
    cy.get('[data-filter="docker"]').should("not.have.class", "active");
    cy.get('[data-filter="blockchain"]').should("have.class", "active");
    cy.get('#language-filters > [data-filter="*"]').should(
      "have.class",
      "active"
    );
    cy.get("@git-pl").should("not.be.visible");
    cy.get("@steem-pl").should("be.visible");
    cy.get("@bitcoins-en").should("be.visible");
    cy.get("@blockchain2-pl").should("be.visible");
    cy.get("@blockchain1-pl").should("be.visible");
    cy.get("@lightning-en").should("be.visible");
    cy.get("@docker-pl").should("not.be.visible");
  });

  it("Should mimic real user interactions with talks buttons and show correct English and Polish talks in each category", () => {
    cy.get('[data-filter="english"]').click();
    cy.get('#language-filters > [data-filter="*"]').should(
      "not.have.class",
      "active"
    );
    cy.get('[data-filter="english"]').should("have.class", "active");
    cy.get('[data-filter="polish"]').should("not.have.class", "active");
    cy.get("@git-pl").should("not.be.visible");
    cy.get("@steem-pl").should("not.be.visible");
    cy.get("@bitcoins-en").should("be.visible");
    cy.get("@blockchain2-pl").should("not.be.visible");
    cy.get("@blockchain1-pl").should("not.be.visible");
    cy.get("@lightning-en").should("be.visible");
    cy.get("@docker-pl").should("not.be.visible");

    cy.get('[data-filter="polish"]').click();
    cy.get('#language-filters > [data-filter="*"]').should(
      "not.have.class",
      "active"
    );
    cy.get('[data-filter="english"]').should("not.have.class", "active");
    cy.get('[data-filter="polish"]').should("have.class", "active");
    cy.get("@git-pl").should("be.visible");
    cy.get("@steem-pl").should("be.visible");
    cy.get("@bitcoins-en").should("not.be.visible");
    cy.get("@blockchain2-pl").should("be.visible");
    cy.get("@blockchain1-pl").should("be.visible");
    cy.get("@lightning-en").should("not.be.visible");
    cy.get("@docker-pl").should("be.visible");

    cy.get('#language-filters > [data-filter="*"]').click;
    cy.get('[data-filter="git"]').click();
    cy.get('[data-filter="english"]').click();
    cy.get('#language-filters > [data-filter="*"]').should(
      "not.have.class",
      "active"
    );
    cy.get('[data-filter="english"]').should("have.class", "active");
    cy.get('[data-filter="polish"]').should("not.have.class", "active");
    cy.get("@git-pl").should("not.be.visible");
    cy.get("@steem-pl").should("not.be.visible");
    cy.get("@bitcoins-en").should("not.be.visible");
    cy.get("@blockchain2-pl").should("not.be.visible");
    cy.get("@blockchain1-pl").should("not.be.visible");
    cy.get("@lightning-en").should("not.be.visible");
    cy.get("@docker-pl").should("not.be.visible");

    cy.get('[data-filter="polish"]').click();
    cy.get('#language-filters > [data-filter="*"]').should(
      "not.have.class",
      "active"
    );
    cy.get('[data-filter="english"]').should("not.have.class", "active");
    cy.get('[data-filter="polish"]').should("have.class", "active");
    cy.get("@git-pl").should("be.visible");
    cy.get("@steem-pl").should("not.be.visible");
    cy.get("@bitcoins-en").should("not.be.visible");
    cy.get("@blockchain2-pl").should("not.be.visible");
    cy.get("@blockchain1-pl").should("not.be.visible");
    cy.get("@lightning-en").should("not.be.visible");
    cy.get("@docker-pl").should("not.be.visible");

    cy.get('#language-filters > [data-filter="*"]').click;
    cy.get('[data-filter="docker"]').click();
    cy.get('[data-filter="english"]').click();
    cy.get('#language-filters > [data-filter="*"]').should(
      "not.have.class",
      "active"
    );
    cy.get('[data-filter="english"]').should("have.class", "active");
    cy.get('[data-filter="polish"]').should("not.have.class", "active");
    cy.get("@git-pl").should("not.be.visible");
    cy.get("@steem-pl").should("not.be.visible");
    cy.get("@bitcoins-en").should("not.be.visible");
    cy.get("@blockchain2-pl").should("not.be.visible");
    cy.get("@blockchain1-pl").should("not.be.visible");
    cy.get("@lightning-en").should("not.be.visible");
    cy.get("@docker-pl").should("not.be.visible");

    cy.get('[data-filter="polish"]').click();
    cy.get('#language-filters > [data-filter="*"]').should(
      "not.have.class",
      "active"
    );
    cy.get('[data-filter="english"]').should("not.have.class", "active");
    cy.get('[data-filter="polish"]').should("have.class", "active");
    cy.get("@git-pl").should("not.be.visible");
    cy.get("@steem-pl").should("not.be.visible");
    cy.get("@bitcoins-en").should("not.be.visible");
    cy.get("@blockchain2-pl").should("not.be.visible");
    cy.get("@blockchain1-pl").should("not.be.visible");
    cy.get("@lightning-en").should("not.be.visible");
    cy.get("@docker-pl").should("be.visible");

    cy.get('#language-filters > [data-filter="*"]').click;
    cy.get('[data-filter="blockchain"]').click();
    cy.get('[data-filter="english"]').click();
    cy.get('#language-filters > [data-filter="*"]').should(
      "not.have.class",
      "active"
    );
    cy.get('[data-filter="english"]').should("have.class", "active");
    cy.get('[data-filter="polish"]').should("not.have.class", "active");
    cy.get("@git-pl").should("not.be.visible");
    cy.get("@steem-pl").should("not.be.visible");
    cy.get("@bitcoins-en").should("be.visible");
    cy.get("@blockchain2-pl").should("not.be.visible");
    cy.get("@blockchain1-pl").should("not.be.visible");
    cy.get("@lightning-en").should("be.visible");
    cy.get("@docker-pl").should("not.be.visible");

    cy.get('[data-filter="polish"]').click();
    cy.get('#language-filters > [data-filter="*"]').should(
      "not.have.class",
      "active"
    );
    cy.get('[data-filter="english"]').should("not.have.class", "active");
    cy.get('[data-filter="polish"]').should("have.class", "active");
    cy.get("@git-pl").should("not.be.visible");
    cy.get("@steem-pl").should("be.visible");
    cy.get("@bitcoins-en").should("not.be.visible");
    cy.get("@blockchain2-pl").should("be.visible");
    cy.get("@blockchain1-pl").should("be.visible");
    cy.get("@lightning-en").should("not.be.visible");
    cy.get("@docker-pl").should("not.be.visible");
  });
});
