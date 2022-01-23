<script>
  /**
   * @typedef {"dark" | "light"} Theme
   * @event {Theme} change
   */

  /**
   * The current theme.
   * @type {Theme}
   */
  export let theme = "dark";

  /**
   * Specify a custom local storage key
   * to store the current theme.
   * @type {string}
   */
  export let key = "theme";

  import { onMount, afterUpdate, createEventDispatcher } from "svelte";

  const SCHEME = "(prefers-color-scheme: dark)";
  const THEME = { dark: "dark", light: "light" };

  const dispatch = createEventDispatcher();

  /** @type {(t: unknown) => boolean} */
  const validTheme = (t) => t in THEME;

  /** @type {(e: MediaQueryListEvent) => Theme} */
  const handleChange = (e) => (theme = e.matches ? THEME.dark : THEME.light);

  onMount(() => {
    const darkMode = matchMedia(SCHEME);
    const persisted_theme = localStorage.getItem(key);

    if (validTheme(persisted_theme)) {
      theme = persisted_theme;
    } else {
      theme = darkMode.matches ? THEME.dark : THEME.light;
    }

    darkMode.addEventListener("change", handleChange);
    return () => darkMode.removeEventListener("change", handleChange);
  });

  afterUpdate(() => {
    if (validTheme(theme)) {
      dispatch("change", theme);
      localStorage.setItem(key, theme);
    }
  });
</script>
