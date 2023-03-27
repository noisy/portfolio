/// <reference types='cypress' />

import {
  assertFiltersWorksCorrectly,
  assertVisabilityOfItemsByName,
} from "./utils";

const talksFilters = ["*", "docker", "git", "blockchain"];
const languageFilters = ["*", "polish", "english"];

const talks = [
  { name: "Git workflow", cat: "git", lang: "polish", alias: "git-pl" },
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

describe.skip("Talks page correct content", () => {
  beforeEach(() => {
    cy.visit("/talks");
  });

  talksFilters.forEach((talkFilter) => {
    languageFilters.forEach((langFilter) => {
      it(`Should display proper items for talk filter "${talkFilter}" and language filter "${langFilter}"`, () => {
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
          .filter(
            ({ cat, lang }) =>
              (cat == talkFilter || talkFilter == "*") &&
              (lang == langFilter || langFilter == "*")
          )
          .map(({ name }) => name);

        const hiddenItems = talks
          .filter(
            ({ cat, lang }) =>
              (cat != talkFilter && talkFilter != "*") ||
              (lang != langFilter && langFilter != "*")
          )
          .map(({ name }) => name);

        assertVisabilityOfItemsByName(visibleItems, hiddenItems);
      });
    });
  });
});
