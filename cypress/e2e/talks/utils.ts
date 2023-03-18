export function assertFiltersWorksCorrectly(
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
}

export function assertVisabilityOfItems(
  visibleItems: string[],
  hiddenItems: string[]
) {
  cy.wrap(visibleItems).each((item) => {
    cy.get(`@${item}`).should("be.visible");
  });
  cy.wrap(hiddenItems).each((item) => {
    cy.get(`@${item}`).should("not.be.visible");
  });
}

export function assertVisabilityOfItemsByName(
  namesOfvisibleItems: string[],
  namesOfhiddenItems: string[]
) {
  cy.wrap(namesOfvisibleItems).each((name: string) => {
    cy.get(".section").contains(name).should("be.visible");
  });
  cy.wrap(namesOfhiddenItems).each((name: string) => {
    cy.get(".section").contains(name).should("not.be.visible");
  });
}
