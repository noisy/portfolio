import { RouteLocation } from "vue-router";

function updateSlideLine(to: RouteLocation): void {
  const slideLine = document.querySelector("#slide-line") as HTMLElement;
  const navItems = document.querySelectorAll("#navigation li");
  const currentItem = document.querySelector(
    `a[href="${to.fullPath}`
  ) as HTMLElement;

  navItems.forEach((navItem) => {
    // Hover on
    navItem.addEventListener("mouseenter", () => {
      const width = navItem.getBoundingClientRect().width;
      const left = (navItem as HTMLElement).offsetLeft;

      slideLine.style.width = `${width}px`;
      slideLine.style.left = `${left}px`;
    });
    // Go back to current
    navItem.addEventListener("mouseleave", () => {
      initPosition(currentItem, slideLine);
    });
  });
  initPosition(currentItem, slideLine);
}

function initPosition(currentItem: HTMLElement, slideLine: HTMLElement) {
  if (currentItem) {
    const width = currentItem.getBoundingClientRect().width;
    const left = currentItem.offsetLeft;

    slideLine.style.width = `${width}px`;
    slideLine.style.left = `${left}px`;
  } else {
    slideLine.style.width = "0";
  }
}

export function useNavigation(): {
  updateSlideLine: (to: RouteLocation) => void;
} {
  return {
    updateSlideLine,
  };
}
