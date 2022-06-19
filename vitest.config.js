import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import preprocess from "svelte-preprocess";

export default defineConfig({
  plugins: [
    svelte({
      hot: !process.env.VITEST,
      preprocess: [preprocess()]
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
  },
});
