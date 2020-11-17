/// <reference types="svelte" />

type Theme = null | "dark" | "light";

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

export default class DarkMode {
  $$prop_def: DarkModeProps;
  $$slot_def: {};

  $on(eventname: "change", cb: (event: CustomEvent<Theme>) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
