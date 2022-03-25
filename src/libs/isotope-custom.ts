"use strict";

/* ======= Isotope plugin ======= */
/* Ref: http://isotope.metafizzy.co/ */
// init Isotope

import imagesLoaded from "imagesloaded";
import Isotope from "isotope-layout";

export function setupIsotopeFilters(filterNames: string[]): void {
  const isotopeContainer: HTMLElement | null =
    document.querySelector(".isotope");

  isotopeContainer &&
    imagesLoaded(isotopeContainer, function () {
      filterNames.forEach((filterName: string) => {
        const filterItems = document.querySelectorAll(`#${filterName} .type`);

        const iso = new Isotope(isotopeContainer, {
          // options
          itemSelector: ".isotope-item",
          layoutMode: "fitRows",
        });

        // filter items on click
        filterItems.forEach((filterItem) => {
          filterItem.addEventListener("click", () => {
            //toggle active class
            for (const siblingFilterItem of filterItem?.parentNode?.children ||
              []) {
              siblingFilterItem.classList.remove("active");
            }
            filterItem.classList.add("active");

            const activeFilters = filterNames.map(
              (filterName) =>
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                document
                  .querySelector(`#${filterName} .type.active`)!
                  .getAttribute("data-filter")!
            );

            iso.arrange({
              filter: function (item) {
                const matchFilter = (filter: string) =>
                  filter === "*" || item.classList.contains(filter);

                return activeFilters.every(matchFilter);
              },
            });
          });
        });
      });
    });
}
