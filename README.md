# svelte-dark-mode

[![NPM][npm]][npm-url]

> Support dark mode in your Svelte apps.

<!-- REPO_URL -->

This component sets the theme based on the user’s preferred color scheme using [window.matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia).

The preferred theme is persisted using the [window.localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

---

<!-- TOC -->

## Installation

**Yarn**

```bash
yarn add -D svelte-dark-mode
```

**NPM**

```bash
npm i -D svelte-dark-mode
```

**pnpm**

```bash
pnpm i -D svelte-dark-mode
```

## Usage

### Basic

The `theme` is set to either `"dark"` or `"light"` based on the user’s system preference.

```svelte
<script>
  import DarkMode from "svelte-dark-mode";

  let theme;

  $: switchTheme = theme === "dark" ? "light" : "dark";
  $: document.body.className = theme;
</script>

<DarkMode bind:theme />

<h1>This is {theme} mode.</h1>
<p>Change the theme and reload the page.</p>

<button on:click={() => (theme = switchTheme)}>
  Switch to {switchTheme} mode
</button>

<style>
  :global(.dark) {
    background: #032f62;
    color: #f1f8ff;
  }
</style>
```

### Server-side rendering (SSR)

When using server-side rendering (SSR), employ the `afterUpdate` lifecycle to access `document.body` or `document.documentElement`.

```svelte no-eval
<script>
  import DarkMode from "svelte-dark-mode";
  import { afterUpdate } from "svelte";

  let theme;

  afterUpdate(() => {
    document.body.className = theme; // "dark" or "light"
  });
</script>

<DarkMode bind:theme />
```

An alternative to the `afterUpdate` lifecycle hook is to check if the type of `window` is undefined.

```js no-eval
$: if (typeof window !== "undefined") {
  document.body.className = theme;
}
```

### System preference change

The theme will automatically be updated if the user changes their color scheme preference at the system level.

### Custom `localStorage` key

Use the `key` prop to customize the local storage key used to track the persisted theme.

By default, the key is `"theme"`.

```svelte no-eval
<DarkMode key="custom-theme-key" />
```

Use the `localStorage.getItem` API to programmatically access the stored value.

```js
localStorage.getItem("custom-theme-key"); // "dark" || "light"
```

## API

### Props

| Name  | Type                  | Default value |
| :---- | :-------------------- | :------------ |
| theme | `"dark"` or `"light"` | `"dark"`      |
| key   | `string`              | `"theme"`     |

### Dispatched events

- **on:change**: dispatched when `theme` is updated

```svelte no-eval
<DarkMode
  on:change={(e) => {
    console.log(e.detail); // "dark" | "light"
  }}
/>
```

## TypeScript

`svelte` version 3.31 or greater is required to use this component with TypeScript.

TypeScript definitions are located in the [types folder](./types).

## Changelog

[CHANGELOG.md](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-dark-mode.svg?color=%23ff3e00&style=for-the-badge
[npm-url]: https://npmjs.com/package/svelte-dark-mode
