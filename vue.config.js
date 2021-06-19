module.exports = {
  pages: {
    index: {
      entry: "./src/main.ts",
      template: "public/index.html",
      filename: "404.html",
      title: "Home",
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
  },
  outputDir: "docs",
};
