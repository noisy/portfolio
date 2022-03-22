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
      const filterItems = document.querySelectorAll("#talk-filters .type");
      const languageItems = document.querySelectorAll(
        "#language-filters .type"
      );

      const iso = new Isotope(isotopeContainer, {
        // options
        itemSelector: ".isotope-item",
        layoutMode: "fitRows",
      });

      // filter items on click
      [...filterItems, ...languageItems].forEach((filterItem) => {
        filterItem.addEventListener("click", () => {
          //toggle active class
          for (const siblingFilterItem of filterItem?.parentNode?.children ||
            []) {
            siblingFilterItem.classList.remove("active");
          }
          filterItem.classList.add("active");

          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          const talkActiveFilter = document
            .querySelector("#talk-filters .type.active")!
            .getAttribute("data-filter")!;

          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          const languageActiveFilter = document
            .querySelector("#language-filters .type.active")!
            .getAttribute("data-filter")!;

          // arrange - https://isotope.metafizzy.co/methods.html

          iso.arrange({
            filter: function (item) {
              const result =
                (talkActiveFilter === "*" ||
                  item.classList.contains(talkActiveFilter)) &&
                (languageActiveFilter === "*" ||
                  item.classList.contains(languageActiveFilter));
              return result;
            },
          });
        });
      });
    });
}
