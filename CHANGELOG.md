# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

- Set theme in `document.body` or `document.documentElement` by default

## [2.1.0](https://github.com/metonym/svelte-dark-mode/releases/tag/v2.1.0) - 2022-01-23

- update JSDoc/type description for `theme` prop

## [2.0.0](https://github.com/metonym/svelte-dark-mode/releases/tag/v2.0.0) - 2021-09-05

- use `.svelte.d.ts` for TypeScript component definition extension

## [1.0.0](https://github.com/metonym/svelte-dark-mode/releases/tag/v1.0.0) - 2021-03-07

**Breaking Changes**

- `theme` type changed to `"dark" | "light"`

**Features**

- validate the `theme` value at runtime (must be either "dark" or "light")
- add event listener to automatically update the theme

## [0.3.0](https://github.com/metonym/svelte-dark-mode/releases/tag/v0.3.0) - 2020-12-22

- use `SvelteComponentTyped` interface in TypeScript definitions

## [0.2.0](https://github.com/metonym/svelte-dark-mode/releases/tag/v0.2.0) - 2020-11-17

- add TypeScript definitions

## [0.1.1](https://github.com/metonym/svelte-dark-mode/releases/tag/v0.1.1) - 2020-09-17

**Fixes**

- Fix bug where initial theme switch is not persisted in `window.localStorage`

## [0.1.0](https://github.com/metonym/svelte-dark-mode/releases/tag/v0.1.0) - 2020-04-21

- Initial release
