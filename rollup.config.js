import resolve from "@rollup/plugin-node-resolve";
import svelte from "rollup-plugin-svelte";
import svelteReadme from "svelte-readme";
import pkg from "./package.json";

export default () => {
  if (!process.env.BUNDLE) {
    return svelteReadme({
      style: `
        body.dark .code-fence {
          background: #032f62;
          color:	#f1f8ff;
        }

        .code-fence p {
          margin-bottom: 24px;
        }

        .code-fence button {
          margin-right: 16px;
        }
      `,
    });
  }

  return ["es", "umd"].map((format) => {
    const UMD = format === "umd";

    return {
      input: pkg.svelte,
      output: {
        format,
        file: UMD ? pkg.main : pkg.module,
        name: UMD ? pkg.name : undefined,
      },
      plugins: [svelte(), resolve()],
    };
  });
};
