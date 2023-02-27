const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
const frameCount = 2;
let frame = 0;

function animateFavicon() {
  setInterval(updateFavicon, 500);
}

function updateFavicon() {
  if (favicon) {
    favicon.href = `favicon_frame${frame++ % frameCount}.png`;
  }
}

export function useFavicon() {
  return { animateFavicon };
}
