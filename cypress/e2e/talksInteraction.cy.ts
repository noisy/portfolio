/// <reference types='cypress' />

const talksFilters = [
  // "*",
  // "docker",
  "git",
  // "blockchain"
];
const languageFilters = [
  "*",
  // "polish",
  // "english"
];

function assertFiltersWorksCorrectly(
  wrapperSelector: string,
  filterToSelect: string,
  expectedDisabledFilters: string[]
) {
  cy.get(`${wrapperSelector} > [data-filter="${filterToSelect}"]`).click();
  cy.get(`${wrapperSelector} > [data-filter="${filterToSelect}"]`).should(
    "have.class",
    "active"
  );

  cy.wrap(expectedDisabledFilters).each((item: string) => {
    cy.get(`${wrapperSelector} > [data-filter="${item}"]`).should(
      "not.have.class",
      "active"
    );
  });

  // cy.get('#language-filters > [data-filter="*"]').should(
  //   "have.class",
  //   "active"
  // );
}

function assertVisabilityOfItems(
  visibleItems: string[],
  hiddenItems: string[]
) {
  cy.log(visibleItems.join(", "));
  cy.log(hiddenItems.join(", "));

  visibleItems.forEach((item) => {
    cy.get(`@${item}`).should("be.visible");
  });

  // cy.wrap(visibleItems).each((item) => {
  //   cy.get(`@${item}`).should("be.visible");
  // });

  hiddenItems.forEach((item) => {
    cy.get(`@${item}`).should("not.be.visible");
  });

  // cy.wrap(hiddenItems).each((item) => {
  //   cy.get(`@${item}`).should("not.be.visible");
  // });
}

const talks = [
  { name: "Git workflow", cat: "git", lang: "pl", alias: "git-pl" },
  {
    name: "Steem i Steemit - zdecentralizowane social media na blockchain",
    cat: "blockchain",
    lang: "polish",
    alias: "steem-pl",
  },
  {
    name: "How to use and store your Bitcoins in a secure way",
    cat: "blockchain",
    lang: "english",
    alias: "bitcoins-en",
  },
  {
    name: "Blockchain - czym jest i jak działa",
    cat: "blockchain",
    lang: "polish",
    alias: "blockchain2-pl",
  },
  {
    name: "Blockchain - how it works",
    cat: "blockchain",
    lang: "polish",
    alias: "blockchain1-pl",
  },
  {
    name: "Lightning Network",
    cat: "blockchain",
    lang: "english",
    alias: "lightning-en",
  },
  {
    name: "Docker - Easy Containerization",
    cat: "docker",
    lang: "polish",
    alias: "docker-pl",
  },
];

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

  talksFilters.forEach((talkFilter) => {
    languageFilters.forEach((langFilter) => {
      it.skip(`Should display proper items for talk filter: ${talkFilter} and language filter ${langFilter}`, () => {
        assertFiltersWorksCorrectly(
          "#talk-filters",
          talkFilter,
          talksFilters.filter((tf) => tf != talkFilter)
        );

        assertFiltersWorksCorrectly(
          "#language-filters",
          langFilter,
          languageFilters.filter((lf) => lf != langFilter)
        );

        const visibleItems = talks
          .filter(({ cat, lang }) => cat == talkFilter && lang == langFilter)
          .map(({ alias }) => alias);

        const hiddenItems = talks
          .filter(({ cat, lang }) => cat != talkFilter || lang != langFilter)
          .map(({ alias }) => alias);

        assertVisabilityOfItems(visibleItems, hiddenItems);
      });
    });
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

  it("Should display all talks by default", () => {
    cy.wrap(talks).each(({ name }: { name: string }) => {
      cy.contains(".section", name).should("be.visible");
    });

    // assertVisabilityOfItems(
    //   [
    //     "bitcoins-en",
    //     "blockchain1-pl",
    //     "blockchain2-pl",
    //     "docker-pl",
    //     "git-pl",
    //     "lightning-en",
    //     "steem-pl",
    //   ],
    //   []
    // );
  });

  it("Should display all talks in a given category regardless of language", () => {
    assertFiltersWorksCorrectly("#talk-filters", "git", [
      "*",
      "docker",
      "blockchain",
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

    assertFiltersWorksCorrectly("#talk-filters", "docker", [
      "*",
      "git",
      "blockchain",
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

    assertFiltersWorksCorrectly("#talk-filters", "blockchain", [
      "*",
      "git",
      "docker",
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

  it("Given talks from particular category, it should display proper items in regards of selected language filter", () => {
    ////////// FOR ALL talk category: *, ENGLISH, POLISH
    assertFiltersWorksCorrectly("#talk-filters", "*", [
      "git",
      "docker",
      "blockchain",
    ]);

    assertFiltersWorksCorrectly("#language-filters", "english", [
      "*",
      "polish",
    ]);
    assertVisabilityOfItems(
      ["bitcoins-en", "lightning-en"],
      ["blockchain1-pl", "blockchain2-pl", "docker-pl", "git-pl", "steem-pl"]
    );

    assertFiltersWorksCorrectly("#language-filters", "polish", [
      "*",
      "english",
    ]);
    assertVisabilityOfItems(
      ["blockchain1-pl", "blockchain2-pl", "docker-pl", "git-pl", "steem-pl"],
      ["bitcoins-en", "lightning-en"]
    );

    ////////// FOR GIT: *, ENGLISH, POLISH

    assertFiltersWorksCorrectly("#talk-filters", "git", [
      "*",
      "docker",
      "blockchain",
    ]);

    assertFiltersWorksCorrectly("#language-filters", "*", [
      "polish",
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

    ///////////

    ////////// FOR DOCKER: *, ENGLISH, POLISH

    assertFiltersWorksCorrectly("#talk-filters", "docker", [
      "*",
      "git",
      "blockchain",
    ]);

    assertFiltersWorksCorrectly("#language-filters", "*", [
      "polish",
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

    ////////// FOR BLOCKCHAIN: *, ENGLISH, POLISH

    assertFiltersWorksCorrectly("#talk-filters", "blockchain", [
      "*",
      "git",
      "docker",
    ]);

    assertFiltersWorksCorrectly("#language-filters", "*", [
      "polish",
      "english",
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

    assertFiltersWorksCorrectly("#language-filters", "english", [
      "*",
      "polish",
    ]);

    assertVisabilityOfItems(
      ["bitcoins-en", "lightning-en"],
      ["steem-pl", "blockchain1-pl", "blockchain2-pl", "docker-pl", "git-pl"]
    );

    assertFiltersWorksCorrectly("#language-filters", "polish", [
      "*",
      "english",
    ]);

    assertVisabilityOfItems(
      ["blockchain1-pl", "blockchain2-pl", "steem-pl"],
      ["bitcoins-en", "docker-pl", "git-pl", "lightning-en"]
    );
  });
});
