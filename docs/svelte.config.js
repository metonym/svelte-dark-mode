const { mdsvex } = require("mdsvex");
const pkg = require("../package.json");

module.exports = {
  extensions: [".svelte", ".svx"],
  preprocess: [
    mdsvex(),
    {
      script: ({ content }) => {
        return {
          code: content
            .replace(/process.env.NAME/g, JSON.stringify(pkg.name))
            .replace(/process.env.VERSION/g, JSON.stringify(pkg.version)),
        };
      },
    },
  ],
};
