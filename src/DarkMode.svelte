<script>
  /**
   * @type {null | "dark" | "light"} [theme=null]
   */
  export let theme = null;

  /**
   * @type {string} [key="theme"]
   */
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
      dispatch("change", theme);
      localStorage.setItem(key, theme);
    }
  });
</script>
