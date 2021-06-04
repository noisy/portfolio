"use strict";

/* ======= Isotope plugin ======= */
/* Ref: http://isotope.metafizzy.co/ */
// init Isotope

import imagesLoaded from "imagesloaded";
import Isotope from "isotope-layout";

export function setupIsotopeFilters(): void {
  const isotopeContainer: HTMLElement | null =
    document.querySelector(".isotope");

  isotopeContainer &&
    imagesLoaded(isotopeContainer, function () {
      const filterItems = document.querySelectorAll("#filters .type");

      const iso = new Isotope(isotopeContainer, {
        // options
        itemSelector: ".isotope-item",
        layoutMode: "fitRows",
      });

      // filter items on click
      filterItems.forEach((filterItem) => {
        filterItem.addEventListener("click", () => {
          const filterValue = filterItem.getAttribute("data-filter");

          // arrange - https://isotope.metafizzy.co/methods.html
          filterValue && iso.arrange({ filter: filterValue });

          //toggle active class
          for (const siblingFilterItem of filterItem?.parentNode?.children ||
            []) {
            siblingFilterItem.classList.remove("active");
          }
          filterItem.classList.add("active");
        });
      });
    });
}
