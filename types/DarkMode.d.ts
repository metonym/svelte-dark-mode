/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export type Theme = null | "dark" | "light";

export interface DarkModeProps {
  /**
   * @default null
   */
  theme?: Theme;

  /**
   * @default "theme"
   */
  key?: string;
}

export default class DarkMode extends SvelteComponentTyped<
  DarkModeProps,
  { change: CustomEvent<Theme> },
  {}
> {}
