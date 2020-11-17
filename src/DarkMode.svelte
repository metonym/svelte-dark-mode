<script>
  /**
   * @typedef {null | "dark" | "light"} Theme
   */

  /** @type {Theme} */
  export let theme = null;
  export let key = "theme";

  import { onMount, afterUpdate, createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  const prefersDarkMode = () =>
    matchMedia("(prefers-color-scheme: dark)").matches + "";

  function systemPreferenceChange() {
    const system_theme = localStorage.getItem("system-theme");
    const matches = prefersDarkMode();

    if (system_theme !== matches) localStorage.setItem("system-theme", matches);

    return system_theme != null && system_theme !== matches;
  }

  onMount(() => {
    theme = localStorage.getItem(key);

    if (!theme || systemPreferenceChange()) {
      theme = prefersDarkMode() === "true" ? "dark" : "light";
    }
  });

  afterUpdate(() => {
    if (theme) {
      /** @event {Theme} change */
      dispatch("change", theme);
      localStorage.setItem(key, theme);
    }
  });
</script>
