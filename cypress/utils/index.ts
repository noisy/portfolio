export function checkIfElementIsEntirelyInViewport($el) {
  cy.window().then((win) => {
    const windowHeight =
      win.innerHeight || win.document.documentElement.clientHeight;
    const windowWidth =
      win.innerWidth || win.document.documentElement.clientWidth;
    expect(isInViewportEntirely($el[0], windowHeight, windowWidth)).to.be.true;
  });
}

function isInViewportEntirely(
  element: Element,
  windowHeight: number,
  windowWidth: number
) {
  const rect = element.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= windowHeight &&
    rect.right <= windowWidth
  );
}
