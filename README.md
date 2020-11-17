# svelte-dark-mode

[![NPM][npm]][npm-url]
[![Build][build]][build-badge]

> Support dark mode in your Svelte apps.

This component sets the theme based on the user’s preferred color scheme using [window.matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia).

The preferred theme is persisted locally using [window.localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

## Install

```sh
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

  $: document.body.className = theme; // "dark" or "light"
</script>

<style>
  :global(.dark) {
    background-color: #262626;
    color: #f4f4f4;
  }
</style>

<DarkMode bind:theme />
```

### Server-side rendering (SSR)

If your app uses server-side rendering (SSR), you may need to employ the `afterUpdate` lifecycle hook because `document` is a browser API.

```svelte
<script>
  import DarkMode from "svelte-dark-mode";
  import { afterUpdate } from "svelte";

  let theme;

  afterUpdate(() => {
    document.body.className = theme;
  });
</script>
```

### System preference change

If the user changes their color scheme preference at the system level, the theme will be updated when the page is reloaded.

### Custom `localStorage` key

By default, this component uses `"theme"` as the key to persist the theme. Supply your own value through the `"key"` prop.

```svelte
<DarkMode key="custom-theme-key" />
```

```js
localStorage.getItem("custom-theme-key"); // "dark" || "light"
```

## API

| Property name | Value                                   |
| :------------ | :-------------------------------------- |
| theme         | `"dark"` or `"light"` (default: `null`) |
| key           | `string` (default: `"theme"`)           |

### Dispatched events

```jsx
<DarkMode
  on:change={({ detail }) => {
    console.log(detail.theme); // "dark" | "light"
  }}
/>
```

## [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-dark-mode.svg?color=blue
[npm-url]: https://npmjs.com/package/svelte-dark-mode
[build]: https://travis-ci.com/metonym/svelte-dark-mode.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/svelte-dark-mode
