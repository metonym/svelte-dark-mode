/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export type Theme = "dark" | "light";

export interface DarkModeProps {
  /**
   * The current theme
   * @default "dark"
   */
  theme?: Theme;

  /**
   * Customize the local storage key that stores the current theme
   * @default "theme"
   */
  key?: string;
}

export default class DarkMode extends SvelteComponentTyped<
  DarkModeProps,
  { change: CustomEvent<Theme> },
  {}
> {}
