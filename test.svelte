<script lang="ts">
  import DarkMode from "./types";
  import { Theme } from "./types/DarkMode";

  let theme: Theme = "light";
  let switchTheme: Theme;

  $: switchTheme = theme === "dark" ? "light" : "dark";
  $: document.body.className = theme; // "dark" or "light"
</script>

<style>
  :global(.dark) {
    background: #032f62;
    color: #f1f8ff;
  }
</style>

<DarkMode
  key="key"
  bind:theme
  on:change={(e) => {
    console.log(e.detail);
  }} />

<h1>This is {theme} mode.</h1>
<p>Change the theme and reload the page. The theme should be persisted.</p>

<button
  type="button"
  on:click={() => {
    theme = switchTheme;
  }}>
  Switch to
  {switchTheme}
  mode
</button>
