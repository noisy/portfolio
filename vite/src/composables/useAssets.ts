export function useAssets() {
  const assets = import.meta.globEager("../images/**/*");
  return {
    getAsset: (path: string) => {
      const url = assets[path.replace("@", "..")];
      if (!url) {
        console.error(`Asset not found: ${path}`);
        return "";
      }
      return url.default;
    },
  };
}
