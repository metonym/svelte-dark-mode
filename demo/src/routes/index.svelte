<script>
  import DarkMode from "svelte-dark-mode";
  import { afterUpdate } from "svelte";

  let theme;

  afterUpdate(() => {
    document.body.className = theme;
  });

  $: switchTheme = theme === "dark" ? "light" : "dark";
</script>

<style>
  :global(body) {
    line-height: 1.42;
  }

  :global(main > *) {
    margin-bottom: 1.5rem;
  }

  :global(.dark) {
    background-color: #262626;
    color: #f4f4f4;
  }

  :global(.dark a) {
    color: #f4f4f4;
  }

  h1 {
    font-size: 2.25rem;
  }

  button {
    background: none;
    border: 0;
    font: inherit;
    color: inherit;
    font-size: 1.25rem;
    text-decoration: underline;
    cursor: pointer;
  }
</style>

<svelte:head>
  <title>svelte-dark-mode</title>
</svelte:head>

<DarkMode bind:theme />

<h1>This is {theme} mode.</h1>

<button
  type="button"
  on:click={() => {
    theme = switchTheme;
  }}>
  Switch to {switchTheme} mode
</button>

<p>
  This component uses
  <a
    href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"
    target="_blank"
    rel="noopener noreferrer">
    window.localStorage
  </a>
  to persist the theme locally. If you reload the page, the browser will
  remember the theme.
</p>

<p>
  If you change the color scheme in your System Preferences, the theme will
  update accordingly when the page is reloaded.
</p>
