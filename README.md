# svelte-dark-mode

[![NPM][npm]][npm-url]
[![Build][build]][build-badge]

> Support dark mode in your Svelte apps.

This component sets the theme based on the user’s preferred color scheme using [window.matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia).

The preferred theme is persisted locally with the [window.localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

<!-- TOC -->

## Install

```bash
yarn add -D svelte-dark-mode
# OR
npm i -D svelte-dark-mode
```

## Usage

The initial `theme` is set to either `"dark"` or `"light"` based on the user’s system preference.

```svelte
<script>
  import DarkMode from "svelte-dark-mode";

  let theme;

  $: switchTheme = theme === "dark" ? "light" : "dark";
  $: document.body.className = theme; // "dark" or "light"
</script>

<style>
  :global(.dark) {
    background: #032f62;
    color: #f1f8ff;
  }
</style>

<DarkMode bind:theme />

<h1>This is {theme} mode.</h1>
<p>Change the theme and reload the page. The theme should be persisted.</p>

<button type="button" on:click={() => (theme = switchTheme)}>
  Switch to {switchTheme} mode
</button>
```

### Server-side rendering (SSR)

If your app uses server-side rendering (SSR), you may need to employ the `afterUpdate` lifecycle hook because `document` is a client-side API.

```html
<script>
  import { afterUpdate } from "svelte";

  afterUpdate(() => {
    document.body.className = theme;
  });
</script>
```

### System preference change

If the user changes their color scheme preference at the system level, the theme will be updated when the page is reloaded.

### Custom `localStorage` key

By default, this component uses `"theme"` as the key to persist the theme. Supply your own local storage key using the `"key"` prop.

```html
<DarkMode key="custom-theme-key" />
```

```js
localStorage.getItem("custom-theme-key"); // "dark" || "light"
```

## API

| Prop name | Value                                   |
| :-------- | :-------------------------------------- |
| theme     | `"dark"` or `"light"` (default: `null`) |
| key       | `string` (default: `"theme"`)           |

### Dispatched events

This component dispatches a `"change"` event when the theme is updated.

```svelte
<script>
  let events = [];
</script>

<button type="button" on:click={() => (theme = switchTheme)}>
  Toggle theme
</button>

<DarkMode
  bind:theme
  on:change={(e) => {
    events = [...events, e.detail];
    console.log(e.detail); // "dark" | "light"
  }}
/>

{events.join(', ')}
```

## TypeScript

To use this component with TypeScript, you will need `svelte` version 3.31 or greater.

## Changelog

[CHANGELOG.md](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-dark-mode.svg?color=blue&style=for-the-badge
[npm-url]: https://npmjs.com/package/svelte-dark-mode
[build]: https://img.shields.io/travis/com/metonym/svelte-dark-mode?style=for-the-badge
[build-badge]: https://travis-ci.com/metonym/svelte-dark-mode
